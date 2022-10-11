/*
 * Copyright 2022, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import Message from '@mapstore/framework/components/I18N/Message';
import Button from '@js/components/Button';
import { downloadMetaData } from '@js/actions/gndownload';
import { gnDownloadMetaData } from '@js/epics/gndownload';
import Spinner from '@js/components/Spinner';
import gnDownload from '@js/reducers/gndownload';

function DublinCoreDownload({ onDownload, resourcePk, isDownloading }) {
    return (
        <Button variant="default" onClick={() => onDownload('Dublin Core', resourcePk)}>
            {isDownloading && <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>} <Message msgId="gnviewer.dublinCore" />
        </Button>
    );
}

const DublinCoreDownloadPlugin = connect(
    createSelector([
        state => state?.gnresource?.data.pk || null,
        state => state?.gnDownload?.downloads?.DublinCore || {}
    ], (resourcePk, downloadingResources) => ({
        resourcePk,
        isDownloading: downloadingResources[resourcePk]
    })),
    {
        onDownload: downloadMetaData
    }
)(DublinCoreDownload);

DublinCoreDownload.defaultProps = {
    onDownload: () => { },
    resourcePk: null,
    isDownloading: false
};

export default createPlugin('DublinCoreDownload', {
    component: () => null,
    containers: {
        ActionNavbar: {
            name: 'DublinCoreDownload',
            Component: DublinCoreDownloadPlugin
        }
    },
    epics: { gnDownloadMetaData },
    reducers: { gnDownload }
});
