(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[73001],{243120:(e,t,r)=>{var n={"./cesium.js":[61133,11786,69692,36882,43589,79216,89437],"./leaflet.js":[48507,96259,23596,41263,36882,55378,93991,35701,49967,37161],"./openlayers.js":[434637,96259,18672,58493,52043,40353,47202,74738,29139,69141,10027,71584,38920,61332,76932,11704,72445,78471,8623,65604,24215,24548,36882,55378,13581,93546,6909,49005,3498,16037],"./sink.js":[871405,5442]};function o(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(o)))}o.keys=()=>Object.keys(n),o.id=243120,e.exports=o},921914:(e,t,r)=>{"use strict";r.d(t,{B1:()=>w,DW:()=>M,DZ:()=>p,E0:()=>l,F9:()=>f,Fm:()=>L,GI:()=>I,HP:()=>W,Ih:()=>u,JB:()=>H,LU:()=>k,MO:()=>te,Mc:()=>ne,Mn:()=>G,PM:()=>Q,Pg:()=>X,Pn:()=>a,Qu:()=>se,RA:()=>ie,Re:()=>O,TM:()=>z,TP:()=>ee,VB:()=>h,WU:()=>Y,XL:()=>o,XP:()=>U,X_:()=>y,Xp:()=>A,Xw:()=>c,Y$:()=>pe,ZF:()=>D,ZM:()=>ce,Zb:()=>F,Zw:()=>oe,aN:()=>B,am:()=>ue,cb:()=>T,e8:()=>s,fv:()=>N,g:()=>x,gG:()=>P,gc:()=>R,ih:()=>m,jL:()=>v,kT:()=>le,km:()=>i,lF:()=>j,lK:()=>J,mK:()=>q,oO:()=>re,oz:()=>g,pb:()=>b,ph:()=>_,qb:()=>d,sV:()=>C,sv:()=>$,u0:()=>V,wm:()=>ae,ws:()=>Z,xy:()=>E,zX:()=>S});var n=r(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",c="CHANGE_MAPINFO_STATE",a="NEW_MAPINFO_REQUEST",p="PURGE_MAPINFO_RESULTS",s="CHANGE_MAPINFO_FORMAT",l="SHOW_MAPINFO_MARKER",f="HIDE_MAPINFO_MARKER",y="SHOW_REVERSE_GEOCODE",b="HIDE_REVERSE_GEOCODE",d="GET_VECTOR_INFO",O="NO_QUERYABLE_LAYERS",m="CLEAR_WARNING",E="FEATURE_INFO_CLICK",v="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",h="IDENTIFY:CLICK_POINT",g="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",_="TOGGLE_MAPINFO_STATE",j="UPDATE_CENTER_TO_MARKER",P="IDENTIFY:CHANGE_PAGE",T="IDENTIFY:CLOSE_IDENTIFY",I="IDENTIFY:CHANGE_FORMAT",w="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",N="IDENTIFY:EDIT_LAYER_FEATURES",R="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",S="IDENTIFY:SET_MAP_TRIGGER",D="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",F="IDENTIFY:SET_SHOW_IN_MAP_POPUP",M="IDENTIFY:IDENTIFY_IS_MOUNTED",A="IDENTIFY:INIT_PLUGIN";function L(e,t,r,n,i){return{type:o,data:t,reqId:e,requestParams:r,layerMetadata:n,layer:i}}function C(e,t,r,n){return{type:i,error:t,reqId:e,requestParams:r,layerMetadata:n}}function G(e,t,r,n){return{type:u,reqId:e,exceptions:t,requestParams:r,layerMetadata:n}}function k(){return{type:O}}function U(){return{type:m}}function Y(e,t){return{type:a,reqId:e,request:t}}function H(e,t,r,n){return{type:d,layer:e,request:t,metadata:r,queryableLayers:n}}function q(e){return{type:c,enabled:e}}function x(){return{type:p}}function Z(e){return{type:s,infoFormat:e}}function W(){return{type:l}}function B(){return{type:f}}function K(e){return{type:y,reverseGeocodeData:e.data}}function X(e){return function(t){n.Z.reverseGeocode(e).then((function(e){t(K(e))})).catch((function(e){t(K(e))}))}}function V(){return{type:b}}function z(){return{type:_}}function Q(e){return{type:j,status:e}}function J(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:E,point:e,layer:t,filterNameList:r,overrideParams:n,itemId:o}}function $(e){return{type:v,point:e}}function ee(e){return{type:h,point:e}}function te(e){return{type:g,enabled:e}}function re(e){return{type:P,index:e}}var ne=function(){return{type:T}},oe=function(e){return{type:I,format:e}},ie=function(e){return{type:w,showCoordinateEditor:e}},ue=function(e){return{type:N,layer:e}},ce=function(e){return{type:R,query:e}},ae=function(e){return{type:S,trigger:e}},pe=function(e){return{type:F,value:e}},se=function(e){return{type:M,isMounted:e}},le=function(e){return{type:A,cfg:e}}},647310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(375875),o=r.n(n),i=r(472500),u=r.n(i),c=r(727418),a=r.n(c),p={format:"json",bounded:0,polygon_geojson:1,priority:5};const s={geocode:function(e,t){var r=a()({q:e},p,t||{}),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(e,t){var r=a()({lat:e.lat,lon:e.lng},t||{},p),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},461928:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var n=r(124852),o=r.n(n),i=r(675263),u=r.n(i),c=r(747037),a=r.n(c);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}var s=["impl","name"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function E(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(c,e);var t,r,n,i,u=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(n);if(i){var r=h(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return E(this,e)});function c(){var e;d(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return g(v(e=u.call.apply(u,[this].concat(r))),"getTool",(function(t){var r=e.props.plugins;return a()(t)?{name:t,impl:r.tools[t]}:b({name:t.name,impl:r.tools[t.name]},t)})),g(v(e),"renderLayers",(function(){var t=e.props.map&&e.props.map.projection||"EPSG:3857",r=e.props.plugins.Layer;return e.props.layers.map((function(n,i){return o().createElement(r,{type:n.type,srs:t,position:i,key:n.id||n.name,options:n,env:n.localizedLayerStyles?e.props.env:[]},e.renderLayerContent(n,t))}))})),g(v(e),"renderLayerContent",(function(t,r){if(t.features&&"vector"===t.type){var n=e.props.plugins.Feature;return t.features.map((function(e){return o().createElement(n,{key:e.id,msId:e.id,type:e.type,crs:r,geometry:e.geometry,features:e.features,featuresCrs:t.featuresCrs||"EPSG:4326",layerStyle:t.style,style:e.style||t.style||null,properties:e.properties})}))}return null})),g(v(e),"renderTools",(function(){return e.props.tools.map((function(t){var r=e.getTool(t),n=r.impl,i=r.name,u=f(r,s);return o().createElement(n,l({key:i},u))}))})),e}return t=c,(r=[{key:"render",value:function(){var e=this.props.plugins.Map,t=this.props.map&&this.props.map.projection||"EPSG:3857";return this.props.map&&e?o().createElement(e,l({projectionDefs:this.props.projectionDefs,style:this.props.styleMap,id:this.props.id,zoomControl:!1,center:{x:0,y:0},zoom:1,hookRegister:this.props.hookRegister,mapStateSource:this.props.mapStateSource||this.props.id},this.props.options,this.props.map,{projection:t},this.props.eventHandlers),this.renderLayers(),this.renderTools(),this.props.children):null}}])&&O(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o().Component);g(_,"propTypes",{id:u().string,options:u().object,map:u().object,mapStateSource:u().string,eventHandlers:u().object,styleMap:u().object,layers:u().array,hookRegister:u().object,projectionDefs:u().array,plugins:u().any,tools:u().array,getLayerProps:u().func,env:u().array}),g(_,"defaultProps",{id:"__base_map__",options:{},map:{},styleMap:{},tools:[],projectionDefs:[],eventHandlers:{onMapViewChanges:function(){},onClick:function(){},onMouseMove:function(){},onLayerLoading:function(){},onLayerError:function(){}},env:[]});const j=_},319180:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(124852),o=r.n(n),i=r(675263),u=r.n(i);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const O=function(e){var t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(m,t);var n,i,u,c,O=(u=m,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(u);if(c){var r=b(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function m(){var e;p(this,m);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return d(y(e=O.call.apply(O,[this].concat(r))),"state",{plugins:{}}),e}return n=m,(i=[{key:"componentDidMount",value:function(){this.setPlugins(this.props),this._isMounted=!0}},{key:"componentWillUpdate",value:function(e){e.mapType!==this.props.mapType&&this.setPlugins(e)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var t=this.state.plugins;return o().createElement(e,a({},this.props,{plugins:t}))}},{key:"setPlugins",value:function(e){var t=this;e.mapType&&r(243120)("./"+e.mapType+".js").then((function(e){t._isMounted&&(t.setState({plugins:e.default()}),t.props.onMapTypeLoaded())}))}}])&&s(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),m}(o().Component);return d(t,"propTypes",{mapType:u().string,onMapTypeLoaded:u().func}),d(t,"defaultProps",{onMapTypeLoaded:function(){}}),t.displayName="".concat(e.displayName,"WithMapType"),t}},925108:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(782904),o=r(727418),i=r.n(o),u=r(921914);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.kM:var r=t.property||"enabled";return i()({},e,p({},t.control,i()({},e[t.control],p({},r,!(e[t.control]||{})[r]))));case n.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?i()({},e,p({},t.control,i()({},e[t.control],p({},t.property,void 0)))):i()({},e,p({},t.control,i()({},e[t.control],p({},t.property,t.value))));case n.dc:return i()({},e,p({},t.control,i()({},e[t.control],t.properties)));case n.l:var o=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})),c=o.reduce((function(t,r){return i()(t,p({},r,i()({},e[r],!0===e[r].enabled?{enabled:!1}:{})))}),{});return i()({},e,c);case u.DW:return a(a({},e),{},{info:a(a({},e.info),{},{available:t.isMounted})});default:return e}}},100824:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(124852),o=r.n(n);const i=(0,n.forwardRef)((function(e,t){var r=e.enabled,n=e.className,i=e.children;return r?o().createElement("div",{ref:t,className:n||"gn-overlay-container",style:{position:"relative",height:"100%"}},i):null}))},228261:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(124852),o=r.n(n),i=r(675263),u=r.n(i),c=["id","className","style","children"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function p(e){var t=e.id,r=e.className,n=e.style,i=e.children,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,c),p=r?" "+r:"";return o().createElement(o().Fragment,null,o().createElement("div",a({},u,{id:t,className:"gn-spinner".concat(p),style:n}),o().createElement("div",null)),i)}p.propTypes={id:u().string,className:u().string,style:u().object},p.defaultProps={};const s=p},51605:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n.Z});var n=r(228261)}}]);