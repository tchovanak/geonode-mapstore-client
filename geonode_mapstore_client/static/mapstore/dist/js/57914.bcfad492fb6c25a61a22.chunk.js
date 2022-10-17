"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[57914],{85428:(e,r,n)=>{n.d(r,{Z:()=>u});var t=n(124852),a=n.n(t),o=n(675263),l=n.n(o),c=["href","readOnly","children"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}function s(e){var r=e.href,n=e.readOnly,t=e.children,o=function(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,c);return n?t:a().createElement("a",i({href:r},o),t)}s.propTypes={href:l().string,readOnly:l().bool.isRequired,children:l().any},s.defaultProps={href:"",readOnly:!1};const u=s},560330:(e,r,n)=>{n.d(r,{Z:()=>t.Z});var t=n(85428)},400285:(e,r,n)=>{n.d(r,{Z:()=>d});var t=n(124852),a=n.n(t),o=n(675263),l=n.n(o),c=n(336693),i=n(805346),s=n(507412);function u(e){var r=e.options,n=e.actions,t=e.onAction,o=e.resource,l=e.buildHrefByTemplate,u=e.onDownload;return null!=r&&r.every((function(e){return"delete"!==e.action}))&&null!=r&&r.every((function(e){var r=e.action;return"download"===r&&!o.download_url||["copy"].includes(r)&&!o.is_copyable&!o.download_url}))?null:a().createElement("div",{className:"gn-resource-action-buttons"},a().createElement(c.Z,{className:"gn-card-options",pullRight:!0},a().createElement(c.Z.Toggle,{id:"gn-card-options-".concat(o.pk2||o.pk),variant:"default",size:"sm",noCaret:!0},a().createElement(s.Z,{name:"ellipsis-v"})),a().createElement(c.Z.Menu,{className:"gn-card-dropdown"},r.map((function(e){return"button"===e.type&&n[e.action]||"download"===e.action?("download"===e.action&&o.download_url||"copy"!==e.action&&"download"!==e.action||(null==o?void 0:o.is_copyable)&&"download"!==e.action)&&a().createElement(c.Z.Item,{key:e.action,onClick:function(){return"download"!==e.action?t(n[e.action],[o]):u(o)}},a().createElement(s.Z,{name:e.icon})," ",a().createElement(i.Z,{msgId:e.labelId})):a().createElement(c.Z.Item,{key:e.href,href:l(o,e.href)},a().createElement(s.Z,{name:e.icon})," ",a().createElement(i.Z,{msgId:e.labelId}))})))))}u.propTypes={options:l().array,actions:l().object,onAction:l().func,resource:l().object,buildHrefByTemplate:l().func},u.defaultProps={options:[],actions:{},resource:{},onAction:function(){},buildHrefByTemplate:function(){}};const d=u},728376:(e,r,n)=>{n.d(r,{Z:()=>t.Z});var t=n(400285)},834065:(e,r,n)=>{n.d(r,{Z:()=>m});var t=n(124852),a=n.n(t),o=n(675263),l=n.n(o),c=n(877593),i=n(560330),s=["resource","readOnly","formatHref"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},u.apply(this,arguments)}function d(e){var r,n,t,o=e.resource,l=e.readOnly,d=e.formatHref,m=function(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,s);return m.detailsPanel?a().createElement(i.Z,{readOnly:l,href:d({query:{"filter{owner.username.in}":null===(t=o.owner)||void 0===t?void 0:t.username}})},o.owner&&(0,c.vW)(o.owner)):a().createElement("p",u({className:"card-text gn-card-user"},m),(null===(r=o.owner)||void 0===r?void 0:r.avatar)&&a().createElement("img",{src:o.owner.avatar,alt:(0,c.vW)(o.owner),className:"gn-card-author-image"}),a().createElement(i.Z,{readOnly:l,href:d({query:{"filter{owner.username.in}":null===(n=o.owner)||void 0===n?void 0:n.username}})},o.owner&&(0,c.vW)(o.owner)))}d.propTypes={resource:l().object,readOnly:l().bool,formatHref:l().func,props:l().any},d.defaultProps={resource:{},readOnly:!1,formatHref:function(){return"#"}};const m=d},339399:(e,r,n)=>{n.d(r,{Z:()=>c});var t=n(124852),a=n.n(t),o=n(757588);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},l.apply(this,arguments)}o.Dropdown.Item=o.MenuItem,o.Dropdown.Divider=function(e){return a().createElement(o.MenuItem,l({},e,{divider:!0}))};const c=o.Dropdown},336693:(e,r,n)=>{n.d(r,{Z:()=>t.Z});var t=n(339399)},69582:(e,r,n)=>{n.d(r,{Z:()=>g});var t=n(124852),a=n.n(t),o=n(805346),l=n(507412),c=n(693473),i=n(51605),s=n(535721),u=n(189239),d=n(560330),m=n(834065),p=n(728376);function f(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var y=(0,t.forwardRef)((function(e,r){var n,y,g=e.data,v=e.active,b=e.options,h=e.formatHref,E=e.getTypesInfo,O=e.layoutCardsStyle,w=e.buildHrefByTemplate,Z=e.readOnly,N=e.actions,j=e.onAction,P=e.className,I=e.loading,k=e.featured,_=e.onClick,A=e.downloading,T=e.onDownload,H=g,S=E(),D=(S[H.subtype]||S[H.resource_type]||{}).icon,x=H&&(S[H.subtype]||S[H.resource_type])||{},C=x.formatDetailUrl,B=void 0===C?function(e){return null==e?void 0:e.detail_url}:C,q=x.canPreviewed,M=(null==H?void 0:H.pk)&&B(H),R=(null==H?void 0:H.pk)&&q&&q(H),W=(null==H?void 0:H.pk)&&(0,s.J7)(H),F=(n=(0,t.useState)(!1),y=2,function(e){if(Array.isArray(e))return e}(n)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(t=n.next()).done)&&(o.push(t.value),!r||o.length!==r);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}}(n,y)||function(e,r){if(e){if("string"==typeof e)return f(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,r):void 0}}(n,y)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),U=F[0],z=F[1],J="list"===O?"card-img-left":"card-img-top";return a().createElement("div",{ref:r,onClick:function(){_(g)},className:"gn-resource-card".concat(v?" active":"").concat(Z?" read-only":""," gn-card-type-").concat(O," ").concat("list"===O?"rounded-0":"").concat(P?" ".concat(P):"")},!Z&&a().createElement("a",{className:"gn-resource-card-link",href:h({pathname:"/detail/".concat(H.resource_type,"/").concat(H.pk)})}),!Z&&b&&b.length>0&&"grid"===O&&a().createElement(p.Z,{buildHrefByTemplate:w,actions:N,resource:H,options:b,readOnly:Z,onAction:j,onDownload:T}),a().createElement("div",{className:"card-resource-".concat(O)},U||!H.thumbnail_url?a().createElement("div",{className:"".concat(J," card-img-placeholder")},a().createElement(l.Z,{name:D})):a().createElement("img",{className:J,src:H.thumbnail_url,onError:function(){return z(!0)}}),a().createElement("div",{className:"gn-resource-card-body-wrapper"},a().createElement("div",{className:"card-body"},a().createElement("div",{className:"card-title"},a().createElement("div",null,D&&!I&&!A&&a().createElement(a().Fragment,null,a().createElement(d.Z,{readOnly:Z,href:h({query:{"filter{resource_type.in}":H.resource_type}})},a().createElement(l.Z,{name:D}))),(I||A)&&a().createElement(i.Z,null),a().createElement(d.Z,{className:k?"gn-featured-card-title":"gn-card-title",readOnly:Z,href:h({pathname:"/detail/".concat(H.resource_type,"/").concat(H.pk)})},H.title)),a().createElement("div",null,a().createElement(u.Z,{resource:H}))),a().createElement("p",{className:"card-text gn-card-description"},H.raw_abstract?H.raw_abstract:"..."),!Z&&b&&b.length>0&&"list"===O&&a().createElement(p.Z,{buildHrefByTemplate:w,actions:N,resource:H,options:b,readOnly:Z,onAction:j,onDownload:T})),a().createElement("div",{className:"gn-footer-wrapper"},a().createElement("div",{className:"gn-card-footer",style:{padding:b&&0===b.length?"0 0.25rem 0 0.5rem":"0 0.5rem"}},a().createElement(m.Z,{resource:H,readOnly:Z,formatHref:h}),a().createElement("div",{className:"gn-card-actions"},!Z&&(M||W)&&a().createElement("div",{className:"".concat(b&&0===b.length?"gn-card-view-editor-right":"gn-card-view-editor")},a().createElement(c.Z,{variant:"primary",href:R?M:W,rel:"noopener noreferrer"},a().createElement(o.Z,{msgId:"gnhome.view"})))))))))}));y.defaultProps={links:[],theme:"light",getTypesInfo:s.NN,formatHref:function(){return"#"},featured:!1,onClick:function(){}};const g=y},957914:(e,r,n)=>{n.d(r,{Z:()=>t.Z});var t=n(69582)},499469:(e,r,n)=>{n.d(r,{Z:()=>g});var t=n(124852),a=n.n(t),o=n(805346),l=n(675263),c=n.n(l),i=n(507412),s=n(815135),u=n(441609),d=n.n(u),m=n(535721),p=n(693473),f=(0,s.Z)(p.Z),y=function(e){var r,n,t,l=e.resource,c=void 0===l?{}:l,s=(0,m.fu)(c),u=s.isApproved,p=s.isPublished,y=s.isProcessing,g=s.isCopying,v=s.isDeleting,b=s.isDeleted;return d()(c)?null:a().createElement("p",{className:"gn-resource-status-text"},!y&&(!u||!p)&&a().createElement(f,{variant:"default",className:"gn-resource-status gn-status-button",tooltip:(r={isApproved:u,isPublished:p},n=r.isApproved,t=r.isPublished,!n&&t?a().createElement(o.Z,{msgId:"gnhome.pendingApproval"}):n||t?t||n?"":a().createElement(o.Z,{msgId:"gnhome.unpublished"}):a().createElement(o.Z,{msgId:"gnhome.unApprovedunPublished"})),style:{marginRight:(v||b||g)&&"0.4rem"},tooltipPosition:"top"},a().createElement(i.Z,{name:"info-circle",className:"gn-resource-status-pending"})),v&&a().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},a().createElement(o.Z,{msgId:"gnviewer.deleting"})),b&&a().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},a().createElement(o.Z,{msgId:"gnviewer.deleted"})),g&&a().createElement("span",{className:"gn-resource-status gn-resource-status-primary"},a().createElement(o.Z,{msgId:"gnviewer.cloning"})))};y.propTypes={isApproved:c().bool,isPublished:c().bool},y.defaultProps={isApproved:!0,isPublished:!0};const g=y},189239:(e,r,n)=>{n.d(r,{Z:()=>t.Z});var t=n(499469)},228261:(e,r,n)=>{n.d(r,{Z:()=>u});var t=n(124852),a=n.n(t),o=n(675263),l=n.n(o),c=["id","className","style","children"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}function s(e){var r=e.id,n=e.className,t=e.style,o=e.children,l=function(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,c),s=n?" "+n:"";return a().createElement(a().Fragment,null,a().createElement("div",i({},l,{id:r,className:"gn-spinner".concat(s),style:t}),a().createElement("div",null)),o)}s.propTypes={id:l().string,className:l().string,style:l().object},s.defaultProps={};const u=s},51605:(e,r,n)=>{n.d(r,{Z:()=>t.Z});var t=n(228261)}}]);