(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7548],{21914:(e,n,t)=>{"use strict";t.d(n,{XL:()=>_,km:()=>o,Ih:()=>i,Xw:()=>u,Pn:()=>a,DZ:()=>c,e8:()=>l,E0:()=>s,F9:()=>f,X_:()=>d,pb:()=>p,qb:()=>E,Re:()=>P,ih:()=>g,xy:()=>O,jL:()=>m,oz:()=>M,ph:()=>I,lF:()=>D,gG:()=>b,cb:()=>y,GI:()=>h,B1:()=>v,fv:()=>A,gc:()=>T,zX:()=>C,ZF:()=>R,Zb:()=>L,DW:()=>U,Xp:()=>W,Fm:()=>K,sV:()=>S,Mn:()=>B,LU:()=>j,XP:()=>w,WU:()=>k,JB:()=>F,g:()=>q,ws:()=>N,HP:()=>x,aN:()=>G,Pg:()=>H,u0:()=>z,TM:()=>V,PM:()=>X,lK:()=>Z,sv:()=>Q,MO:()=>$,oO:()=>J,Mc:()=>ee,Zw:()=>ne,RA:()=>te,am:()=>re,ZM:()=>_e,wm:()=>oe,Y$:()=>ie,Qu:()=>ue,kT:()=>ae});var r=t(47310),_="LOAD_FEATURE_INFO",o="ERROR_FEATURE_INFO",i="EXCEPTIONS_FEATURE_INFO",u="CHANGE_MAPINFO_STATE",a="NEW_MAPINFO_REQUEST",c="PURGE_MAPINFO_RESULTS",l="CHANGE_MAPINFO_FORMAT",s="SHOW_MAPINFO_MARKER",f="HIDE_MAPINFO_MARKER",d="SHOW_REVERSE_GEOCODE",p="HIDE_REVERSE_GEOCODE",E="GET_VECTOR_INFO",P="NO_QUERYABLE_LAYERS",g="CLEAR_WARNING",O="FEATURE_INFO_CLICK",m="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",M="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",I="TOGGLE_MAPINFO_STATE",D="UPDATE_CENTER_TO_MARKER",b="IDENTIFY:CHANGE_PAGE",y="IDENTIFY:CLOSE_IDENTIFY",h="IDENTIFY:CHANGE_FORMAT",v="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",A="IDENTIFY:EDIT_LAYER_FEATURES",T="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",C="IDENTIFY:SET_MAP_TRIGGER",R="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",L="IDENTIFY:SET_SHOW_IN_MAP_POPUP",U="IDENTIFY:IDENTIFY_IS_MOUNTED",W="IDENTIFY:INIT_PLUGIN";function K(e,n,t,r,o){return{type:_,data:n,reqId:e,requestParams:t,layerMetadata:r,layer:o}}function S(e,n,t,r){return{type:o,error:n,reqId:e,requestParams:t,layerMetadata:r}}function B(e,n,t,r){return{type:i,reqId:e,exceptions:n,requestParams:t,layerMetadata:r}}function j(){return{type:P}}function w(){return{type:g}}function k(e,n){return{type:a,reqId:e,request:n}}function F(e,n,t,r){return{type:E,layer:e,request:n,metadata:t,queryableLayers:r}}function q(){return{type:c}}function N(e){return{type:l,infoFormat:e}}function x(){return{type:s}}function G(){return{type:f}}function Y(e){return{type:d,reverseGeocodeData:e.data}}function H(e){return function(n){r.Z.reverseGeocode(e).then((function(e){n(Y(e))})).catch((function(e){n(Y(e))}))}}function z(){return{type:p}}function V(){return{type:I}}function X(e){return{type:D,status:e}}function Z(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},_=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:O,point:e,layer:n,filterNameList:t,overrideParams:r,itemId:_}}function Q(e){return{type:m,point:e}}function $(e){return{type:M,enabled:e}}function J(e){return{type:b,index:e}}var ee=function(){return{type:y}},ne=function(e){return{type:h,format:e}},te=function(e){return{type:v,showCoordinateEditor:e}},re=function(e){return{type:A,layer:e}},_e=function(e){return{type:T,query:e}},oe=function(e){return{type:C,trigger:e}},ie=function(e){return{type:L,value:e}},ue=function(e){return{type:U,isMounted:e}},ae=function(e){return{type:W,cfg:e}}},47310:(e,n,t)=>{"use strict";t.d(n,{Z:()=>c});var r=t(75875),_=t.n(r),o=t(8575),i=t(27418),u=t.n(i),a={format:"json",bounded:0,polygon_geojson:1,priority:5};const c={geocode:function(e,n){var t=u()({q:e},a,n||{}),r=o.format({protocol:"https",host:"nominatim.openstreetmap.org",query:t});return _().get(r)},reverseGeocode:function(e,n){var t=u()({lat:e.lat,lon:e.lng},n||{},a),r=o.format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:t});return _().get(r)}}},17106:(e,n,t)=>{"use strict";t.d(n,{SV:()=>p,IO:()=>O});var r=t(22222),_=t(2510),o=t(27361),i=t.n(o),u=t(30998),a=t.n(u),c=t(63202),l=t(22843);function s(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var d=function(e){return e.context&&e.context.currentContext},p=function(e){return e.context&&e.context.resource},E=(0,r.P1)((function(){return i()(c.ZP.getConfigProp("plugins"),"desktop")}),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{desktop:[].concat(s(e),["Context"])}})),P=(0,r.P1)((function(e){return i()(d(e),"plugins")}),(function(e){return i()(d(e),"userPlugins")}),(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e&&{desktop:[].concat(s(i()(e,"desktop",[])),s(n.filter((function(e){return e.active}))))}})),g=((0,r.P1)(d,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.templates})),function(e){return function(e){return i()(e,"context.loading")}(e)?function(e){return E(e)}(e):P(e)||E(e)}),O=function(e){return(0,r.P1)(d,g,(function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return!n||a()(i()(t,"desktop",[]),(function(n){return n.name===e}))>-1}))};(0,r.P1)((function(e){return(0,l.bh)(e,(0,_.Hy)(e))}),(function(e){return JSON.stringify(e)}))},7147:(e,n,t)=>{"use strict";t.d(n,{Yq:()=>o,Iz:()=>i,QF:()=>u,_d:()=>a,lI:()=>c,PJ:()=>l,dH:()=>s,Gd:()=>f,tL:()=>d,R4:()=>p,BP:()=>E,ro:()=>P});var r=t(27361),_=t.n(r),o=function(e){return function(e,n){return function(n){return _()(n,"controls[".concat(e,"][").concat("enabled","]"))}}(e)},i=function(e){return _()(e,"controls.measure.showCoordinateEditor")},u=function(e){return _()(e,"controls.measure.enabled")},a=function(e){return _()(e,"controls.queryPanel.enabled")},c=function(e){return!!_()(e,"controls.layerdownload.enabled")},l=function(e){return _()(e,"controls.widgetBuilder.available",!1)},s=function(e){return _()(e,"controls.widgetBuilder.enabled")},f=function(e){return _()(e,"controls.layersettings.initialSettings")||{}},d=function(e){return _()(e,"controls.layersettings.originalSettings")||{}},p=function(e){return _()(e,"controls.layersettings.activeTab")||"general"},E=function(e){return _()(e,"controls.drawer.enabled",!1)},P=function(e){return _()(e,"controls.info.available")}},2510:(e,n,t)=>{"use strict";t.d(n,{Hy:()=>i,nR:()=>u});var r=t(27361),_=t.n(r),o=function(e){return e.localConfig},i=function(e){return(o(e)||{}).monitorState},u=function(e){return _()(o(e),"defaultMapOptions.floatingIdentifyDelay",500)}},8316:(e,n,t)=>{"use strict";t.d(n,{Pz:()=>i,Ps:()=>u,KV:()=>a});var r=t(22222),_=t(91175),o=t.n(_),i=function(e){return e.locale&&e.locale.current||"en-US"},u=function(e){return e.locale&&e.locale.messages||{}},a=(0,r.P1)([i],(function(e){return o()(e.split("-"))}))},7877:(e,n,t)=>{"use strict";t.d(n,{xt:()=>m,Qp:()=>M,us:()=>I,x0:()=>D,bI:()=>b,Bz:()=>y,H_:()=>h,A4:()=>v,Ap:()=>A,ij:()=>T,yg:()=>C,lN:()=>R,oq:()=>L,hs:()=>U,Qf:()=>W,q7:()=>K,OK:()=>S,vR:()=>B,o9:()=>j,IA:()=>k,Kc:()=>F,Dg:()=>x,AO:()=>G,EI:()=>Y,qK:()=>H,Bh:()=>z});var r=t(27361),_=t.n(r),o=t(57557),i=t.n(o),u=t(1469),a=t.n(u),c=t(22222),l=t(827),s=t(17106),f=t(8316),d=t(7412),p=t(93152),E=t(7147);function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){O(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function O(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m=(0,c.P1)(p.c0,(function(e){var n;return!(null==e||null===(n=e.mapInfo)||void 0===n||!n.showInMapPopup)}),(function(e,n){return!e&&n})),M=(0,c.P1)((function(e){return _()(e,"mapInfo.requests")||[]}),(0,s.IO)("Identify"),m,(function(e,n,t){return!t&&!!e&&e.length>0&&n})),I=function(e){return _()(e,"mapInfo.configuration.infoFormat","text/plain")},D=function(e){return _()(e,"mapInfo.configuration.showEmptyMessageGFI",!0)},b=function(e){return _()(e,"mapInfo.configuration",{})},y=function(e){return e&&e.mapInfo&&e.mapInfo.clickPoint},h=function(e){return e&&e.mapInfo&&e.mapInfo.clickLayer},v=function(e){return _()(e,"mapInfo.itemId",null)},A=function(e){return _()(e,"mapInfo.overrideParams",{})},T=function(e){return _()(e,"mapInfo.filterNameList",[])},C=function(e){return _()(e,"mapInfo.enabled",!1)},R=(0,c.P1)((function(e){return!C(e)}),(function(e){return _()(e,"controls.measure.enabled")&&(_()(e,"measurement.lineMeasureEnabled")||_()(e,"measurement.areaMeasureEnabled")||_()(e,"measurement.bearingMeasureEnabled"))}),(function(e){var n=_()(e,"draw.drawStatus",!1);return n&&"clean"!==n&&"stop"!==n}),(function(e){return _()(e,"annotations.editing")}),E.ro,(function(e,n,t,r,_){return e||!!n||t||!!r||!_})),L=(0,c.zB)({format:I,map:l.Od,point:y,currentLocale:f.Pz,maxItems:function(e){return _()(e,"mapInfo.configuration.maxItems")}}),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.mapInfo&&e.mapInfo.highlight},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e&&e.mapInfo&&e.mapInfo.index},K=function(e){return e.mapInfo&&e.mapInfo.responses||[]},S=function(e){var n;return(null==e||null===(n=e.mapInfo)||void 0===n?void 0:n.requests)||[]},B=function(e){var n;return null==e||null===(n=e.mapInfo)||void 0===n?void 0:n.loaded},j=(0,c.P1)(S,K,I,(function(e,n,t){var r=(0,d.Te)(t);return e.length===n.length&&r.getValidResponses(n)})),w=(0,c.P1)(K,W,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e[n]})),k=function(e){var n=w(e)||{};return _()(n,"layerMetadata.features")},F=function(e){var n=w(e)||{};return _()(n,"layerMetadata.featuresCrs")},q=function(e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n.style||n.geometry&&("Point"===n.geometry.type||"MultiPoint"===n.geometry.type)?e:i()(e,"radius")}},N=function(e){return function(n){return g(g({},n),{},{style:q(e)(n)})}},x=(0,c.P1)(y,U,k,F,(function(e){return e&&e.mapInfo&&e.mapInfo.showMarker}),(function(e){return _()(e,"mapInfo.highlightStyle",{color:"#3388ff",weight:4,radius:4,dashArray:"",fillColor:"#3388ff",fillOpacity:.2})}),(function(e,n,t,r,_,o){return _&&e?n?g(g({},e),{},{featuresCrs:r,features:t&&a()(t)&&t.map(N(o))}):e:void 0})),G=function(e){var n;return null===(n=e.mapInfo)||void 0===n?void 0:n.currentEditFeatureQuery},Y=function(e){return _()(e,"mapInfo.configuration.trigger","click")},H=function(e){return!(0,p.c0)(e)},z=function(e){return _()(e,"mapInfo.enableInfoForSelectedLayers",!0)}},93152:(e,n,t)=>{"use strict";t.d(n,{$v:()=>o,lh:()=>i,c0:()=>u,m6:()=>a,tH:()=>c});var r=t(27361),_=t.n(r),o=function(e){return e&&e.maptype&&e.maptype.mapType||"leaflet"},i=function(e){return e&&e.maptype&&e.maptype.loaded},u=function(e){return"cesium"===o(e)},a=function(e){return"openlayers"===o(e)},c=function(e){return _()(e,"maptype.last2dMapType")||"leaflet"}},16135:(e,n,t)=>{"use strict";t.d(n,{f:()=>_});var r=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"--unknown--";return function(){return e.apply(void 0,arguments).catch((function(e,t){return console.error('Error in epic "'.concat(n,'". Original error:'),e),setTimeout((function(){throw e}),0),t}))}},_=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;return Object.keys(e).map((function(t){return n(e[t],t)}))}},22843:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{UY:()=>combineReducers,lp:()=>combineEpics,CU:()=>handleExpression,jR:()=>isMapStorePlugin,bh:()=>getMonitoredState,uM:()=>getPlugins,KB:()=>getConfiguredPlugin,$j:()=>connect,rx:()=>createPlugin,ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),object_assign__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27418),object_assign__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_1__),lodash_omit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(57557),lodash_omit__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_2__),lodash_isObject__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(13218),lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_3__),lodash_head__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(91175),lodash_head__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(lodash_head__WEBPACK_IMPORTED_MODULE_4__),lodash_isArray__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1469),lodash_isArray__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_5__),lodash_isString__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(47037),lodash_isString__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_6__),lodash_isFunction__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(23560),lodash_isFunction__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_7__),lodash_memoize__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(88306),lodash_memoize__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_8__),lodash_get__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(27361),lodash_get__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_9__),lodash_endsWith__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(66654),lodash_endsWith__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(lodash_endsWith__WEBPACK_IMPORTED_MODULE_10__),react_redux__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(33664),url__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(8575),lodash_curry__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(40087),lodash_curry__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(lodash_curry__WEBPACK_IMPORTED_MODULE_13__),redux_observable__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(27648),redux__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(99993),_EpicsUtils__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(16135),_excluded=["pluginCfg"];function _extends(){return _extends=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_extends.apply(this,arguments)}function _objectWithoutProperties(e,n){if(null==e)return{};var t,r,_=_objectWithoutPropertiesLoose(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(_[t]=e[t])}return _}function _objectWithoutPropertiesLoose(e,n){if(null==e)return{};var t,r,_={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(_[t]=e[t]);return _}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,n):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach((function(n){_defineProperty(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function loadScript(e){return new Promise((function(n,t){var r,_=document.createElement("script"),o=!1;_.type="text/javascript",_.src=e,_.async=!0,_.onerror=function(e){t(e,_)},_.onload=_.onreadystatechange=function(){o||this.readyState&&"complete"!==this.readyState||(o=!0,n())};var i=null===(r=document.getElementsByTagName("script"))||void 0===r?void 0:r[0];i?i.parentElement.insertBefore(_,i):document.head.appendChild(_)}))}var dynamicFederation=function(e,n){return new Promise((function(e){return e(__webpack_require__.I&&__webpack_require__.I("default"))})).then((function(){return window[e].init(__webpack_require__.S.default)})).then((function(){return window[e].get(n).then((function(e){return e()}))}))},defaultMonitoredState=[{name:"mapType",path:"maptype.mapType"},{name:"user",path:"security.user"}],getFromPlugins=lodash_curry__WEBPACK_IMPORTED_MODULE_13___default()((function(e,n){return Object.keys(n).map((function(t){return n[t][e]})).reduce((function(e,n){return _objectSpread(_objectSpread({},e),n)}),{})})),getReducers=getFromPlugins("reducers"),getEpics=getFromPlugins("epics"),combineReducers=function(e,n){var t=getReducers(e);return(0,redux__WEBPACK_IMPORTED_MODULE_15__.UY)(_objectSpread(_objectSpread({},n),t))},combineEpics=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,r=_objectSpread(_objectSpread({},getEpics(e)),n);return redux_observable__WEBPACK_IMPORTED_MODULE_14__.lp.apply(void 0,_toConsumableArray((0,_EpicsUtils__WEBPACK_IMPORTED_MODULE_16__.f)(r,t)))},filterState=lodash_memoize__WEBPACK_IMPORTED_MODULE_8___default()((function(e,n){return n.reduce((function(n,t){return object_assign__WEBPACK_IMPORTED_MODULE_1___default()(n,_defineProperty({},t.name,lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(e,t.path)))}),{})}),(function(e,n){return n.reduce((function(n,t){return n+JSON.stringify(lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(e,t.path))}),"")})),getPluginSimpleName=function(e){return lodash_endsWith__WEBPACK_IMPORTED_MODULE_10___default()(e,"Plugin")&&e.substring(0,e.length-6)||e},normalizeName=function(e){return lodash_endsWith__WEBPACK_IMPORTED_MODULE_10___default()(e,"Plugin")&&e||e+"Plugin"},getPluginConfiguration=function(e,n){var t=getPluginSimpleName(n);return lodash_head__WEBPACK_IMPORTED_MODULE_4___default()(e.filter((function(e){return e.name===t||e===t})).map((function(e){return lodash_isString__WEBPACK_IMPORTED_MODULE_6___default()(e)?{name:e}:e})))||{}},parseExpression=function parseExpression(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},context=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},value=arguments.length>2?arguments[2]:void 0,searchExpression=/^\{(.*)\}$/,expression=searchExpression.exec(value),dispatch=function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){return state("store").dispatch(e.apply(null,[e].concat(t)))}},request=url__WEBPACK_IMPORTED_MODULE_12__.parse(location.href,!0);return null!==expression?eval(expression[1]):value},handleExpression=function(e,n,t){return lodash_isString__WEBPACK_IMPORTED_MODULE_6___default()(t)&&0===t.indexOf("{")?parseExpression(e,n,t):t},filterDisabledPlugins=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(e,"cfg.disablePluginIf")||lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(e,"plugin.disablePluginIf");return!(r&&!lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(e,"cfg.skipAutoDisable")&&handleExpression(n,t.requires,r))},isContainedInList=function(e,n,t,r){return e&&n&&-1!==handleExpression(t,r,n).indexOf(e)},showIn=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0,_=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0;return(isContainedInList(_,t.showIn,e,n)||isContainedInList(r,t.showIn,e,n)||!t.showIn&&o)&&!(isContainedInList(_,t.hideFrom,e,n)||isContainedInList(r,t.hideFrom,e,n))},isMapStorePlugin=function(e){var n;return e.loadPlugin||e.displayName||(null===(n=e.prototype)||void 0===n?void 0:n.isReactComponent)||e.isMapStorePlugin},getPluginImplementation=function(e,n){return isMapStorePlugin(e)?e:e(n)},includeLoaded=function(e,n,t,r){if(n[e]){var _=n[e],o=getPluginImplementation(_.component||_,r);return object_assign__WEBPACK_IMPORTED_MODULE_1___default()(o,t,{loadPlugin:void 0},_objectSpread({},_.containers))}return t},getPriority=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;return lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(n,t+".priority")||lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(e,t+".priority")||0},getMorePrioritizedContainer=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;return t.reduce((function(t,r){var _=r.name||r,o=getPriority(e,n,_);return o>t.priority?{plugin:{name:_,impl:object_assign__WEBPACK_IMPORTED_MODULE_1___default()({},e[_],n[_])},priority:o}:t}),{plugin:null,priority:r})},parsePluginConfig=function e(n,t,r){return lodash_isArray__WEBPACK_IMPORTED_MODULE_5___default()(r)?r.map((function(r){return e(n,t,r)})):lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default()(r)?Object.keys(r).reduce((function(_,o){var i=r[o];return object_assign__WEBPACK_IMPORTED_MODULE_1___default()(_,_defineProperty({},o,e(n,t,i)))}),{}):parseExpression(n,t,r)},canContain=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n[e]||t[e]||!1},isMorePrioritizedContainer=function(e,n,t,r){return null===getMorePrioritizedContainer(e,n,t,r).plugin},isValidConfiguration=function(e){return e&&lodash_isString__WEBPACK_IMPORTED_MODULE_6___default()(e)||lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default()(e)&&e.name},executeDeferredProp=function(e,n,t){return e&&lodash_isFunction__WEBPACK_IMPORTED_MODULE_7___default()(e[t])?_objectSpread(_objectSpread({},e),{},_defineProperty({},t,e[t](n))):e},getPluginItems=function e(n,t,r,_,o,i,u,a){return Object.keys(t).map((function(e){var n=getPluginConfiguration(r,e);return{name:e,impl:executeDeferredProp(includeLoaded(getPluginSimpleName(e),u,t[e]),n,_),config:n}})).filter((function(e){return isValidConfiguration(e.config)})).filter((function(e){return canContain(_,e.impl,e.config.override)})).filter((function(e){return showIn(n,t.requires,e.config,_,o,i)})).reduce((function(e,n){var t,r=null===(t=n.impl)||void 0===t?void 0:t[_];return lodash_isArray__WEBPACK_IMPORTED_MODULE_5___default()(r)?[].concat(_toConsumableArray(e),_toConsumableArray(r.map((function(e){return _objectSpread(_objectSpread({},n),{},{impl:_objectSpread(_objectSpread({},n.impl),{},_defineProperty({},_,e))})})))):[].concat(_toConsumableArray(e),[n])}),[]).filter((function(e){return isMorePrioritizedContainer(e.impl,e.config.override,r,getPriority(e.impl,e.config.override,_))})).map((function(o){var i,a,c,l=getPluginSimpleName(o.name),s=includeLoaded(l,u,o.impl),f=_objectSpread(_objectSpread({},lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(s,_+".impl")||lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(s,_)||{}),null!==(i=lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(o.config,"override."+_))&&void 0!==i?i:{});return _objectSpread(_objectSpread({name:l},f),{},{cfg:_objectSpread(_objectSpread({},null!==(a=null==s?void 0:s.cfg)&&void 0!==a?a:{}),null!==(c=parsePluginConfig(n,t.requires,o.config.cfg||{}))&&void 0!==c?c:{}),plugin:s,items:e(n,t,r,l,null,!0,u)})})).filter((function(e){return filterDisabledPlugins(e,n,t)})).filter((function(e){return!a||a(e)}))},pluginsMergeProps=function(e,n,t){var r=t.pluginCfg,_=_objectWithoutProperties(t,_excluded);return object_assign__WEBPACK_IMPORTED_MODULE_1___default()({},_,e,n,r||{})},importPlugin=function(e){return dynamicFederation(e,"./plugin")},getMonitoredState=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return filterState(e,defaultMonitoredState.concat(n))},mapPluginsPosition=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(e,n){var t=n.cfg&&n.cfg.containerPosition||"bodyPlugins";return _objectSpread(_objectSpread({},e),{},_defineProperty({},t,e[t]?[].concat(_toConsumableArray(e[t]),[n]):[n]))}),{})},getPlugins=function(e){return Object.keys(e).map((function(n){return e[n]})).reduce((function(e,n){return object_assign__WEBPACK_IMPORTED_MODULE_1___default()({},e,lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(n,"reducers","epics"))}),{})},getPluginDescriptor=function(e,n,t,r){var _=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default()(r)?r.name:r,i=lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default()(r)?r.id:null,u=lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default()(r)?r.stateSelector:i||void 0,a=!lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default()(r)||void 0===r.isDefault||r.isDefault,c=(lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default()(r)?r.name:r)+"Plugin",l=n[c];return l?{id:i||o,name:o,impl:includeLoaded(o,_,getPluginImplementation(l,u),u),cfg:object_assign__WEBPACK_IMPORTED_MODULE_1___default()({},l.cfg||{},lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default()(r)?parsePluginConfig(e,n.requires,r.cfg):{}),items:getPluginItems(e,n,t,o,i,a,_)}:null},getConfiguredPlugin=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;if(e){var r=n[e.name]||!e.plugin.loadPlugin&&e.plugin,_=lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default()(e)?e.id:null,o=lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default()(e)?e.stateSelector:_||void 0,i=getPluginImplementation((null==r?void 0:r.component)||r,o),u=function(n){return i?react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i,_extends({key:e.id},n,e.cfg,{pluginCfg:e.cfg,items:e.items||[]})):t};return u.loaded=!!r,u}return e},setRefToWrappedComponent=function(e){return function(n){n&&(window["".concat(e,"Plugin")]=n)}},connect=function(e,n,t,r){return(0,react_redux__WEBPACK_IMPORTED_MODULE_11__.connect)(e,n,t||pluginsMergeProps,r)},createPlugin=function(e,n){var t,r=n.component,_=n.options,o=void 0===_?{}:_,i=n.containers,u=void 0===i?{}:i,a=n.reducers,c=void 0===a?{}:a,l=n.epics,s=void 0===l?{}:l,f=n.lazy,d=void 0!==f&&f,p=n.enabler,E=void 0===p?function(){return!0}:p,P=n.loader,g=normalizeName(e),O=d?{loadPlugin:function(e){P().then((function(n){var t=n.default||n;e(object_assign__WEBPACK_IMPORTED_MODULE_1___default()(t,{isMapStorePlugin:!0}))}))},enabler:E}:object_assign__WEBPACK_IMPORTED_MODULE_1___default()(r,{isMapStorePlugin:!0});return _defineProperty(t={},g,object_assign__WEBPACK_IMPORTED_MODULE_1___default()(O,u,o)),_defineProperty(t,"reducers",c),_defineProperty(t,"epics",s),t},loadPlugin=function(e,n){return loadScript(e).then((function(){return importPlugin(n)})).then((function(e){return{name:n,plugin:e}}))};const __WEBPACK_DEFAULT_EXPORT__={combineReducers,combineEpics,filterState,filterDisabledPlugins,getMonitoredState,mapPluginsPosition,getPlugins,getPluginDescriptor,getPluginItems,getConfiguredPlugin,setRefToWrappedComponent,connect,createPlugin,importPlugin,loadPlugin,handleExpression,getMorePrioritizedContainer,getPluginConfiguration,isMapStorePlugin}}}]);