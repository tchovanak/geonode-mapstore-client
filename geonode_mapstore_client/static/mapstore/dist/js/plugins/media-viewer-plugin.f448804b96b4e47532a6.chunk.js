(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2184],{92761:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>O});var r=t(67294),a=t.n(r),o=t(22843),i=t(82017),l=t(32425),u=t(75875),c=t.n(u),s=["jpg","jpeg","png"],d=["mp4","mpg","avi","m4v","mp2","3gp","flv","vdo","afl","mpga","webm"],p=["glb","gltf"],f=["pcd"];function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return v(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?v(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var g=t(16111),b=t(35721);function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(this,arguments)}var y=(0,r.lazy)((function(){return Promise.all([t.e(813),t.e(4333)]).then(t.bind(t,4333))})),w={image:i.ZP,video:i.ZP,pdf:function(e){var n=e.src,t=m((0,r.useState)(null),2),o=t[0],i=t[1],u=m((0,r.useState)(!1),2),s=u[0],d=u[1];return(0,r.useEffect)((function(){d(!0),function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"application/pdf";return c().get(e,{responseType:"blob"}).then((function(e){var t=e.data,r=new Blob([t],{type:n});return URL.createObjectURL(r)}))}(n).then((function(e){d(!1),i(e)})).finally((function(){d(!1)}))}),[]),s?a().createElement("div",{className:"pdf-loader"},a().createElement(l.Z,{size:70})):a().createElement("iframe",{className:"gn-pdf-viewer",type:"application/pdf",frameBorder:"0",scrolling:"auto",height:"100%",width:"100%",src:o})},gltf:y,pcd:y,unsupported:function(e){var n=e.thumbnail;return a().createElement("div",{className:"gn-media-unsupported",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:"url(".concat(n,")"),backgroundSize:"contain",backgroundPosition:"center"}})}},E={video:{mode:"view",inView:!0,fit:"contain"},image:{fit:"contain",enableFullscreen:!0,loaderComponent:function(){return a().createElement("div",{className:"pdf-loader"},a().createElement(l.Z,{size:70}))}},pdf:{},unsupported:{}};const k=function(e){var n,t=e.resource,o=(0,b.NN)(),i=(t&&(o[t.subtype]||o[t.resource_type])||{}).canPreviewed,l=(null==t?void 0:t.pk)&&i&&i(t);if(t&&l){var u="pdf"===(n=t.extension)?"pdf":s.includes(n)?"image":d.includes(n)?"video":p.includes(n)?"gltf":f.includes(n)?"pcd":"unsupported",c=w[u];return a().createElement(r.Suspense,{fallback:null},a().createElement(c,h({mediaType:u},E[u],{description:t.abstract,id:t.pk,thumbnail:t.thumbnail_url,src:t.href})))}return a().createElement(g.Z,{msgId:"gnhome.permissionsMissing"})};var S=t(33664),j=t(22222),P=t(72036),N=(0,S.connect)((0,j.P1)([function(e){var n;return(null==e||null===(n=e.gnresource)||void 0===n?void 0:n.data)||null},function(e){var n;return(null==e||null===(n=e.gnresource)||void 0===n?void 0:n.loading)||!1}],(function(e,n,t){return{resource:e,loading:n,editMode:t}})))(k),A=(0,S.connect)((0,j.P1)([],(function(){return{}})),{})((function(){return a().createElement("div",{className:"gn-media-viewer"},a().createElement(N,null))}));const O=(0,o.rx)("MediaViewer",{component:A,containers:{},epics:{},reducers:{gnresource:P.Z}})}}]);