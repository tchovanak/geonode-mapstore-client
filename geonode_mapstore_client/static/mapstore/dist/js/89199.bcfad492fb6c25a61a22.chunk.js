"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[89199],{53001:(e,t,r)=>{r.d(t,{$D:()=>y,$c:()=>T,H_:()=>o,M3:()=>m,Op:()=>E,Q2:()=>l,R3:()=>s,US:()=>R,V3:()=>G,Wv:()=>a,X1:()=>S,Zr:()=>f,dG:()=>i,gC:()=>u,ke:()=>C,l$:()=>p,oQ:()=>c,p2:()=>I,pW:()=>v,r5:()=>g,st:()=>O,uL:()=>A,vw:()=>_,xT:()=>n,zg:()=>d});var n="BACKGROUND_SELECTOR:ADD_BACKGROUND",o="BACKGROUND_SELECTOR:REMOVE_BACKGROUND",a="BACKGROUND_SELECTOR:SET_CURRENT_BACKGROUND_LAYER",u="BACKGROUND_SELECTOR:BACKGROUND_ADDED",i="BACKGROUND_SELECTOR:BACKGROUND_EDITED",c="BACKGROUND_SELECTOR:ADD_BACKGROUND_PROPERTIES",l="BACKGROUND_SELECTOR:SET_BACKGROUND_MODAL_PARAMS",s="BACKGROUND_SELECTOR:UPDATE_BACKGROUND_THUMBNAIL",f="BACKGROUND_SELECTOR:BACKGROUNDS_CLEAR",E="BACKGROUND_SELECTOR:CREATE_BACKGROUNDS_LIST",p="BACKGROUND_SELECTOR:CLEAR_MODAL_PARAMETERS",A="BACKGROUND_SELECTOR:CONFIRM_DELETE_BACKGROUND_MODAL",d="BACKGROUND_SELECTOR:ALLOW_BACKGROUNDS_DELETION";function m(e){return{type:E,backgrounds:e}}function O(e){return{type:n,source:e}}function R(e){return{type:c,modalParams:e}}function T(e){return{type:l,modalParams:e}}function v(e){return{type:u,layerId:e}}function y(e){return{type:i,layerId:e}}function C(e){return{type:a,layerId:e}}function _(e){return{type:d,allow:e}}function g(e,t){return{type:s,thumbnailData:e,id:t}}function S(e){return{type:o,backgroundId:e}}function G(){return{type:p}}function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:A,show:e,layerTitle:t,layerId:r}}},931273:(e,t,r)=>{r.d(t,{$X:()=>C,$Y:()=>D,A4:()=>le,BG:()=>W,Bz:()=>T,CO:()=>y,Dw:()=>k,E9:()=>Te,HR:()=>f,IT:()=>Ae,In:()=>j,K4:()=>V,Kz:()=>M,L8:()=>Q,M3:()=>te,Mt:()=>_,N3:()=>re,Oq:()=>g,PR:()=>G,QF:()=>m,Rc:()=>q,SU:()=>ne,Ts:()=>pe,UT:()=>P,V3:()=>s,WX:()=>c,We:()=>Oe,Wf:()=>Ee,X7:()=>ee,XM:()=>J,XS:()=>de,XW:()=>$,YO:()=>S,bu:()=>ce,bv:()=>L,cS:()=>w,dL:()=>X,do:()=>F,eA:()=>N,i3:()=>z,im:()=>v,ky:()=>fe,l3:()=>b,lb:()=>B,m:()=>ue,mh:()=>h,nX:()=>H,nm:()=>d,nx:()=>Re,r1:()=>Z,r7:()=>l,tt:()=>Y,tx:()=>me,uN:()=>R,ur:()=>p,vG:()=>se,vK:()=>A,vg:()=>x,wI:()=>I,wl:()=>ie,wo:()=>oe,xM:()=>U,xi:()=>E,ye:()=>ae,yu:()=>K,zX:()=>ve,zZ:()=>O});var n=r(659551),o=r(501157),a=r(603475),u=r(932354),i=r(197395),c=(n.ZP,o.ZP,a.Z,u.Z,"CATALOG:ADD_LAYERS_FROM_CATALOGS"),l="CATALOG:ADD_LAYER_AND_DESCRIBE",s="CATALOG:TEXT_SEARCH",f="CATALOG:RECORD_LIST_LOADED",E="CATALOG:RESET_CATALOG",p="CATALOG:CATALOG_CLOSE",A="CATALOG:RECORD_LIST_LOAD_ERROR",d="CATALOG:CHANGE_CATALOG_FORMAT",m="CATALOG:ADD_LAYER_ERROR",O="CATALOG:CHANGE_SELECTED_SERVICE",R="CATALOG:CHANGE_CATALOG_MODE",T="CATALOG:CHANGE_METADATA_TEMPLATE",v="CATALOG:CHANGE_TITLE",y="CATALOG:CHANGE_TEXT",C="CATALOG:CHANGE_TYPE",_="CATALOG:CHANGE_SERVICE_PROPERTY",g="CATALOG:CHANGE_SERVICE_FORMAT",S="CATALOG:FOCUS_SERVICES_LIST",G="CATALOG:CHANGE_URL",I="CATALOG:ADD_CATALOG_SERVICE",L="CATALOG:DELETE_CATALOG_SERVICE",h="CATALOG:ADD_SERVICE",D="CATALOG:DELETE_SERVICE",N="CATALOG:SAVING_SERVICE",P="CATALOG:GET_METADATA_RECORD_BY_ID",w="CATALOG:SET_LOADING",b="CATALOG:TOGGLE_TEMPLATE",M="CATALOG:TOGGLE_THUMBNAIL",x="CATALOG:TOGGLE_ADVANCED_SETTINGS",U="CATALOG:FORMAT_OPTIONS_FETCH",F="CATALOG:FORMAT_OPTIONS_LOADING",B="CATALOG:SET_FORMAT_OPTIONS",K="CATALOG:NEW_SERVICE_STATUS";function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.format,r=e.url,n=e.startPosition,o=e.maxRecords,a=e.text,u=e.options,i=void 0===u?{}:u;return{type:s,format:t,url:r,startPosition:n,maxRecords:o,text:a,options:i}}function H(e,t){return{type:f,searchOptions:e,result:t}}function W(e){return{type:d,format:e}}function q(e){return{type:N,status:e}}function V(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:w,loading:e}}function k(e){return{type:O,service:e}}function X(e){return{type:S,status:e}}function j(e,t){return{type:R,mode:e,isNew:t}}function Z(e){return{type:v,title:e}}function $(e){return{type:y,text:e}}function Q(e,t){return{type:_,property:e,value:t}}function z(e){return{type:g,format:e}}function J(e){return{type:C,newType:e}}function ee(e){return{type:G,url:e}}function te(){return{type:h}}function re(e){return{type:I,service:e}}function ne(e){return{type:L,service:e}}function oe(){return{type:D}}function ae(){return{type:E}}function ue(e){return{type:A,error:e}}function ie(){return{type:p}}function ce(e,t){return{type:"CATALOG:DESCRIBE_ERROR",layer:e,error:t}}var le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.zoomToLayer,n=void 0!==r&&r;return{type:l,layer:e,zoomToLayer:n}};function se(e){return{type:m,error:e}}function fe(e){return{type:P,metadataOptions:e}}var Ee=function(e){return{type:T,metadataTemplate:e}},pe=function(){return{type:x}},Ae=function(){return{type:b}},de=function(){return{type:M}},me=function(e){return{type:U,url:e}},Oe=function(e){return{type:F,loading:e}},Re=function(e,t){return{type:B,formats:e,url:t}};function Te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,i.vU)({title:"catalog.notification.errorTitle",message:"catalog.notification.errorSearchingRecords",values:{records:e}})}var ve=function(e){return{type:K,status:e}}},921914:(e,t,r)=>{r.d(t,{B1:()=>I,DW:()=>w,DZ:()=>l,E0:()=>f,F9:()=>E,Fm:()=>M,GI:()=>G,HP:()=>V,Ih:()=>u,JB:()=>Y,LU:()=>F,MO:()=>te,Mc:()=>ne,Mn:()=>U,PM:()=>Q,Pg:()=>j,Pn:()=>c,Qu:()=>se,RA:()=>ae,Re:()=>m,TM:()=>$,TP:()=>ee,VB:()=>v,WU:()=>K,XL:()=>o,XP:()=>B,X_:()=>p,Xp:()=>b,Xw:()=>i,Y$:()=>le,ZF:()=>N,ZM:()=>ie,Zb:()=>P,Zw:()=>oe,aN:()=>k,am:()=>ue,cb:()=>S,e8:()=>s,fv:()=>L,g:()=>W,gG:()=>g,gc:()=>h,ih:()=>O,jL:()=>T,kT:()=>fe,km:()=>a,lF:()=>_,lK:()=>z,mK:()=>H,oO:()=>re,oz:()=>y,pb:()=>A,ph:()=>C,qb:()=>d,sV:()=>x,sv:()=>J,u0:()=>Z,wm:()=>ce,ws:()=>q,xy:()=>R,zX:()=>D});var n=r(647310),o="LOAD_FEATURE_INFO",a="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",i="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",l="PURGE_MAPINFO_RESULTS",s="CHANGE_MAPINFO_FORMAT",f="SHOW_MAPINFO_MARKER",E="HIDE_MAPINFO_MARKER",p="SHOW_REVERSE_GEOCODE",A="HIDE_REVERSE_GEOCODE",d="GET_VECTOR_INFO",m="NO_QUERYABLE_LAYERS",O="CLEAR_WARNING",R="FEATURE_INFO_CLICK",T="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",v="IDENTIFY:CLICK_POINT",y="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",C="TOGGLE_MAPINFO_STATE",_="UPDATE_CENTER_TO_MARKER",g="IDENTIFY:CHANGE_PAGE",S="IDENTIFY:CLOSE_IDENTIFY",G="IDENTIFY:CHANGE_FORMAT",I="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",L="IDENTIFY:EDIT_LAYER_FEATURES",h="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",D="IDENTIFY:SET_MAP_TRIGGER",N="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",P="IDENTIFY:SET_SHOW_IN_MAP_POPUP",w="IDENTIFY:IDENTIFY_IS_MOUNTED",b="IDENTIFY:INIT_PLUGIN";function M(e,t,r,n,a){return{type:o,data:t,reqId:e,requestParams:r,layerMetadata:n,layer:a}}function x(e,t,r,n){return{type:a,error:t,reqId:e,requestParams:r,layerMetadata:n}}function U(e,t,r,n){return{type:u,reqId:e,exceptions:t,requestParams:r,layerMetadata:n}}function F(){return{type:m}}function B(){return{type:O}}function K(e,t){return{type:c,reqId:e,request:t}}function Y(e,t,r,n){return{type:d,layer:e,request:t,metadata:r,queryableLayers:n}}function H(e){return{type:i,enabled:e}}function W(){return{type:l}}function q(e){return{type:s,infoFormat:e}}function V(){return{type:f}}function k(){return{type:E}}function X(e){return{type:p,reverseGeocodeData:e.data}}function j(e){return function(t){n.Z.reverseGeocode(e).then((function(e){t(X(e))})).catch((function(e){t(X(e))}))}}function Z(){return{type:A}}function $(){return{type:C}}function Q(e){return{type:_,status:e}}function z(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:R,point:e,layer:t,filterNameList:r,overrideParams:n,itemId:o}}function J(e){return{type:T,point:e}}function ee(e){return{type:v,point:e}}function te(e){return{type:y,enabled:e}}function re(e){return{type:g,index:e}}var ne=function(){return{type:S}},oe=function(e){return{type:G,format:e}},ae=function(e){return{type:I,showCoordinateEditor:e}},ue=function(e){return{type:L,layer:e}},ie=function(e){return{type:h,query:e}},ce=function(e){return{type:D,trigger:e}},le=function(e){return{type:P,value:e}},se=function(e){return{type:w,isMounted:e}},fe=function(e){return{type:b,cfg:e}}},659551:(e,t,r)=>{r.d(t,{ZP:()=>W,_b:()=>b,kv:()=>K});var n=r(472500),o=r.n(n),a=r(227361),u=r.n(a),i=r(91175),c=r.n(i),l=r(610928),s=r.n(l),f=r(941106),E=r.n(f),p=r(414293),A=r.n(p),d=r(984596),m=r.n(d),O=r(441609),R=r.n(O),T=r(727418),v=r.n(T),y=r(375875),C=r.n(y),_=r(737275),g=r(986267),S=r(501157);function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){L(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,i=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(e){i=!0,o=e}finally{try{u||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var N=function(e){var t=o().parse(e,!0);return o().format(v()({},t,{search:null},{query:v()({service:"CSW",version:"2.0.2"},t.query,{request:void 0})}))},P="<ogc:Or>\n            <ogc:PropertyIsEqualTo>\n                <ogc:PropertyName>dc:type</ogc:PropertyName>\n                <ogc:Literal>dataset</ogc:Literal>\n            </ogc:PropertyIsEqualTo>\n            <ogc:PropertyIsEqualTo>\n                <ogc:PropertyName>dc:type</ogc:PropertyName>\n                <ogc:Literal>http://purl.org/dc/dcmitype/Dataset</ogc:Literal>\n            </ogc:PropertyIsEqualTo>\n       </ogc:Or>",w="<ogc:PropertyIsLike wildCard='%' singleChar='_' escapeChar='\\'><ogc:PropertyName>csw:AnyText</ogc:PropertyName> <ogc:Literal>%${searchText}%</ogc:Literal> </ogc:PropertyIsLike> ",b='<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gmi="http://www.isotc211.org/2005/gmi" xmlns:ows="http://www.opengis.net/ows" service="CSW" version="2.0.2" resultType="results" startPosition="${startPosition}" maxRecords="${maxRecords}"> <csw:Query typeNames="csw:Record"> <csw:ElementSetName>full</csw:ElementSetName> <csw:Constraint version="1.1.0"> <ogc:Filter> ${filterXml} </ogc:Filter> </csw:Constraint> </csw:Query> </csw:GetRecords>',M=function(e){var t=new Map(Array.from(new URLSearchParams(e.value)).map((function(e){var t=h(e,2),r=t[0],n=t[1];return[r.toLowerCase(),n]}))),r=t.get("layers"),n=t.get("version");return!!r&&I(I({},e),{},{protocol:"OGC:WMS",name:r,value:"".concat(e.value.match(/[^\?]+[\?]+/g),"SERVICE=WMS").concat(n&&"&VERSION=".concat(n))})},x=function(e,t,r){if(!t.name)return null;switch(e){case"wms":var n=0!==t.value.indexOf("http")?(r&&r.catalogURL||"")+"/"+t.value:t.value;return{type:t.protocol||t.scheme,url:n,SRS:[],params:{name:t.name}};case"arcgis":return{type:"arcgis",url:t.value,SRS:[],params:{name:t.name}};default:return null}},U=[/^OGC:WMS-(.*)-http-get-map/g,/^OGC:WMS/g],F=/serviceType\/ogc\/wms/g,B=U.concat(F),K=function(e,t){var r,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=(null==e?void 0:e.URI)&&m()(e.URI);if(a){var u=c()(a.map((function(e){if(e.protocol){if(U.some((function(t){return e.protocol.match(t)})))return e;if(e.protocol.match(F))return M(e)}return!1})).filter((function(e){return e})));if(u)return x("wms",u,t)}if(null!=e&&null!==(r=e.references)&&void 0!==r&&r.length){var i=m()(e.references),l=c()(i.filter((function(e){return e.scheme&&U.some((function(t){return e.scheme.match(t)}))})));if(l){var s=o().parse(l.value,!0),f=s.query&&s.query.layers||e.alternative;return x("wms",I(I({},l),{},{name:f}),t)}if(n){var E=c()(i.filter((function(e){return e.scheme&&"WWW:DOWNLOAD-REST_MAP"===e.scheme})));if(E)return x("arcgis",I(I({},E),{},{name:e.alternative}),t)}}return null},Y={},H={parseUrl:N,getRecordById:function(e){return new Promise((function(t){Promise.all([r.e(99942),r.e(66372)]).then(function(){t(C().get(e).then((function(e){if(e){var t=r(566372).unmarshaller.unmarshalString(e.data);if(t&&t.name&&"GetRecordByIdResponse"===t.name.localPart&&t.value&&t.value.abstractRecord){var n=t.value.abstractRecord[0].value.dcElement;if(n){for(var o={references:[]},a=0;a<n.length;a++){var u=n[a],i=u.name.localPart,c={};c="references"===i&&u.value?{value:u.value.content&&(0,_.$F)(u.value.content[0])||u.value.content||u.value,scheme:u.value.scheme}:u.value.content&&u.value.content[0]||u.value.content||u.value,o[i]&&Array.isArray(o[i])?o[i].push(c):o[i]?o[i]=[o[i],c]:o[i]=c}return{dc:o}}}else if(t&&t.name&&"ExceptionReport"===t.name.localPart)return{error:t.value.exception&&t.value.exception.length&&t.value.exception[0].exceptionText||"GenericError"};return null}return null})))}.bind(null,r)).catch(r.oe)}))},getRecords:function(e,t,n,o,a){return new Promise((function(i){Promise.all([r.e(99942),r.e(1269)]).then(function(){var l=r(566372),f=l.CSW,p=l.marshaller,d=l.unmarshaller,O=p.marshalString({name:"csw:GetRecords",value:f.getRecords(t,n,"string"!=typeof o&&o)});o&&"string"!=typeof o||(O=function(e,t,r){var n=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).filter,o=(null==n?void 0:n.staticFilter)||P,a="<ogc:And>\n        ".concat(E()((null==n?void 0:n.dynamicFilter)||w)({searchText:r}),"\n        ").concat(o,"\n    </ogc:And>");return E()(b)({filterXml:r?a:o,startPosition:e,maxRecords:t})}(t,n,o,a)),i(C().post(N(e),O,{headers:{"Content-Type":"application/xml"}}).then((function(e){if(e){var t=d.unmarshalString(e.data);if(t&&t.name&&"GetRecordsResponse"===t.name.localPart&&t.value&&t.value.searchResults){var r,n=t.value,o=n.searchResults.abstractRecord||n.searchResults.any,i={numberOfRecordsMatched:n.searchResults.numberOfRecordsMatched,numberOfRecordsReturned:n.searchResults.numberOfRecordsReturned,nextRecord:n.searchResults.nextRecord},l=[];if(o)for(var f=0;f<o.length;f++){var E=o[f].value,p={dateStamp:E.dateStamp&&E.dateStamp.date,fileIdentifier:E.fileIdentifier&&E.fileIdentifier.characterString&&E.fileIdentifier.characterString.value,identificationInfo:E.abstractMDIdentification&&E.abstractMDIdentification.value};if(E.boundingBox){var O,T=void 0;if((O=Array.isArray(E.boundingBox)?c()(E.boundingBox):E.boundingBox)&&O.value){var v,y,C,G,L=null!==(v=null===(y=O.value)||void 0===y?void 0:y.crs)&&void 0!==v?v:"",D=null===(C=L.match(/[\w-]*:[\w-]*:[\w-]*:[\w-]*:[\w-]*:[^:]*:(([\w-]+\s[\w-]+)|[\w-]*)/))||void 0===C?void 0:C[0],N=(0,g.makeNumericEPSG)(null===(G=L.match(/EPSG:[0-9]+/))||void 0===G?void 0:G[0]),P=O.value.lowerCorner,w=O.value.upperCorner,b=N||(0,g.extractCrsFromURN)(D)||s()(L.split(":"));"EPSG:4326"===(b?"EPSG:"===b.slice(0,5)?(0,g.makeNumericEPSG)(b):(0,g.makeNumericEPSG)("EPSG:".concat(b)):"EPSG:4326")&&"CRS84"!==b&&"OGC:CRS84"!==b&&(P=[P[1],P[0]],w=[w[1],w[0]]),T=(0,g.makeBboxFromOWS)(P,w)}p.boundingBox={extent:T,crs:"EPSG:4326"}}var M=E.dcElement;if(M){for(var x={references:[]},U=0;U<M.length;U++){var F=M[U],H=F.name.localPart,W={};W="references"===H&&F.value?{value:F.value.content&&(0,_.$F)(F.value.content[0])||F.value.content||F.value,scheme:F.value.scheme}:F.value.content&&F.value.content[0]||F.value.content||F.value,x[H]&&Array.isArray(x[H])?x[H].push(W):x[H]?x[H]=[x[H],W]:x[H]=W}var q=m()(x.references.length>0?x.references:x.URI);r=r?r.concat(q):q,p.dc=x}l.push(p)}return i.records=l,function(e,t,r){if(!u()(r,"options.service.autoSetVisibilityLimits",!1))return t;var n=((null==e?void 0:e.find((function(e){return B.some((function(t){var r,n;return(null==e||null===(r=e.scheme)||void 0===r?void 0:r.match(t))||(null==e||null===(n=e.protocol)||void 0===n?void 0:n.match(t))}))})))||{}).value,o=h(n&&n.split("?")||[],1)[0];if(!o)return I({},t);var a=Y[o],i=!R()(a);return Promise.resolve(i?a:S.ZP.getCapabilities(o+"?version=").then((function(e){return u()(e,"capability.layer.layer",[])})).catch((function(){return[]}))).then((function(e){var r;return i||(Y[o]=e),I(I({},t),{},{records:null==t||null===(r=t.records)||void 0===r?void 0:r.map((function(t){var r=u()(K(null==t?void 0:t.dc,null,!1),"params.name",""),n=e.find((function(e){return e.name===r}))||{},o=n.minScaleDenominator,a=n.maxScaleDenominator;return I(I({},t),(!A()(o)||!A()(a))&&{capabilities:{MaxScaleDenominator:a,MinScaleDenominator:o}})}))})}))}(r,i,a)}if(t&&t.name&&"ExceptionReport"===t.name.localPart)return{error:t.value.exception&&t.value.exception.length&&t.value.exception[0].exceptionText||"GenericError"}}return null})))}.bind(null,r)).catch(r.oe)}))},textSearch:function(e,t,r,n,o){return new Promise((function(a){a(H.getRecords(e,t,r,n,o))}))},workspaceSearch:function(e,t,n,o,a){return new Promise((function(u){Promise.all([r.e(99942),r.e(1269)]).then(function(){var i=r(484454).Filter,c=a||"%",l=o&&"%"+o+"%"||"%",s=i.propertyIsLike("dc:identifier",c+":"+l),f=i.filter(s);u(H.getRecords(e,t,n,f))}.bind(null,r)).catch(r.oe)}))},reset:function(){}};const W=H},603475:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(375875),o=r.n(n),a=r(737275),u=r(472500),i=r.n(u),c=r(727418),l=r.n(c),s=r(505055),f=r.n(s),E=r(984596),p=r.n(E),A=r(986267),d=r(707294),m={},O=function(e){var t=i().parse(e,!0);return i().format(l()({},t,{search:null},{query:l()({SERVICE:"WMTS",VERSION:"1.0.0",REQUEST:"GetCapabilities"},t.query)}))},R=function(e,t,r,n,o){for(var a=e.Capabilities.Contents,u=(0,d.G6)(e),i=(0,d.s5)(e),c=a.TileMatrixSet&&p()(a.TileMatrixSet)||[],s=[],f=c.length,E=0;E<f;E++)s.push((0,A.getEPSGCode)(c[E]["ows:SupportedCRS"]));var m=a.Layer,O=p()(m).filter((function(e){return!n||-1!==e["ows:Identifier"].toLowerCase().indexOf(n.toLowerCase())||e["ows:Title"]&&-1!==e["ows:Title"].toLowerCase().indexOf(n.toLowerCase())}));return{numberOfRecordsMatched:O.length,numberOfRecordsReturned:Math.min(r,O.length),nextRecord:t+Math.min(r,O.length)+1,records:O.filter((function(e,n){return n>=t-1&&n<t-1+r})).map((function(e){return l()({},e,{SRS:s,TileMatrixSet:c,queryable:!!(0,d.b4)(u,"GetFeatureInfo","KVP"),requestEncoding:i,style:(0,d.EN)(e),format:(0,d.JY)(e),GetTileURL:(0,d.b4)(u,"GetTile",i),capabilitiesURL:o})}))}},T={parseUrl:O,getRecords:function(e,t,r,n){var u=m[e];return u&&(new Date).getTime()<u.timestamp+1e3*((0,a.u8)("cacheExpire")||60)?new Promise((function(o){o(R(u.data,t,r,n,e))})):o().get(O(e)).then((function(o){var a;return f().parseString(o.data,{explicitArray:!1},(function(e,t){a=t})),m[e]={timestamp:(new Date).getTime(),data:a},R(a,t,r,n,e)}))},getCapabilities:function(e){var t=m[e];return t&&(new Date).getTime()<t.timestamp+1e3*((0,a.u8)("cacheExpire")||60)?new Promise((function(e){e(t.data)})):o().get(O(e)).then((function(t){var r;return f().parseString(t.data,{explicitArray:!1},(function(e,t){r=t})),m[e]={timestamp:(new Date).getTime(),data:r},r}))},textSearch:function(e,t,r,n){return T.getRecords(e,t,r,n)},reset:function(){Object.keys(m).forEach((function(e){delete m[e]}))}};const v=T},932354:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(227361),o=r.n(n),a=r(737275),u=function(e,t,r,n){var u=o()(a.ZP.getDefaults(),"initialState.defaultState.catalog.default.staticServices.default_map_backgrounds.backgrounds").filter((function(e){return!n||e.title.indexOf(n)>-1})),i=u.filter((function(e,n){return n>=t-1&&n<r+t-1}));return new Promise((function(e){return e({numberOfRecordsMatched:u.length,numberOfRecordsReturned:i.length,records:i,service:{Name:"Background Provider"}})}))};const i={getRecords:u,reset:function(){},textSearch:function(e,t,r,n){return u(0,t,r,n)}}}}]);