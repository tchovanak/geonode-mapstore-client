(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1157],{921914:(e,t,n)=>{"use strict";n.d(t,{XL:()=>o,km:()=>a,Ih:()=>i,Xw:()=>l,Pn:()=>c,DZ:()=>u,e8:()=>s,E0:()=>d,F9:()=>E,X_:()=>f,pb:()=>p,qb:()=>g,Re:()=>m,ih:()=>v,xy:()=>O,jL:()=>I,VB:()=>y,oz:()=>T,ph:()=>_,lF:()=>b,gG:()=>N,cb:()=>h,GI:()=>R,B1:()=>A,fv:()=>S,gc:()=>P,zX:()=>C,ZF:()=>L,Zb:()=>D,DW:()=>F,Xp:()=>M,Fm:()=>w,sV:()=>G,Mn:()=>k,LU:()=>U,XP:()=>x,WU:()=>z,JB:()=>Z,mK:()=>Y,g:()=>j,ws:()=>H,HP:()=>q,aN:()=>K,Pg:()=>W,u0:()=>Q,TM:()=>V,PM:()=>B,lK:()=>J,sv:()=>$,TP:()=>ee,MO:()=>te,oO:()=>ne,Mc:()=>re,Zw:()=>oe,RA:()=>ae,am:()=>ie,ZM:()=>le,wm:()=>ce,Y$:()=>ue,Qu:()=>se,kT:()=>de});var r=n(647310),o="LOAD_FEATURE_INFO",a="ERROR_FEATURE_INFO",i="EXCEPTIONS_FEATURE_INFO",l="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",u="PURGE_MAPINFO_RESULTS",s="CHANGE_MAPINFO_FORMAT",d="SHOW_MAPINFO_MARKER",E="HIDE_MAPINFO_MARKER",f="SHOW_REVERSE_GEOCODE",p="HIDE_REVERSE_GEOCODE",g="GET_VECTOR_INFO",m="NO_QUERYABLE_LAYERS",v="CLEAR_WARNING",O="FEATURE_INFO_CLICK",I="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",y="IDENTIFY:CLICK_POINT",T="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",_="TOGGLE_MAPINFO_STATE",b="UPDATE_CENTER_TO_MARKER",N="IDENTIFY:CHANGE_PAGE",h="IDENTIFY:CLOSE_IDENTIFY",R="IDENTIFY:CHANGE_FORMAT",A="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",S="IDENTIFY:EDIT_LAYER_FEATURES",P="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",C="IDENTIFY:SET_MAP_TRIGGER",L="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",D="IDENTIFY:SET_SHOW_IN_MAP_POPUP",F="IDENTIFY:IDENTIFY_IS_MOUNTED",M="IDENTIFY:INIT_PLUGIN";function w(e,t,n,r,a){return{type:o,data:t,reqId:e,requestParams:n,layerMetadata:r,layer:a}}function G(e,t,n,r){return{type:a,error:t,reqId:e,requestParams:n,layerMetadata:r}}function k(e,t,n,r){return{type:i,reqId:e,exceptions:t,requestParams:n,layerMetadata:r}}function U(){return{type:m}}function x(){return{type:v}}function z(e,t){return{type:c,reqId:e,request:t}}function Z(e,t,n,r){return{type:g,layer:e,request:t,metadata:n,queryableLayers:r}}function Y(e){return{type:l,enabled:e}}function j(){return{type:u}}function H(e){return{type:s,infoFormat:e}}function q(){return{type:d}}function K(){return{type:E}}function X(e){return{type:f,reverseGeocodeData:e.data}}function W(e){return function(t){r.Z.reverseGeocode(e).then((function(e){t(X(e))})).catch((function(e){t(X(e))}))}}function Q(){return{type:p}}function V(){return{type:_}}function B(e){return{type:b,status:e}}function J(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:O,point:e,layer:t,filterNameList:n,overrideParams:r,itemId:o}}function $(e){return{type:I,point:e}}function ee(e){return{type:y,point:e}}function te(e){return{type:T,enabled:e}}function ne(e){return{type:N,index:e}}var re=function(){return{type:h}},oe=function(e){return{type:R,format:e}},ae=function(e){return{type:A,showCoordinateEditor:e}},ie=function(e){return{type:S,layer:e}},le=function(e){return{type:P,query:e}},ce=function(e){return{type:C,trigger:e}},ue=function(e){return{type:D,value:e}},se=function(e){return{type:F,isMounted:e}},de=function(e){return{type:M,cfg:e}}},647310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(375875),o=n.n(r),a=n(472500),i=n.n(a),l=n(727418),c=n.n(l),u={format:"json",bounded:0,polygon_geojson:1,priority:5};const s={geocode:function(e,t){var n=c()({q:e},u,t||{}),r=i().format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(e,t){var n=c()({lat:e.lat,lon:e.lng},t||{},u),r=i().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}}},399534:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(461365),o=n(569334);const a=(0,r.Z)(o.h_)},902870:(e,t,n)=>{"use strict";n.d(t,{Qo:()=>i,jg:()=>l});var r=n(227361),o=n.n(r),a=n(453005);n(986267),n(552259);var i=function(e,t){var n=e.format,r=e.queryParams,o=void 0===r?{}:r;return o.info_format||o.outputFormat||n&&a.O7[n]||t.format},l=function(e){return!!o()(e,"layer.search.url")}},560466:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var r=n(124852),o=n.n(r),a=n(322843),i=n(171703),l=n(22222),c=n(805346),u=n(693473),s=n(694745),d=n(399534),E=n(782904),f=n(903828),p=n(643892),g=n(957914),m=n(12530),v=n(532425),O=(0,i.connect)((0,l.P1)([function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t[m.zj.DELETE_RESOURCE])||void 0===n?void 0:n.value},function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t[m.zj.DELETE_RESOURCE])||void 0===n?void 0:n.loading}],(function(e,t){return{resources:e,enabled:!!e,loading:t}})),{onClose:E.Xg.bind(null,m.zj.DELETE_RESOURCE,"value",void 0),onDelete:p.EU.bind(null,m.zj.DELETE_RESOURCE)})((function(e){var t=e.enabled,n=e.resources,r=void 0===n?[]:n,a=e.onClose,i=void 0===a?function(){}:a,l=e.onDelete,u=void 0===l?function(){}:l,E=e.redirectTo,f=void 0===E?"/":E,p=e.loading;return o().createElement(d.Z,null,o().createElement(s.Z,{title:o().createElement(c.Z,{msgId:"gnviewer.deleteResourceTitle",msgParams:{count:r.length}}),show:t,fitContent:!0,clickOutEnabled:!1,modalClassName:"gn-simple-dialog",buttons:p?[]:[{text:o().createElement(c.Z,{msgId:"gnviewer.deleteResourceNo",msgParams:{count:r.length}}),onClick:function(){return i()}},{text:o().createElement(c.Z,{msgId:"gnviewer.deleteResourceYes",msgParams:{count:r.length}}),bsStyle:"danger",onClick:function(){return u(r,f)}}],onClose:p?null:function(){return i()}},o().createElement("ul",{className:"gn-card-grid",style:{listStyleType:"none",padding:"0.5rem",margin:0}},r.map((function(e,t){return o().createElement("li",{style:{padding:"0.25rem 0"},key:e.pk+"-"+t},o().createElement(g.Z,{data:e,layoutCardsStyle:"list",readOnly:!0}))}))),p&&o().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(v.Z,{size:70}))))})),I=(0,i.connect)((0,l.P1)([f.yK],(function(e){return{resource:e}})),{onClick:E.Xg.bind(null,m.zj.DELETE_RESOURCE,"value")})((function(e){var t=e.onClick,n=e.size,r=e.resource;return o().createElement(u.Z,{variant:"danger",size:n,onClick:function(){t([r])}},o().createElement(c.Z,{msgId:"gnhome.delete"}))}));const y=(0,a.rx)("DeleteResource",{component:O,containers:{ActionNavbar:{name:"DeleteResource",Component:I}},epics:{},reducers:{}})},581122:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>L});var r=n(124852),o=n.n(r),a=n(322843),i=n(171703),l=n(22222),c=(n(805346),n(693473)),u=n(903828),s=n(867076),d=n(807472),E=n(893379),f=n.n(E),p=n(653510);f()(p.Z,{insert:"head",singleton:!1}),p.Z.locals;var g=n(800827),m=n(49977),v=n.n(m),O=n(801550),I=n(375875),y=n.n(I),T=(n(757588),n(921914));function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(782904),n(902870);var h="STATIONING_LOCATOR:SHOWSTATIONING_DIALOG",R="STATIONING_LOCATOR:HIDESTATIONING_DIALOG",A="STATIONING_LOCATOR:CHANGE_STATIONING",S={position:"absolute",background:"white",top:100,left:100},P=(0,s.compose)((0,i.connect)((function(e){var t,n,r,o;return{enabled:null==e||null===(t=e.stationingLocator)||void 0===t?void 0:t.enabled,stationing:null==e||null===(n=e.stationingLocator)||void 0===n?void 0:n.stationing,point:null==e||null===(r=e.stationingLocator)||void 0===r||null===(o=r.stationing)||void 0===o?void 0:o.point}}),{hide:function(){return{type:R}}}))((function(e){var t,n,r,a,i,l=e.enabled,c=e.hide,u=e.stationing,s=u.point?(null==u||null===(t=u.point)||void 0===t?void 0:t.latlng.lat.toFixed(5))+", "+(null==u||null===(n=u.point)||void 0===n?void 0:n.latlng.lng.toFixed(5)):"",E=null==u||null===(r=u.response)||void 0===r?void 0:r.data,f=E&&E.length>0?E[0]:null,p=f?f.sectionName:"",g=f?f.roadNo:"",m=f?" "+Math.round(f.offset)+" m":"",v=f&&null!=f.kmOffset?f.roadNo+" "+(null===(a=f.kmOffset)||void 0===a?void 0:a.toFixed(3))+" km (DZ "+(f.kmSign?f.kmSign:"-")+")":"",O=f&&null!=f.cumOffset?f.roadNo+" "+(null===(i=f.cumOffset)||void 0===i?void 0:i.toFixed(3))+" km":"";return o().createElement(d.Z,{id:"stationingDialog",style:b(b({},S),{},{display:l?"block":"none"})},o().createElement("span",{role:"header"},o().createElement("span",{className:"settings-panel-title"},"Staničenie"),o().createElement("button",{onClick:function(){return c()},className:"settings-panel-close close"},"X")),o().createElement("span",{role:"body"},o().createElement("table",{class:"tg"},o().createElement("colgroup",null,o().createElement("col",{style:{width:"200px"}}),o().createElement("col",null)),o().createElement("tbody",null,o().createElement("tr",null,o().createElement("td",{class:"tg-zv4m"},"GPS (ETRS89 LAT/LON):"),o().createElement("td",{class:"tg-zv4m"},s)),o().createElement("tr",null,o().createElement("td",{class:"tg-zv4m"},"Úsekové staničenie:"),o().createElement("td",{class:"tg-zv4m"},g," ",p," ",m)),o().createElement("tr",null,o().createElement("td",{class:"tg-zv4m"},"Km staničenie:"),o().createElement("td",{class:"tg-zv4m"},v)),o().createElement("tr",null,o().createElement("td",{class:"tg-zv4m"},"Kumulatívne staničenie:"),o().createElement("td",{class:"tg-zv4m"},O))))))})),C=(0,i.connect)((0,l.P1)([u.yK],(function(e){return{resource:e}})),{onClick:function(){return{type:h}}})((function(e){var t=e.onClick,n=e.variant,r=e.size;return e.resource,o().createElement(c.Z,{size:r,variant:n||"primary",onClick:function(){return t()}},"Staničenie")}));const L=(0,a.rx)("StationingLocator",{component:P,containers:{ActionNavbar:{name:"StationingLocator",Component:C}},epics:{changeMapInfoStateOnStationingLocatorShow:function(e){return e.ofType(h).switchMap((function(){return v().Observable.of((0,T.mK)(!1))}))},changeMousePointerOnStationingLocatorShow:function(e,t){return e.ofType("CHANGE_MOUSE_POINTER").filter((function(){var e=t.getState();return!(null==e||null==e.map||"crosshair"==e.map.present.mousePointer||null==e.stationingLocator||!e.stationingLocator.enabled)})).switchMap((function(){return v().Observable.of((0,O.Mo)("crosshair"))}))},changeMousePointerOnStationingLocatorHide:function(e){return e.ofType(R).switchMap((function(){return v().Observable.of((0,O.Mo)("auto")).concat(v().Observable.of((0,T.mK)(!0)))}))},hideMarkerOnStationingLocatorHide:function(e){return e.ofType(R).switchMap((function(){return v().Observable.of((0,T.aN)())}))},showMarkerOnClick:function(e,t){return e.ofType("CLICK_ON_MAP").filter((function(){var e=t.getState();return!(null==e.stationingLocator||!e.stationingLocator.enabled)})).switchMap((function(e){var n=e.point;return(0,g.uy)(t.getState()).substr(5),v().Observable.of((0,T.TP)(n)).concat(v().Observable.of((0,T.HP)()))}))},calculateStationing:function(e,t){return e.ofType("CLICK_ON_MAP").filter((function(){var e=t.getState();return!(null==e.stationingLocator||!e.stationingLocator.enabled)})).switchMap((function(e){var n=e.point,r=((0,g.uy)(t.getState()).substr(5),"https://gis.rowes.sk/stationing/api/stationing/xy-to-stationings?x=".concat(n.rawPos[0],"&y=").concat(n.rawPos[1]));return y().get(r).then((function(e){return{type:A,stationing:{point:n,response:e}}}))}))}},reducers:{stationingLocator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{enabled:!1,stationing:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return b(b({},e),{},{enabled:!0});case R:return b(b({},e),{},{enabled:!1});case A:return b(b({},e),{},{stationing:t.stationing});default:return e}}}})},653510:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(923645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".msgapi #stationingDialog {\n    width: 500px;\n}\n\n.msgapi .tg  {\n    border-collapse:collapse;\n    border-spacing:0;\n    width: auto;\n}\n.msgapi .tg td{\n    border-color:black;\n    border-style:solid;\n    border-width:1px;\n    font-family:Arial, sans-serif;\n    font-size:14px;\n    overflow:hidden;\n    padding:10px 5px;\n    word-break:normal;\n}\n.msgapi .tg th{\n    border-color:black;\n    border-style:solid;\n    border-width:1px;\n    font-family:Arial,\n     sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.msgapi .tg .tg-zv4m{\n    border-color:#ffffff;\n    text-align:left;\n    vertical-align:top\n}\n",""]);const a=o}}]);