(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[69141],{623068:(t,e,r)=>{"use strict";r.d(e,{Z:()=>u});var o=r(438906),n=r(613002),i=r(173381),a=r(558493);const u=function(t){function e(e){if(t.call(this),this.id_=void 0,this.geometryName_="geometry",this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,(0,n.oL)(this,(0,a.v_)(this.geometryName_),this.handleGeometryChanged_,this),e)if("function"==typeof e.getSimplifiedGeometry){var r=e;this.setGeometry(r)}else{var o=e;this.setProperties(o)}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){var t=new e(this.getProperties());t.setGeometryName(this.getGeometryName());var r=this.getGeometry();r&&t.setGeometry(r.clone());var o=this.getStyle();return o&&t.setStyle(o),t},e.prototype.getGeometry=function(){return this.get(this.geometryName_)},e.prototype.getId=function(){return this.id_},e.prototype.getGeometryName=function(){return this.geometryName_},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.handleGeometryChange_=function(){this.changed()},e.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&((0,n.bN)(this.geometryChangeKey_),this.geometryChangeKey_=null);var t=this.getGeometry();t&&(this.geometryChangeKey_=(0,n.oL)(t,i.Z.CHANGE,this.handleGeometryChange_,this)),this.changed()},e.prototype.setGeometry=function(t){this.set(this.geometryName_,t)},e.prototype.setStyle=function(t){var e,r;this.style_=t,this.styleFunction_=t?"function"==typeof(e=t)?e:(Array.isArray(e)?r=e:((0,o.h)("function"==typeof e.getZIndex,41),r=[e]),function(){return r}):void 0,this.changed()},e.prototype.setId=function(t){this.id_=t,this.changed()},e.prototype.setGeometryName=function(t){(0,n.Ev)(this,(0,a.v_)(this.geometryName_),this.handleGeometryChanged_,this),this.geometryName_=t,(0,n.oL)(this,(0,a.v_)(this.geometryName_),this.handleGeometryChanged_,this),this.handleGeometryChanged_()},e}(a.ZP)},518334:(t,e,r)=>{"use strict";r.d(e,{Z:()=>u,j:()=>s});var o=r(913580),n=r(949179),i=r(218672),a=function(){this.dataProjection=null,this.defaultFeatureProjection=null};a.prototype.getReadOptions=function(t,e){var r;return e&&(r={dataProjection:e.dataProjection?e.dataProjection:this.readProjection(t),featureProjection:e.featureProjection}),this.adaptOptions(r)},a.prototype.adaptOptions=function(t){return(0,o.f0)({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection},t)},a.prototype.getLastExtent=function(){return null},a.prototype.getType=function(){return(0,n.O3)()},a.prototype.readFeature=function(t,e){return(0,n.O3)()},a.prototype.readFeatures=function(t,e){return(0,n.O3)()},a.prototype.readGeometry=function(t,e){return(0,n.O3)()},a.prototype.readProjection=function(t){return(0,n.O3)()},a.prototype.writeFeature=function(t,e){return(0,n.O3)()},a.prototype.writeFeatures=function(t,e){return(0,n.O3)()},a.prototype.writeGeometry=function(t,e){return(0,n.O3)()};const u=a;function s(t,e,r){var o,n=r?(0,i.U2)(r.featureProjection):null,a=r?(0,i.U2)(r.dataProjection):null;if(o=n&&a&&!(0,i.OP)(n,a)?Array.isArray(t)?(0,i.$A)(t,a,n):(e?t.clone():t).transform(e?n:a,e?a:n):t,e&&r&&void 0!==r.decimals&&!Array.isArray(o)){var u=Math.pow(10,r.decimals);o===t&&(o=t.clone()),o.applyTransform((function(t){for(var e=0,r=t.length;e<r;++e)t[e]=Math.round(t[e]*u)/u;return t}))}return o}},934007:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});const o={ARRAY_BUFFER:"arraybuffer",JSON:"json",TEXT:"text",XML:"xml"}},169141:(t,e,r)=>{"use strict";r.d(e,{Z:()=>_});var o=r(438906),n=r(623068),i=r(518334),a=r(598968),u=r(798090),s=r(944538),c=r(525642),p=r(552329),y=r(513987),d=r(752043),h=r(640353),f=r(913580),m=r(218672),l=r(28795);function g(t,e){if(!t)return null;var r;switch(t.type){case l.Z.POINT:r=function(t){return new d.Z(t.coordinates)}(t);break;case l.Z.LINE_STRING:r=function(t){return new s.Z(t.coordinates)}(t);break;case l.Z.POLYGON:r=function(t){return new h.ZP(t.coordinates)}(t);break;case l.Z.MULTI_POINT:r=function(t){return new p.Z(t.coordinates)}(t);break;case l.Z.MULTI_LINE_STRING:r=function(t){return new c.Z(t.coordinates)}(t);break;case l.Z.MULTI_POLYGON:r=function(t){return new y.Z(t.coordinates)}(t);break;case l.Z.GEOMETRY_COLLECTION:r=function(t,e){var r=t.geometries.map((function(t){return g(t,undefined)}));return new u.default(r)}(t);break;default:throw new Error("Unsupported GeoJSON type: "+t.type)}return(0,i.j)(r,!1,e)}function O(t,e){var r,o=(t=(0,i.j)(t,!0,e)).getType();switch(o){case l.Z.POINT:r=function(t,e){return{type:"Point",coordinates:t.getCoordinates()}}(t);break;case l.Z.LINE_STRING:r=function(t,e){return{type:"LineString",coordinates:t.getCoordinates()}}(t);break;case l.Z.POLYGON:r=function(t,e){var r;return e&&(r=e.rightHanded),{type:"Polygon",coordinates:t.getCoordinates(r)}}(t,e);break;case l.Z.MULTI_POINT:r=function(t,e){return{type:"MultiPoint",coordinates:t.getCoordinates()}}(t);break;case l.Z.MULTI_LINE_STRING:r=function(t,e){return{type:"MultiLineString",coordinates:t.getCoordinates()}}(t);break;case l.Z.MULTI_POLYGON:r=function(t,e){var r;return e&&(r=e.rightHanded),{type:"MultiPolygon",coordinates:t.getCoordinates(r)}}(t,e);break;case l.Z.GEOMETRY_COLLECTION:r=function(t,e){return{type:"GeometryCollection",geometries:t.getGeometriesArray().map((function(t){var r=(0,f.f0)({},e);return delete r.featureProjection,O(t,r)}))}}(t,e);break;case l.Z.CIRCLE:r={type:"GeometryCollection",geometries:[]};break;default:throw new Error("Unsupported geometry type: "+o)}return r}const _=function(t){function e(e){var r=e||{};t.call(this),this.dataProjection=(0,m.U2)(r.dataProjection?r.dataProjection:"EPSG:4326"),r.featureProjection&&(this.defaultFeatureProjection=(0,m.U2)(r.featureProjection)),this.geometryName_=r.geometryName,this.extractGeometryName_=r.extractGeometryName}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.readFeatureFromObject=function(t,e){var r,o=g((r="Feature"===t.type?t:{type:"Feature",geometry:t,properties:null}).geometry,e),i=new n.Z;return this.geometryName_?i.setGeometryName(this.geometryName_):this.extractGeometryName_&&"geometry_name"in r!==void 0&&i.setGeometryName(r.geometry_name),i.setGeometry(o),"id"in r&&i.setId(r.id),r.properties&&i.setProperties(r.properties),i},e.prototype.readFeaturesFromObject=function(t,e){var r=null;if("FeatureCollection"===t.type){r=[];for(var o=t.features,n=0,i=o.length;n<i;++n)r.push(this.readFeatureFromObject(o[n],e))}else r=[this.readFeatureFromObject(t,e)];return r},e.prototype.readGeometryFromObject=function(t,e){return g(t,e)},e.prototype.readProjectionFromObject=function(t){var e,r=t.crs;return r?"name"==r.type?e=(0,m.U2)(r.properties.name):(0,o.h)(!1,36):e=this.dataProjection,e},e.prototype.writeFeatureObject=function(t,e){e=this.adaptOptions(e);var r={type:"Feature",geometry:null,properties:null},o=t.getId();void 0!==o&&(r.id=o);var n=t.getGeometry();n&&(r.geometry=O(n,e));var i=t.getProperties();return delete i[t.getGeometryName()],(0,f.xb)(i)||(r.properties=i),r},e.prototype.writeFeaturesObject=function(t,e){e=this.adaptOptions(e);for(var r=[],o=0,n=t.length;o<n;++o)r.push(this.writeFeatureObject(t[o],e));return{type:"FeatureCollection",features:r}},e.prototype.writeGeometryObject=function(t,e){return O(t,this.adaptOptions(e))},e}(a.Z)},598968:(t,e,r)=>{"use strict";r.d(e,{Z:()=>u});var o=r(949179),n=r(518334),i=r(934007);function a(t){return"string"==typeof t?JSON.parse(t)||null:null!==t?t:null}const u=function(t){function e(){t.call(this)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getType=function(){return i.Z.JSON},e.prototype.readFeature=function(t,e){return this.readFeatureFromObject(a(t),this.getReadOptions(t,e))},e.prototype.readFeatures=function(t,e){return this.readFeaturesFromObject(a(t),this.getReadOptions(t,e))},e.prototype.readFeatureFromObject=function(t,e){return(0,o.O3)()},e.prototype.readFeaturesFromObject=function(t,e){return(0,o.O3)()},e.prototype.readGeometry=function(t,e){return this.readGeometryFromObject(a(t),this.getReadOptions(t,e))},e.prototype.readGeometryFromObject=function(t,e){return(0,o.O3)()},e.prototype.readProjection=function(t){return this.readProjectionFromObject(a(t))},e.prototype.readProjectionFromObject=function(t){return(0,o.O3)()},e.prototype.writeFeature=function(t,e){return JSON.stringify(this.writeFeatureObject(t,e))},e.prototype.writeFeatureObject=function(t,e){return(0,o.O3)()},e.prototype.writeFeatures=function(t,e){return JSON.stringify(this.writeFeaturesObject(t,e))},e.prototype.writeFeaturesObject=function(t,e){return(0,o.O3)()},e.prototype.writeGeometry=function(t,e){return JSON.stringify(this.writeGeometryObject(t,e))},e.prototype.writeGeometryObject=function(t,e){return(0,o.O3)()},e}(n.Z)}}]);