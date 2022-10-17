"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2514],{757676:(e,t,r)=>{r.d(t,{HM:()=>o,Hz:()=>w,JU:()=>b,KI:()=>m,Lv:()=>i,M5:()=>j,Nb:()=>f,PQ:()=>v,Wb:()=>P,Xe:()=>p,Z7:()=>T,_V:()=>d,_e:()=>N,aA:()=>s,br:()=>l,cO:()=>u,cb:()=>g,iv:()=>a,kq:()=>y,lz:()=>O,m7:()=>h,p:()=>I,qx:()=>n,w:()=>S,w2:()=>E,y3:()=>c});var n="TIMELINE:SELECT_TIME",o=function(e,t,r,o){return{type:n,time:e,group:t,what:r,item:o}},i="TIMELINE:RANGE_CHANGE",c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.start,r=e.end;return{type:i,start:t,end:r}},a="TIMELINE:RANGE_DATA_LOADED",u=function(e,t,r,n){return{type:a,layerId:e,range:t,histogram:r,domain:n}},l="TIMELINE:LOADING",s=function(e,t){return{type:l,layerId:e,loading:t}},p="TIMELINE:INIT_SELECT_LAYER",f=function(e){return{type:p,layerId:e}},d="TIMELINE:SELECT_LAYER",y=function(e){return{type:d,layerId:e}},b="TIMELINE:ENABLE_OFFSET",v=function(e){return{type:b,enabled:e}},g="TIMELINE:AUTOSELECT",m=function(){return{type:g}},O="TIMELINE:SET_SNAP_TYPE",h=function(e){return{type:O,snapType:e}},P="TIMELINE:SET_END_VALUES_SUPPORT",w=function(e){return{type:P,endValuesSupport:e}},j="TIMELINE:SET_COLLAPSED",E=function(e){return{type:j,collapsed:e}},S="TIMELINE:SET_MAP_SYNC",T=function(e){return{type:S,mapSync:e}},I="TIMELINE:INIT_TIMELINE",N=function(e,t,r,n){return{type:I,showHiddenLayers:e,expandLimit:t,snapType:r,endValuesSupport:n}}},965539:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(124852),o=r.n(n);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u=function(e){var t=e.id,r=e.children,n=e.header,i=e.footer,a=e.columns,u=e.height,l=e.style,s=void 0===l?{}:l,p=e.className,f=e.bodyClassName,d=void 0===f?"ms2-border-layout-body":f;return o().createElement("div",{id:t,className:p,style:c({display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"hidden"},s)},n,o().createElement("div",{className:d,style:{display:"flex",flex:1,overflowY:"auto"}},o().createElement("main",{className:"ms2-border-layout-content",style:{flex:1,overflowX:"hidden"}},u?o().createElement("div",{style:{height:u}},r):r),u?o().createElement("div",{style:{height:u}},a):a),i)}},532425:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(675263),o=r.n(n),i=r(124852),c=r.n(i);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var t=e.size,r=e.style,n=void 0===r?{}:r,o=e.className,i=e.hidden;return c().createElement("div",{className:o,style:u({width:t,height:t,overflow:"hidden"},n)},!i&&c().createElement("div",{className:"mapstore-".concat(s(t),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const f=p},212610:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(124852),o=r.n(n),i=r(867076),c=r(957557),a=r.n(c),u=r(815135);const l=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,r=e.noTooltipWhenDisabled,n=void 0!==r&&r;return!(n&&t)}),u.Z,(function(e){return function(t){return o().createElement(e,a()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},617252:(e,t,r)=>{r.d(t,{Z:()=>O});var n=r(124852),o=r.n(n),i=r(867076),c=r(675263),a=r.n(c),u=r(957557),l=r.n(u),s=r(757588),p=r(950966);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function v(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const O=(0,i.branch)((function(e){return e.popover}),(function(e){var t;return t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(f,t);var r,n,c,a,u=(c=f,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(c);if(a){var r=g(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return v(this,e)});function f(){return d(this,f),u.apply(this,arguments)}return r=f,(n=[{key:"renderPopover",value:function(){return o().createElement(s.Popover,l()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,i.toClass)(e);return o().createElement(t,l()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(p.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&y(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),f}(o().Component),m(t,"propTypes",{popover:a().object}),m(t,"defaultProps",{popover:{trigger:!0}}),t}))},80717:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(124852),o=r.n(n),i=r(819081),c=r.n(i),a=r(757588),u=r(90085),l=["visible","Element","renderButton"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,r=void 0===t?[]:t,n=e.btnGroupProps,i=void 0===n?{}:n,f=e.btnDefaultProps,d=void 0===f?{}:f,y=e.transitionProps,b=void 0===y?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:y,v=function(){return r.map((function(e,t){var r=e.visible,n=void 0===r||r,i=e.Element,c=e.renderButton,a=p(e,l);return n?c||i&&o().createElement(i,s({key:a.key||t},a))||o().createElement(u.Z,s({key:a.key||t},d,a)):null}))};return o().createElement(a.ButtonGroup,i,b?o().createElement(c(),b,v()):v())}},90085:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(124852),o=r.n(n),i=r(867076),c=r(805346),a=r(957557),u=r.n(a),l=r(757588),s=r(532425),p=r(212610),f=r(617252),d=r(282467),y=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function v(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const g=(0,i.compose)(p.Z,f.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,r=e.loading,n=e.text,i=void 0===n?"":n,a=e.textId,p=e.glyphClassName,f=void 0===p?"":p,g=e.loaderProps,m=void 0===g?{}:g,O=e.children,h=v(e,y);return o().createElement(d.Z,u()(h,["pullRight","confirmNo","confirmYes"]),t&&!r?o().createElement(l.Glyphicon,{glyph:t,className:f}):null,a?o().createElement(c.Z,{msgId:a}):i,r?o().createElement(s.Z,b({className:"ms-loader".concat(h.bsStyle&&" ms-loader-"+h.bsStyle||"").concat(h.bsSize&&" ms-loader-"+h.bsSize||"")},m)):null,O)}))},469901:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ye});var n=r(124852),o=r.n(n),i=r(675263),c=r.n(i),a=r(171703),u=r(867076),l=r(22222),s=r(815135),p=r(757588),f=r(401757),d=r(557579),y=r(313311),b=r.n(y),v=r(630998),g=r.n(v),m=r(189734),O=r.n(m);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){return!e.dataGrid||!e.dataGrid.static},E=(0,l.P1)(f.zm,f.YR,f.yZ,f.lF,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return O()(e.filter(j).map((function(e){return g()(t,(function(t){return t===e.id}))>=0?P(P({},e),{},{collapsed:!0}):e})),(function(e){var t=n[e.id]&&n[e.id].layout,o=b()(r,{i:e.id})||t||{},i=o.x,c=void 0===i?0:i,a=o.y;return 100*(void 0===a?0:a)+c}))})),S=r(10473),T=(0,u.compose)((0,u.defaultProps)({toolsOptions:{seeHidden:"user.role===ADMIN"}}),(0,S.Z)("toolsOptions",{asObject:!0}),(0,u.withProps)((function(e){var t=e.widgets,r=e.toolsOptions;return{widgets:(void 0===r?{seeHidden:!1}:r).seeHidden?t:t.filter((function(e){return!e.hide}))}}))),I=r(965539),N=r(80717);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.widgetType,r=e.type,n=t&&"chart"!==t?t:r;switch(n){case"text":return"sheet";case"table":return"features-grid";case"pie":return"pie-chart";case"line":return"1-line";case"map":return"1-map";case"counter":return"counter";default:return"stats"}};const C=(0,u.compose)((0,u.withPropsOnChange)(["btnGroupProps"],(function(e){var t=e.btnGroupProps;return{btnGroupProps:x(x({},t),{},{className:"widgets-bar"+(t&&t.className?" ".concat(t.className):"")})}})),(0,u.withPropsOnChange)(["widgets","onClick"],(function(e){var t=e.widgets,r=void 0===t?[]:t,n=e.onClick,o=void 0===n?function(){}:n;return{buttons:r.map((function(e){return{glyph:_(e),tooltip:e.title,className:e.collapsed?"btn-tray":"btn-tray active",onClick:function(){return o(e)}}}))}})))(N.Z);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const Z=(0,u.compose)((0,a.connect)((0,l.P1)(E,(function(e){return{widgets:e}})),{onClick:d.f}),(0,u.defaultProps)({btnGroupProps:{className:"widgets-toolbar",style:{marginLeft:2,marginRight:2}}}),T,(0,u.withProps)((function(e){var t=e.btnGroupProps,r=void 0===t?{}:t,n=e.btnDefaultProps,o=void 0===n?{}:n;return{btnGroupProps:M({bsSize:"xsmall"},r),btnDefaultProps:M({bsSize:"xsmall"},o||{})}})))(C);var R=r(282467);function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}function B(e,t){if(t&&("object"===z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var H=(0,s.Z)(R.Z),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.expanded,r=e.onClick,n=void 0===r?function(){}:r;return o().createElement(H,{tooltipId:t?"widgets.tray.collapseTray":"widgets.tray.expandTray",bsSize:"xsmall",bsStyle:"default",style:{borderColor:"transparent"},onClick:n},o().createElement(p.Glyphicon,{glyph:t?"chevron-right":"chevron-left"}))},q=(0,u.compose)((0,a.connect)((0,l.P1)(f.E5,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{widgets:e}})),{onClick:function(){return(0,d.Ff)()}}),T,(0,u.withProps)((function(e){var t=e.widgets;return{shouldExpand:0===(void 0===t?[]:t).length}})))((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClick,r=void 0===t?function(){}:t,n=e.shouldExpand,i=void 0!==n&&n;return o().createElement(H,{tooltipId:i?"widgets.tray.expandAll":"widgets.tray.collapseAll",bsStyle:i?"primary":"success active",bsSize:"xsmall",onClick:r},o().createElement(p.Glyphicon,{glyph:"list"}))})),$=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(a,e);var t,r,n,i,c=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(n);if(i){var r=U(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return B(this,e)});function a(){return V(this,a),c.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){var e,t=this;return this.props.enabled?o().createElement("div",{className:"widgets-tray",style:{marginBottom:32,marginRight:80,bottom:0,right:0,position:"absolute"}},o().createElement(I.Z,{columns:[o().createElement(J,{key:"collapse-tray",toolsOptions:this.props.toolsOptions,expanded:this.props.expanded,onClick:function(){return t.props.setExpanded(!t.props.expanded)}}),o().createElement(q,{key:"collapse-all",toolsOptions:this.props.toolsOptions})].concat((e=this.props.items.map((function(e){return e.tool}))||[],function(e){if(Array.isArray(e))return G(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?G(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))},this.props.expanded?o().createElement(Z,{toolsOptions:this.props.toolsOptions}):null)):null}}])&&W(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);Y($,"propTypes",{enabled:c().bool,toolsOptions:c().object,items:c().array,expanded:c().bool,setExpanded:c().func}),Y($,"defaultProps",{enabled:!0,items:[],expanded:!1,setExpanded:function(){}});const K=(0,u.compose)((0,u.withState)("expanded","setExpanded",!1),(0,a.connect)((0,l.P1)(E,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{widgets:e}})),{toggleTray:d.ep}),T,(0,u.withProps)((function(e){var t=e.widgets,r=void 0===t?[]:t;return{hasCollapsedWidgets:r.filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.collapsed;return t})).length>0,hasTrayWidgets:r.length>0}})),(0,u.lifecycle)({componentDidMount:function(){this.props.toggleTray&&this.props.toggleTray(!0)},componentWillUnmount:function(){this.props.toggleTray&&this.props.toggleTray(!1)}}),(0,u.mapPropsStream)((function(e){return e.merge(e.distinctUntilKeyChanged("hasCollapsedWidgets").do((function(e){var t=e.setExpanded;return(void 0===t?function(){}:t)(e.hasCollapsedWidgets)})).ignoreElements())})),(0,u.withProps)((function(e){var t=e.enabled,r=e.hasTrayWidgets;return{enabled:t&&r}})))($);var X=r(154414),Q=r(49977),ee=r.n(Q),te=r(227361),re=r.n(te),ne=r(757676),oe=r(881808),ie=r(197395),ce=r(580416),ae=r(997291);function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(r),!0).forEach((function(t){se(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function se(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var pe=function(e){return((0,f.E5)(e)||[]).filter((function(e){return!re()(e,"dataGrid.static")})).length>0},fe=function(e){return function(t){return t.take(1).switchMap((function(){return ee().Observable.of((0,ie.um)(le(le({},e),{},{autoDismiss:8,position:"tr",uid:"timeline-collapsed"})))})).merge(t)}};const de={collapseTimelineOnWidgetsEvents:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return ee().Observable.merge(e.ofType(d.Ym,d.uU,oe.ok,d.$A,d.Jm).filter((function(){return pe(n())&&(0,ae.pn)(n())}))).switchMap((function(){return ee().Observable.of((0,ne.w2)(!0))})).let(fe({title:"widgets.tray.notifications.collapsed.timelineTitle",message:"widgets.tray.notifications.collapsed.message"}))},collapseWidgetsOnTimelineEvents:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return ee().Observable.merge(e.ofType(ne.M5).filter((function(e){return!e.collapsed})),e.ofType(ce.yS).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.newProperties,r=void 0===t?{}:t;return r.dimensions}))).filter((function(){return pe(n())&&(0,ae.qJ)(n())&&(0,ae.pn)(n())})).switchMap((function(){return ee().Observable.of((0,d.Ff)())})).let(fe({title:"widgets.tray.notifications.collapsed.widgetsTitle",message:"widgets.tray.notifications.collapsed.message"}))},expandTimelineIfCollapsedOnTrayUnmount:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(d.yY,d.$A,oe.ok).filter((function(){return!(0,ae.pn)(n())&&(0,ae.qJ)(n())})).filter((function(){return!pe(n())})).switchMap((function(){return ee().Observable.of((0,ne.w2)(!1))}))}},ye={WidgetsTrayPlugin:(0,X.Z)(K),epics:de}},154414:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(22222),o=r(171703),i=r(55105),c=r(93152);const a=(0,o.connect)((0,n.P1)(i.Jz,i.VM,c.c0,(function(e,t,r){return{enabled:!e&&!t&&!r}})))},10473:(e,t,r)=>{r.d(t,{Z:()=>P});var n=r(867076),o=r(171703),i=r(22222),c=r(800827),a=r(274621),u=r(227361),l=r.n(u),s=r(984596),p=r.n(s),f=r(66604),d=r.n(f),y=r(747037),b=r.n(y),v=r(701469),g=r.n(v);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=function e(t){var r=t.accessInfo,n=t.postProcessValue,o=t.reduceFun;return function(t){var i=p()(t),c=o;return i.length>1&&"__OR__"===i[0]&&(c=function(e,t){return e||t},i=i.slice(1)),i.map((function(t){var i=t;if(g()(i))return e({accessInfo:r,postProcessValue:n,reduceFun:o})(i);var c=!1;i&&b()(i)&&i.startsWith("!")&&(c=!0,i=i.substr(1));var a=function(e){return c?!e:e},u=b()(i)&&i.split(":");if(u&&u[0]){var s=u[0].split(/\!\=\=?/),p=u[0].split(/\=\=?\=?/);return s.length>1?a(n(l()(r,s[0]),i)!==s[1]):p.length>1?a(n(l()(r,p[0]),i)===p[1]):a(n(l()(r,u[0]),i))}return i})).reduce(c||function(e,t){return e&&t})}};const h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.asObject,o=void 0!==r&&r,i=t.postProcessValue,c=void 0===i?function(e){return e}:i,a=t.reduceFun,u=t.accessInfo,l=void 0===u?"accessInfo":u;return(0,n.withPropsOnChange)([e,l],(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m({},e,o?d()(t[e],O({accessInfo:t[l],postProcessValue:c,reduceFun:a})):O({accessInfo:t[l],postProcessValue:c,reduceFun:a})(t[e]))}))},P=function(){return(0,n.compose)((0,o.connect)((0,i.P1)(c.J9,c._H,a.np,(function(e,t,r){return{accessInfo:{mapId:e,mapInfo:t,user:r}}}))),h.apply(void 0,arguments))}},55105:(e,t,r)=>{r.d(t,{CF:()=>v,Jz:()=>y,Nr:()=>p,Ss:()=>s,VM:()=>b,ic:()=>f});var n=r(91175),o=r.n(n),i=r(800827),c=r(552259);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(e){return e.maplayout&&e.maplayout.layout||{}},p=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=s(e);return r&&Object.keys(r).filter((function(e){return t[e]})).reduce((function(e,t){return u(u({},e),{},l({},t,r[t]))}),{})||{}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=s(e),n=!!o()(t.filter((function(e){return r[e.key]})).map((function(e){return"not"===e.type?r[e.key]!==e.value&&r[e.key]:r[e.key]===e.value})));return n},y=function(e){return d(e,[{key:"right",value:658}])},b=function(e){return d(e,[{key:"bottom",value:30,type:"not"}])},v=function(e){var t=(0,i.Od)(e),r=p(e);return r&&t&&t.size&&{left:(0,c.parseLayoutValue)(r.left,t.size.width),bottom:(0,c.parseLayoutValue)(r.bottom,t.size.height),right:(0,c.parseLayoutValue)(r.right,t.size.width),top:(0,c.parseLayoutValue)(r.top,t.size.height)}}},819081:(e,t,r)=>{e.exports=r(1174)}}]);