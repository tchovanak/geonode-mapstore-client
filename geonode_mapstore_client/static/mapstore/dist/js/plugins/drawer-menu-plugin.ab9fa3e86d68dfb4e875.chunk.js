(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[87177],{843614:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(727418),o=n.n(r),i=n(757588),a=n(461365);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function p(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(){return s(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"handleDialogClick",value:function(e){e.target===e.currentTarget&&this.props.onHide(e)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i.Modal);const y=o()((0,a.Z)(d),{Body:i.Modal.Body,Dialog:i.Modal.Dialog,Footer:i.Modal.Footer,Header:i.Modal.Header,Title:i.Modal.Title})},787011:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ye});var r=n(893379),o=n.n(r),i=n(840802);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=n(365544),c=n.n(a),s=n(727418),l=n.n(s),u=n(675263),p=n.n(u),f=n(124852),d=n.n(f),y=n(757588),b=n(171703),h=n(22222),m=n(782904),g=n(801550),v=n(815135),w=n(55105),O=n(506806),j=n(950966),P=n(101706),x=n(805346),E=n(282467);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}var C=["glyph","icon","buttonConfig"];function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},N(e,t)}function H(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},K(e)}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=K(r);if(o){var n=K(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function a(){var e;M(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return D(B(e=i.call.apply(i,[this].concat(n))),"getWidth",(function(){return e.props.dynamicWidth||e.props.width})),D(B(e),"renderChildren",(function(t,n){var r={key:t.key?t.key:n,ref:t.ref,open:e.props.activeKey&&e.props.activeKey===t.props.eventKey},o=t.props,i=(o.glyph,o.icon,o.buttonConfig,z(o,C));return d().createElement(t.type,T({},r,i))})),D(B(e),"renderButtons",(function(){return e.props.children.map((function(t){var n=d().createElement(E.Z,{key:t.props.eventKey,bsSize:"large",className:t.props.buttonConfig&&t.props.buttonConfig.buttonClassName?t.props.buttonConfig.buttonClassName:"square-button",onClick:e.props.onChoose.bind(null,t.props.eventKey,e.props.activeKey===t.props.eventKey),bsStyle:e.props.activeKey===t.props.eventKey?"default":"primary"},t.props.glyph?d().createElement(y.Glyphicon,{glyph:t.props.glyph}):t.props.icon);if(t.props.buttonConfig&&t.props.buttonConfig.tooltip){var r=d().createElement(y.Tooltip,{key:"tooltip."+t.props.eventKey,id:"tooltip."+t.props.eventKey},d().createElement(x.Z,{msgId:t.props.buttonConfig.tooltip}));return d().createElement(j.Z,{placement:"bottom",key:"overlay-trigger."+t.props.eventKey,overlay:r},n)}return n}))})),D(B(e),"renderContent",(function(){var t=e.props.single?d().createElement("div",{className:"navHeader",style:{width:"100%",minHeight:"35px"}},d().createElement(y.Glyphicon,{glyph:"1-close",className:"no-border btn-default",onClick:e.props.onToggle,style:{cursor:"pointer"}}),d().createElement("div",{className:"navButtons"},e.renderButtons())):d().createElement("div",{className:"navHeader",style:{width:"100%",minHeight:"35px"}},d().createElement("span",{className:"title"},e.props.title),d().createElement(y.Glyphicon,{glyph:"1-close",className:"no-border btn-default",onClick:e.props.onToggle,style:{cursor:"pointer"}})),n=d().createElement("div",{className:"nav-content"},t,d().createElement("div",{className:"nav-body"},e.props.children.filter((function(t){return!e.props.single||e.props.activeKey===t.props.eventKey})).map(e.renderChildren)));return e.props.resizable?d().createElement(P.Resizable,{axis:"x",resizeHandles:["e"],width:e.getWidth(),onResize:e.resize},n):n})),D(B(e),"resize",(function(t,n){var r=n.size;e.props.onResize(r.width)})),e}return t=a,(n=[{key:"componentDidMount",value:function(){if(!this.props.overlapMap&&this.props.show){var e={left:this.props.width,width:"calc(100% - ".concat(this.props.width,"px)")};this.props.changeMapStyle(e,"drawerMenu")}}},{key:"componentDidUpdate",value:function(e){if(!this.props.overlapMap&&e.show!==this.props.show){var t=this.props.show?{left:this.props.width,width:"calc(100% - ".concat(this.props.width,"px)")}:{};this.props.changeMapStyle(t,"drawerMenu")}}},{key:"render",value:function(){var e=this;return d().createElement(O.Z,{styles:{sidebar:_(_({},this.props.layout),{},{zIndex:1022,width:this.getWidth()}),overlay:{zIndex:1021},root:{right:this.props.show?0:"auto",width:"0",overflow:"visible"},content:{overflowY:"auto"}},sidebarClassName:"nav-menu",onSetOpen:function(){e.props.onToggle()},open:this.props.show,docked:this.props.docked,sidebar:this.renderContent()},d().createElement("div",null))}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d().Component);D(Z,"propTypes",{title:p().node,alignment:p().string,activeKey:p().string,docked:p().bool,show:p().bool,onToggle:p().func,onChoose:p().func,single:p().bool,width:p().number,dynamicWidth:p().number,overlapMap:p().bool,changeMapStyle:p().func,layout:p().object,resizable:p().bool,onResize:p().func}),D(Z,"defaultProps",{docked:!1,single:!1,width:300,overlapMap:!0,layout:{},resizable:!1,onResize:function(){}});const I=Z;var W=n(843614);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}function G(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return V(e)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=X(r);if(o){var n=X(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function a(){var e;L(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return J(V(e=i.call.apply(i,[this].concat(n))),"onHeaderClick",(function(){e.props.onHeaderClick(e.props.eventKey)})),J(V(e),"getHeight",(function(){return e.props.open&&e.refs.sectionContent?e.refs.sectionContent.scrollHeight+10:"0"})),e}return t=a,(n=[{key:"render",value:function(){var e={maxHeight:this.getHeight(),overflow:this.props.open?"auto":"hidden",padding:this.props.open?null:"0"};return d().createElement("div",{className:"section"},d().createElement("div",{className:"sectionHeader",style:{width:"100%"},onClick:this.onHeaderClick},this.props.renderInModal?null:d().createElement(y.Glyphicon,{glyph:"triangle-right",style:this.props.open?{transform:"rotate(90deg)"}:{}}),d().createElement("span",{className:this.headerClassName+" sectionTitle",ref:"sectionTitle"},this.props.header)),this.props.renderInModal?d().createElement(W.Z,{ref:"modal",show:this.props.open,onHide:this.onHeaderClick},d().createElement(W.Z.Header,{closeButton:!0},d().createElement(W.Z.Title,null,this.props.header)),d().createElement(W.Z.Body,null,this.props.children)):d().createElement("div",{ref:"sectionContent",className:"sectionContent",style:e},this.props.children))}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d().Component);J(U,"displayName","Section"),J(U,"propTypes",{key:p().string,eventKey:p().string,headerClassName:p().string,open:p().bool,onHeaderClick:p().func,renderInModal:p().bool,header:p().node}),J(U,"defaultProps",{headerClassName:"panel-heading"});const Y=U;var Q=n(481756);function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}function te(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function re(e,t){return re=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},re(e,t)}function oe(e,t){if(t&&("object"===$(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ie(e)}function ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ae(e){return ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ae(e)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var se=(0,v.Z)(E.Z),le=(0,h.P1)([function(e){return e.controls.drawer&&e.controls.drawer.enabled},function(e){return e.controls.drawer&&e.controls.drawer.menu||"1"},function(e){return e.controls.queryPanel&&e.controls.queryPanel.enabled&&e.controls.drawer&&e.controls.drawer.width||e.controls.drawer&&e.controls.drawer.resizedWidth||void 0},function(e){return(0,w.ic)(e,{height:!0})}],(function(e,t,n,r){return{show:e,activeKey:t,dynamicWidth:n,layout:r}})),ue=(0,b.connect)(le,{onToggle:m.Xi.bind(null,"drawer",null),onResize:m.Xg.bind(null,"drawer","resizedWidth"),onChoose:c()(m.Xg.bind(null,"drawer","menu"),!0),changeMapStyle:g.hd})(I),pe=(0,b.connect)((function(e){return{disabled:e.controls&&e.controls.drawer&&e.controls.drawer.disabled}}),{toggleMenu:m.Xi.bind(null,"drawer",null)})((function(e){var t=e.id,n=void 0===t?"":t,r=e.menuButtonStyle,o=void 0===r?{}:r,i=e.buttonStyle,a=void 0===i?"primary":i,c=e.buttonClassName,s=void 0===c?"square-button ms-drawer-menu-button":c,l=e.toggleMenu,u=void 0===l?function(){}:l,p=e.disabled,f=void 0!==p&&p,b=e.glyph,h=void 0===b?"1-layer":b,m=e.tooltipId,g=void 0===m?"toc.drawerButton":m,v=e.tooltipPosition,w=void 0===v?"bottom":v;return d().createElement(se,{id:n,style:o,bsStyle:a,key:"menu-button",className:s,onClick:u,disabled:f,tooltipId:g,tooltipPosition:w},d().createElement(y.Glyphicon,{glyph:h}))})),fe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&re(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ae(r);if(o){var n=ae(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return oe(this,e)});function a(){var e;te(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return ce(ie(e=i.call.apply(i,[this].concat(n))),"getTools",(function(){return e.props.items.map((function(e,t){return l()({},e,{position:e.position||t})})).sort((function(e,t){return e.position-t.position}))})),ce(ie(e),"renderItems",(function(){return e.getTools().map((function(t,n){var r=t.panel||t.plugin,o=d().createElement(r,ee({isPanel:!0},t.cfg,{items:t.items||[],groupStyle:{style:{marginBottom:"0px",cursor:"pointer"}}})),i=t.title?d().createElement("div",{className:"drawer-menu-head drawer-menu-head-"+t.name},d().createElement(Q.Z,{msgId:t.title})):null;return e.props.singleSection?d().createElement(y.Panel,{icon:t.icon,glyph:t.glyph,buttonConfig:t.buttonConfig,key:t.name,eventKey:n+1+"",header:i},o):d().createElement(Y,{key:t.name,renderInModal:t.renderInModal||!1,eventKey:n+1+"",header:i},o)}))})),e}return t=a,(n=[{key:"render",value:function(){return this.getTools().length>0?d().createElement("div",{id:this.props.id},d().createElement(pe,ee({},this.props,{id:"drawer-menu-button"})),d().createElement(ue,ee({single:this.props.singleSection},this.props.menuOptions,{title:d().createElement(Q.Z,{msgId:"menu"}),alignment:"left"}),this.renderItems())):null}}])&&ne(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d().Component);ce(fe,"propTypes",{items:p().array,active:p().string,toggleMenu:p().func,id:p().string,glyph:p().string,buttonStyle:p().string,menuOptions:p().object,singleSection:p().bool,buttonClassName:p().string,menuButtonStyle:p().object,disabled:p().bool}),ce(fe,"contextTypes",{messages:p().object,router:p().object}),ce(fe,"defaultProps",{id:"mapstore-drawermenu",items:[],toggleMenu:function(){},glyph:"1-layer",buttonStyle:"primary",menuOptions:{},singleSection:!0,buttonClassName:"square-button ms-drawer-menu-button",disabled:!1});var de=(0,b.connect)((function(e){return{active:e.controls&&e.controls.drawer&&e.controls.drawer.active,disabled:e.controls&&e.controls.drawer&&e.controls.drawer.disabled}}),{toggleMenu:m.Xi.bind(null,"drawer",null)})(fe);const ye={DrawerMenuPlugin:l()(de,{disablePluginIf:"{state('featuregridmode') === 'EDIT'}",FloatingLegend:{priority:1,name:"drawer-menu",button:pe}}),reducers:{}}},481756:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(171703),o=n(805346);const i=(0,r.connect)((function(e){return{locale:e.locale&&e.locale.currentLocale,messages:e.locale&&e.locale.messages||[]}}))(o.Z)},55105:(e,t,n)=>{"use strict";n.d(t,{Ss:()=>u,Nr:()=>p,ic:()=>f,Jz:()=>y,VM:()=>b,CF:()=>h});var r=n(91175),o=n.n(r),i=n(800827),a=n(552259);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e){return e.maplayout&&e.maplayout.layout||{}},p=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=u(e);return n&&Object.keys(n).filter((function(e){return t[e]})).reduce((function(e,t){return s(s({},e),{},l({},t,n[t]))}),{})||{}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=u(e),r=!!o()(t.filter((function(e){return n[e.key]})).map((function(e){return"not"===e.type?n[e.key]!==e.value&&n[e.key]:n[e.key]===e.value})));return r},y=function(e){return d(e,[{key:"right",value:658}])},b=function(e){return d(e,[{key:"bottom",value:30,type:"not"}])},h=function(e){var t=(0,i.Od)(e),n=p(e);return n&&t&&t.size&&{left:(0,a.parseLayoutValue)(n.left,t.size.width),bottom:(0,a.parseLayoutValue)(n.bottom,t.size.height),right:(0,a.parseLayoutValue)(n.right,t.size.width),top:(0,a.parseLayoutValue)(n.top,t.size.height)}}},840802:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(923645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"/* Menu Button */\n.msgapi .drawer-menu-button {\n    position: absolute;\n    z-index:1000;\n    left: 30px;\n    top: 8px;\n    width:30px;\n    background: transparent;\n    outline: none;\n    border: transparent;\n    font-size: 14px;\n}\n\n.msgapi .drawer-menu-button:hover {\n    background: transparent;\n}\n\n.msgapi #drawer-menu-button:active{\n    box-shadow: none;\n}\n\n.msgapi #mapstore-drawermenu > div > div:nth-child(2) {\n    display: none;\n}\n\n.msgapi .nav-content #background-switcher .thumbnail {\n    border-radius: 0 !important;\n    margin-bottom: 40px;\n    width: 220px !important;\n}\n.msgapi .nav-content #background-switcher .thumbnail img {\n    border-radius: 0 !important;\n    height: 90px;\n    width: 220px !important;\n}\n\n.msgapi .nav-content #background-switcher .thumbnail .caption {\n    font-size: 14px !important;\n    text-align: left !important;\n    top: -20px !important;\n    position: absolute !important;\n}\n\n.msgapi .nav-content #background-switcher {\n    margin-top: 10px;\n}\n\n.msgapi #mapstore-drawermenu .panel {\n    border: none;\n    box-shadow: none;\n}\n\n.msgapi div.nav-menu {\n    -webkit-transform:   translate3d(300px, 0, 0);\n    -moz-transform: \t translate3d(300px, 0, 0);\n    -ms-transform: \t\t translate3d(300px, 0, 0);\n    -o-transform: \t\t translate3d(300px, 0, 0);\n    box-shadow: 2px 0px 15px #A7A7A7;\n}\n\n.msgapi .nav-menu  .navHeader {\n    height: 50px;\n}\n.msgapi .nav-menu > .nav-content .navHeader .title{\n    font-size: 16px;\n    position: absolute;\n    margin: 13px;\n    font-weight: bold;\n}\n.msgapi .nav-content  .section {\n    margin-bottom: 2px;\n}\n.msgapi .nav-content  .section .sectionHeader{\n    padding: 5px;\n    cursor: pointer;\n}\n.msgapi .nav-content .section .sectionHeader>.glyphicon{\n    /* Firefox */\n    -moz-transition: all .3s ease;\n    /* WebKit */\n    -webkit-transition: all .3s ease;\n    /* Opera */\n    -o-transition: all .3s ease;\n    /* Standard */\n    transition: all .3s ease;\n}\n.msgapi .nav-content  .section .sectionTitle{\n    padding-left: 10px;\n\n}\n.msgapi .nav-content  .section .sectionContent{\n    -moz-transition: max-height .3s ease;\n    -webkit-transition: max-height .3s ease;\n    -o-transition: max-height .3s ease;\n    transition: max-height .3s ease;\n\n    box-shadow: inset 0px 0px 10px rgba(0,0,0,.5);\n    padding: 5px;\n}\n\n.msgapi .navButtons {\n    float: right;\n}\n\n.msgapi #drawer-menu-button {\n     position: absolute;\n}\n",""]);const i=o}}]);