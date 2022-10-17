"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[99955],{138108:(e,t,r)=>{r.r(t),r.d(t,{default:()=>z});var n=r(124852),o=r.n(n),i=r(675263),u=r.n(i),c=r(171703),s=r(22222),a=r(867076),l=r(322843),p=r(800827),f=r(401757),d=r(557579),y=r(10473),b=r(154414),h=r(691380),O=r(264945);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function P(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C=(0,a.compose)((0,c.connect)((0,s.P1)(p.J9,f.E5,f.p,f.Jb,f.h9,(function(e,t,r,n,o){return{id:e,widgets:t,layouts:r,maximized:n,dependencies:o}})),{editWidget:d.uT,updateWidgetProperty:d.Ij,exportCSV:d.sD,toggleCollapse:d.f,toggleMaximize:d.Pt,exportImage:d.Rb,deleteWidget:d.E9,onLayoutChange:d.c_}),(0,a.compose)((0,h.Gv)({debounceTime:20,closest:!0,querySelector:".fill"}),(0,h.ZY)({overrideWidthProvider:!1}),(0,a.withProps)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,r=e.height,n=e.maximized,o=r-120,i=4,u=Math.floor(o/i-20),c=null!=n&&n.widget?{width:"100%",height:"100%",marginTop:0,bottom:"auto",top:0,left:0,zIndex:1330}:{},s=null!=n&&n.widget?{width:t,useDefaultWidthProvider:!1,rowHeight:r-50,breakpoints:{xxs:0},cols:{xxs:1}}:{},a=t&&t>800?t-570:t-70,l=t?{width:a-1}:{};return _(_({rowHeight:u,className:"on-map",breakpoints:{md:480,xxs:0},cols:{md:6,xxs:1}},l),{},{useDefaultWidthProvider:!1,style:_({left:t&&t>800?"500px":"0",marginTop:52,bottom:65,height:Math.floor((r-100)/(u+10))*(u+10),width:a+"px",position:"absolute",zIndex:50},c)},s)}))),(0,a.compose)((0,a.defaultProps)({toolsOptions:{showPin:"user.role===ADMIN",seeHidden:"user.role===ADMIN",showHide:!1,showCollapse:!0,showMaximize:!0}}),(0,y.Z)("toolsOptions",{asObject:!0}),(0,a.compose)((0,c.connect)((0,s.P1)(f.Xu,(function(e){return{tray:e}}))),(0,a.withPropsOnChange)(["toolsOptions","tray"],(function(e){var t=e.toolsOptions,r=e.tray;return{toolsOptions:t?_(_({},t),{},{showCollapse:t.showCollapse&&r}):t}}))),(0,a.withPropsOnChange)(["widgets","toolsOptions"],(function(e){var t=e.widgets,r=void 0===t?[]:t,n=e.toolsOptions,o=void 0===n?{}:n;return{widgets:r.filter((function(e){return!e.hide||o.seeHidden}))}}))))(O.Z),I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(c,e);var t,r,n,i,u=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(n);if(i){var r=j(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return P(this,e)});function c(){return v(this,c),u.apply(this,arguments)}return t=c,(r=[{key:"render",value:function(){return this.props.enabled?o().createElement(C,this.props):null}}])&&m(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o().Component);k(I,"propTypes",{enabled:u().bool}),k(I,"defaultProps",{enabled:!0});var D=(0,b.Z)(I);const z=(0,l.rx)("WidgetsPlugin",{component:D,containers:{TOC:{doNotHide:!0,name:"Widgets"}},reducers:{widgets:r(875859).Z},epics:r(688395).ZP})},154414:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(22222),o=r(171703),i=r(55105),u=r(93152);const c=(0,o.connect)((0,n.P1)(i.Jz,i.VM,u.c0,(function(e,t,r){return{enabled:!e&&!t&&!r}})))},10473:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(867076),o=r(171703),i=r(22222),u=r(800827),c=r(274621),s=r(227361),a=r.n(s),l=r(984596),p=r.n(l),f=r(66604),d=r.n(f),y=r(747037),b=r.n(y),h=r(701469),O=r.n(h);function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function e(t){var r=t.accessInfo,n=t.postProcessValue,o=t.reduceFun;return function(t){var i=p()(t),u=o;return i.length>1&&"__OR__"===i[0]&&(u=function(e,t){return e||t},i=i.slice(1)),i.map((function(t){var i=t;if(O()(i))return e({accessInfo:r,postProcessValue:n,reduceFun:o})(i);var u=!1;i&&b()(i)&&i.startsWith("!")&&(u=!0,i=i.substr(1));var c=function(e){return u?!e:e},s=b()(i)&&i.split(":");if(s&&s[0]){var l=s[0].split(/\!\=\=?/),p=s[0].split(/\=\=?\=?/);return l.length>1?c(n(a()(r,l[0]),i)!==l[1]):p.length>1?c(n(a()(r,p[0]),i)===p[1]):c(n(a()(r,s[0]),i))}return i})).reduce(u||function(e,t){return e&&t})}};const m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.asObject,o=void 0!==r&&r,i=t.postProcessValue,u=void 0===i?function(e){return e}:i,c=t.reduceFun,s=t.accessInfo,a=void 0===s?"accessInfo":s;return(0,n.withPropsOnChange)([e,a],(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return g({},e,o?d()(t[e],v({accessInfo:t[a],postProcessValue:u,reduceFun:c})):v({accessInfo:t[a],postProcessValue:u,reduceFun:c})(t[e]))}))},w=function(){return(0,n.compose)((0,o.connect)((0,i.P1)(u.J9,u._H,c.np,(function(e,t,r){return{accessInfo:{mapId:e,mapInfo:t,user:r}}}))),m.apply(void 0,arguments))}},55105:(e,t,r)=>{r.d(t,{CF:()=>h,Jz:()=>y,Nr:()=>p,Ss:()=>l,VM:()=>b,ic:()=>f});var n=r(91175),o=r.n(n),i=r(800827),u=r(552259);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){return e.maplayout&&e.maplayout.layout||{}},p=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=l(e);return r&&Object.keys(r).filter((function(e){return t[e]})).reduce((function(e,t){return s(s({},e),{},a({},t,r[t]))}),{})||{}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=l(e),n=!!o()(t.filter((function(e){return r[e.key]})).map((function(e){return"not"===e.type?r[e.key]!==e.value&&r[e.key]:r[e.key]===e.value})));return n},y=function(e){return d(e,[{key:"right",value:658}])},b=function(e){return d(e,[{key:"bottom",value:30,type:"not"}])},h=function(e){var t=(0,i.Od)(e),r=p(e);return r&&t&&t.size&&{left:(0,u.parseLayoutValue)(r.left,t.size.width),bottom:(0,u.parseLayoutValue)(r.bottom,t.size.height),right:(0,u.parseLayoutValue)(r.right,t.size.width),top:(0,u.parseLayoutValue)(r.top,t.size.height)}}}}]);