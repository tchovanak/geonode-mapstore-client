(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[41604],{362520:(e,t,n)=>{"use strict";n.d(t,{dn:()=>r,Kn:()=>o,FV:()=>a});var r="MAP_LAYOUT:UPDATE_MAP_LAYOUT",o="MAP_LAYOUT:FORCE_UPDATE_MAP_LAYOUT";function a(e){return{type:r,layout:e}}},532425:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(45697),o=n.n(r),a=n(124852),u=n.n(a);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){return e>100?"full":e>40?"medium":"small"},f=function(e){var t=e.size,n=e.style,r=void 0===n?{}:n,o=e.className,a=e.hidden;return u().createElement("div",{className:o,style:i({width:t,height:t,overflow:"hidden"},r)},!a&&u().createElement("div",{className:"mapstore-".concat(s(t),"-size-loader")}))};f.propTypes={size:o().number,className:o().string,style:o().object};const p=f},993451:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(86638),o=n(45697),a=n.n(o),u=n(984596),c=n.n(u),i=n(701469),l=n.n(i),s=n(414293),f=n.n(s),p=n(747037),d=n.n(p),b=n(867076),y=["messages"];function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(l()(t))return t.map((function(o){var a=(0,r.S$)(e,o[n]||d()(o)&&o||"");return g(g({},o),{},O({},n,f()(a)?t:a))}));var o=(0,r.S$)(e,t);return f()(o)?t:o},j=function(e,t,n){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return g(g({},r),{},O({},o,e[o]&&h(t,e[o],n)))}};const w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,b.compose)((0,b.getContext)({messages:a().object}),(0,b.mapProps)((function(n){var r=n.messages,o=m(n,y);return g(g({},o),c()(e).reduce(j(o,r,t),{}))})))}},697111:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(124852),o=n.n(r),a=n(45697),u=n.n(a),c=n(23279),i=n.n(c);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const d=function(e,t){return function(n){function a(a){var u,c,l,d=(0,r.useRef)(),b=(c=(0,r.useState)(a[t]),l=2,function(e){if(Array.isArray(e))return e}(c)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],u=!0,c=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return a}}(c,l)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(c,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=b[0],m=b[1],v=(0,r.useRef)();v.current=y,(0,r.useEffect)((function(){v.current!==a[t]&&m(a[t])}),[a[t]]),(0,r.useEffect)((function(){return d.current=i()((function(t){var n=t.newProps,r=t.newValue;n[e](r)}),a.debounceTime),function(){d.current.cancel()}}),[a.debounceTime]);var g=s(s({},a),{},(f(u={},t,y),f(u,e,(function(e){m(e),d.current&&(d.current.cancel(),d.current({newProps:a,newValue:e}))})),u));return o().createElement(n,g)}return a.propTypes={debounceTime:u().number},a.defaultProps={debounceTime:300},a.displayName=n.displayName+"WithDebounceOnCallback",a}}},55105:(e,t,n)=>{"use strict";n.d(t,{Ss:()=>s,Nr:()=>f,ic:()=>p,Jz:()=>b,VM:()=>y,CF:()=>m});var r=n(91175),o=n.n(r),a=n(800827),u=n(552259);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){return e.maplayout&&e.maplayout.layout||{}},f=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=s(e);return n&&Object.keys(n).filter((function(e){return t[e]})).reduce((function(e,t){return i(i({},e),{},l({},t,n[t]))}),{})||{}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=s(e),r=!!o()(t.filter((function(e){return n[e.key]})).map((function(e){return"not"===e.type?n[e.key]!==e.value&&n[e.key]:n[e.key]===e.value})));return r},b=function(e){return d(e,[{key:"right",value:658}])},y=function(e){return d(e,[{key:"bottom",value:30,type:"not"}])},m=function(e){var t=(0,a.Od)(e),n=f(e);return n&&t&&t.size&&{left:(0,u.parseLayoutValue)(n.left,t.size.width),bottom:(0,u.parseLayoutValue)(n.bottom,t.size.height),right:(0,u.parseLayoutValue)(n.right,t.size.width),top:(0,u.parseLayoutValue)(n.top,t.size.height)}}},597610:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(124852);const o=function(e){var t=e.scrollContainer,n=e.shouldScroll,o=void 0===n?function(){return!0}:n,a=e.onLoad,u=e.offset,c=void 0===u?200:u,i=(0,r.useRef)({});i.current=function(){(t?t.scrollTop:document.body.scrollTop||document.documentElement.scrollTop)+(t?t.clientHeight:window.innerHeight)>=(t?t.scrollHeight:document.body.scrollHeight||document.documentElement.scrollHeight)-c&&o()&&a()},(0,r.useEffect)((function(){var e=t||window;function n(){i.current()}return e.addEventListener("scroll",n),function(){e.removeEventListener("scroll",n)}}),[t])}},811409:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>$});var r=n(124852),o=n.n(r),a=n(45697),u=n.n(a),c=n(322843),i=n(171703),l=n(757588),s=n(22222),f=n(805346),p=n(693473),d=n(957914),b=n(597610),y=n(799380),m=n(17594),v=n(51605),g=n(535721),O=n(580416),h=n(801550),j=n(782904),w=n(532425),P=n(362520),E=n(55105),S=n(737275),C=n(226735);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const D={gnUpdateDatasetsCatalogMapLayout:function(e,t){return e.ofType(P.dn,j.At).filter((function(){var e,n,r;return null===(e=t.getState())||void 0===e||null===(n=e.controls)||void 0===n||null===(r=n.datasetsCatalog)||void 0===r?void 0:r.enabled})).filter((function(e){return e.source!==C.O.PANEL})).map((function(e){var n=e.layout,r=(0,S.u8)("mapLayout")||{left:{sm:300,md:500,lg:600},right:{md:658},bottom:{sm:30}},o=(0,P.FV)(T(T(T({},(0,E.Ss)(t.getState())),n),{},{right:r.right.md,boundingMapRect:T(T({},(null==n?void 0:n.boundingMapRect)||{}),{},{right:r.right.md})}));return T(T({},o),{},{source:C.O.PANEL})}))}};var x=n(697111),N=n(993451),Z=["onChange","value"],L=["enabled"];function I(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||M(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],u=!0,c=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||M(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){if(e){if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function U(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var V=(0,N.Z)("placeholder")(l.FormControl),F=(0,x.Z)("onChange","value")((function(e){var t=e.onChange,n=e.value,r=U(e,Z);return o().createElement(V,_({},r,{value:n,onChange:function(e){return t(e.target.value)}}))}));function q(e){var t=e.request,n=e.responseToEntries,a=e.pageSize,u=e.style,c=e.placeholderId,i=e.onAdd,s=e.onClose,y=e.onZoomTo,O=(0,r.useRef)(),h=z((0,r.useState)([]),2),j=h[0],P=h[1],E=z((0,r.useState)(!1),2),S=E[0],C=E[1],A=z((0,r.useState)(1),2),T=A[0],k=A[1],D=z((0,r.useState)(!1),2),x=D[0],N=D[1],Z=z((0,r.useState)(""),2),L=Z[0],M=Z[1],R=(0,r.useRef)();(0,b.Z)({scrollContainer:O.current,shouldScroll:function(){return!S&&x},onLoad:function(){k(T+1)}});var _=(0,r.useRef)();return _.current=function(e){!S&&t&&(O.current&&e.reset&&(O.current.scrollTop=0),C(!0),t({q:L,page:e.page,pageSize:a}).then((function(t){if(R.current){var r=n(t);N(t.isNextPageAvailable),P(1===e.page?r:[].concat(I(j),I(r))),C(!1)}})).catch((function(){R.current&&C(!1)})))},(0,r.useEffect)((function(){return R.current=!0,function(){R.current=!1}}),[]),(0,r.useEffect)((function(){T>1&&_.current({page:T})}),[T]),(0,r.useEffect)((function(){k(1),_.current({page:1,reset:!0})}),[L]),o().createElement("div",{className:"gn-datasets-catalog",style:u},o().createElement("div",{className:"gn-datasets-catalog-head"},o().createElement("div",{className:"gn-datasets-catalog-title"},o().createElement(f.Z,{msgId:"gnviewer.datasetsCatalogTitle"})),o().createElement(p.Z,{className:"square-button",onClick:function(){return s()}},o().createElement(l.Glyphicon,{glyph:"1-close"}))),o().createElement("div",{className:"gn-datasets-catalog-filter"},o().createElement(F,{placeholder:c,value:L,debounceTime:300,onChange:function(e){return M(e)}}),L&&!S&&o().createElement(p.Z,{onClick:function(){return M("")}},o().createElement(m.Z,{name:"times"})),S&&o().createElement(v.Z,null)),o().createElement("div",{ref:O,className:"gn-datasets-catalog-body"},o().createElement("ul",{className:"gn-datasets-catalog-list"},j.map((function(e){return o().createElement("li",{key:e.pk},o().createElement(d.Z,{data:e,readOnly:!0,layoutCardsStyle:"list",onClick:function(){return function(e){var t,n,r=(0,g.tA)(e);i(r);var o,a=(null==r||null===(t=r.bbox)||void 0===t?void 0:t.bounds)||{},u=a.minx,c=a.miny,l=a.maxx,s=a.maxy,f=(null==r||null===(n=r.bbox)||void 0===n?void 0:n.bounds)&&[u,c,l,s];f&&y(f,null==r||null===(o=r.bbox)||void 0===o?void 0:o.crs)}(e)}}))})),0===j.length&&!S&&o().createElement("div",{className:"gn-datasets-catalog-alert"},o().createElement(f.Z,{msgId:"gnviewer.datasetsCatalogEntriesNoResults"})))),S&&0===j.length&&o().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(w.Z,{size:70})))}q.propTypes={request:u().func,responseToEntries:u().func,pageSize:u().number,onAdd:u().func,placeholderId:u().string,onClose:u().func,onZoomTo:u().func},q.defaultProps={request:y.EX,responseToEntries:function(e){return e.resources},pageSize:10,onAdd:function(){},placeholderId:"gnviewer.datasetsCatalogFilterPlaceholder",onZoomTo:function(){},onClose:function(){}};var H=(0,i.connect)((0,s.P1)([function(e){return(0,E.ic)(e,{height:!0})},function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t.datasetsCatalog)||void 0===n?void 0:n.enabled}],(function(e,t){return{style:e,enabled:t}})),{onAdd:O.A4,onClose:j.Xg.bind(null,"datasetsCatalog","enabled",!1),onZoomTo:h.Px})((function(e){var t=e.enabled,n=U(e,L);return t?o().createElement(q,n):null})),Y=(0,i.connect)((0,s.P1)([],(function(){return{}})),{onClick:j.Xg.bind(null,"datasetsCatalog","enabled",!0)})((function(e){var t=e.onClick,n=e.size,r=e.variant;return o().createElement(p.Z,{size:n,onClick:function(){t()},variant:r},o().createElement(f.Z,{msgId:"gnviewer.addLayer"}))}));const $=(0,c.rx)("DatasetsCatalog",{component:H,containers:{ActionNavbar:{name:"DatasetsCatalog",Component:Y}},epics:D,reducers:{}})},226735:(e,t,n)=>{"use strict";n.d(t,{O:()=>r});var r={PANEL:"PANEL"}},23279:(e,t,n)=>{var r=n(513218),o=n(707771),a=n(14841),u=Math.max,c=Math.min;e.exports=function(e,t,n){var i,l,s,f,p,d,b=0,y=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=i,r=l;return i=l=void 0,b=t,f=e.apply(r,n)}function O(e){return b=e,p=setTimeout(j,t),y?g(e):f}function h(e){var n=e-d;return void 0===d||n>=t||n<0||m&&e-b>=s}function j(){var e=o();if(h(e))return w(e);p=setTimeout(j,function(e){var n=t-(e-d);return m?c(n,s-(e-b)):n}(e))}function w(e){return p=void 0,v&&i?g(e):(i=l=void 0,f)}function P(){var e=o(),n=h(e);if(i=arguments,l=this,d=e,n){if(void 0===p)return O(d);if(m)return clearTimeout(p),p=setTimeout(j,t),g(d)}return void 0===p&&(p=setTimeout(j,t)),f}return t=a(t)||0,r(n)&&(y=!!n.leading,s=(m="maxWait"in n)?u(a(n.maxWait)||0,t):s,v="trailing"in n?!!n.trailing:v),P.cancel=function(){void 0!==p&&clearTimeout(p),b=0,i=d=l=p=void 0},P.flush=function(){return void 0===p?f:w(o())},P}},707771:(e,t,n)=>{var r=n(555639);e.exports=function(){return r.Date.now()}}}]);