(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[92377],{95797:(e,r,t)=>{"use strict";t.d(r,{DR:()=>n,S0:()=>u,u7:()=>i,lj:()=>o,yz:()=>c,lN:()=>a,zW:()=>f,Yx:()=>l,VN:()=>s,Hu:()=>y,VT:()=>p,RD:()=>g,Qq:()=>d,R1:()=>O,_T:()=>b,vO:()=>m,XO:()=>v,jG:()=>j,Xc:()=>E,gT:()=>P,rG:()=>h,t3:()=>w,Fs:()=>q,w_:()=>R,Lm:()=>_,rh:()=>L,rP:()=>F,IO:()=>D}),t(375875);var n="LAYER_SELECTED_FOR_SEARCH",u="FEATURE_TYPE_SELECTED",i="FEATURE_TYPE_LOADED",o="FEATURE_LOADED",c="FEATURE_LOADING",a="FEATURE_TYPE_ERROR",f="FEATURE_ERROR",l="QUERY_CREATE",s="QUERY:UPDATE_QUERY",y="QUERY_RESULT",p="QUERY_ERROR",g="RESET_QUERY",d="QUERY",O="INIT_QUERY_PANEL",b="QUERY:TOGGLE_SYNC_WMS",m="QUERY:TOGGLE_LAYER_FILTER";function v(){return{type:b}}function j(){return{type:m}}function E(){return{type:O}}function P(e,r){return{type:u,url:e,typeName:r}}function h(e,r){return{type:i,typeName:e,featureType:r}}function w(e,r){return{type:a,typeName:e,error:r}}function q(e){return{type:c,isLoading:e}}function R(e,r,t,n,u){return{type:y,searchUrl:r,filterObj:t,result:e,queryOptions:n,reason:u}}function _(e){return{type:p,error:e}}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.updates,t=e.reason,n=e.useLayerFilter;return{type:s,updates:r,reason:t,useLayerFilter:n}}function F(e,r){return{type:l,searchUrl:e,filterObj:r}}function D(e,r,t,n){return{type:d,searchUrl:e,filterObj:r,queryOptions:t,reason:n}}},352595:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n});const n=(0,t(461365).Z)(t(757588).Overlay)},399534:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var n=t(461365),u=t(569334);const i=(0,n.Z)(u.h_)},731255:(e,r,t)=>{"use strict";t.d(r,{u$:()=>P,Xh:()=>h,_w:()=>w,eO:()=>q,kG:()=>R,P3:()=>_,bq:()=>D,LB:()=>T,b4:()=>S,M0:()=>U,Li:()=>A,Rd:()=>k,g5:()=>Y,Sj:()=>G,o:()=>x,eK:()=>N,jY:()=>z,ND:()=>C,OK:()=>I,tU:()=>Q,ou:()=>M,DK:()=>V,Gl:()=>K,uz:()=>W,Ci:()=>Z,Ae:()=>H,gz:()=>X,He:()=>B,P4:()=>$,kd:()=>J,TC:()=>ee,nq:()=>re,Vf:()=>te,lg:()=>ne});var n=t(91175),u=t.n(n),i=t(227361),o=t.n(i),c=t(513218),a=t.n(c),f=t(675110),l=t(378889),s=t(308316),y=t(552259),p=t(196958),g=t(285148),d=t(274621),O=t(93152),b=t(824260);function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){j(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function j(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var E=f.CA,P=function(e){return o()(e,"featuregrid.selectedLayer")},h=function(e){return o()(e,"featuregrid.attributes")},w=function(e){return e&&e.featuregrid&&e.featuregrid.select},q=function(e){return e&&e.featuregrid&&e.featuregrid.changes},R=function(e){return e&&e.featuregrid&&e.featuregrid.newFeatures},_=function(e){return u()(w(e))},L=function(e){var r=(0,b.Qs)(e);if(r){var t=(0,l.findGeometryProperty)(r);return t&&t.localType}return null},F=["Geometry","GeometryCollection"],D=function(e){return!u()(F.filter((function(r){return L(e)===r})))},T=function(e){return q(e)&&q(e).length>0},S=function(e){return R(e)&&R(e).length>0},U=function(e){return e&&e.featuregrid&&e.featuregrid.filters},A=function(e){return E(e,P(e))},k=function(e){return e&&e.featuregrid&&e.featuregrid.open},Y=function(e,r){return o()(U(e),r)},G=function(e){var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.title||e.name}(E(e,P(e)));return a()(r)?r[(0,s.Pz)(e)]||r.default||"":r},x=function(e){return((0,b.L)(e)||[]).map((function(r){var t=function(e,r){return o()(e,"featuregrid.attributes[".concat(r.name||r.attribute,"]"))}(e,r);return t?v(v({},r),t):r}))},N=function(e){return e&&e.featuregrid&&e.featuregrid.mode},z=function(e){return(w(e)||[]).length},C=function(e){return(0,p.rK)(q(e))},I=function(e){return function(e){var r=_(e);if(r){var t=(0,p.rK)(q(e));return!((!t[r.id]||null===t[r.id].geometry)&&(t[r.id]&&null===t[r.id].geometry||r._new&&u()(R(e))&&null===u()(R(e)).geometry||(!r._new||!u()(R(e))||null===u()(R(e)).geometry)&&null===r.geometry))}return!1}(e)},Q=function(e){return o()(e,"featuregrid.showAgain",!1)},M=function(e){if(o()(e,"featuregrid.showTimeSync",!1)){var r=P(e);return(0,g.jo)({id:r},"time")(e)}return null},V=function(e){return o()(e,"featuregrid.timeSync",!1)},K=function(e){return o()(e,"featuregrid.showPopoverSync",!0)},W=function(e){return e&&e.featuregrid&&e.featuregrid.saving},Z=function(e){return e&&e.featuregrid&&e.featuregrid.saved},H=function(e){return e&&e.featuregrid&&e.featuregrid.drawing},X=function(e){return o()(e,"featuregrid.multiselect",!1)},B=function(e){return(0,y.isSimpleGeomType)(L(e))},$=function(e){return e.featuregrid&&e.featuregrid.dockSize},J=function(e){var r=E(e,P(e));return r&&r.name||""},ee=function(e){var r=function(e){return o()(E(e,P(e)),"params")}(e);return{viewParams:r&&(r.VIEWPARAMS||r.viewParams||r.viewparams),cqlFilter:r&&(r.CQL_FILTER||r.cqlFilter||r.cql_filter)}},re=function(e){var r=(0,d.L3)(e),t=function(e){return o()(e,"featuregrid.editingAllowedRoles",["ADMIN"])}(e)||["ADMIN"],n=function(e){return e&&e.featuregrid&&e.featuregrid.canEdit}(e);return(-1!==t.indexOf(r)||n)&&!(0,O.c0)(e)},te=function(e){return o()(e,"featuregrid.pagination")},ne=function(e){return o()(e,"featuregrid.useLayerFilter",!0)}},55105:(e,r,t)=>{"use strict";t.d(r,{Ss:()=>l,Nr:()=>s,ic:()=>y,Jz:()=>g,VM:()=>d,CF:()=>O});var n=t(91175),u=t.n(n),i=t(800827),o=t(552259);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){f(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var l=function(e){return e.maplayout&&e.maplayout.layout||{}},s=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},y=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=l(e);return t&&Object.keys(t).filter((function(e){return r[e]})).reduce((function(e,r){return a(a({},e),{},f({},r,t[r]))}),{})||{}},p=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=l(e),n=!!u()(r.filter((function(e){return t[e.key]})).map((function(e){return"not"===e.type?t[e.key]!==e.value&&t[e.key]:t[e.key]===e.value})));return n},g=function(e){return p(e,[{key:"right",value:658}])},d=function(e){return p(e,[{key:"bottom",value:30,type:"not"}])},O=function(e){var r=(0,i.Od)(e),t=s(e);return t&&r&&r.size&&{left:(0,o.parseLayoutValue)(t.left,r.size.width),bottom:(0,o.parseLayoutValue)(t.bottom,r.size.height),right:(0,o.parseLayoutValue)(t.right,r.size.width),top:(0,o.parseLayoutValue)(t.top,r.size.height)}}},824260:(e,r,t)=>{"use strict";t.d(r,{qj:()=>m,Bu:()=>v,UM:()=>j,X1:()=>E,L:()=>P,HY:()=>h,Mz:()=>w,F0:()=>q,dc:()=>R,b0:()=>_,hk:()=>L,Qs:()=>F,gy:()=>D,M7:()=>T,VD:()=>S});var n=t(414293),u=t.n(n),i=t(227361),o=t.n(i),c=t(91175),a=t.n(c),f=t(701469),l=t.n(f),s=t(630998),y=t.n(s);function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){d(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var O=function(e){return o()(e,"query.filterObj.featureTypeName")},b=function(e){return function(r){return o()(r,'query.featureTypes["'.concat(e,'"]'))}},m=function(e,r){return o()(b(r)(e),"original")},v=function(e){return e&&e.query&&e.query.searchUrl},j=function(e){return e&&e.query&&e.query.url},E=function(e){return e&&e.query&&e.query.filterObj},P=function(e){return o()(b(O(e))(e),"attributes")},h=function(e){return o()(e,"query.typeName")},w=function(e){return o()(e,"query.result.features")},q=function(e){var r=o()(e,"query.result");return g(g({},r),{},{features:(r&&r.features||[]).filter((function(e){return!u()(e.geometry)}))})},R=function(e,r){var t=e&&e.query&&e.query.result&&e.query.result.features;return a()(t.filter((function(e){return e.id===r})))},_={startIndex:function(e){return o()(e,"query.filterObj.pagination.startIndex")},maxFeatures:function(e){return o()(e,"query.filterObj.pagination.maxFeatures")},resultSize:function(e){return o()(e,"query.result.features.length")},totalFeatures:function(e){return o()(e,"query.result.totalFeatures")}},L=function(e,r){var t=b(r)(e);return!!(t&&t.attributes&&t.geometry&&t.original)},F=function(e){return m(e,O(e))},D=function(e){return o()(e,"query.featureLoading")},T=function(e){return o()(e,"query.syncWmsFilter",!1)},S=function(e){var r=o()(e,"query.filterObj.crossLayerFilter"),t=o()(e,"query.filterObj.spatialField"),n=o()(e,"query.filterObj.filterFields");return!!(n&&a()(n)||t&&(t.method&&t.operation&&t.geometry||l()(t)&&y()(t,(function(e){return e.method&&e.operation&&e.geometry}))>-1)||r&&r.collectGeometries&&r.operation)}},469842:(e,r,t)=>{"use strict";t.d(r,{qh:()=>p,GK:()=>g,Nl:()=>d,vE:()=>O,gC:()=>b,hI:()=>m,Vc:()=>v,BU:()=>j,Vx:()=>E,a8:()=>P,IM:()=>h,G$:()=>w});var n=t(227361),u=t.n(n),i=t(22222),o=t(675110),c=t(308316),a=t(86638),f=["title"];function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){y(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function y(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var p=function(e){return u()(e,"queryform.crossLayerFilter")},g=function(e){return((0,o.l2)(e)||[]).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.type,t=e.group;return"wms"===r&&"background"!==t})).map((function(r){var t=r.title;return s(s({},function(e,r){if(null==e)return{};var t,n,u=function(e,r){if(null==e)return{};var t,n,u={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(u[t]=e[t]);return u}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}(r,f)),{},{title:(0,a.MZ)((0,c.Pz)(e),t)})}))},d=function(e){return u()(e,"queryform.spatialField.geometry")},O=function(e){return u()(e,"queryform.spatialField")},b=(0,i.P1)((function(e){return u()(e,"queryform.attributePanelExpanded")}),(function(e){return u()(e,"queryform.spatialPanelExpanded")}),(function(e){return u()(e,"queryform.crossLayerExpanded")}),(function(e,r,t){return{attributePanelExpanded:e,spatialPanelExpanded:r,crossLayerExpanded:t}})),m=function(e){return u()(e,"layerFilter.persisted")},v=function(e){return u()(e,"layerFilter.applied")},j=function(e){return u()(e,"queryform.spatialField.method")},E=function(e){return u()(e,"queryform.maxFeaturesWPS")},P=function(e){return d(e)&&d(e).type||"Polygon"},h=function(e){return d(e)&&d(e).projection||"EPSG =4326"},w=function(e){return d(e)&&d(e).coordinates||[]}}}]);