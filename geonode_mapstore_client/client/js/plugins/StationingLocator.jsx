/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Message from '@mapstore/framework/components/I18N/Message';
import Button from '@js/components/Button';

import { getResourceData } from '@js/selectors/resource';

import { compose } from 'recompose';
import  Dialog  from '../../MapStore2/web/client/components/misc/Dialog';
import './StationingLocator.css';



import { projectionSelector } from '../../MapStore2/web/client/selectors/map';

import Rx from "rxjs";

import  { changeMousePointer }  from '../../MapStore2/web/client/actions/map';
import  axios from '../../MapStore2/web/client/libs/ajax';
import { Glyphicon } from 'react-bootstrap';
import { showMapinfoMarker, hideMapinfoMarker} from '../../MapStore2/web/client/actions/mapInfo';

const SHOWSTATIONING = "STATIONING_LOCATOR:SHOWSTATIONING_DIALOG";
const HIDESTATIONING = "STATIONING_LOCATOR:HIDESTATIONING_DIALOG";
const CHANGE_STATIONING = "STATIONING_LOCATOR:CHANGE_STATIONING";

const showStationingDialog = () => ({type: SHOWSTATIONING});
const hideStationingDialog = () => ({type: HIDESTATIONING});
const changeStationing = (value) => ({type: CHANGE_STATIONING, stationing: value});
// eslint-disable-next-line consistent-return
const reducer = (state = {enabled: false, stationing: {}}, action) => {
    switch (action.type) {
    case SHOWSTATIONING:
        return {
            ...state,
            enabled: true
        };
    case HIDESTATIONING:
        return {
            ...state,
            enabled: false
        };
    case CHANGE_STATIONING:
        return {
            ...state,
            stationing: action.stationing
        };
    default:
        return state;
    }
};

const style = {
    position: 'absolute',
    background: 'white',
    top: 100,
    left: 100
};

const StationingLocatorPlugin = (props) => {
    const { enabled, hide, stationing } = props;
    const gpsStationing = stationing.point ? stationing?.point?.latlng.lat.toFixed(5) + ', ' + stationing?.point?.latlng.lng.toFixed(5) : ""
    const sections = stationing?.response?.data;
    const section = sections && sections.length > 0 ? sections[0] : null;
    const sectionName = section ? section.sectionName : "";
    const sectionOffset = section ? " " + Math.round(section.offset) + " m" : "";
    const kmStationing = section ?  section.roadNo + " " + section.kmOffset.toFixed(1) + " km (DZ " + section.kmSign + ")" : "";
    return (<Dialog id="stationingDialog" style={{
        ...style,
        display: enabled ? "block" : "none"
    }}>
        <span role="header">
            <span className="settings-panel-title">Staničenie</span>
            <button onClick={() => hide()} className="settings-panel-close close">X</button>
        </span>
        <span role="body">
            <table class="tg">
                <colgroup>
                    <col style={{width: '200px'}}></col>
                    <col ></col>
                </colgroup>
                <tbody>
                <tr>
                    <td class="tg-zv4m">GPS (ETRS89 LAT/LON):</td>
                    <td class="tg-zv4m">{gpsStationing}</td>
                </tr>
                <tr>
                    <td class="tg-zv4m">Úsekové staničenie:</td>
                    <td class="tg-zv4m">{sectionName} {sectionOffset}</td>
                </tr>
                <tr>
                    <td class="tg-zv4m">Km staničenie:</td>
                    <td class="tg-zv4m">{kmStationing}</td>
                </tr>
                </tbody>
            </table>
        </span>
    </Dialog>);
};

const ConnectedStationingLocatorPlugin = compose(
    connect(
        state => {
            return {
                enabled: state?.stationingLocator?.enabled,
                stationing: state?.stationingLocator?.stationing,
                point: state?.stationingLocator?.stationing?.point
            };
        }, {
            hide: hideStationingDialog
        }
    ))(StationingLocatorPlugin);

const StationingButton = ({
    onClick,
    size,
    resource
}) => {

    return (
        <Button
            variant="danger"
            size={size}
            onClick={() => onClick()}
        >
            <Message msgId="gnhome.delete"/>
        </Button>
    );
};

const ConnectedStationingButton = connect(
    createSelector([
        getResourceData
    ], (resource) => ({
        resource
    })),
    {
        onClick: showStationingDialog,
    }
)((StationingButton));

export default createPlugin('StationingLocator', {
    component: ConnectedStationingLocatorPlugin,
    containers: {
        ActionNavbar: {
            name: 'StationingLocator',
            Component: ConnectedStationingButton
        }
    },
    epics: {
        changeMousePointerOnStationingLocatorShow: (action$) => action$.ofType(SHOWSTATIONING).switchMap(() => {
            return Rx.Observable.of(changeMousePointer('crosshair'));
        }),
        changeMousePointerOnStationingLocatorHide: (action$) => action$.ofType(HIDESTATIONING).switchMap(() => {
            return Rx.Observable.of(changeMousePointer('auto'));
        }),
        hideMarkerOnStationingLocatorHide: (action$) => action$.ofType(HIDESTATIONING).switchMap(() => {
            return Rx.Observable.of(hideMapinfoMarker());
        }),
        showMarkerOnClick: (action$) => action$.ofType('CLICK_ON_MAP').switchMap(() => {
            return Rx.Observable.of(showMapinfoMarker());
        }),
        calculateStationing: (action$, store) => action$.ofType('CLICK_ON_MAP').switchMap(({point}) => {
            const projection = projectionSelector(store.getState()).substr(5);
            var url = `http://geonode.softec.sk/stationing/api/stationing?x=${point.rawPos[0]}&y=${point.rawPos[1]}&srid=${projection}&tableName=public.usek`;
            return axios.get(url).then(response => changeStationing({point, response }));
        })
    },
    reducers: {
        stationingLocator: reducer
    },
});
