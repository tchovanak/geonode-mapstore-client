"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7509],{807878:(e,t,r)=>{r.d(t,{$J:()=>De,AQ:()=>Ee,Bm:()=>Pe,D6:()=>V,DD:()=>de,E6:()=>a,EU:()=>ue,Ef:()=>X,Eg:()=>A,F:()=>Oe,F2:()=>Ae,Fz:()=>E,Gf:()=>G,H8:()=>N,HT:()=>se,Hl:()=>j,I:()=>ie,I5:()=>ne,IV:()=>ce,J9:()=>s,JG:()=>q,M$:()=>y,N5:()=>Te,NV:()=>re,Nc:()=>te,Nr:()=>x,OZ:()=>ee,O_:()=>d,On:()=>h,PN:()=>T,QL:()=>oe,RD:()=>I,Rf:()=>Q,Ry:()=>be,Sm:()=>z,U:()=>l,Ug:()=>b,V1:()=>L,VF:()=>pe,WZ:()=>g,Wi:()=>S,Wm:()=>P,Xp:()=>Z,ZH:()=>ve,_8:()=>W,_M:()=>R,bP:()=>O,bl:()=>w,bn:()=>Re,cY:()=>D,co:()=>F,d_:()=>m,ds:()=>fe,eJ:()=>we,go:()=>C,jR:()=>Le,jW:()=>B,je:()=>U,js:()=>$,kQ:()=>J,ku:()=>ae,l1:()=>c,lg:()=>le,ln:()=>Ie,mc:()=>he,nh:()=>H,o7:()=>Y,p5:()=>v,q$:()=>K,ql:()=>p,uM:()=>_e,uP:()=>Se,uY:()=>M,uo:()=>ye,vo:()=>u,xM:()=>_,xd:()=>k,yC:()=>ge,z8:()=>f});var n=r(375875),o=r.n(n);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var a="ADD_FILTER_FIELD",u="REMOVE_FILTER_FIELD",c="UPDATE_FILTER_FIELD",s="UPDATE_EXCEPTION_FIELD",l="ADD_GROUP_FIELD",f="UPDATE_LOGIC_COMBO",p="REMOVE_GROUP_FIELD",d="CHANGE_CASCADING_VALUE",y="EXPAND_ATTRIBUTE_PANEL",b="EXPAND_SPATIAL_PANEL",v="QUERYFORM:EXPAND_CROSS_LAYER",E="QUERYFORM:SET_CROSS_LAYER_PARAMETER",g="QUERYFORM:RESET_CROSS_LAYER_FILTER",O="SELECT_SPATIAL_METHOD",h="SELECT_VIEWPORT_SPATIAL_METHOD",m="UPDATE_GEOMETRY",_="SELECT_SPATIAL_OPERATION",w="CHANGE_SPATIAL_ATTRIBUTE",S="CHANGE_SPATIAL_FILTER_VALUE",T="REMOVE_SPATIAL_SELECT",R="SHOW_SPATIAL_DETAILS",P="QUERY_FORM_SEARCH",A="QUERY_FORM_RESET",L="SHOW_GENERATED_FILTER",D="CHANGE_DWITHIN_VALUE",I="ZONE_SEARCH",j="ZONE_SEARCH_ERROR",F="ZONE_FILTER",M="ZONE_CHANGE",N="ZONES_RESET",U="SIMPLE_FILTER_FIELD_UPDATE",C="ADD_SIMPLE_FILTER_FIELD",W="REMOVE_SIMPLE_FILTER_FIELD",k="REMOVE_ALL_SIMPLE_FILTER_FIELDS",Y="UPDATE_FILTER_FIELD_OPTIONS",x="LOADING_FILTER_FIELD_OPTIONS",G="QUERYFORM:ADD_CROSS_LAYER_FILTER_FIELD",H="QUERYFORM:UPDATE_CROSS_LAYER_FILTER_FIELD",Q="QUERYFORM:REMOVE_CROSS_LAYER_FILTER_FIELD",Z="QUERYFORM:UPDATE_CROSS_LAYER_FILTER_FIELD_OPTIONS",V="SET_AUTOCOMPLETE_MODE",z="TOGGLE_AUTOCOMPLETE_MENU",X="QUERYFORM:LOAD_FILTER";function B(e){return{type:a,groupId:e}}function J(e,t){return{type:l,groupId:e,index:t}}function q(e){return{type:u,rowId:e}}function $(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"filterField";return{type:z,rowId:e,status:t,layerFilterType:r}}function K(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return{type:c,rowId:e,fieldName:t,fieldValue:r,fieldType:n,fieldOptions:o}}function ee(e,t){return{type:s,rowId:e,exceptionMessage:t}}function te(e,t){return{type:f,groupId:e,logic:t}}function re(e){return{type:V,status:e}}function ne(e){return{type:p,groupId:e}}function oe(e){return{type:d,attributes:e}}function ie(e){return{type:y,expand:e}}function ae(e){return{type:b,expand:e}}function ue(e){return{type:v,expand:e}}function ce(e,t){return{type:E,key:e,value:t}}function se(e,t){return{type:O,fieldName:t,method:e}}function le(){return{type:h}}function fe(e){return{type:m,geometry:e}}function pe(e,t){return{type:_,fieldName:t,operation:e}}function de(e){return{type:w,attribute:e}}function ye(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.feature,r=e.srsName,n=e.collectGeometries,o=e.style,i=e.options,a=e.value;return{type:S,value:a,collectGeometries:n,options:i,geometry:t&&t.geometry,feature:t,srsName:r,style:o}}function be(){return{type:T}}function ve(e){return{type:R,show:e}}function Ee(e){return{type:D,distance:e}}function ge(e,t){return{type:P,searchUrl:e,filterObj:t}}function Oe(e){return{type:X,filter:e}}function he(e){return{type:A,skip:e}}function me(e,t){return{type:j,error:e,id:t}}function _e(e,t){return{type:I,active:e,id:t}}function we(e,t,r){return function(n){return o().post(e,t,{timeout:1e4,headers:{Accept:"application/json","Content-Type":"text/plain"}}).then((function(o){var a=o.data;if("object"!==i(a))try{a=JSON.parse(a)}catch(o){n(me("Search result broken ("+e+":   "+t+"): "+o.message,r))}n(function(e,t){return{type:F,data:e,id:t}}(a,r)),n(_e(!1,r))})).catch((function(e){n(me(e,r))}))}}function Se(e,t){return{type:M,id:e,value:t}}function Te(e){return{type:G,rowId:(new Date).getTime(),groupId:e}}function Re(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return{type:H,rowId:e,fieldName:t,fieldValue:r,fieldType:n,fieldOptions:o}}function Pe(e){return{type:Q,rowId:e}}function Ae(){return{type:g}}function Le(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"filterField";return{type:x,status:e,filterField:t,layerFilterType:r}}function De(e,t,r){return{type:Y,filterField:e,options:t,valuesCount:r}}function Ie(e,t,r){return{type:Z,filterField:e,options:t,valuesCount:r}}},95797:(e,t,r)=>{r.d(t,{DR:()=>n,Fs:()=>T,Hu:()=>p,IO:()=>D,Lm:()=>P,Qq:()=>b,R1:()=>v,RD:()=>y,S0:()=>o,VN:()=>f,VT:()=>d,XO:()=>O,Xc:()=>m,Yx:()=>l,_T:()=>E,gT:()=>_,jG:()=>h,lN:()=>c,lj:()=>a,rG:()=>w,rP:()=>L,rh:()=>A,t3:()=>S,u7:()=>i,vO:()=>g,w_:()=>R,yz:()=>u,zW:()=>s}),r(375875);var n="LAYER_SELECTED_FOR_SEARCH",o="FEATURE_TYPE_SELECTED",i="FEATURE_TYPE_LOADED",a="FEATURE_LOADED",u="FEATURE_LOADING",c="FEATURE_TYPE_ERROR",s="FEATURE_ERROR",l="QUERY_CREATE",f="QUERY:UPDATE_QUERY",p="QUERY_RESULT",d="QUERY_ERROR",y="RESET_QUERY",b="QUERY",v="INIT_QUERY_PANEL",E="QUERY:TOGGLE_SYNC_WMS",g="QUERY:TOGGLE_LAYER_FILTER";function O(){return{type:E}}function h(){return{type:g}}function m(){return{type:v}}function _(e,t){return{type:o,url:e,typeName:t}}function w(e,t){return{type:i,typeName:e,featureType:t}}function S(e,t){return{type:c,typeName:e,error:t}}function T(e){return{type:u,isLoading:e}}function R(e,t,r,n,o){return{type:p,searchUrl:t,filterObj:r,result:e,queryOptions:n,reason:o}}function P(e){return{type:d,error:e}}function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.updates,r=e.reason,n=e.useLayerFilter;return{type:f,updates:t,reason:r,useLayerFilter:n}}function L(e,t){return{type:l,searchUrl:e,filterObj:t}}function D(e,t,r,n){return{type:b,searchUrl:e,filterObj:t,queryOptions:r,reason:n}}},807691:(e,t,r)=>{r.d(t,{ZP:()=>A});var n=r(49977),o=r.n(n),i=r(557579),a=r(555927),u=r(782904),c=r(95797),s=r(197395),l=r(807878),f=r(263516),p=r(367306),d=r(274621),y=r(401757),b=r(324684),v=r(291312),E=r(589919),g=r(275982),O=["data"],h=["status","statusText","data","message"];function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function _(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){R(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=function(e){var t=(0,y.JT)(e);return[t.search&&t.search.url,t.name]};const A={openDashboardWidgetEditor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(i.AE,i.dm).filter((function(){return(0,p.Wy)(n())})).switchMap((function(){return o().Observable.of((0,a.D_)(!0))}))},closeDashboardWidgetEditorOnFinish:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(i.Jm).filter((function(){return(0,p.Wy)(n())})).switchMap((function(){return o().Observable.of((0,a.D_)(!1))}))},initDashboardEditorOnNew:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(i.AE).filter((function(){return(0,p.Wy)(n())})).switchMap((function(e){return o().Observable.of((0,i.bS)(T(T({legend:!1,mapSync:!1,cartesian:!0,yAxis:!0},e),{},{type:void 0}),{step:0}))}))},closeDashboardEditorOnExit:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(g.nk).filter((function(){return(0,p.Wy)(n())})).filter((function(){return(0,p.i$)(n())})).switchMap((function(){return o().Observable.of((0,a.D_)(!1))}))},handleDashboardWidgetsFilterPanel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(i.lG).filter((function(){return(0,p.Wy)(n())})).switchMap((function(){return o().Observable.of(c.gT.apply(void 0,_(P(n()))),(0,l.F)((0,y.um)(n())),(0,u.Xg)("queryPanel","enabled",!0)).concat(o().Observable.race(e.ofType(l.Wm).take(1),e.ofType(u.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.control,r=e.property;return"queryPanel"===t&&(!r||"enabled"===r)})).take(1)).switchMap((function(e){return(e.filterObj?o().Observable.of((0,i.Rz)("filter",e.filterObj)):o().Observable.empty()).merge(o().Observable.of((0,u.Xg)("widgetBuilder","enabled",!0)))}))).takeUntil(e.ofType(g.nk,i.dm).merge(e.ofType(u.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.control,r=e.property;return"widgetBuilder"===t&&0==!r})))).concat(o().Observable.of((0,u.Xg)("queryPanel","enabled",!1)))}))},filterAnonymousUsersForDashboard:function(e,t){return e.ofType(f.c8,f.Nv).filter((function(){return"/dashboard"===(0,b.F)(t.getState())})).switchMap((function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),(0,d.jl)(t.getState())?o().Observable.empty():o().Observable.of((0,a.AN)({status:403}))}))},loadDashboardStream:function(e,t){var r=t.getState,n=void 0===r?function(){}:r;return e.ofType(a.zX).switchMap((function(e){var t=e.id;return(0,v.RX)(t).map((function(e){var t=e.data,r=m(e,O);return(0,a.rR)(r,t)})).let((0,E.hP)((0,a.vM)(!0,"loading"),(0,a.vM)(!1,"loading"),(function(e){var t=window.location.href.match("dashboard-embedded")?"dashboardEmbedded":"dashboard",r=t+".errors.loading.unknownError";return 403===e.status&&(r=t+".errors.loading.pleaseLogin",(0,d.jl)(n())&&(r=t+".errors.loading.dashboardNotAccessible")),404===e.status&&(r=t+".errors.loading.dashboardDoesNotExist"),o().Observable.of((0,s.vU)({title:t+".errors.loading.title",message:r}),(0,a.AN)(T(T({},e),{},{messageId:r})))})))}))},reloadDashboardOnLoginLogout:function(e){return e.ofType(a.zX).switchMap((function(t){var r=t.id;return e.ofType(f.XP,f.Nv).switchMap((function(){return o().Observable.of((0,a.o2)(r)).delay(1e3)})).takeUntil(e.ofType(g.nk))}))},saveDashboard:function(e){return e.ofType(a.aR).exhaustMap((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.resource;return(t.id?(0,v.id)(t):(0,v.SN)(t)).switchMap((function(e){return o().Observable.of((0,a.sA)(e),t.id?(0,a.gE)(!1):(0,a.pB)(!1),t.id?(0,a.o2)(e):(0,g.VF)("/dashboard/".concat(e))).merge(o().Observable.of((0,s.$Z)({id:"DASHBOARD_SAVE_SUCCESS",title:"saveDialog.saveSuccessTitle",message:"saveDialog.saveSuccessMessage"})).delay(t.id?0:1e3))})).let((0,E.hP)((0,a.vM)(!0,"saving"),(0,a.vM)(!1,"saving"))).catch((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.status,r=e.statusText,n=e.data,i=e.message,u=m(e,h);return o().Observable.of((0,a.GD)(t?{status:t,statusText:r,data:n}:i||u),(0,a.vM)(!1,"saving"))}))}))}}},589919:(e,t,r)=>{r.d(t,{hP:()=>l});var n=r(984596),o=r.n(n),i=r(49977),a=r.n(i);function u(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.startWith.apply(e,u(t))},l=function(e,t,r){return function(n){return(r?s(n,o()(e)).catch(r):s(n,o()(e))).concat(a().Observable.from(o()(t)))}}},10960:(e,t,r)=>{r.r(t),r.d(t,{default:()=>G});var n=r(675263),o=r.n(n),i=r(124852),a=r.n(i),u=r(580628),c=r(171703),s=r(867076),l=r(22222),f=r(441609),p=r.n(f),d=r(557579),y=r(805346),b=r(691380),v=r(982030);const E=(0,s.branch)((function(e){return e.selectionActive}),(0,s.compose)((0,s.withProps)((function(e){var t=e.className;return{className:"".concat(t," selection-active")}})),(0,s.withHandlers)({getWidgetClass:function(e){var t=e.getWidgetClass,r=void 0===t?function(){}:t,n=e.isWidgetSelectable,o=void 0===n?function(){return!0}:n;return function(e){return r(e)?r(e)+(o(e)?void 0:" disabled"):o(e)?void 0:" disabled"}},onWidgetClick:function(e){var t=e.onWidgetSelected,r=void 0===t?function(){}:t,n=e.isWidgetSelectable,o=void 0===n?function(){return!0}:n;return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return o(e)?r.apply(void 0,[e].concat(n)):null}}})));var g=r(264945);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const _=(0,s.compose)(s.pure,(0,s.defaultProps)({breakpoints:{md:480,xxs:0},cols:{md:6,xxs:1},minLayoutWidth:480}),(0,b.ZY)({overrideWidthProvider:!0}),(0,s.withProps)((function(e){var t=e.width;return{width:t<=e.minLayoutWidth?t-18:t,toolsOptions:{showMaximize:!0}}})),(0,s.withProps)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,r=e.height,n=e.maximized,o=e.minLayoutWidth,i=e.cols,a=null!=n&&n.widget?{width:"100%",height:"100%",marginTop:0,bottom:"auto",top:0,left:0,zIndex:99}:{},u=null!=n&&n.widget?{width:t,useDefaultWidthProvider:!1,rowHeight:r-50,breakpoints:{xxs:0},cols:{xxs:1}}:{};return h({className:"on-map",breakpoints:{md:o,xxs:0},cols:i||{md:6,xxs:1},style:h({position:"absolute",zIndex:50},a)},u)})),(0,v.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.widgets,r=void 0===t?[]:t;return 0===r.length}),(function(e){return{glyph:"dashboard",title:e.loading?a().createElement(y.Z,{msgId:"loading"}):a().createElement(y.Z,{msgId:"dashboard.emptyTitle"})}})),(0,s.defaultProps)({isWidgetSelectable:function(){return!0}}),E)(g.Z);var w=r(875859),S=r(367306),T=r(308316),R=r(38842),P=r(401757),A=r(24412),L=r(807691),D=r(688395);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function C(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Y=(0,s.compose)((0,c.connect)((0,l.P1)(S.NB,P.hF,P.nA,P.h9,P.xI,(function(e){return(0,P.YI)(e)}),P.ie,S.P0,S.MZ,S.J,T.KV,R.wk,R.fY,P.Jb,(function(e,t,r,n,o,i,a,u,c,s,l,f,d,y){return{resource:e,loading:c,canEdit:s?!s:e&&!!e.canEdit,layouts:r,dependencies:n,selectionActive:o,editingWidget:i,widgets:p()(y)?t:t.filter((function(e){return e.id===y.widget.id})),groups:a,showGroupColor:u,language:f?l:null,env:d,maximized:y}})),{editWidget:d.uT,updateWidgetProperty:d.Ij,exportCSV:d.sD,exportImage:d.Rb,deleteWidget:d.E9,onWidgetSelected:d.Gn,onLayoutChange:d.c_,toggleMaximize:d.Pt}),(0,s.withProps)((function(){return{style:{height:"100%",overflow:"auto"}}})),(0,s.withHandlers)({isWidgetSelectable:function(e){var t=e.editingWidget;return function(e){return("map"===e.widgetType||"table"===e.widgetType&&("map"!==t.widgetType&&e.layer&&t.layer&&e.layer.name===t.layer.name||"map"===t.widgetType)&&!e.mapSync)&&e.id!==t.id}}}))(_),x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=W(n);if(o){var r=W(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return C(this,e)});function u(){return M(this,u),i.apply(this,arguments)}return t=u,(r=[{key:"render",value:function(){return this.props.enabled?a().createElement(Y,{width:this.props.width,height:this.props.height,rowHeight:this.props.rowHeight,cols:this.props.cols,minLayoutWidth:this.props.minLayoutWidth}):null}}])&&N(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(a().Component);k(x,"propTypes",{enabled:o().bool,rowHeight:o().number,cols:o().object,minLayoutWidth:o().number}),k(x,"defaultProps",{enabled:!0,minLayoutWidth:480});const G={DashboardPlugin:(0,u.Z)(x),reducers:{dashboard:A.Z,widgets:w.Z},epics:F(F({},L.ZP),D.ZP)}},24412:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(555927),o=r(557579),i=r(761868),a=r(984596),u=r.n(a);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{showConnections:!0,services:null,saveServiceLoading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.BJ:return(0,i.t8)("editor.available",t.available,e);case n._y:case o.wb:case o.Jm:case o.yY:return(0,i.t8)("editing",t.editing,e);case n.vk:return(0,i.t8)("showConnections",t.show,e);case n.uI:return(0,i.t8)("showSaveModal",t.show,(0,i.t8)("saveErrors",void 0,e));case n.mg:return(0,i.t8)("showSaveAsModal",t.show,(0,i.t8)("saveErrors",void 0,e));case n.E9:var r;return s(s({},e),{},{originalData:t.data,resource:t.resource,services:null===(r=t.data)||void 0===r?void 0:r.catalogs});case n.R4:return s(s({},e),{},{originalData:void 0,resource:void 0,mode:"view",services:void 0});case n.SW:return(0,i.t8)("saveErrors",u()(t.error),e);case n.$l:return(0,i.t8)("saveErrors",void 0,e);case n.E5:var a;return s(s({},e),{},{services:e.services||t.services,selectedService:(null===(a=t.service)||void 0===a?void 0:a.key)||""});case n.s6:return(0,i.t8)("services",t.services,e);case n.B_:return s(s({},e),{},{mode:t.mode,isNew:t.isNew,saveServiceLoading:!1});case n.TA:return s(s({},e),{},{saveServiceLoading:t.loading});case n.CF:var c=t.services,l=t.service;l.isNew=!1,l.showAdvancedSettings=!1,delete l.old,c[l.key]=l;var f=l.key;return s(s({},e),{},{services:c,selectedService:f,mode:"view"});case n.js:var p,d,y=t.services,b=t.service;(y[b.key]||y[null===(p=b.old)||void 0===p?void 0:p.key])&&(delete y[b.key]||y[null===(d=b.old)||void 0===d?void 0:d.key]);var v=Object.keys(y)[0]||"";return s(s({},e),{},{services:y,mode:"view",selectedService:v});case n.CP:return(0,i.t8)("loading"===t.name?"loading":"loadFlags.".concat(t.name),t.value,(0,i.t8)("loading",t.value,e));default:return e}}},38842:(e,t,r)=>{r.d(t,{Yf:()=>p,c3:()=>d,fY:()=>y,wk:()=>f});var n=r(218721),o=r.n(n),i=r(227361),a=r.n(i),u=r(313311),c=r.n(u),s=r(22222),l=r(308316),f=function(e){return o()(e,"localConfig.localizedLayerStyles")},p=function(e){var t=a()(e,"localConfig.plugins.dashboard",[]),r=c()(t,(function(e){return"DashboardEditor"===e.name}))||{};return a()(r,"cfg.catalog.localizedLayerStyles",!1)},d=function(e){return a()(e,"localConfig.localizedLayerStyles.name","mapstore_language")},y=(0,s.P1)(f,d,l.KV,(function(e,t,r){var n=[];return e&&n.push({name:t,value:r}),n}))},580628:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(124852),o=r.n(n),i=r(155553);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}const y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{handleWidth:!0,handleHeight:!0};return function(r){function n(){return u(this,n),l(this,f(n).apply(this,arguments))}return p(n,r),s(n,[{key:"render",value:function(){return o().createElement(i.Z,t,o().createElement(e,this.props))}}]),n}(n.Component)}}}]);