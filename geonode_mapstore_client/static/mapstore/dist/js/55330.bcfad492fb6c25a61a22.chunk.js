"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[55330],{925108:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(782904),o=r(727418),i=r.n(o),a=r(921914);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.kM:var r=t.property||"enabled";return i()({},e,l({},t.control,i()({},e[t.control],l({},r,!(e[t.control]||{})[r]))));case n.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?i()({},e,l({},t.control,i()({},e[t.control],l({},t.property,void 0)))):i()({},e,l({},t.control,i()({},e[t.control],l({},t.property,t.value))));case n.dc:return i()({},e,l({},t.control,i()({},e[t.control],t.properties)));case n.l:var o=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})),s=o.reduce((function(t,r){return i()(t,l({},r,i()({},e[r],!0===e[r].enabled?{enabled:!1}:{})))}),{});return i()({},e,s);case a.DW:return u(u({},e),{},{info:u(u({},e.info),{},{available:t.isMounted})});default:return e}}},138334:(e,t,r)=>{r.d(t,{iC:()=>u,iF:()=>s,jo:()=>i,oc:()=>n,tv:()=>a,v:()=>o});var n="GEONODE:START_ASYNC_PROCESS",o="GEONODE:STOP_ASYNC_PROCESS",i="GEONODE:UPDATE_ASYNC_PROCESS";function a(e){return{type:n,payload:e}}function s(e){return{type:i,payload:e}}function u(e){return{type:o,payload:e}}},18576:(e,t,r)=>{r.d(t,{ZP:()=>A});var n,o=r(375875),i=r.n(o),a=r(49977),s=r(800827),u=r(274621),l=r(197395),c=r(73443),p=r(643892),f=r(799380),v=r(55035),d=r(455877),h=r.n(d),m=r(903828),g=r(489514),y=r(138334),b=r(535721),O=r(12530),S=r(782904);function w(e){return function(e){if(Array.isArray(e))return P(e)}(e)||E(e)||_(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){if(e){if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(e,t):void 0}}function E(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){G(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function G(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e,t){var r=(0,b.oB)(e.data,t);return C(C({},e),r)}var M=(G(n={},b.P6.MAP,(function(e,t,r){var n=(0,s.Od)(e)||{};return t?(0,f.sA)(t,C(C({},T(r,n)),{},{id:t})):(0,f.df)(T(r,n))})),G(n,b.P6.GEOSTORY,(function(e,t,r){var n=(0,u.np)(e);return t?(0,f.yp)(t,r):(0,f.Du)(C({name:r.title+" "+h()(),owner:n.name,resource_type:b.P6.GEOSTORY},r))})),G(n,b.P6.DASHBOARD,(function(e,t,r){var n=(0,u.np)(e);return t?(0,f.yp)(t,r):(0,f.Du)(C({name:r.title+" "+h()(),owner:n.name,resource_type:b.P6.DASHBOARD},r))})),G(n,b.P6.DOCUMENT,(function(e,t,r){return!!t&&(0,f.gU)(t,r)})),G(n,b.P6.DATASET,(function(e,t,r){return!!t&&(0,f.do)(t,r)})),n);const A={gnSaveContent:function(e,t){return e.ofType(c.oG).switchMap((function(e){var r,n=t.getState(),o=(null===(r=n.gnresource)||void 0===r?void 0:r.type)||"map",i=(0,m.Il)(n,o),s=C(C({title:e.metadata.name},e.metadata.description&&{abstract:e.metadata.description}),i&&{data:JSON.parse(JSON.stringify(i))}),u=(0,m.yK)(n);return a.Observable.defer((function(){return M[o](n,e.id,s,e.reload)})).switchMap((function(t){return e.reload?(window.location.href=(0,v.zL)(null==t?void 0:t.detail_url),window.location.reload(),a.Observable.empty()):a.Observable.of.apply(a.Observable,[(0,S.Xg)("pendingChanges","value",null),(0,c.gc)(t),(0,p.DF)(C(C({},u),s)),(0,p.id)(t)].concat(w(e.showNotifications?[!0===e.showNotifications?(0,l.Vp)({title:"saveDialog.saveSuccessTitle",message:"saveDialog.saveSuccessMessage"}):(0,l.Kp)(e.showNotifications)]:[])))})).catch((function(t){return a.Observable.of.apply(a.Observable,[(0,c.cE)(t.data||t.message)].concat(w(e.showNotifications?[(0,l.vU)({title:"map.mapError.errorTitle",message:"map.mapError.errorDefault"})]:[])))})).startWith((0,c.id)())}))},gnSaveDirectContent:function(e,t){return e.ofType(c.oz).switchMap((function(){var e=t.getState(),r=(0,s._H)(e),n=(null==r?void 0:r.id)||(0,m.fg)(e),o=(0,m.oS)(e),u=o.compactPermissions,v=o.geoLimits,d=(0,m.yK)(e);return a.Observable.defer((function(){return i().all([(0,f.iv)(n)].concat(w(v?v.map((function(e){return 0===e.features.length?(0,g.jg)(n,e.id,e.type).catch((function(){return{error:!0,resourceId:n,limits:e}})):(0,g.dl)(n,e.id,e.type,{features:e.features}).catch((function(){return{error:!0,resourceId:n,limits:e}}))})):[])))})).switchMap((function(t){var r,o=function(e){if(Array.isArray(e))return e}(r=t)||E(r)||_(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=o[0],s=o.slice(1).filter((function(e){return e.error})),l=(0,m.Yj)(e),v=(0,m.uu)(e),h={name:l||(null==i?void 0:i.title),description:v||(null==i?void 0:i.abstract),extension:null==i?void 0:i.extension,href:null==i?void 0:i.href};return a.Observable.concat.apply(a.Observable,w(u?[a.Observable.defer((function(){return(0,f.BY)(n,(0,b.go)(u)).then((function(e){return{resource:d,output:e,processType:O.zj.PERMISSIONS_RESOURCE}})).catch((function(e){var t;return{resource:d,error:(null==e||null===(t=e.data)||void 0===t?void 0:t.detail)||(null==e?void 0:e.statusText)||(null==e?void 0:e.message)||!0,processType:O.zj.PERMISSIONS_RESOURCE}}))})).switchMap((function(e){return a.Observable.of((0,y.tv)(e))}))]:[]).concat([a.Observable.of((0,c.Vj)(n,h,!1,!(s.length>0)||{title:"gnviewer.warningGeoLimitsSaveTitle",message:"gnviewer.warningGeoLimitsSaveMessage"}),(0,p.F4)())]))})).catch((function(e){var t;return a.Observable.of((0,c.cE)(e.data||e.message),(0,l.vU)({title:"map.mapError.errorTitle",message:(null==e||null===(t=e.data)||void 0===t?void 0:t.detail)||(null==e?void 0:e.message)||"map.mapError.errorDefault"}))})).startWith((0,c.id)())}))},gnSetMapThumbnail:function(e,t){return e.ofType(p.Js).switchMap((function(e){var r,n,o,i,s=t.getState(),u=(null===(r=s.gnresource)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.resource_type)||"map",v=null==s||null===(o=s.gnresource)||void 0===o?void 0:o.id,d=(null===(i=s.gnresource)||void 0===i?void 0:i.data)||{},h={srid:e.bbox.crs,bbox:[Object.values(e.bbox.bounds)[2],Object.values(e.bbox.bounds)[0],Object.values(e.bbox.bounds)[3],Object.values(e.bbox.bounds)[1]]};return a.Observable.defer((function(){return(0,f.CB)(v,h,u)})).switchMap((function(e){var t=Math.random();return a.Observable.of.apply(a.Observable,[(0,p.QN)(C(C({},d),{},{thumbnail_url:"".concat(e.thumbnail_url,"?").concat(t)})),(0,p.qs)(!1),(0,p.id)(C(C({},d),{},{thumbnail_url:"".concat(e.thumbnail_url,"?").concat(t)})),(0,c.rG)()].concat([(0,l.Vp)({title:"gnviewer.thumbnailsaved",message:"gnviewer.thumbnailsaved"})]))})).catch((function(e){return a.Observable.of((0,c.cE)(e.data),(0,l.vU)({title:"gnviewer.thumbnailnotsaved",message:"gnviewer.thumbnailnotsaved"}))}))}))},gnWatchStopPermissionsProcess:function(e,t){return e.ofType(y.v).filter((function(e){var t;return(null==e||null===(t=e.payload)||void 0===t?void 0:t.processType)===O.zj.PERMISSIONS_RESOURCE})).switchMap((function(e){var r,n,o,i,s,u=t.getState();if((0,m.fg)(u)!==(null==e||null===(r=e.payload)||void 0===r||null===(n=r.resource)||void 0===n?void 0:n.pk))return a.Observable.empty();if((null==e||null===(o=e.payload)||void 0===o?void 0:o.error)||(null==e||null===(i=e.payload)||void 0===i||null===(s=i.output)||void 0===s?void 0:s.status)===O.N5.FAILED)return a.Observable.of((0,l.vU)({title:"gnviewer.errorCompactPermissionsTitle",message:"gnviewer.errorCompactPermissionsMessage"}));var c=(0,m.iV)(u);return a.Observable.of((0,p.X7)(c))}))},gnWatchStopCopyProcessOnSave:function(e,t){return e.ofType(y.v).filter((function(e){var t;return(null==e||null===(t=e.payload)||void 0===t?void 0:t.processType)===O.zj.COPY_RESOURCE})).switchMap((function(e){var r,n,o,i,s,u,l,c,d,h,g,y=t.getState(),b=(0,m.fg)(y),S=null==y||null===(r=y.router)||void 0===r||null===(n=r.location)||void 0===n?void 0:n.pathname;if(b!==(null==e||null===(o=e.payload)||void 0===o||null===(i=o.resource)||void 0===i?void 0:i.pk)||S.includes("/detail/"))return a.Observable.empty();if((null==e||null===(s=e.payload)||void 0===s?void 0:s.error)||(null==e||null===(u=e.payload)||void 0===u||null===(l=u.output)||void 0===l?void 0:l.status)===O.N5.FAILED)return a.Observable.empty();var w=null==e||null===(c=e.payload)||void 0===c||null===(d=c.output)||void 0===d||null===(h=d.output_params)||void 0===h||null===(g=h.output)||void 0===g?void 0:g.uuid;return void 0===w?a.Observable.empty():a.Observable.defer((function(){return(0,f.LS)(w)})).switchMap((function(e){return window.location.href=(0,v.zL)(null==e?void 0:e.detail_url),a.Observable.empty()})).startWith((0,p.lf)(!0))}))}}},162170:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(73443),o=r(643892),i={};const a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.$X:return i;case n.rs:case n.oz:return{saving:!0,error:void 0,success:void 0};case o.Js:return{savingThumbnailMap:!0};case n.AY:return{success:t.success,saving:!1};case n.SW:return{error:t.error,saving:!1};case n.yB:return{};default:return e}}},798090:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(613002),o=r(173381),i=r(421915),a=r(208204),s=r(28795),u=r(913580);function l(e){for(var t=[],r=0,n=e.length;r<n;++r)t.push(e[r].clone());return t}const c=function(e){function t(t){e.call(this),this.geometries_=t||null,this.listenGeometriesChange_()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.unlistenGeometriesChange_=function(){if(this.geometries_)for(var e=0,t=this.geometries_.length;e<t;++e)(0,n.Ev)(this.geometries_[e],o.Z.CHANGE,this.changed,this)},t.prototype.listenGeometriesChange_=function(){if(this.geometries_)for(var e=0,t=this.geometries_.length;e<t;++e)(0,n.oL)(this.geometries_[e],o.Z.CHANGE,this.changed,this)},t.prototype.clone=function(){var e=new t(null);return e.setGeometries(this.geometries_),e},t.prototype.closestPointXY=function(e,t,r,n){if(n<(0,i.qf)(this.getExtent(),e,t))return n;for(var o=this.geometries_,a=0,s=o.length;a<s;++a)n=o[a].closestPointXY(e,t,r,n);return n},t.prototype.containsXY=function(e,t){for(var r=this.geometries_,n=0,o=r.length;n<o;++n)if(r[n].containsXY(e,t))return!0;return!1},t.prototype.computeExtent=function(e){(0,i.YN)(e);for(var t=this.geometries_,r=0,n=t.length;r<n;++r)(0,i.l7)(e,t[r].getExtent());return e},t.prototype.getGeometries=function(){return l(this.geometries_)},t.prototype.getGeometriesArray=function(){return this.geometries_},t.prototype.getSimplifiedGeometry=function(e){if(this.simplifiedGeometryRevision!=this.getRevision()&&((0,u.ZH)(this.simplifiedGeometryCache),this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||0!==this.simplifiedGeometryMaxMinSquaredTolerance&&e<this.simplifiedGeometryMaxMinSquaredTolerance)return this;var r=e.toString();if(this.simplifiedGeometryCache.hasOwnProperty(r))return this.simplifiedGeometryCache[r];for(var n=[],o=this.geometries_,i=!1,a=0,s=o.length;a<s;++a){var l=o[a],c=l.getSimplifiedGeometry(e);n.push(c),c!==l&&(i=!0)}if(i){var p=new t(null);return p.setGeometriesArray(n),this.simplifiedGeometryCache[r]=p,p}return this.simplifiedGeometryMaxMinSquaredTolerance=e,this},t.prototype.getType=function(){return s.Z.GEOMETRY_COLLECTION},t.prototype.intersectsExtent=function(e){for(var t=this.geometries_,r=0,n=t.length;r<n;++r)if(t[r].intersectsExtent(e))return!0;return!1},t.prototype.isEmpty=function(){return 0===this.geometries_.length},t.prototype.rotate=function(e,t){for(var r=this.geometries_,n=0,o=r.length;n<o;++n)r[n].rotate(e,t);this.changed()},t.prototype.scale=function(e,t,r){var n=r;n||(n=(0,i.qg)(this.getExtent()));for(var o=this.geometries_,a=0,s=o.length;a<s;++a)o[a].scale(e,t,n);this.changed()},t.prototype.setGeometries=function(e){this.setGeometriesArray(l(e))},t.prototype.setGeometriesArray=function(e){this.unlistenGeometriesChange_(),this.geometries_=e,this.listenGeometriesChange_(),this.changed()},t.prototype.applyTransform=function(e){for(var t=this.geometries_,r=0,n=t.length;r<n;++r)t[r].applyTransform(e);this.changed()},t.prototype.translate=function(e,t){for(var r=this.geometries_,n=0,o=r.length;n<o;++n)r[n].translate(e,t);this.changed()},t.prototype.disposeInternal=function(){this.unlistenGeometriesChange_(),e.prototype.disposeInternal.call(this)},t}(a.Z)}}]);