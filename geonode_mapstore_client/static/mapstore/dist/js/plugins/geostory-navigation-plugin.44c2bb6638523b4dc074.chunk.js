(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[98710],{81593:(t,e,n)=>{"use strict";n.d(e,{Z:()=>d});var r=n(124852),o=n(945338);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,e)||l(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const d=function(t){var e=t.direction,n=void 0===e?"horizontal":e,i=t.deltaScroll,l=t.width,f=t.height,d=t.transition,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],v=(0,r.useState)(0),m=s(v,2),y=m[0],h=m[1],g=(0,r.useState)(0),b=s(g,2),w=b[0],S=b[1],O=(0,r.useRef)({x:0,y:0}),E=(0,r.useState)(!1),P=s(E,2),C=P[0],j=P[1],T=(0,r.useState)("start"),k=s(T,2),I=k[0],D=k[1],x=(0,r.useState)(),M=s(x,2),N=M[0],A=M[1],R=(0,r.useRef)(),U=(0,r.useRef)({});function _(t,e){A("move:start");var r=R.current,o=r.parentNode,i=r.getBoundingClientRect(),a=o.getBoundingClientRect();if("horizontal"===n){var c=t+i.width;t<0&&c>a.width?(h(t),O.current.x=t,D("center")):t>=0?(h(0),O.current.x=0,D("start")):c<=a.width&&(h(a.width-i.width),O.current.x=a.width-i.width,D("end"))}if("vertical"===n){var u=e+i.height;e<0&&u>a.height?(S(e),O.current.y=e,D("center")):e>=0?(S(0),O.current.y=0,D("start")):u<=a.height&&(S(a.height-i.height),O.current.y=a.height-i.height,D("end"))}setTimeout((function(){A("move:end")}),d)}function L(t){_(y+t,w+t)}function Z(){var t=R.current,e=t.parentNode,r=t.getBoundingClientRect(),o=e.getBoundingClientRect();return!("horizontal"===n&&o.width>=r.width||"vertical"===n&&o.height>=r.height)}(0,r.useEffect)((function(){function t(t){t.preventDefault();var e=Z();return j(Z()),e?_(O.current.x-(t.deltaY>0?i:-i),O.current.y-(t.deltaY>0?i:-i)):null}var e=Z();j(e);var n=R.current.parentNode;return e&&_(O.current.x,O.current.y),e&&n&&n.addEventListener&&n.addEventListener("wheel",t),function(){e&&n&&n.removeEventListener&&n.removeEventListener("wheel",t)}}),[l,f].concat(u(p)));var z=(0,o.QS)({onSwiping:function(t){t.event.stopPropagation();var e=Z();return j(Z()),e?_(y-t.deltaX*t.velocity,w-t.deltaY*t.velocity):null},trackTouch:!0,trackMouse:!0});function B(t,e){U.current=a(a({},U.current),{},c({},t,e))}function H(t){var e=U.current[t];if(e){var r=R.current,o=(r&&r.parentNode).getBoundingClientRect(),i=e.getBoundingClientRect();if("horizontal"===n){var a=o.width,c=o.left,u=i.width,s=i.left,l=c+a,f=s+u;return c<=s&&l>=s||c<=f&&l>=f}}return!1}function Y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.margin,o=void 0===r?0:r,i=U.current[t];if(i){var a=R.current,c=a&&a.parentNode,u=c.getBoundingClientRect(),s=i.getBoundingClientRect();if("horizontal"===n){var l=u.width,f=u.left,d=s.width,p=s.left,v=f+l,m=p+d,y=f<=p&&v>=m;if(!y){var h=a.getBoundingClientRect(),g=h.left;_(-(p-g)+o,void 0)}}}}var F=C&&("end"===I||"center"===I),q=C&&("start"===I||"center"===I);return{status:N,canSwipe:C,isStartControlActive:F,isEndControlActive:q,positionLabel:I,coordinates:{x:y,y:w},containerPropsHandlers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.style,n=void 0===e?{}:e;return a(a({},z),{},{style:a({position:"relative",overflow:"hidden",width:"100%",height:"100%"},n)})},contentPropsHandlers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.style,r=void 0===e?{}:e;return{ref:R,style:a(a(a(a({position:"absolute",display:"flex"},d&&{transition:"transform ".concat(d,"ms ease 0s")}),{},{flexDirection:"horizontal"===n?"row":"column"},C&&"horizontal"===n&&{transform:"translateX(".concat(y,"px)")}),C&&"vertical"===n&&{transform:"translateY(".concat(w,"px)")}),r)}},itemPropsHandlers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.id,n=t.onClick;return a({key:e,ref:function(t){return t&&B(e,t)}},n?{onClick:n,tabindex:H(e)?0:-1,onKeyDown:function(t){"Enter"===t.key&&n()}}:{tabindex:-1})},updateCoordinates:_,moveItemInViewById:Y,moveToDeltaSize:L}}},126538:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>$});var r=n(124852),o=n.n(r),i=n(171703),a=n(22222),c=n(322843),u=n(192579),s=n(866113),l=n(324684),f=n(166190),d=n(80717),p=n(757588),v=n(23279),m=n.n(v),y=n(81593),h=n(580628),g=n(282467);function b(){return b=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},b.apply(this,arguments)}var w=function(t){var e=t.tabindex,n=t.text,r=t.selected,i=t.style;return o().createElement(g.Z,{tabindex:e,className:"".concat(r?"active":"btn-tray"," btn-xs btn-default"),style:i},n)};const S=(0,h.Z)((function(t){var e=t.currentPage,n=t.items,i=t.scrollTo,a=void 0===i?function(){}:i,c=t.width,s=t.height,l=t.deltaSwipeSize,f=void 0===l?200:l,d=t.transition,v=void 0===d?300:d,h=t.updateTimeDebounceTime,S=void 0===h?500:h,O=t.getItemStyle,E=void 0===O?function(){return{}}:O,P=(0,y.Z)({direction:"horizontal",width:c,height:s,transition:v,deltaScroll:f}),C=P.isStartControlActive,j=P.isEndControlActive,T=P.containerPropsHandlers,k=P.contentPropsHandlers,I=P.itemPropsHandlers,D=P.moveToDeltaSize,x=P.moveItemInViewById,M=e&&e.columns&&e.sectionId&&e.columns[e.sectionId]||e&&e.sectionId,N=function(t,n,r){return r===u.ID.CAROUSEL?e&&e.sectionId===t:n===t},A=(0,r.useRef)(null);return(0,r.useEffect)((function(){return A.current=m()((function(t){x(t,{margin:32})}),S),function(){A.current&&(A.current.cancel(),A.current=null)}}),[]),(0,r.useEffect)((function(){A.current&&(A.current.cancel(),A.current(M))}),[M]),o().createElement("div",b({},T(),{className:"ms-horizontal-menu"}),o().createElement("div",k(),n.map((function(t){var n=t.title,r=t.id,i=t.type,c=I({id:r,onClick:function(){e&&e.sectionId!==r&&a(r)}});return o().createElement("div",b({},c,{className:"ms-menu-item"}),o().createElement(w,{tabindex:"-1",id:r,text:n||"title",selected:N(r,M,i),style:E(N(r,M,i))}))}))),C&&o().createElement(g.Z,{className:"square-button-md no-border",style:{position:"absolute"},onClick:function(){return D(f)}},o().createElement(p.Glyphicon,{glyph:"chevron-left"})),j&&o().createElement(g.Z,{className:"square-button-md no-border",style:{position:"absolute",right:0},onClick:function(){return D(-f)}},o().createElement(p.Glyphicon,{glyph:"chevron-right"})))}));var O=n(45697),E=n.n(O),P=n(950966),C=n(805346),j=n(694745),T=n(227361),k=n.n(T),I=n(478718),D=n.n(I),x=n(737275);function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}var N=["tooltipPosition"];function A(){return A=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},A.apply(this,arguments)}function R(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function L(t,e){if(e&&("object"===M(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Z(t)}function Z(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function z(t){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},z(t)}function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var H=function(){var t=x.ZP.getConfigProp("miscSettings");return k()(t,["homePath"],"/")},Y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(c,t);var e,n,r,i,a=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=z(r);if(i){var n=z(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return L(this,t)});function c(){var t;R(this,c);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return B(Z(t=a.call.apply(a,[this].concat(n))),"checkUnsavedChanges",(function(){t.props.renderUnsavedMapChangesDialog?t.props.onCheckMapChanges(t.goHome):(t.props.onCloseUnsavedDialog(),t.goHome())})),B(Z(t),"goHome",(function(){t.context.router.history.push(H())})),t}return e=c,(n=[{key:"render",value:function(){var t=this.props,e=t.tooltipPosition,n=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,N),r=o().createElement(p.Tooltip,{id:"toolbar-home-button"},o().createElement(C.Z,{msgId:"gohome"}));return o().createElement(o().Fragment,null,o().createElement(P.Z,{overlay:r,placement:e},o().createElement(g.Z,A({id:"home-button",className:"square-button",bsStyle:"primary",onClick:this.checkUnsavedChanges,tooltip:r},D()(n,["disabled","active","block","componentClass","href","children","icon","bsStyle","className"])),o().createElement(p.Glyphicon,{glyph:this.props.icon}))),o().createElement(j.Z,{ref:"unsavedMapModal",show:this.props.displayUnsavedDialog||!1,onClose:this.props.onCloseUnsavedDialog,title:o().createElement(C.Z,{msgId:"resources.maps.unsavedMapConfirmTitle"}),buttons:[{bsStyle:"primary",text:o().createElement(C.Z,{msgId:"resources.maps.unsavedMapConfirmButtonText"}),onClick:this.goHome},{text:o().createElement(C.Z,{msgId:"resources.maps.unsavedMapCancelButtonText"}),onClick:this.props.onCloseUnsavedDialog}],fitContent:!0},o().createElement("div",{className:"ms-detail-body"},o().createElement(C.Z,{msgId:"resources.maps.unsavedMapConfirmMessage"}))))}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(o().Component);B(Y,"propTypes",{icon:E().string,onCheckMapChanges:E().func,onCloseUnsavedDialog:E().func,displayUnsavedDialog:E().bool,renderUnsavedMapChangesDialog:E().bool,tooltipPosition:E().string}),B(Y,"contextTypes",{router:E().object,messages:E().object}),B(Y,"defaultProps",{icon:"home",onCheckMapChanges:function(){},onCloseUnsavedDialog:function(){},renderUnsavedMapChangesDialog:!0,tooltipPosition:"left"});const F=Y;var q=n(611847),W=n(513218),X=n.n(W);function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(Object(n),!0).forEach((function(e){G(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function G(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const V=function(t){var e,n=t.settings,r=t.scrollTo,i=void 0===r?function(){}:r,a=t.navigableItems,c=void 0===a?[]:a,u=t.currentPage,s=void 0===u?{}:u,l=t.totalItems,f=void 0===l?1:l,p=t.currentPosition,v=void 0===p?0:p,m=t.router,y=t.buttons,h=void 0===y?[]:y,g=null==n||null===(e=n.theme)||void 0===e?void 0:e.general,b=X()(g)&&g||{},w=b.fontFamily,O=b.borderColor,E=b.color,P=b.backgroundColor,C=n||{},j=C.isTitleEnabled,T=C.isLogoEnabled,k=C.isNavbarEnabled,I=h.length>0,D=m&&m.pathname&&m.search&&"true"===(0,q.vl)(m.search).showHome&&m.pathname.includes("/geostory/shared"),x=k&&(null==c?void 0:c.length)>0,M=j||T||x||I||D;return o().createElement("div",{className:"ms-geostory-navigation-bar",style:Q(Q({color:E,backgroundColor:P},O&&{borderBottom:"1px solid ".concat(O)}),{},{fontFamily:w})},o().createElement("div",{className:"progress-bar",key:"progress-bar",style:{backgroundColor:O}},o().createElement("div",{className:"progress-percent",style:{width:"".concat((v+1)/f*100,"%"),backgroundColor:E}})),M&&o().createElement("div",{className:"ms-geostory-navigation-tools"},o().createElement("div",{className:"ms-geostory-navigation-toolbar"},o().createElement(d.Z,{buttons:h}),D&&o().createElement(F,{bsStyle:"default",className:"square-button-md no-border",tooltipPosition:"right",renderUnsavedMapChangesDialog:!1})),o().createElement("div",{className:"ms-geostory-navigation-elements"},x?o().createElement("div",{className:"ms-geostory-navigation-navigable-items"},o().createElement(S,{items:c,currentPage:s,scrollTo:i,getItemStyle:function(t){return t?{color:P,backgroundColor:E}:{outlineColor:E,borderColor:E}}})):null,o().createElement("div",{className:"ms-geostory-navigation-metadata"},j&&o().createElement("div",{className:"ms-geostory-navigation-title",style:{fontSize:n.storyTitleFontSize||"14px"}},n.storyTitle),T&&o().createElement("div",{className:"ms-geostory-navigation-logo"},o().createElement("img",{src:n.thumbnail&&(n.thumbnail.data||n.thumbnail.url)||"",height:32}))))))},$=(0,c.rx)("GeoStoryNavigation",{component:(0,i.connect)((0,a.zB)({mode:s.eK,settings:s.TQ,currentPage:s.PR,currentPosition:s.u5,totalItems:s.CK,navigableItems:(0,s.w)({includeAlways:!1}),pathname:l.F,search:l.y}))((function(t){var e=t.mode,n=void 0===e?u.nl.VIEW:e,r=t.currentPage,i=t.currentPosition,a=t.totalItems,c=t.settings,s=t.navigableItems,l=void 0===s?[]:s,f=t.pathname,d=t.search,p=t.items,v=(void 0===p?[]:p).filter((function(t){return t.tool})).map((function(t){return{Element:t.tool}}));return n===u.nl.VIEW?o().createElement("div",{key:"geostory-navigation",className:"ms-geostory-navigation",style:{width:"100%",position:"relative"}},o().createElement(V,{settings:c,currentPage:r,currentPosition:i,totalItems:a,scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{behavior:"smooth"};(0,u.M1)(t,e)},navigableItems:l,router:{pathname:f,search:d},buttons:v})):null})),reducers:{geostory:f.Z}})},166190:(t,e,n)=>{"use strict";n.d(e,{Z:()=>M});var r=n(227361),o=n.n(r),i=n(747037),a=n.n(i),c=n(281763),u=n.n(c),s=n(630998),l=n.n(s),f=n(313311),d=n.n(f),p=n(968630),v=n.n(p),m=n(701469),y=n.n(m),h=n(984596),g=n.n(h),b=n(545578),w=n.n(b),S=n(761868),O=n(192579),E=n(134990);function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function T(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var I=function(t,e){var n=t.length,r=0;return e||0===e||(r=n),a()(e)?r=l()(t,{id:e})+1:u()(e)&&(r=Math.min(e,t.length)),r},D=function t(e,n,r){var o=r.contents,i=r.background,a=r.id,c=r.resourceId,u=[],s=n+'{"id": "'.concat(a,'"}]');return c===e?[s]:(i&&i.resourceId===e&&u.push(s+".background"),o?o.reduce((function(n,r){return[].concat(T(n),T(t(e,s+".contents[",r)))}),u):u)},x={mode:"view",isCollapsed:!1,focusedContent:{},currentPage:{},settings:{},oldSettings:{},updateUrlOnScroll:!1};const M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case E.D7:var n=e.id,r=e.path,i=e.position,c=e.element,u=(0,O.Ll)("currentStory.".concat(r),t),s=o()(t,u,[]),l=I(s,i),f=s.slice();return f.splice(l,0,C({id:n},c)),(0,S.t8)(u,f,t);case E.mN:var p=e.id,m=e.mediaType,h=e.data;return(0,S.t8)("currentStory.resources",w()([{id:p,type:m,data:h}].concat(T(t.currentStory&&t.currentStory.resources||[])),"id"),t);case E.vb:return(0,S.t8)("mode",e.mode,t);case E.QK:var b=e.id,P=e.mediaType,k=e.data,M=(0,S.cc)("currentStory.resources",{id:b,type:P,data:k},{id:b},t);return P===O.Tr.MAP&&t.currentStory.sections.filter((function(t){return t.type!==O.ID.CAROUSEL})).reduce((function(t,e){return[].concat(T(t),T(D(b,"sections[",e)))}),[]).map((function(e){var n=(0,O.Ll)("currentStory.".concat(e,".map"),t);M=(0,S.t8)(n,void 0,M)})),M;case E.Ro:var N=e.id,A=e.mediaType,R=(0,S.z6)("currentStory.resources",{id:N},t);return t.currentStory.sections.reduce((function(t,e){return[].concat(T(t),T(D(N,"sections[",e)))}),[]).map((function(e){var n=(0,O.Ll)("currentStory.".concat(e,".resourceId"),t);if(R=(0,S.zN)(n,R),A===O.Tr.MAP){var r=(0,O.Ll)("currentStory.".concat(e,".map"),t);R=(0,S.zN)(r,R)}})),R;case E.lX:return(0,S.t8)("loading"===e.name?"loading":"loadFlags.".concat(e.name),e.value,(0,S.t8)("loading",e.value,t));case E.Dq:var U=e.path,_=(0,O.Ll)("currentStory.".concat(U),t),L=T(_),Z=L.pop(),z=o()(t,L);return y()(z)?(a()(Z)&&(Z=parseInt(Z,10)),(0,S.t8)(L,[].concat(T(z.slice(0,Z)),T(z.slice(Z+1))),t)):(0,S.zN)(_,t);case E.ij:var B,H,Y,F,q,W=t.defaultSettings||{},X=e.story.settings||W,K=(null===(B=X)||void 0===B||null===(H=B.theme)||void 0===H?void 0:H.fontFamilies)||[],Q=null===(Y=t.currentStory)||void 0===Y||null===(F=Y.settings)||void 0===F||null===(q=F.theme)||void 0===q?void 0:q.fontFamilies;return Q&&Q.length>0&&(X=(0,S.t8)("theme.fontFamilies",w()([].concat(T(Q),T(K)),"family"),X)),(0,S.t8)("currentStory",C(C({},e.story),{},{settings:X}),t);case E.i2:return(0,S.t8)("selectedCard",t.selectedCard===e.card?"":e.card,t);case E.IY:var G=e.control,V=e.value;return(0,S.t8)("controls.".concat(G),V,t);case E.Zf:var $=e.resource,J=t.currentStory&&t.currentStory.settings||{};return(0,S.qC)((0,S.t8)("resource",$),(0,S.t8)("currentStory.settings.storyTitle",J.storyTitle||$.name))(t);case E.si:case E.KT:return(0,S.zN)("errors.save",t);case E.SW:return(0,S.t8)("errors.save",g()(e.error),t);case E.Mk:return(0,S.t8)("isCollapsed",!t.isCollapsed,t);case E.NZ:var tt=o()(t,"currentStory.settings.".concat(e.option));return(0,S.t8)("currentStory.settings.".concat(e.option),!tt,t);case E.c:var et=!t.isSettingsEnabled,nt=t.currentStory&&t.currentStory.settings||{};return(0,S.qC)((0,S.t8)("isSettingsEnabled",et),(0,S.t8)("oldSettings",et?nt:{}),(0,S.t8)("currentStory.settings",et?C({},nt):e.withSave?nt:t.oldSettings))(t);case E.wb:var rt=e.path,ot=e.mode,it=e.element,at=(0,O.Ll)("currentStory.".concat(rt),t),ct=o()(t,at);return v()(ct)&&v()(it)&&"merge"===ot&&(it=C(C({},ct),it)),y()(ct)&&y()(it)&&"merge"===ot&&(it=[].concat(T(ct),T(it))),(0,S.t8)(at,it,t);case E.km:return(0,S.t8)("currentStory.settings.".concat(e.prop),e.value,t);case E.un:if(e.columnId){var ut=d()(t.currentStory.sections,(function(t){return d()(t.contents,{id:e.columnId})}));return ut&&d()(ut.contents,{id:e.columnId})?(0,S.t8)("currentPage",C(C({},t.currentPage),{},{columns:C(C({},t.currentPage.columns),{},j({},ut.id,e.columnId))}),t):t}return(0,S.t8)("currentPage",C(C({},t.currentPage),{},{sectionId:e.sectionId}),t);case E.Cx:var st=e.status,lt=e.target,ft=e.selector,dt=void 0===ft?"":ft,pt=e.hideContent,vt=void 0!==pt&&pt,mt=e.path,yt=st?{target:lt,selector:dt,hideContent:vt,path:mt}:void 0;return(0,S.t8)("focusedContent",yt,t);case E.jr:return(0,S.t8)("pendingChanges",e.value,t);case E.ZY:return(0,S.t8)("updateUrlOnScroll",e.value,t);case E.EQ:return(0,S.t8)("mediaEditorSettings",e.mediaEditorSettings,t);case E.W$:if(e.sectionId){var ht=d()(t.currentStory.sections,(function(t){return d()(t.contents,{id:e.showContentId})}));return ht&&d()(ht.contents,{id:e.showContentId})?(0,S.t8)("currentStory",C(C({},t.currentStory),{},{sections:(0,O.eI)(t.currentStory.sections,e)}),t):t}return t;case E.mk:return(0,S.t8)("drawOptions",e.drawOptions,t);default:return t}}},23279:(t,e,n)=>{var r=n(513218),o=n(707771),i=n(14841),a=Math.max,c=Math.min;t.exports=function(t,e,n){var u,s,l,f,d,p,v=0,m=!1,y=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=u,r=s;return u=s=void 0,v=e,f=t.apply(r,n)}function b(t){return v=t,d=setTimeout(S,e),m?g(t):f}function w(t){var n=t-p;return void 0===p||n>=e||n<0||y&&t-v>=l}function S(){var t=o();if(w(t))return O(t);d=setTimeout(S,function(t){var n=e-(t-p);return y?c(n,l-(t-v)):n}(t))}function O(t){return d=void 0,h&&u?g(t):(u=s=void 0,f)}function E(){var t=o(),n=w(t);if(u=arguments,s=this,p=t,n){if(void 0===d)return b(p);if(y)return clearTimeout(d),d=setTimeout(S,e),g(p)}return void 0===d&&(d=setTimeout(S,e)),f}return e=i(e)||0,r(n)&&(m=!!n.leading,l=(y="maxWait"in n)?a(i(n.maxWait)||0,e):l,h="trailing"in n?!!n.trailing:h),E.cancel=function(){void 0!==d&&clearTimeout(d),v=0,u=p=s=d=void 0},E.flush=function(){return void 0===d?f:O(o())},E}},707771:(t,e,n)=>{var r=n(555639);t.exports=function(){return r.Date.now()}},580628:(t,e,n)=>{"use strict";n.d(e,{Z:()=>v});var r=n(124852),o=n.n(r),i=n(155553);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}function l(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function d(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}const v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{handleWidth:!0,handleHeight:!0};return function(n){function r(){return c(this,r),l(this,f(r).apply(this,arguments))}return d(r,n),s(r,[{key:"render",value:function(){return o().createElement(i.Z,e,o().createElement(t,this.props))}}]),r}(r.Component)}},945338:(t,e,n)=>{"use strict";n.d(e,{QS:()=>m});var r=n(124852),o=n.n(r),i=n(45697),a=n.n(i);function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c.apply(this,arguments)}var u={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},s={xy:[0,0],swiping:!1,eventData:void 0,start:void 0},l="mousemove",f="mouseup";function d(t,e){if(0===e)return t;var n=Math.PI/180*e;return[t[0]*Math.cos(n)+t[1]*Math.sin(n),t[1]*Math.cos(n)-t[0]*Math.sin(n)]}function p(t,e){var n=function(e){e.touches&&e.touches.length>1||t((function(t,n){n.trackMouse&&(document.addEventListener(l,r),document.addEventListener(f,i));var o=e.touches?e.touches[0]:e,a=d([o.clientX,o.clientY],n.rotationAngle);return c({},t,s,{eventData:{initial:[].concat(a),first:!0},xy:a,start:e.timeStamp||0})}))},r=function(e){t((function(t,n){if(!t.xy[0]||!t.xy[1]||e.touches&&e.touches.length>1)return t;var r=e.touches?e.touches[0]:e,o=d([r.clientX,r.clientY],n.rotationAngle),i=o[0],a=o[1],u=t.xy[0]-i,s=t.xy[1]-a,l=Math.abs(u),f=Math.abs(s),p=(e.timeStamp||0)-t.start,v=Math.sqrt(l*l+f*f)/(p||1);if(l<n.delta&&f<n.delta&&!t.swiping)return t;var m=function(t,e,n,r){return t>e?n>0?"Left":"Right":r>0?"Up":"Down"}(l,f,u,s),y=c({},t.eventData,{event:e,absX:l,absY:f,deltaX:u,deltaY:s,velocity:v,dir:m});n.onSwiping&&n.onSwiping(y);var h=!1;return(n.onSwiping||n.onSwiped||n["onSwiped"+m])&&(h=!0),h&&n.preventDefaultTouchmoveEvent&&n.trackTouch&&e.cancelable&&e.preventDefault(),c({},t,{eventData:c({},y,{first:!1}),swiping:!0})}))},o=function(e){t((function(t,n){var r;return t.swiping&&(r=c({},t.eventData,{event:e}),n.onSwiped&&n.onSwiped(r),n["onSwiped"+r.dir]&&n["onSwiped"+r.dir](r)),c({},t,s,{eventData:r})}))},i=function(t){document.removeEventListener(l,r),document.removeEventListener(f,i),o(t)},a=function(t){if(t&&t.addEventListener){var e=[["touchstart",n],["touchmove",r],["touchend",o]];return e.forEach((function(e){var n=e[0],r=e[1];return t.addEventListener(n,r)})),function(){return e.forEach((function(e){var n=e[0],r=e[1];return t.removeEventListener(n,r)}))}}},u={ref:function(e){null!==e&&t((function(t,n){if(t.el===e)return t;var r={};return t.el&&t.el!==e&&t.cleanUpTouch&&(t.cleanUpTouch(),r.cleanUpTouch=null),n.trackTouch&&e&&(r.cleanUpTouch=a(e)),c({},t,{el:e},r)}))}};return e.trackMouse&&(u.onMouseDown=n),[u,a]}function v(t,e,n){var r={};return!e.trackTouch&&t.cleanUpTouch?(t.cleanUpTouch(),r.cleanUpTouch=null):e.trackTouch&&!t.cleanUpTouch&&t.el&&(r.cleanUpTouch=n(t.el)),c({},t,r)}function m(t){var e=t.trackMouse,n=o().useRef(c({},s,{type:"hook"})),r=o().useRef();r.current=c({},u,t);var i=o().useMemo((function(){return p((function(t){return n.current=t(n.current,r.current)}),{trackMouse:e})}),[e]),a=i[0],l=i[1];return n.current=v(n.current,r.current,l),a}var y=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this)._set=function(t){n.transientState=t(n.transientState,n.props)},n.transientState=c({},s,{type:"class"}),n}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props,e=t.className,n=t.style,r=t.nodeName,i=void 0===r?"div":r,a=t.innerRef,u=t.children,s=t.trackMouse,l=p(this._set,{trackMouse:s}),f=l[0],d=l[1];this.transientState=v(this.transientState,this.props,d);var m=a?function(t){return a(t),f.ref(t)}:f.ref;return o().createElement(i,c({},f,{className:e,style:n,ref:m}),u)},r}(o().PureComponent);y.propTypes={onSwiped:a().func,onSwiping:a().func,onSwipedUp:a().func,onSwipedRight:a().func,onSwipedDown:a().func,onSwipedLeft:a().func,delta:a().number,preventDefaultTouchmoveEvent:a().bool,nodeName:a().string,trackMouse:a().bool,trackTouch:a().bool,innerRef:a().func,rotationAngle:a().number},y.defaultProps=u}}]);