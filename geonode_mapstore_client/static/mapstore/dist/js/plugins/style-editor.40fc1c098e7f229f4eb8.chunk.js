(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[91701],{398592:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>U});var o=r(701469),n=r.n(o),i=r(747037),l=r.n(i),s=r(727418),c=r.n(s),a=r(675263),u=r.n(a),p=r(124852),f=r.n(p),y=r(171703),d=r(867076),b=r(22222),h=r(580416),v=r(396909),g=r(615402),m=r(965539),S=r(982030),O=r(173014),w=r(532425),E=r(274621),j=r(893222),P=r(99009),C=r(278720);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function Z(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(c,e);var t,r,o,i,s=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(o);if(i){var r=x(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Z(this,e)});function c(){return T(this,c),s.apply(this,arguments)}return t=c,(r=[{key:"UNSAFE_componentWillMount",value:function(){var e=!this.props.editingAllowedRoles||n()(this.props.editingAllowedRoles)&&l()(this.props.userRole)&&-1!==this.props.editingAllowedRoles.indexOf(this.props.userRole);this.props.onInit(this.props.styleService,e&&(0,P.uW)(this.props.layer,this.props.styleService))}},{key:"render",value:function(){return f().createElement(m.Z,{className:"ms-style-editor-container",header:this.props.showToolbar?f().createElement("div",{className:"ms-style-editor-container-header"},this.props.header,f().createElement("div",{className:"text-center"},f().createElement(C.lC,{enableSetDefaultStyle:this.props.enableSetDefaultStyle}))):null,footer:f().createElement("div",{style:{height:25}})},this.props.isEditing?f().createElement(C.m2,{config:this.props.editorConfig}):f().createElement(C.tM,{showDefaultStyleIcon:this.props.canEdit&&this.props.enableSetDefaultStyle}))}}])&&I(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(f().Component);A(N,"propTypes",{layer:u().object,header:u().node,isEditing:u().bool,showToolbar:u().node.bool,onInit:u().func,styleService:u().object,userRole:u().string,editingAllowedRoles:u().array,enableSetDefaultStyle:u().bool,canEdit:u().bool,editorConfig:u().object}),A(N,"defaultProps",{layer:{},onInit:function(){},editingAllowedRoles:["ADMIN"],editorConfig:{}});var M=(0,d.compose)(d.toClass,(0,d.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.active;return!t}),(function(){return function(){return null}})),(0,y.connect)((0,b.P1)([j.ex,j.aN,j.Vf,j.p,E.L3,j.z_,j.Z0],(function(e,t,r,o,n,i,l){return{isEditing:"edit"===e,loading:t,layer:r,error:o,userRole:n,canEdit:i,styleService:l}})),{onInit:v.E0,onUpdateParams:h.Xy},(function(e,t,r){var o,n,i,l=(null===(o=r.styleService)||void 0===o?void 0:o.baseUrl)===(null===(n=e.styleService)||void 0===n?void 0:n.baseUrl)&&(null===(i=e.styleService)||void 0===i?void 0:i.isStatic),s=r.styleService&&!l?D(D({},r.styleService),{},{isStatic:!0}):D({},e.styleService);return D(D(D(D({},r),e),t),{},{styleService:s})})),(0,S.Z)((function(e){var t=e.error;return!!(null!=t&&t.availableStyles||null!=t&&t.global||null!=t&&t.parsingCapabilities)}),(function(e){var t=e.error;return{glyph:"exclamation-mark",title:f().createElement(g.Z,{msgId:"styleeditor.errorTitle"}),description:f().createElement(g.Z,{msgId:((null==t?void 0:t.availableStyles)?"styleeditor.missingAvailableStylesMessage":(null==t?void 0:t.parsingCapabilities)&&"styleeditor.parsingCapabilitiesError")||(null==t?void 0:t.global)&&"styleeditor.globalError"}),style:{display:"flex",width:"100%",height:"100%",overflow:"hidden"},mainViewStyle:{margin:"auto",width:300}}})),(0,O.Z)((function(e){return"global"===e.loading}),{size:150,style:{margin:"auto"}},(function(e){return f().createElement("div",{style:{position:"relative",height:"100%",display:"flex"}},f().createElement(w.Z,e))})),(0,d.compose)((0,y.connect)((function(){return{}}),{toggleStyleEditor:v.Wv}),(0,d.lifecycle)({componentDidMount:function(){this.props.toggleStyleEditor(null,!0)}})))(N);const U={StyleEditorPlugin:c()(M,{TOC:{priority:1,container:"TOCItemSettings"},TOCItemsSettings:{name:"StyleEditor",target:"style",priority:1,ToolbarComponent:C.lC}}),reducers:{styleeditor:r(532244).Z},epics:r(394943).ZP}}}]);