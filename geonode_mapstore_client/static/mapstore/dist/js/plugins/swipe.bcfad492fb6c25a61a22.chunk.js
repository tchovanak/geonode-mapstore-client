"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6235],{965539:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(124852),o=n.n(r);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=function(e){var t=e.id,n=e.children,r=e.header,i=e.footer,a=e.columns,s=e.height,l=e.style,u=void 0===l?{}:l,p=e.className,d=e.bodyClassName,f=void 0===d?"ms2-border-layout-body":d;return o().createElement("div",{id:t,className:p,style:c({display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"hidden"},u)},r,o().createElement("div",{className:f,style:{display:"flex",flex:1,overflowY:"auto"}},o().createElement("main",{className:"ms2-border-layout-content",style:{flex:1,overflowX:"hidden"}},s?o().createElement("div",{style:{height:s}},n):n),s?o().createElement("div",{style:{height:s}},a):a),i)}},416919:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(124852),o=n.n(r),i=n(732833),c=n(965539),a=n(867076),s=n(757588),l=n(282467),u={bottom:{true:"chevron-down",false:"chevron-up"},top:{true:"chevron-up",false:"chevron-down"},right:{true:"chevron-right",false:"chevron-left"},left:{true:"chevron-left",false:"chevron-right"}};const p=function(e){var t=e.position,n=void 0===t?"right":t,r=e.onClose,i=e.bsStyle,c=void 0===i?"default":i,a=e.title,p=void 0===a?"":a,d=e.fullscreen,f=void 0!==d&&d,m=e.showFullscreen,v=void 0!==m&&m,y=e.glyph,g=void 0===y?"info-sign":y,h=e.additionalRows,b=e.onFullscreen,w=void 0===b?function(){}:b,E=r?o().createElement(l.Z,{key:"ms-header-close",className:"square-button ms-close",onClick:r,bsStyle:c},o().createElement(s.Glyphicon,{glyph:"1-close"})):null,S=v?o().createElement(l.Z,{key:"ms-header-glyph",className:"square-button",bsStyle:c,onClick:function(){return w(!f)}},o().createElement(s.Glyphicon,{glyph:u[n]&&u[n][f]||"resize-full"})):o().createElement("div",{key:"ms-header-glyph",className:"square-button ".concat("bg-"+c),style:{display:"flex"}},o().createElement(s.Glyphicon,{glyph:g,className:"".concat("default"===c?"text-primary":"")})),O="left"===n?[E,S]:[S,E];return o().createElement(s.Grid,{fluid:!0,style:{width:"100%"},className:"ms-header ms-"+c},o().createElement(s.Row,null,o().createElement(s.Col,{xs:2},O[0]),o().createElement(s.Col,{xs:8},o().createElement("h4",null,p)),o().createElement(s.Col,{xs:2},O[1])),h)},d=(0,a.withState)("fullscreen","onFullscreen",!1)((function(e){var t=e.fluid,n=e.className,r=void 0===n?"":n,a=e.fullscreen,s=void 0!==a&&a,l=e.position,u=e.open,d=e.size,f=void 0===d?550:d,m=e.style,v=void 0===m?{}:m,y=e.zIndex,g=void 0===y?1030:y,h=e.onClose,b=e.bsStyle,w=e.title,E=e.showFullscreen,S=void 0!==E&&E,O=e.glyph,P=e.header,j=e.footer,x=e.children,C=e.onFullscreen,I=void 0===C?function(){}:C,k=e.fixed,M=void 0!==k&&k,z=e.resizable,N=void 0!==z&&z,T=e.hideHeader;return o().createElement("div",{className:"ms-side-panel "+(M?"":"ms-absolute-dock ")+(N?"":"react-dock-no-resize ")+r},o().createElement(i.Z,{fluid:t||s,position:l,dimMode:"none",isVisible:u,size:s?1:f,dockStyle:v,zIndex:g},o().createElement(c.Z,{header:!T&&u&&o().createElement(p,{position:l,onClose:h,bsStyle:b,title:w,fullscreen:s,showFullscreen:S,glyph:O,additionalRows:P,onFullscreen:I}),footer:u&&j},u&&x)))}))},632107:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(124852),o=n.n(r),i=n(867076),c=n(965539),a=n(416919),s=n(694745),l=["children","header"];var u=(0,i.renameProps)({open:"show"})((function(e){var t=e.children,n=e.header,r=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,l);return o().createElement(s.Z,r,o().createElement(c.Z,{header:o().createElement("div",{className:"ms-header"},n)},t))}));const p=(0,i.branch)((function(e){return!e.dock}),(function(){return function(e){return o().createElement(u,e)}}))(a.Z)},822780:(e,t,n)=>{n.r(t),n.d(t,{Support:()=>re,default:()=>ce});var r=n(124852),o=n.n(r),i=n(171703),c=n(22222),a=n(675110),s=n(671314),l=n(727418),u=n.n(l),p="SWIPE:SET_ACTIVE",d="SWIPE:SET_MODE",f="SWIPE:SET_SWIPE_TOOL_DIRECTION",m="SWIPE:SET_SPY_TOOL_RADIUS";function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"active";return{type:p,active:e,prop:t}}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=n(49977),w=n.n(b),E=n(580416),S=n(275982);const O={resetLayerSwipeSettingsEpic:function(e,t){return e.ofType(E.c7).switchMap((function(e){var n=e.nodeType,r=t.getState();return(0,s.yn)(r).active&&"group"===n?w().Observable.of(v(!1)):w().Observable.empty()}))},deactivateSwipeToolOnSwitchMaps:function(e,t){return e.ofType(S.nk).switchMap((function(){return(0,s.yn)(t.getState()).active?w().Observable.of(v(!1)):w().Observable.empty()}))}};var P=n(322843),j=n(743129),x=n(185552),C=n.n(x),I=n(313311),k=n.n(I),M=n(805346),z=n(632107);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=[{label:"Horizontal",value:"cut-horizontal"},{label:"Vertical",value:"cut-vertical"}],Z=function(e){var t=e.spyModeSettings,n=e.onSetSpyToolRadius;return o().createElement("div",{className:"mapstore-swipe-settings-spy"},o().createElement("h4",null,o().createElement(M.Z,{msgId:"toc.radius"})),o().createElement("div",{className:"mapstore-slider with-tooltip"},o().createElement(C(),{tooltips:!0,step:10,start:[t.radius],range:{min:[20],max:[100]},onChange:function(e){return n(e[0])}})))},A=function(e){var t=e.swipeModeSettings,n=e.onSetSwipeToolDirection;return o().createElement("div",{className:"mapstore-swipe-settings-slider"},o().createElement("h4",null,o().createElement(M.Z,{msgId:"toc.direction"})),o().createElement(j.ZP,{styles:{menuPortal:function(e){return T(T({},e),{},{zIndex:3100})}},onChange:function(e){var t=e.value;return n(t)},clearable:!1,value:k()(D,["value",t.direction]),options:D}))},L=(0,c.P1)([s.yn,s.wQ,s.IY],(function(e,t,n){return{configuring:(null==e?void 0:e.configuring)||!1,toolMode:(null==e?void 0:e.mode)||"swipe",swipeModeSettings:t,spyModeSettings:n}}));const _=(0,i.connect)(L,{onSetConfigurationActive:v,onSetSwipeToolDirection:function(e){return{type:f,direction:e}},onSetSpyToolRadius:function(e){return{type:m,radius:e}}})((function(e){var t=e.configuring,n=e.toolMode,r=e.swipeModeSettings,i=e.spyModeSettings,c=e.onSetConfigurationActive,a=void 0===c?function(){}:c,s=e.onSetSpyToolRadius,l=void 0===s?function(){}:s,u=e.onSetSwipeToolDirection,p=void 0===u?function(){}:u;return o().createElement("div",{className:"mapstore-swipe-settings"},o().createElement(z.Z,{title:"spy"===n?o().createElement(M.Z,{msgId:"toc.spyconfiguration"}):o().createElement(M.Z,{msgId:"toc.swipeconfiguration"}),open:t,onClose:function(){return a(!1,"configuring")},enableFooter:!1,draggable:!0,size:"xs",bodyClassName:"mapstore-swipe-setiings-modal-body",dialogClassName:" mapstore-swipe-settings-modal",glyph:"transfer"},"spy"===n?o().createElement(Z,{spyModeSettings:i,onSetSpyToolRadius:l}):o().createElement(A,{swipeModeSettings:r,onSetSwipeToolDirection:p})))}));var G=n(757588),Y=n(485294),F=n.n(Y);const W=function(e){var t=e.map,n=e.layer,o=e.type,i=e.getWidth,c=e.getHeight,a=e.circleCutProp,s=(0,r.useCallback)((function(e){var n=e.context,r=i()*t.pixelRatio_;n.save(),n.beginPath(),n.rect(r,0,n.canvas.width-r,n.canvas.height),n.strokeStyle="rgba(0,0,0,0.5)",n.clip()}),[n,o]),l=(0,r.useCallback)((function(e){e.context.restore()}),[n,o]),u=(0,r.useCallback)((function(e){var n=e.context,r=c()*t.pixelRatio_;n.save(),n.beginPath(),n.rect(0,r,n.canvas.width,n.canvas.height-r),n.clip()}),[n,o]),p=(0,r.useCallback)((function(e){var t=e.context,n=e.frameState.pixelRatio;t.save(),t.beginPath();var r=a.getMousePosition();r&&(t.arc(r[0]*n,r[1]*n,a.radius*n,0,2*Math.PI),t.lineWidth=5*n,t.strokeStyle="rgba(0,0,0,0.5)",t.stroke()),t.clip()}),[n,o,a]);return(0,r.useEffect)((function(){var e=t.getLayers().getArray().filter((function(e){return e.get("msId")===n}))[0];if(e){switch(o){case"cut-vertical":!function(e,t,n){e.on("precompose",t),e.on("postcompose",n)}(e,s,l);break;case"cut-horizontal":!function(e,t,n){e.on("precompose",t),e.on("postcompose",n)}(e,u,l);break;case"circle":!function(e,t,n){e.on("precompose",t),e.on("postcompose",n)}(e,p,l)}return t.render(),function(){e.un("precompose",s),e.un("precompose",u),e.un("precompose",p),e.un("postcompose",l),t.render()}}return function(){return t.render()}}),[n,o,a]),null};function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Q=function(e){var t=e.type,n=e.map,i=e.widthRef,c=q((0,r.useState)(),2),a=c[0],s=c[1],l=q((0,r.useState)(!0),2),u=l[0],p=l[1],d=function(){s({x:0,y:0}),i.current=n.getProperties().size[0]/2};return(0,r.useEffect)((function(){return window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}}),[t]),(0,r.useEffect)((function(){i.current=n.getProperties().size[0]/2}),[t]),o().createElement(F(),{position:a,bounds:"parent",onStart:function(){return p(!1)},onDrag:function(e,t){return function(e,t){i.current+=t.deltaX,s({x:t.x,y:t.y}),n.render()}(0,t)},onStop:function(){return p(!0)}},o().createElement("div",{className:"mapstore-swipe-slider",style:{height:"100%",top:"0px",left:"".concat(n.getProperties().size[0]/2,"px"),width:"8px",cursor:"col-resize"}},u&&o().createElement("div",{className:"ms-vertical-swipe-slider-arrows",style:{top:"".concat(n.getProperties().size[1]/2-26,"px")}},o().createElement("div",{className:"ms-slider-arrows"},o().createElement(G.Glyphicon,{glyph:"chevron-left"})),o().createElement("div",{className:"ms-slider-arrows"},o().createElement(G.Glyphicon,{glyph:"chevron-right"})))))},V=function(e){var t=e.type,n=e.map,i=e.heightRef,c=q((0,r.useState)(),2),a=c[0],s=c[1],l=q((0,r.useState)(!0),2),u=l[0],p=l[1],d=function(){s({x:0,y:0}),i.current=n.getProperties().size[1]/2};return(0,r.useEffect)((function(){return window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}}),[t]),(0,r.useEffect)((function(){i.current=n.getProperties().size[1]/2}),[t]),o().createElement(F(),{position:a,bounds:"parent",onStart:function(){return p(!1)},onDrag:function(e,t){return function(e,t){i.current+=t.deltaY,s({x:t.x,y:t.y}),n.render()}(0,t)},onStop:function(){return p(!0)}},o().createElement("div",{className:"mapstore-swipe-slider",style:{height:"8px",top:"".concat(n.getProperties().size[1]/2,"px"),left:"0px",width:"100%",cursor:"row-resize"}},u&&o().createElement("div",{className:"ms-horizontal-swipe-slider-arrows",style:{left:"".concat(n.getProperties().size[0]/2-26,"px")}},o().createElement("div",{className:"ms-slider-arrows"},o().createElement(G.Glyphicon,{glyph:"chevron-up"})),o().createElement("div",{className:"ms-slider-arrows"},o().createElement(G.Glyphicon,{glyph:"chevron-down"})))))};const U=function(e){var t=e.map,n=e.layer,i=e.type,c=void 0===i?"cut-vertical":i,a=e.active,s=(0,r.useRef)(),l=(0,r.useRef)();return n&&a?o().createElement(o().Fragment,null,"cut-vertical"===c&&o().createElement(Q,{widthRef:l,map:t,type:c}),"cut-horizontal"===c&&o().createElement(V,{heightRef:s,map:t,type:c}),o().createElement(W,{map:t,layer:n,type:c,getWidth:function(){return l.current},getHeight:function(){return s.current}})):null},X=function(e){var t=e.layer,n=e.map,i=e.active,c=e.radius,a=(0,r.useRef)(),s=(0,r.useCallback)((function(e){a.current=n.getEventPixel(e),n.render()}),[t,c]),l=(0,r.useCallback)((function(){a.current=null,n.render()}),[t,c]);(0,r.useEffect)((function(){var e=n.getTargetElement();return e.addEventListener("mousemove",s),e.addEventListener("mouseout",l),function(){e.removeEventListener("mousemove",s),e.removeEventListener("mouseout",l)}}),[]);var u={radius:c,getMousePosition:function(){return a.current}};return t&&i?o().createElement(W,{map:n,layer:t,type:"circle",circleCutProp:u}):null};var B=n(675263),$=n.n(B);function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}var K=(0,n(815135).Z)(G.SplitButton),ee={title:o().createElement(G.Glyphicon,{glyph:"transfer"}),tooltipId:"toc.compareTool",tooltipPosition:"top",className:"square-button-md no-border",pullRight:!0},te=function(e){var t=e.swipeSettings,n=e.onSetActive,r=e.onSetSwipeMode,i=e.status;return o().createElement(K,J({onClick:function(){t.active||"LAYER"!==i?n(!1):n(!0)},bsStyle:null!=t&&t.active?"success":"primary"},ee),o().createElement(G.MenuItem,{active:"swipe"===(null==t?void 0:t.mode),onClick:function(){r("swipe"),n(!0)}},o().createElement(G.Glyphicon,{glyph:"vert-dashed"}),o().createElement(M.Z,{msgId:"toc.swipe"})),o().createElement(G.MenuItem,{active:"spy"===(null==t?void 0:t.mode),onClick:function(){r("spy"),n(!0)}},o().createElement(G.Glyphicon,{glyph:"search"}),o().createElement(M.Z,{msgId:"toc.spyGlass"})),o().createElement(G.MenuItem,{onClick:function(){t.configuring||"LAYER"!==i?n(!1,"configuring"):n(!0,"configuring")}},o().createElement(G.Glyphicon,{glyph:"cog"}),o().createElement(M.Z,{msgId:"toc.configureTool"})))};te.propTypes={swipeSettings:$().object,status:$().string,onSetActive:$().func,onSetSwipeMode:$().func},te.defaultProps={status:"LAYER",onSetSwipeMode:function(){},onSetActive:function(){}};const ne=te;var re=function(e){var t=e.mode,n=e.map,r=e.layer,i=e.active,c=e.swipeModeSettings,a=e.spyModeSettings;return"spy"===t?o().createElement(X,{map:n,layer:r,active:i,radius:a.radius}):o().createElement(U,{map:n,layer:r,active:i,type:c.direction})},oe=(0,c.P1)([a.Iz,s.yn,s.wQ,s.IY],(function(e,t,n,r){return{layer:null==e?void 0:e.id,active:t.active||!1,swipeModeSettings:n,spyModeSettings:r,mode:(null==t?void 0:t.mode)||"swipe"}})),ie=(0,i.connect)(oe,null)(re);const ce=(0,P.rx)("Swipe",{options:{disablePluginIf:"{state('mapType') === 'leaflet' || state('mapType') === 'cesium'}"},component:_,containers:{TOC:{name:"Swipe",target:"toolbar",selector:function(e){return"LAYER"===e.status},Component:(0,i.connect)((0,c.P1)(s.yn,(function(e){return{swipeSettings:e}})),{onSetActive:v,onSetSwipeMode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"swipe";return{type:d,mode:e}}})(ne)},Map:{name:"Swipe",Tool:ie}},reducers:{swipe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return u()({},e,h({},t.prop,t.active));case d:return u()({},e,{mode:t.mode});case f:var n=g(g({},e.swipe),{},{direction:t.direction});return u()({},e,{swipe:n});case m:var r=g(g({},e.spy),{},{radius:t.radius});return u()({},e,{spy:r});default:return e}}},epics:O})},671314:(e,t,n)=>{n.d(t,{IY:()=>o,wQ:()=>i,yn:()=>r});var r=function(e){return e.swipe&&e.swipe||{active:!1}},o=function(e){var t;return(null==e||null===(t=e.swipe)||void 0===t?void 0:t.spy)||{radius:80}},i=function(e){var t;return(null==e||null===(t=e.swipe)||void 0===t?void 0:t.swipe)||{direction:"cut-vertical"}}},819081:(e,t,n)=>{e.exports=n(1174)}}]);