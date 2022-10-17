"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[75675],{966959:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r(757588).Badge},225223:(e,t,r)=>{r.d(t,{Z:()=>n.Z});var n=r(966959)},339399:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(124852),a=r.n(n),o=r(757588);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}o.Dropdown.Item=o.MenuItem,o.Dropdown.Divider=function(e){return a().createElement(o.MenuItem,i({},e,{divider:!0}))};const l=o.Dropdown},336693:(e,t,r)=>{r.d(t,{Z:()=>n.Z});var n=r(339399)},518212:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(124852),a=r.n(n),o=r(675263),i=r.n(o),l=r(805346),c=r(336693),u=r(225223),s=r(938429),m=r(180307),f=r(507412),d=r(770058),p=function(e){var t=e.id,r=e.items,n=e.label,o=e.labelId,i=e.toogleStyle,p=e.toogleImage,y=e.toogleIcon,b=e.dropdownClass,g=e.tabIndex,v=e.badgeValue,h=e.containerNode,E=e.size,I=e.alignRight,O=e.variant,j=e.responsive,w=r.map((function(e,t){return"plugin"===e.type&&e.Component?a().createElement("li",null,a().createElement(e.Component,{variant:"default",className:e.className,showMessage:!0})):"divider"===e.type?a().createElement(c.Z.Divider,{key:t}):a().createElement(a().Fragment,null,a().createElement(c.Z.Item,{key:t,href:e.href,style:e.style,as:null!=e&&e.items?"span":"a",target:e.target,className:e.className},e.labelId&&a().createElement(l.Z,{msgId:e.labelId})||e.label,(0,d.mk)(e.badge)&&a().createElement(u.Z,null,e.badge)),(null==e?void 0:e.items)&&a().createElement("div",{className:"gn-sub-flat-menu-block"},function(e){return e&&e.map((function(e){var t=e.labelId,r=e.href,n=e.badge,o=e.target,i=e.type,c=e.Component,m=e.className;return"plugin"===i&&c?a().createElement("li",null,a().createElement(c,{variant:"default",className:m,showMessage:!0})):function(e){var t=e.labelId,r=e.href,n=e.badge,o=e.target;return a().createElement(a().Fragment,null,a().createElement(s.Z,{href:r,target:o},t&&a().createElement(l.Z,{msgId:t}),(0,d.mk)(n)&&a().createElement(u.Z,null,n)))}({labelId:t,href:r,badge:n,target:o})}))}(null==e?void 0:e.items)))})),N=a().createElement(c.Z.Toggle,{id:"gn-toggle-dropdown-".concat(t),bsStyle:O,tabIndex:g,style:i,bsSize:E,noCaret:!0},p?a().createElement("img",{src:p}):void 0,y?a().createElement(f.Z,{name:y}):void 0,o&&!j&&a().createElement(l.Z,{msgId:o})||n,o&&j&&a().createElement("div",{className:"gn-content-responsive"},a().createElement("span",null,a().createElement(l.Z,{msgId:o})),a().createElement("span",null,a().createElement(f.Z,{name:"plus"}))),(0,d.mk)(v)&&a().createElement(u.Z,null,v));return a().createElement(c.Z,{className:"".concat(b),pullRight:I},N,h?(0,m.createPortal)(a().createElement(c.Z.Menu,null,w),h.parentNode):a().createElement(c.Z.Menu,null,w))};p.propTypes={id:i().number,items:i().array.isRequired,label:i().string,labelId:i().string,toogleStyle:i().object,toogleImage:i().string,state:i().object,dropdownClass:i().string,tabIndex:i().number,badgeValue:i().number,containerNode:i().element};const y=p},844197:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(124852),a=r.n(n),o=r(675263),i=r.n(o),l=r(285106);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=(0,n.forwardRef)((function(e,t){var r=e.items,n=e.containerClass,o=e.childrenClass,i=e.query,c=e.formatHref,s=e.size,m=e.alignRight,f=e.variant,d=e.resourceName;return a().createElement("ul",{ref:t,className:"".concat(n)},r.map((function(e,t){return a().createElement("li",{key:t},a().createElement(l.Z,{variant:e.variant||f,item:u(u({},e),{},{id:e.id||t}),size:s,alignRight:m,menuItemsProps:{query:i,formatHref:c},classItem:o,resourceName:d}))})))}));m.propTypes={items:i().array.isRequired,containerClass:i().string,childrenClass:i().string,query:i().string,formatHref:i().func},m.defaultProps={items:[],query:{},user:void 0,formatHref:function(){return"#"},containerClass:""};const f=m},285106:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(124852),a=r.n(n),o=r(675263),i=r.n(o),l=r(984596),c=r.n(l),u=r(225223),s=r(938429),m=r(805346),f=r(518212),d=r(770058),p=function(e){var t=e.item,r=e.menuItemsProps,n=e.containerNode,o=e.tabIndex,i=e.classItem,l=void 0===i?"":i,p=e.size,y=e.alignRight,b=e.variant,g=e.resourceName,v=r.formatHref,h=r.query,E=t.id,I=t.type,O=t.label,j=t.labelId,w=void 0===j?"":j,N=t.items,Z=void 0===N?[]:N,P=t.href,S=t.style,C=t.badge,A=void 0===C?"":C,H=t.image,k=t.Component,q=t.target,R=t.className,z="btn".concat(b&&" btn-".concat(b)||"").concat(p&&" btn-".concat(p)||"").concat(R?" ".concat(R):""),M=A;if("dropdown"===I)return a().createElement(f.Z,{id:E,items:Z,label:O,labelId:w,toogleStyle:S,toogleImage:H,dropdownClass:"".concat(l).concat(R?" ".concat(R):""),tabIndex:o,badgeValue:M,containerNode:n,size:p,alignRight:y,variant:b,responsive:t.responsive});if(("custom"===I||"plugin"===I)&&k)return a().createElement(k,{variant:b,size:p,className:R});if("link"===I)return a().createElement(s.Z,{href:P,target:q,className:z},w&&a().createElement(m.Z,{msgId:w,msgParams:{resourceName:g}})||O);if("divider"===I)return a().createElement("div",{className:"gn-menu-divider",style:S});if("filter"===I){var T=c()(h.f||[]).find((function(e){return e===t.id}));return a().createElement(s.Z,{target:q,style:S,href:v({query:{f:t.id},replaceQuery:!T}),className:z},w&&a().createElement(m.Z,{msgId:w})||O,(0,d.mk)(M)&&a().createElement(u.Z,null,M))}return null};p.propTypes={item:i().object.isRequired,menuItemsProps:i().object.isRequired,containerNode:i().element,tabIndex:i().number,draggable:i().bool,classItem:i().string};const y=p},938429:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(124852),a=r.n(n),o=["children","className"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}const l=(0,n.forwardRef)((function(e,t){var r=e.children,n=e.className,l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,o);return a().createElement("a",i({},l,{ref:t,className:"nav-link".concat(n?" ".concat(n):"")}),r)}))},984996:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r(844197).Z},678833:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(124852),a=r.n(n),o=r(598611),i=r.n(o),l=r(322843);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const d=function(e){var t=e.items,r=e.loadedPlugins,o=e.loaderComponent,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];function s(e){return m(e.items).sort((function(e,t){return e.position>t.position?1:-1})).map((function(t){return u(u({},t),{},{Component:t.Component||(0,l.KB)(t,e.loadedPlugins,e.loaderComponent||a().createElement("div",null))})}))||[]}var f=(0,n.useRef)({});f.current={items:t,loadedPlugins:r,loaderComponent:o};var d=i()(Object.keys(r||{}),","),p=(0,n.useMemo)((function(){return s(f.current)}),[d].concat(m(c)));return p}},535469:(e,t,r)=>{r.r(t),r.d(t,{default:()=>A});var n=r(124852),a=r.n(n),o=r(675263),i=r.n(o),l=r(322843),c=r(22222),u=r(984996),s=r(518212);const m=function(e){var t=e.items,r=e.variant;return a().createElement("div",{className:"gn-sub-flat-menu-container"},a().createElement(s.Z,{toogleIcon:"bars",className:"gn-sub-flat-menu",items:t,variant:r}))};function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const p=function(e){var t=f((0,n.useState)(0),2),r=t[0],a=t[1],o=f((0,n.useState)(0),2),i=o[0],l=o[1],c=function(){null!=e&&e.current&&(a(e.current.offsetWidth),l(e.current.offsetHeight))};return(0,n.useEffect)((function(){return window.addEventListener("resize",c),function(){window.removeEventListener("resize",c)}}),[e]),(0,n.useEffect)((function(){c()})),{width:r,height:i}};var y=r(507412),b=r(938429);function g(e){var t=e.resource,r=e.titleItems;return a().createElement("div",{className:"gn-action-navbar-title"},a().createElement("div",null,a().createElement(b.Z,{href:"#",className:"gn-action-navbar-breadcrumb-link"},a().createElement(y.Z,{name:"home"})),a().createElement(y.Z,{name:"angle-right",className:"gn-action-navbar-breadcrumb-seperator"}),a().createElement("p",{title:null==t?void 0:t.title,className:"gn-action-navbar-resource-title"},null==t?void 0:t.title)),r.map((function(e){var t=e.Component,r=e.name;return a().createElement(t,{key:r,variant:"info"})})))}g.propTypes={resource:i().object,titleItems:i().array},g.defaultProps={resource:{},titleItems:[]};const v=g;function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var E=function(e){var t,r,o=e.items,i=e.formatHref,l=e.query,c=e.variant,s=e.size,f=e.resourceName,d=(0,n.useRef)(),y=(0,n.useRef)(),b=p(d).width,g=p(y).width,v=(t=(0,n.useState)(!1),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(t,r)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),E=v[0],I=v[1];return(0,n.useEffect)((function(){I(g>=b)}),[g,b]),a().createElement("div",{className:"gn-menu-content-side gn-menu-content-left",ref:d},E&&o&&a().createElement(m,{items:o,variant:c}),!E&&o&&a().createElement(u.Z,{ref:y,items:o,containerClass:"gn-menu-list",formatHref:i,query:l,variant:c,size:s,resourceName:f}))},I=function(e){var t=e.items,r=e.formatHref,o=e.query,i=e.variant,l=e.size,c=(0,n.useRef)();return a().createElement("div",{className:"gn-menu-content-right"},t&&a().createElement(u.Z,{ref:c,items:t,containerClass:"gn-menu-list",formatHref:r,query:o,variant:i,alignRight:!0,size:l}))},O=(0,n.forwardRef)((function(e,t){var r=e.style,n=e.leftItems,o=e.rightItems,i=e.query,l=e.formatHref,c=e.variant,u=e.size,s=e.resource,m=e.titleItems,f=e.disableTitle;return a().createElement("nav",{ref:t,className:"gn-menu gn-".concat(c),style:r},a().createElement("div",{className:"gn-menu-container"},a().createElement("div",{className:"gn-menu-content"},!f&&a().createElement(v,{resource:s,titleItems:m}),n.length>0&&a().createElement(E,{items:n,formatHref:l,query:i,variant:c,size:u,resourceName:null==s?void 0:s.title}),o.length>0&&a().createElement(I,{items:o,formatHref:l,query:i,variant:c,size:u}))))}));O.propTypes={style:i().object,leftItems:i().array,rightItems:i().array,query:i().object,formatHref:i().func,variant:i().string,disableTitle:i().bool},O.defaultProps={leftItems:[],rightItems:[],titleItems:[],query:{},formatHref:function(){return"#"},variant:"primary",disableTitle:!1};const j=O;var w=r(678833),N=r(903828),Z=r(770058);function P(e,t){return!e.disableIf&&(!e.type||!e.perms||(0,Z.gj)(t,e.perms,"resource"))}function S(e,t){var r=e.items,n=e.leftMenuItems,o=e.rightMenuItems,i=e.resourcePerms,l=e.resource,c=e.isDirtyState,u=e.selectedLayerPermissions,s=e.titleItems,m=e.disableTitle,f=t.loadedPlugins,d=(0,w.Z)({items:r,loadedPlugins:f},[null==l?void 0:l.pk,u]),p=(0,Z.bH)(n,(function(e){return d.find((function(t){"plugin"===e.type&&t.name===e.name&&(e.Component=null==t?void 0:t.Component)})),e.className=e.showPendingChangesIcon&&c?"gn-pending-changes-icon":"",e})),y=(0,Z.bH)(o,(function(e){return d.find((function(t){"plugin"===e.type&&t.name===e.name&&(e.Component=null==t?void 0:t.Component)})),e})),b=(0,Z.bH)(s,(function(e){return d.find((function(t){"plugin"===e.type&&t.name===e.name&&(e.Component=null==t?void 0:t.Component)})),e})),g=(0,Z.bH)(p,(function(e){return P(e,i)})),v=(0,Z.bH)(y,(function(e){return P(e,i)})),h=(0,Z.bH)(b,(function(e){return P(e,i)}));return a().createElement(j,{leftItems:g,rightItems:v,variant:"primary",size:"sm",resource:l,titleItems:h,disableTitle:m})}S.propTypes={items:i().array,leftMenuItems:i().array,rightMenuItems:i().array,titleItems:i().array},S.defaultProps={items:[],leftMenuItems:[],rightMenuItems:[],titleItems:[]};var C=(0,l.$j)((0,c.P1)([N.HG,N.ez,N.yK,N.YR,N.l_,N.V$],(function(e,t,r,n,a,o){return{resourcePerms:e.length>0?e:t?["change_resourcebase"]:[],resource:r,isDirtyState:!!n,selectedLayerPermissions:a,disableTitle:o}})))(S);const A=(0,l.rx)("ActionNavbar",{component:C,containers:{},epics:{},reducers:{}})},770058:(e,t,r)=>{r.d(t,{BK:()=>y,QH:()=>f,bH:()=>b,gj:()=>s,j4:()=>d,mk:()=>p});var n=r(227361),a=r.n(n),o=r(414293),i=r.n(o);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t,r){var n=t?t.filter((function(e){return e.type===r})):void 0;return void 0===n||n&&0===n.length||n&&n.some((function(t){return e&&e.includes(null==t?void 0:t.value)}))}function m(e,t){return 0===(null==t?void 0:t.indexOf("${"))?a()(e,t.replace(/^\$\{(.*)\}$/,"$1")):t}function f(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",n=t.split(r),a=n.map((function(t){return m(e,t)}));return a.join(r)}function d(e,t,r){var n;if(t.disableIf)return!1;var a,o,i,l,c=r?void 0===r.authenticated?t.authenticated:r.authenticated:t.authenticated;return void 0===c||!0===c&&(null==e?void 0:e.user)&&(a=e.user,o=t.allowedGroups,l=(null==a||null===(i=a.info)||void 0===i?void 0:i.groups)||[],!o||!!l.find((function(e){return-1!==o.indexOf(e)})))&&s(null==e||null===(n=e.user)||void 0===n?void 0:n.perms,t.perms,"user")||!1===c&&!(null!=e&&e.user)}var p=function(e){return!(""===e||i()(e))},y=function(e){return function t(r){return r&&"object"===u(r)?Array.isArray(r)?r.map(t):Object.fromEntries(Object.entries(r).map((function(e){var r=l(e,2),n=r[0],a=r[1];return[n,t(a)]}))):e(r)}},b=function e(t,r){return t&&t.reduce((function(t,n){var a=n;return Object.entries(n).forEach((function(t){var o=l(t,2),i=o[0],c=o[1];Array.isArray(c)&&(a[i]=e(n[i],r))})),r(a)&&t.push(a),t}),[])}}}]);