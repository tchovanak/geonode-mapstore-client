"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[34049],{38842:(e,t,r)=>{r.d(t,{Yf:()=>f,c3:()=>y,fY:()=>m,wk:()=>p});var n=r(218721),o=r.n(n),i=r(227361),a=r.n(i),l=r(313311),s=r.n(l),u=r(22222),c=r(308316),p=function(e){return o()(e,"localConfig.localizedLayerStyles")},f=function(e){var t=a()(e,"localConfig.plugins.dashboard",[]),r=s()(t,(function(e){return"DashboardEditor"===e.name}))||{};return a()(r,"cfg.catalog.localizedLayerStyles",!1)},y=function(e){return a()(e,"localConfig.localizedLayerStyles.name","mapstore_language")},m=(0,u.P1)(p,y,c.KV,(function(e,t,r){var n=[];return e&&n.push({name:t,value:r}),n}))},134049:(e,t,r)=>{r.r(t),r.d(t,{DEFAULT_PRINT_RATIO:()=>je,addMapTransformer:()=>xe,addTransformer:()=>Fe,addValidator:()=>Pe,getDefaultPrintingService:()=>Ce,getGeomType:()=>B,getLayoutName:()=>oe,getMapSize:()=>se,getMapTransformerChain:()=>ve,getMapZoom:()=>le,getMapfishLayersSpecification:()=>we,getMapfishPrintSpecification:()=>ce,getNearestZoom:()=>ae,getOlDefaultStyle:()=>We,getOpacity:()=>ee,getPrintScales:()=>ie,getResolutionMultiplier:()=>Te,getSpecTransformerChain:()=>be,getValidatorsChain:()=>Oe,getWMTSMatrixIds:()=>Me,isAnnotationLayer:()=>Q,localizationFilter:()=>pe,mapProjectionSelector:()=>ue,normalizeUrl:()=>ne,preloadData:()=>te,resetDefaultPrintingService:()=>Le,rgbaTorgb:()=>ze,specCreators:()=>Ee,toAbsoluteURL:()=>re,toMapfish:()=>ye,toOpenLayers2Style:()=>Re,toOpenLayers2TextStyle:()=>ke,wfsPreloaderFilter:()=>fe});var n=r(986267),o=r(233044),i=r(552259),a=r(143378),l=r(658767),s=r(443143),u=r(45992),c=r(218056),p=r(707294),f=r(993201),y=r(218672),m=r(701469),d=r.n(m),g=r(763105),h=r.n(g),S=r(313311),b=r.n(S),v=r(441609),O=r.n(v),L=r(14841),F=r.n(L),x=r(984596),P=r.n(x),C=r(531351),j=r.n(C),T=r(432420),w=r(253231),E=r(472500),M=r.n(E),z=r(876825),A=r(38842),k=r(308316),R=r(650148),W=r(727418),U=r.n(W),G=r(189734),N=r.n(G),I=r(91175),D=r.n(I),_=r(984023),Y=["params"];function V(e){return function(e){if(Array.isArray(e))return Z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||X(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){if(e){if("string"==typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(e,t):void 0}}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){$(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var H,K=(0,i.getGoogleMercatorScales)(0,21),B=function(e){return e.features&&e.features[0]&&e.features[0].geometry?e.features[0].geometry.type:e.features&&e.features[0].features&&e.features[0].style&&e.features[0].style.type?e.features[0].style.type:void 0},Q=function(e){return"annotations"===e.id||"Measurements"===e.name},ee=function(e){return e.opacity||(0===e.opacity?0:1)},te=function(e){var t=h()(e.layers,{type:"wfs"});return t.length>0?Promise.all(t.map((function(t){return(0,T.Bm)(t.url,t.name,J({outputFormat:"application/json",srsName:e.projection},(0,a.v)(t)||{})).then((function(e){var r=e.data;return{id:t.id,geoJson:r}}))}))).then((function(t){return J(J({},e),{},{layers:(e.layers||[]).map((function(e){var r=b()(t,{id:e.id});return"wfs"===e.type&&r?J(J({},e),r):e}))})})):Promise.resolve(e)},re=function(e,t){return-1!==e.search(/^\/\//)?window.location.protocol+e:-1!==e.search(/:\/\//)?e:-1!==e.search(/^\//)?(t||window.location.origin)+e:e},ne=function(e){var t=d()(e)?e[0]:e;return-1!==t.indexOf("?")&&(t=t.substring(0,t.indexOf("?"))),H.toAbsoluteURL(t)},oe=function(e){var t=[e.sheet];return e.includeLegend?e.twoPages&&t.push("2_pages_legend"):t.push("no_legend"),e.landscape&&t.push("landscape"),t.join("_")},ie=function(e){return e.scales.slice(0).reverse().map((function(e){return parseFloat(e.value)}))||[]},ae=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:K,n=r[Math.round(e)];return t.reduce((function(e,t,r){return t<n?e:r}),0)},le=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:K,n=t[Math.round(e)];return r.reduce((function(e,t,r){return t<n?e:r}),0)+1},se=function(e,t){if(e){var r=e.rotation?e.map.height:e.map.width;return{width:t,height:(e.rotation?e.map.width:e.map.height)/r*t}}return{width:100,height:100}},ue=function(e){var t,r,n;return null!==(t=null==e||null===(r=e.print)||void 0===r||null===(n=r.map)||void 0===n?void 0:n.projection)&&void 0!==t?t:"EPSG:3857"},ce=function(e,t){var r=e.params,o=J(J({},function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,Y)),r),a=ue(t),l=(0,n.reproject)(o.center,"EPSG:4326",o.projection),s=Math.round((0,i.reprojectZoom)(o.scaleZoom,a,o.projection)),u=(o.scales||(0,i.getScales)(o.projection))[s]||K[s],c=J(J({},o),{},{center:l,scaleZoom:s});return J({units:(0,n.getUnits)(o.projection),srs:(0,n.normalizeSRS)(o.projection||"EPSG:3857"),layout:H.getLayoutName(c),dpi:parseInt(o.resolution,10),outputFilename:"mapstore-print",geodetic:!1,mapTitle:o.name||"",comment:o.description||"",layers:H.getMapfishLayersSpecification(o.layers,c,t,"map"),pages:[{center:[l.x,l.y],scale:u,rotation:0}],legends:H.getMapfishLayersSpecification(o.layers,c,t,"legend")},r)},pe=function(e,t){var r=(0,A.wk)(e),n=(0,A.fY)(e),o=r?J(J({},t),{},{env:n,currentLanguage:(0,k.KV)(e)}):t;return Promise.resolve(o)},fe=function(e,t){return te(t)},ye=function(e,t){return Promise.resolve(ce(t,e))},me=[{name:"localization",transformer:pe},{name:"wfspreloader",transformer:fe},{name:"mapfishSpecCreator",transformer:ye}],de=[],ge=[],he=[];function Se(e,t){return t.reduce((function(e,t){return-1===e.findIndex((function(e){return e.name===t.name}))?[].concat(V(e),[t]):e.map((function(e){return e.name===t.name?t:e}))}),e)}function be(){var e=me.length;return N()(Se(me.map((function(e,t){return J(J({},e),{},{position:t})})),de.map((function(t,r){var n;return J(J({},t),{},{position:null!==(n=t.position)&&void 0!==n?n:r+e})}))),["position"])}function ve(){return ge}function Oe(){return he}function Le(){de=[],ge=[],he=[]}function Fe(e,t,r){de=Se(de,[{name:e,transformer:t,position:r}])}function xe(e,t){ge=Se(ge,[{name:e,transformer:t}])}function Pe(e,t,r){he=[{id:e,name:t,validator:r}].reduce((function(e,t){return-1===e.findIndex((function(e){return e.id===t.id}))?[].concat(V(e),[t]):e.map((function(e){return e.id===t.id?t:e}))}),he)}var Ce=function(){return{print:function(e){var t=(0,z.bh)().getState(),r=(0,R.DX)(t),n=e?J(J({},r),e):r;return be().map((function(e){return e.transformer})).reduce((function(e,r){return e.then((function(e){return r(t,e)}))}),Promise.resolve(n))},validate:function(){var e=(0,z.bh)().getState();return Oe().reduce((function(t,r){var n,o=null!==(n=t[r.name])&&void 0!==n?n:{valid:!0,errors:[]},i=r.validator(e,o);return J(J({},t),{},$({},r.name,{valid:o.valid&&i.valid,errors:[].concat(V(o.errors),V(i.errors||[]))}))}),{})},getMapConfiguration:function(){var e,t=(0,z.bh)().getState();return ve().map((function(e){return e.transformer})).reduce((function(e,r){return r(t,e)}),(null==t||null===(e=t.print)||void 0===e?void 0:e.map)||{})}}},je=96/72;function Te(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:je;return e/t*r}var we=function(e,t,r,n){return e.filter((function(e){return H.specCreators[e.type]&&H.specCreators[e.type][n]})).map((function(e){return H.specCreators[e.type][n](e,t,r)}))},Ee={wms:{map:function(e,t){return{baseURL:H.normalizeUrl(e.url)+"?",opacity:ee(e),singleTile:!1,type:"WMS",layers:[e.name],format:e.format||"image/png",styles:[e.style||""],customParams:(0,o.addAuthenticationParameter)(H.normalizeUrl(e.url),U()({TRANSPARENT:!0,TILED:!0,EXCEPTIONS:"application/vnd.ogc.se_inimage",scaleMethod:"accurate",ENV:(0,w.h)(t.env)},e.baseParams||{},e.params||{},J({},(0,a.v)({layerFilter:e.layerFilter,filterObj:e.filterObj}))))}},legend:function(e,t){return{name:e.title||e.name,classes:[{name:"",icons:[H.normalizeUrl(e.url)+M().format({query:(0,o.addAuthenticationParameter)(H.normalizeUrl(e.url),J({TRANSPARENT:!0,EXCEPTIONS:"application/vnd.ogc.se_xml",VERSION:"1.1.1",SERVICE:"WMS",REQUEST:"GetLegendGraphic",LAYER:e.name,LANGUAGE:t.language||"",STYLE:e.style||"",SCALE:t.scale,height:t.iconSize,width:t.iconSize,minSymbolSize:t.iconSize,LEGEND_OPTIONS:"forceLabels:"+(t.forceLabels?"on":"")+";fontAntialiasing:"+t.antiAliasing+";dpi:"+t.legendDpi+";fontStyle:"+((t.bold?"bold":t.italic&&"italic")||"")+";fontName:"+t.fontFamily+";fontSize:"+t.fontSize,format:"image/png"},U()({},e.params)))})]}]}}},vector:{map:function(e,t){return{type:"Vector",name:e.name,opacity:ee(e),styleProperty:"ms_style",styles:{1:H.toOpenLayers2Style(e,e.style),Polygon:H.toOpenLayers2Style(e,e.style,"Polygon"),LineString:H.toOpenLayers2Style(e,e.style,"LineString"),Point:H.toOpenLayers2Style(e,e.style,"Point"),FeatureCollection:H.toOpenLayers2Style(e,e.style,"FeatureCollection")},geoJson:(0,n.reprojectGeoJson)({type:"FeatureCollection",features:Q(e)&&(0,l._P)(e.features)||e.features.map((function(e){return J(J({},e),{},{properties:J(J({},e.properties),{},{ms_style:e&&e.geometry&&e.geometry.type&&e.geometry.type.replace("Multi","")||1})})}))},"EPSG:4326",t.projection)}}},graticule:{map:function(e,t,r){var n,o,a,l,s,u=D()(null==r||null===(n=r.print)||void 0===n?void 0:n.capabilities.layouts.filter((function(e){return e.name===oe(t)}))),c=null!==(o=Te(null==u||null===(a=u.map)||void 0===a?void 0:a.width,null!==(l=null===(s=t.size)||void 0===s?void 0:s.width)&&void 0!==l?l:370))&&void 0!==o?o:1,p=(0,i.getResolutionsForProjection)(t.projection).map((function(e){return e*c})),f=p[t.scaleZoom];return{type:"Vector",name:e.name||"graticule",opacity:ee(e),styleProperty:"ms_style",styles:{lines:H.toOpenLayers2Style(e,e.style,"GraticuleLines"),xlabels:H.toOpenLayers2TextStyle(e,e.labelXStyle,"GraticuleXLabels"),ylabels:H.toOpenLayers2TextStyle(e,e.labelYStyle,"GraticuleYLabels"),frame:H.toOpenLayers2Style(e,e.frameStyle,"GraticuleFrame")},geoJson:(0,_.XA)({resolutions:p,mapProjection:t.projection,gridProjection:e.srs||t.projection,extent:(0,i.calculateExtent)(t.center,f,t.size,t.projection),zoom:t.scaleZoom,withLabels:!0,xLabelFormatter:e.xLabelFormatter,yLabelFormatter:e.yLabelFormatter,xLabelStyle:H.toOpenLayers2TextStyle(e,e.labelXStyle,"GraticuleXLabels"),yLabelStyle:H.toOpenLayers2TextStyle(e,e.labelYStyle,"GraticuleYLabels"),frameSize:e.frameRatio})}}},wfs:{map:function(e){return{type:"Vector",name:e.name,opacity:ee(e),styleProperty:"ms_style",styles:{1:H.toOpenLayers2Style(e,e.style),Polygon:H.toOpenLayers2Style(e,e.style,"Polygon"),LineString:H.toOpenLayers2Style(e,e.style,"LineString"),Point:H.toOpenLayers2Style(e,e.style,"Point"),FeatureCollection:H.toOpenLayers2Style(e,e.style,"FeatureCollection")},geoJson:e.geoJson&&{type:"FeatureCollection",features:e.geoJson.features.map((function(e){return J(J({},e),{},{properties:J(J({},e.properties),{},{ms_style:e&&e.geometry&&e.geometry.type&&e.geometry.type.replace("Multi","")||1})})}))}}}},osm:{map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{baseURL:"http://a.tile.openstreetmap.org/",opacity:ee(e),singleTile:!1,type:"OSM",maxExtent:[-20037508.3392,-20037508.3392,20037508.3392,20037508.3392],tileSize:[256,256],extension:"png",resolutions:[156543.03390625,78271.516953125,39135.7584765625,19567.87923828125,9783.939619140625,4891.9698095703125,2445.9849047851562,1222.9924523925781,611.4962261962891,305.74811309814453,152.87405654907226,76.43702827453613,38.218514137268066,19.109257068634033,9.554628534317017,4.777314267158508,2.388657133579254,1.194328566789627,.5971642833948135]}}},mapquest:{map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{baseURL:"http://otile1.mqcdn.com/tiles/1.0.0/map/",opacity:ee(e),singleTile:!1,type:"OSM",maxExtent:[-20037508.3392,-20037508.3392,20037508.3392,20037508.3392],tileSize:[256,256],extension:"png",resolutions:[156543.03390625,78271.516953125,39135.7584765625,19567.87923828125,9783.939619140625,4891.9698095703125,2445.9849047851562,1222.9924523925781,611.4962261962891,305.74811309814453,152.87405654907226,76.43702827453613,38.218514137268066,19.109257068634033,9.554628534317017,4.777314267158508,2.388657133579254,1.194328566789627,.5971642833948135]}}},wmts:{map:function(e,t){var r=t.projection,n=(0,p.h7)(e,r),i=n.tileMatrixSet,a=n.tileMatrixSetName;if(!i)throw Error("tile matrix not found for pdf EPSG"+r);var l=H.getWMTSMatrixIds(e,i),s=H.normalizeUrl(P()(e.url)[0]),u={};return s.indexOf("{Style}")>=0&&(u={dimensions:["Style"],params:{STYLE:e.style}}),J(J({baseURL:encodeURI(s),format:e.format||"image/png",type:"WMTS",layer:e.name,"customParams ":(0,o.addAuthenticationParameter)(e.capabilitiesURL,U()({TRANSPARENT:!0}))},u),{},{matrixIds:l,matrixSet:a,style:e.style,name:e.name,requestEncoding:"RESTful"===e.requestEncoding?"REST":e.requestEncoding||"KVP",opacity:ee(e),version:e.version||"1.0.0"})}},tileprovider:{map:function(e){var t,r,n=(t=(0,u.h)(e.provider,e),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(t,r)||X(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];if(!O()(i)){var a,l=(0,c.ut)(J(J({},i),{},{url:null!==(a=null==i?void 0:i.url)&&void 0!==a?a:o}));if(!l)throw Error("No base URL found for this layer");var s=l.indexOf("{");return{baseURL:l.slice(0,s),path_format:l.slice(s).replace("{x}","${x}").replace("{y}","${y}").replace("{z}","${z}"),type:"xyz",extension:l.split(".").pop()||"png",opacity:ee(e),tileSize:[256,256],maxExtent:[-20037508.3392,-20037508.3392,20037508.3392,20037508.3392],resolutions:[156543.03390625,78271.516953125,39135.7584765625,19567.87923828125,9783.939619140625,4891.9698095703125,2445.9849047851562,1222.9924523925781,611.4962261962891,305.74811309814453,152.87405654907226,76.43702827453613,38.218514137268066,19.109257068634033,9.554628534317017,4.777314267158508,2.388657133579254,1.194328566789627,.5971642833948135].filter((function(e,t){var r=!0;return i.maxNativeZoom&&(r=r&&t<=i.maxNativeZoom),r}))}}return{}}},tms:{map:function(e){var t=e.tileMapUrl.split(e.tileMapService+"/")[1];return{type:"tms",opacity:ee(e),layer:t,baseURL:e.tileMapService.substring(0,e.tileMapService.lastIndexOf("/1.0.0")),tileSize:e.tileSize,format:(0,f.A)(e.tileMapUrl),maxExtent:[-20037508.3392,-20037508.3392,20037508.3392,20037508.3392],resolutions:e.tileSets.map((function(e){return e.resolution}))}}}},Me=function(e,t){var r=[],o=(0,n.normalizeSRS)(e.srs||"EPSG:3857",e.allowedSRS),i=(0,y.U2)(o).getMetersPerUnit();return t&&t.TileMatrix.map((function(e){var t=e["ows:Identifier"],n=28e-5*e.ScaleDenominator/i,o=[F()(e.TileWidth),F()(e.TileHeight)],a=e.TopLeftCorner&&e.TopLeftCorner.split(" ").map((function(e){return F()(e)})),l=[F()(e.MatrixWidth),F()(e.MatrixHeight)];return r.push({identifier:t,matrixSize:l,resolution:n,tileSize:o,topLeftCorner:a})})),r},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return-1!==e.indexOf("rgba")?"rgb".concat(e.slice(e.indexOf("("),e.lastIndexOf(",")),")"):e};function Ae(e,t){return["start"===e?"l":"end"===e?"r":"c","top"===t?"t":"bottom"===t?"b":"m"].join("")}var ke=function(e,t,r){if(!t)return H.getOlDefaultStyle(e,r);switch(r){case"GraticuleXLabels":return{fontColor:t.color||"#000000",fontFamily:t.font||"12px Calibri,sans-serif",fontWeight:t.fontWeight||"bold",fontSize:t.fontSize||"14",label:"{properties.valueText}",labelAlign:Ae(t.textAlign||"center",t.verticalAlign||"bottom"),labelOutlineColor:t.labelOutlineColor||"#FFFFFF",labelOutlineWidth:t.labelOutlineWidth/4||.5,rotation:t.rotation?-t.rotation:0};case"GraticuleYLabels":return{fontColor:t.color||"#000000",fontFamily:t.font||"12px Calibri,sans-serif",fontWeight:t.fontWeight||"bold",fontSize:t.fontSize||"14",label:"{properties.valueText}",labelAlign:Ae(t.textAlign||"end",t.verticalAlign||"middle"),labelOutlineColor:t.labelOutlineColor||"#FFFFFF",labelOutlineWidth:t.labelOutlineWidth/4||.5,rotation:t.rotation?-t.rotation:0};default:return{fontColor:"#000000",fontFamily:"12px Calibri,sans-serif",fontWeight:"bold",fontSize:"14",label:"{properties.valueText}",labelAlign:"cb",labelOutlineColor:"#FFFFFF",labelOutlineWidth:.5}}},Re=function(e,t,r){return t&&"marker"!==e.styleName?{fillColor:(0,s.qj)(t.fillColor),fillOpacity:t.fillOpacity,externalGraphic:t.iconUrl,pointRadius:t.radius,strokeColor:(0,s.qj)(t.color),strokeOpacity:t.opacity,strokeWidth:t.weight,strokeDashstyle:t.lineDash?j()(t.lineDash).join(" "):void 0}:H.getOlDefaultStyle(e,r)},We=function(e,t){switch(t||B(e)||""){case"Polygon":case"MultiPolygon":return{fillColor:"#0000FF",fillOpacity:.1,strokeColor:"#0000FF",strokeOpacity:1,strokeWidth:3,strokeDashstyle:"dash",strokeLinecap:"round"};case"MultiLineString":case"LineString":return{strokeColor:"#0000FF",strokeOpacity:1,strokeWidth:3};case"Point":case"MultiPoint":return"marker"===e.styleName?{externalGraphic:"http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/images/marker-icon.png",graphicWidth:25,graphicHeight:41,graphicXOffset:-12,graphicYOffset:-41}:{fillColor:"#FF0000",fillOpacity:0,strokeColor:"#FF0000",pointRadius:5,strokeOpacity:1,strokeWidth:1};case"GraticuleLines":return{strokeColor:"#ff7800",strokeOpacity:.9,strokeWidth:2,strokeDashstyle:"4 0.5"};case"GraticuleFrame":return{strokeColor:"#000000",strokeOpacity:1,strokeWidth:1,fillColor:"#FFFFFF",fillOpacity:1};case"GraticuleXLabels":return{fontColor:"#000000",fontFamily:"12px Calibri,sans-serif",fontWeight:"bold",fontSize:"14",label:"{properties.valueText}",labelAlign:"cb",labelOutlineColor:"#FFFFFF",labelOutlineWidth:.5};case"GraticuleYLabels":return{fontColor:"#000000",fontFamily:"12px Calibri,sans-serif",fontWeight:"bold",fontSize:"14",label:"{properties.valueText}",labelAlign:"rm",labelOutlineColor:"#FFFFFF",labelOutlineWidth:.5};default:return{fillColor:"#0000FF",fillOpacity:.1,strokeColor:"#0000FF",pointRadius:5,strokeOpacity:1,strokeWidth:1}}};H={toAbsoluteURL:re,getLayoutName:oe,getMapfishLayersSpecification:we,specCreators:Ee,normalizeUrl:ne,toOpenLayers2Style:Re,toOpenLayers2TextStyle:ke,getWMTSMatrixIds:Me,getOlDefaultStyle:We}},993201:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(264721),o=r.n(n),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.split("?")[0].split("@");if(t.length>1){var r=t[t.length-1];if(o()(["png","png8","jpeg","vnd.jpeg-png","gif"],r))return r}return null}}}]);