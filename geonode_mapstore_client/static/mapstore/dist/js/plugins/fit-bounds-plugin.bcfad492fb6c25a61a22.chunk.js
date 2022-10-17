"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[18294],{240986:(t,r,e)=>{e.d(r,{Z:()=>m});var o=e(124852),n=e(675263),i=e.n(n),a=e(986267),u=e(752043);function l(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,o=new Array(r);e<r;e++)o[e]=t[e];return o}var c={openlayers:{fit:function(t){var r,e=t.map,o=t.geometry,n=t.padding,i=t.geometryProjection,l=t.fixedZoom,c=t.maxZoom,f=t.duration,m=e.getView(),d=m.getProjection().getCode();if(2===o.length){var p=(0,a.reproject)(o,i,d),y=p.x,s=p.y;r=new u.Z([y,s])}else r=(0,a.reprojectBbox)(o,i,d);var g=n||{},v=g.top,b=void 0===v?0:v,h=g.right,j=void 0===h?0:h,x=g.bottom,P=void 0===x?0:x,S=g.left,Z=void 0===S?0:S;m.fit(r,{padding:[b,j,P,Z],maxZoom:l?m.getZoom():c,duration:f})}},leaflet:{fit:function(t){var r,e,o,n=t.map,i=t.geometry,u=t.padding,c=t.geometryProjection,f=t.fixedZoom,m=t.maxZoom,d=t.duration,p=f?n.getZoom():m,y=u.top,s=void 0===y?0:y,g=u.right,v=void 0===g?0:g,b=u.bottom,h=void 0===b?0:b,j=u.left,x=void 0===j?0:j;if(2===i.length){var P=(0,a.reproject)(i,c,"EPSG:4326"),S=P.x,Z=P.y;r=[[Z,S],[Z,S]]}else{var O=(e=(0,a.reprojectBbox)(i,c,"EPSG:4326"),o=4,function(t){if(Array.isArray(t))return t}(e)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var o,n,i=[],a=!0,u=!1;try{for(e=e.call(t);!(a=(o=e.next()).done)&&(i.push(o.value),!r||i.length!==r);a=!0);}catch(t){u=!0,n=t}finally{try{a||null==e.return||e.return()}finally{if(u)throw n}}return i}}(e,o)||function(t,r){if(t){if("string"==typeof t)return l(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(t,r):void 0}}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),w=O[0],A=O[1],E=O[2];r=[[A,w],[O[3],E]]}n.flyToBounds(r,{paddingTopLeft:[x,s],paddingBottomRight:[v,h],maxZoom:p,animate:!!d,duration:d/1e3})}}};function f(t){var r=t.map,e=t.mapType,n=t.active,i=t.geometry,a=t.geometryProjection,u=void 0===a?"EPSG:4326":a,l=t.padding,f=t.maxZoom,m=t.fixedZoom,d=t.duration,p=(0,o.useRef)();return p.current=function(){r&&c[e]&&c[e].fit({map:r,geometry:i,padding:l,geometryProjection:u,maxZoom:f,fixedZoom:m,duration:d})},(0,o.useEffect)((function(){n&&i&&p.current()}),[i,n]),null}f.propTypes={id:i().string,map:i().object,mapType:i().string,active:i().bool,geometry:i().array,geometryProjection:i().string,padding:i().object,maxZoom:i().number,fixedZoom:i().bool,duration:i().number},f.defaultProps={geometryProjection:"EPSG:4326",padding:{top:0,right:0,bottom:0,left:0}};const m=f},422595:(t,r,e)=>{e.r(r),e.d(r,{default:()=>s});var o=e(124852),n=e.n(o),i=e(322843),a=e(800827),u=e(171703),l=e(22222),c=e(240986),f=["mapProjection"];function m(){return m=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},m.apply(this,arguments)}function d(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,o=new Array(r);e<r;e++)o[e]=t[e];return o}var p=[-180,-85,180,85],y=(0,u.connect)((0,l.P1)([function(t){var r,e;return null==t||null===(r=t.controls)||void 0===r||null===(e=r.fitBounds)||void 0===e?void 0:e.geometry},a.uy],(function(t,r){return{geometry:t,mapProjection:r}})))((function(t){var r=t.mapProjection,e=function(t,r){if(null==t)return{};var e,o,n=function(t,r){if(null==t)return{};var e,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)e=i[o],r.indexOf(e)>=0||(n[e]=t[e]);return n}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)e=i[o],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}(t,f),i=(0,o.useMemo)((function(){return function(t,r){if(t&&["EPSG:900913","EPSG:3857"].includes(r)){var e=(y=4,function(t){if(Array.isArray(t))return t}(m=t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var o,n,i=[],a=!0,u=!1;try{for(e=e.call(t);!(a=(o=e.next()).done)&&(i.push(o.value),!r||i.length!==r);a=!0);}catch(t){u=!0,n=t}finally{try{a||null==e.return||e.return()}finally{if(u)throw n}}return i}}(m,y)||function(t,r){if(t){if("string"==typeof t)return d(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?d(t,r):void 0}}(m,y)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=e[0],n=e[1],i=e[2],a=e[3],u=p[0],l=p[1],c=p[2],f=p[3];return[o<u?u:o,n<l||n>f?l:n,i>c?c:i,a>f||a<l?f:a]}var m,y;return t}(e.geometry,r)}),[e.geometry,r]);return n().createElement(c.Z,m({active:!0},e,{geometry:i}))}));const s=(0,i.rx)("FitBounds",{component:function(){return null},containers:{Map:{priority:1,name:"FitBounds",Tool:y}},epics:{},reducers:{}})}}]);