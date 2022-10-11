/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Observable } from 'rxjs';
import axios from '@mapstore/framework/libs/ajax';
import { saveAs } from 'file-saver';

import {
    START_ASYNC_PROCESS,
    startAsyncProcess,
    stopAsyncProcess,
    updateAsyncProcess
} from '@js/actions/resourceservice';
import {
    ProcessStatus,
    ProcessInterval,
    ProcessTypes
} from '@js/utils/ResourceServiceUtils';
import { isProcessCompleted } from '@js/selectors/resourceservice';
import {
    deleteResource,
    copyResource,
    downloadResource
} from '@js/api/geonode/v2';
import { PROCESS_RESOURCES, DOWNLOAD_RESOURCE, downloadComplete } from '@js/actions/gnresource';
import { reduceTotalCount } from '@js/actions/gnsearch';
import { setControlProperty } from '@mapstore/framework/actions/controls';
import { push } from 'connected-react-router';
import {
    error as errorNotification
} from '@mapstore/framework/actions/notifications';

export const gnMonitorAsyncProcesses = (action$, store) => {
    return action$.ofType(START_ASYNC_PROCESS)
        .flatMap((action) => {
            const { status_url: statusUrl } = action?.payload?.output || {};
            if (!statusUrl || action?.payload?.error) {
                return action?.payload?.error ? Observable.of(stopAsyncProcess({ ...action.payload, completed: true }), errorNotification({ title: 'gnviewer.invalidUploadMessageError', message: 'gnviewer.cannotPerfomAction' }))
                    : Observable.of(stopAsyncProcess({ ...action.payload, completed: true }));
            }
            return Observable
                .interval(ProcessInterval[action?.payload?.processType] || 1000)
                .takeWhile(() => !isProcessCompleted(store.getState(), action.payload))
                .exhaustMap(() => (!isProcessCompleted(store.getState(), action.payload)) ?
                    Observable.defer(() =>
                        axios.get(statusUrl)
                            .then(({ data }) => data)
                            .catch((error) => ({ error: error?.data?.detail || error?.statusText || error?.message || true }))
                    )
                        .switchMap((output) => {
                            if (output.error || output.status === ProcessStatus.FINISHED || output.status === ProcessStatus.FAILED) {
                                return Observable.of(
                                    stopAsyncProcess({ ...action.payload, output, completed: true }),
                                    // reduce total count of resource if an original resource is deleted
                                    // when cloned resources are removed, the getTotalResources selector already adjusts total count
                                    ...(action?.payload?.processType === ProcessTypes.DELETE_RESOURCE && !action?.payload?.resource['@temporary']
                                        ? [reduceTotalCount()]
                                        : [])
                                );
                            }
                            return Observable.of(updateAsyncProcess({ ...action.payload, output }));
                        }) : Observable.empty()
                );
        });
};

const processAPI = {
    [ProcessTypes.DELETE_RESOURCE]: deleteResource,
    [ProcessTypes.COPY_RESOURCE]: copyResource
};

export const gnProcessResources = (action$) =>
    action$.ofType(PROCESS_RESOURCES)
        // all the processes must be listened for this reason we should use flatMap instead of switchMap
        .flatMap((action) => {
            return Observable.defer(() => axios.all(
                action.resources.map((resource) => processAPI[action.processType](resource)
                    .then((output) => ({ resource, output, processType: action.processType })
                    )
                    .catch((error) => ({ resource, error: error?.data?.detail || error?.statusText || error?.message || true, processType: action.processType }))
                )
            ))
                .switchMap((processes) => {
                    return Observable.of(
                        setControlProperty(action.processType, 'loading', false),
                        setControlProperty(action.processType, 'value', undefined),
                        ...processes.map((payload) => startAsyncProcess(payload)),
                        ...(action.redirectTo ? [
                            push(action.redirectTo)
                        ] : [])
                    );
                })
                .startWith(setControlProperty(action.processType, 'loading', true));
        });

export const gnDownloadResource = (action$) =>
    action$.ofType(DOWNLOAD_RESOURCE)
        .switchMap((action) => {
            const resource = action?.resource;
            return Observable.defer(() => downloadResource(resource)
                .then(({ output, headers }) => {
                    saveAs(new Blob([output], { type: headers?.['content-type'] }), resource.title);
                    return { resource };
                })
                .catch((error) => ({ resource, error: error?.data?.detail || error?.statusText || error?.message || true }))
            )
                .switchMap((downloaded) => {
                    const { error } = downloaded || {};
                    if (error) {
                        return Observable.of(downloadComplete({ ...downloaded.resource }), errorNotification({ title: 'gnviewer.invalidUploadMessageError', message: 'gnviewer.cannotPerfomAction' }));
                    }
                    return Observable.of(
                        downloadComplete({ ...downloaded.resource })
                    );
                });
        });

export default {
    gnMonitorAsyncProcesses,
    gnProcessResources,
    gnDownloadResource
};
