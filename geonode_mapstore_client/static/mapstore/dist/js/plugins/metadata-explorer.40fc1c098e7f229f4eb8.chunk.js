(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[48216,19081],{647310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(375875),o=r.n(n),i=r(472500),c=r.n(i),u=r(727418),a=r.n(u),l={format:"json",bounded:0,polygon_geojson:1,priority:5};const s={geocode:function(e,t){var r=a()({q:e},l,t||{}),n=c().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(e,t){var r=a()({lat:e.lat,lon:e.lng},t||{},l),n=c().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},615402:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(675263),o=r.n(n),i=r(124852),c=r.n(i);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function f(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=r(868195).FormattedHTMLMessage,d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(n);if(o){var r=p(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function u(){return a(this,u),i.apply(this,arguments)}return t=u,(r=[{key:"render",value:function(){return this.context.intl?c().createElement(b,{id:this.props.msgId,values:this.props.msgParams}):c().createElement("span",null,this.props.msgId||"")}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(c().Component);y(d,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),y(d,"contextTypes",{intl:o().object});const m=d},965539:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(124852),o=r.n(n);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const a=function(e){var t=e.id,r=e.children,n=e.header,i=e.footer,u=e.columns,a=e.height,l=e.style,s=void 0===l?{}:l,f=e.className,p=e.bodyClassName,y=void 0===p?"ms2-border-layout-body":p;return o().createElement("div",{id:t,className:f,style:c({display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"hidden"},s)},n,o().createElement("div",{className:y,style:{display:"flex",flex:1,overflowY:"auto"}},o().createElement("main",{className:"ms2-border-layout-content",style:{flex:1,overflowX:"hidden"}},a?o().createElement("div",{style:{height:a}},r):r),a?o().createElement("div",{style:{height:a}},u):u),i)}},532425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(675263),o=r.n(n),i=r(124852),c=r.n(i);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(e){return e>100?"full":e>40?"medium":"small"},f=function(e){var t=e.size,r=e.style,n=void 0===r?{}:r,o=e.className,i=e.hidden;return c().createElement("div",{className:o,style:a({width:t,height:t,overflow:"hidden"},n)},!i&&c().createElement("div",{className:"mapstore-".concat(s(t),"-size-loader")}))};f.propTypes={size:o().number,className:o().string,style:o().object};const p=f},82110:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(124852),o=r.n(n),i=r(496259),c=r(532425);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const s=function(e){var t=e.width,r=e.height,n=e.className,u=void 0===n?"loader-container":n,l=e.contentStyle,s=void 0===l?{}:l;return o().createElement("div",{className:u},o().createElement(i.Z,null,(function(e){var n=e.width,i=void 0===n?200:n,u=e.height,l=void 0===u?200:u,f=t||(l>0?Math.min(i,l):i),p=r||(l>0?Math.min(i,l):i),y=Math.min(f,p);return o().createElement(c.Z,{size:y,style:a({padding:y/10,margin:"auto",display:"flex"},s)})})))}},212610:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(124852),o=r.n(n),i=r(867076),c=r(957557),u=r.n(c),a=r(815135);const l=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,r=e.noTooltipWhenDisabled,n=void 0!==r&&r;return!(n&&t)}),a.Z,(function(e){return function(t){return o().createElement(e,u()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},617252:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(124852),o=r.n(n),i=r(867076),c=r(675263),u=r.n(c),a=r(957557),l=r.n(a),s=r(757588),f=r(950966);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function m(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const O=(0,i.branch)((function(e){return e.popover}),(function(e){var t;return t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(p,t);var r,n,c,u,a=(c=p,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(c);if(u){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return m(this,e)});function p(){return y(this,p),a.apply(this,arguments)}return r=p,(n=[{key:"renderPopover",value:function(){return o().createElement(s.Popover,l()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,i.toClass)(e);return o().createElement(t,l()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(f.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&b(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),p}(o().Component),h(t,"propTypes",{popover:u().object}),h(t,"defaultProps",{popover:{trigger:!0}}),t}))},145869:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(124852),o=r.n(n),i=r(675263),c=r.n(i);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function f(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(u,e);var t,r,n,i,c=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(n);if(i){var r=p(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function u(){return a(this,u),c.apply(this,arguments)}return t=u,(r=[{key:"render",value:function(){var e=this;return o().createElement("label",{className:"mapstore-switch-btn ".concat(this.props.className)},o().createElement("input",{type:"checkbox",disabled:this.props.disabled,checked:this.props.checked,onChange:function(){return e.props.onChange(!e.props.checked)}}),o().createElement("span",{onClick:function(){return e.props.onClick(!e.props.checked)},className:"m-slider"}))}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component);y(b,"propTypes",{disabled:c().bool,className:c().string,checked:c().bool,onChange:c().func,onClick:c().func}),y(b,"defaultProps",{className:"",checked:!1,onChange:function(){},onClick:function(){}});const d=b},80717:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(124852),o=r.n(n),i=r(819081),c=r.n(i),u=r(757588),a=r(90085),l=["visible","Element","renderButton"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,r=void 0===t?[]:t,n=e.btnGroupProps,i=void 0===n?{}:n,p=e.btnDefaultProps,y=void 0===p?{}:p,b=e.transitionProps,d=void 0===b?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:b,m=function(){return r.map((function(e,t){var r=e.visible,n=void 0===r||r,i=e.Element,c=e.renderButton,u=f(e,l);return n?c||i&&o().createElement(i,s({key:u.key||t},u))||o().createElement(a.Z,s({key:u.key||t},y,u)):null}))};return o().createElement(u.ButtonGroup,i,d?o().createElement(c(),d,m()):m())}},90085:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(867076),c=r(805346),u=r(957557),a=r.n(u),l=r(757588),s=r(532425),f=r(212610),p=r(617252),y=r(282467),b=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const v=(0,i.compose)(f.Z,p.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,r=e.loading,n=e.text,i=void 0===n?"":n,u=e.textId,f=e.glyphClassName,p=void 0===f?"":f,v=e.loaderProps,h=void 0===v?{}:v,O=e.children,g=m(e,b);return o().createElement(y.Z,a()(g,["pullRight","confirmNo","confirmYes"]),t&&!r?o().createElement(l.Glyphicon,{glyph:t,className:p}):null,u?o().createElement(c.Z,{msgId:u}):i,r?o().createElement(s.Z,d({className:"ms-loader".concat(g.bsStyle&&" ms-loader-"+g.bsStyle||"").concat(g.bsSize&&" ms-loader-"+g.bsSize||"")},h)):null,O)}))},23279:(e,t,r)=>{var n=r(513218),o=r(707771),i=r(14841),c=Math.max,u=Math.min;e.exports=function(e,t,r){var a,l,s,f,p,y,b=0,d=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=a,n=l;return a=l=void 0,b=t,f=e.apply(n,r)}function O(e){return b=e,p=setTimeout(j,t),d?h(e):f}function g(e){var r=e-y;return void 0===y||r>=t||r<0||m&&e-b>=s}function j(){var e=o();if(g(e))return w(e);p=setTimeout(j,function(e){var r=t-(e-y);return m?u(r,s-(e-b)):r}(e))}function w(e){return p=void 0,v&&a?h(e):(a=l=void 0,f)}function P(){var e=o(),r=g(e);if(a=arguments,l=this,y=e,r){if(void 0===p)return O(y);if(m)return clearTimeout(p),p=setTimeout(j,t),h(y)}return void 0===p&&(p=setTimeout(j,t)),f}return t=i(t)||0,n(r)&&(d=!!r.leading,s=(m="maxWait"in r)?c(i(r.maxWait)||0,t):s,v="trailing"in r?!!r.trailing:v),P.cancel=function(){void 0!==p&&clearTimeout(p),b=0,a=y=l=p=void 0},P.flush=function(){return void 0===p?f:w(o())},P}},435161:(e,t,r)=>{var n=r(829932),o=r(267206),i=r(269199),c=r(701469);e.exports=function(e,t){return(c(e)?n:i)(e,o(t,3))}},707771:(e,t,r)=>{var n=r(555639);e.exports=function(){return n.Date.now()}},819081:(e,t,r)=>{"use strict";e.exports=r(1174)}}]);