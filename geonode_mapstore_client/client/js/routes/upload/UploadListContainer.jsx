/*
 * Copyright 2022, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import FaIcon from '@js/components/FaIcon';
import Message from '@mapstore/framework/components/I18N/Message';
import UploadCard from '@js/routes/upload/UploadCard';
import { FormControl as FormControlRB } from 'react-bootstrap';
import localizedProps from '@mapstore/framework/components/misc/enhancers/localizedProps';
const FormControl = localizedProps('placeholder')(FormControlRB);
function InputControl({ onChange, value, ...props }) {
    return <FormControl {...props} value={value} onChange={event => onChange(event.target.value)}/>;
}
const InputControlWithDebounce = InputControl;

function UploadListContainer({
    filterText,
    onFilter,
    pendingUploads,
    onDelete = () => {},
    placeholderMsgId,
    noFilterMatchMsgId,
    titleMsgId,
    descriptionMsgId,
    resourceType
}) {

    const filteredPendingUploads = pendingUploads.filter(({ name }) => !filterText || name.includes(filterText));

    return (
        <div className="gn-upload-processing">
            {pendingUploads.length === 0 || (filteredPendingUploads.every(({error}) => error === 'CANCELED'))
                ? (
                    <div className="gn-main-event-container">
                        <div className="gn-main-event-content">
                            <div className="gn-main-event-text">
                                <div className="gn-main-icon">
                                    {resourceType !== 'dataset' ? <FaIcon name="file"/> : <FaIcon name="database"/>}
                                </div>
                                <h1><Message msgId={titleMsgId}/></h1>
                                <div><Message msgId={descriptionMsgId}/></div>
                            </div>
                        </div>
                    </div>
                )
                : (
                    <>
                        <div className="gn-upload-processing-header">
                            <InputControlWithDebounce
                                value={filterText}
                                onChange={onFilter}
                                placeholder={placeholderMsgId}
                            />
                        </div>
                        <div className="gn-upload-processing-list">
                            {filteredPendingUploads.length > 0
                                ? <ul>
                                    {filteredPendingUploads
                                        .map(({
                                            id,
                                            name,
                                            progress = 0,
                                            state,
                                            status,
                                            create_date: createDate,
                                            detail_url: detailUrl,
                                            resume_url: resumeUrl,
                                            delete_url: deleteUrl,
                                            error,
                                            log,
                                            exec_id: execId,
                                            created
                                        }) => {
                                            return (error !== 'CANCELED' &&
                                                <li
                                                    key={id || execId}
                                                >
                                                    <UploadCard
                                                        name={name}
                                                        state={state}
                                                        detailUrl={detailUrl}
                                                        progress={progress}
                                                        createDate={createDate || created}
                                                        resumeUrl={resumeUrl}
                                                        onRemove={deleteUrl ? () => onDelete({ id, deleteUrl }) : execId ? () => onDelete({ id: execId }) : null}
                                                        error={error}
                                                        type={resourceType}
                                                        status={status}
                                                        errorLog={log}
                                                    />
                                                </li>
                                            );
                                        })}
                                </ul>
                                : (
                                    <div className="gn-main-event-container">
                                        <div className="gn-main-event-content">
                                            <div className="gn-main-event-text">
                                                <div className="gn-main-icon">
                                                    <FaIcon name="database"/>
                                                </div>
                                                <div><Message msgId={noFilterMatchMsgId}/></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                        </div>
                    </>
                )}
        </div>
    );
}

UploadListContainer.defaultProps = {
    resourceType: 'dataset'
};

export default UploadListContainer;
