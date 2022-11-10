(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[71584],{425960:(e,t)=>{"use strict";function r(e,t,r){void 0===r&&(r={});var n={type:"Feature"};return(0===r.id||r.id)&&(n.id=r.id),r.bbox&&(n.bbox=r.bbox),n.properties=t||{},n.geometry=e,n}function n(e,t,n){if(void 0===n&&(n={}),!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(e.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!d(e[0])||!d(e[1]))throw new Error("coordinates must contain numbers");return r({type:"Point",coordinates:e},t,n)}function i(e,t,n){void 0===n&&(n={});for(var i=0,o=e;i<o.length;i++){var a=o[i];if(a.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var u=0;u<a[a.length-1].length;u++)if(a[a.length-1][u]!==a[0][u])throw new Error("First and last Position are not equivalent.")}return r({type:"Polygon",coordinates:e},t,n)}function o(e,t,n){if(void 0===n&&(n={}),e.length<2)throw new Error("coordinates must be an array of two or more positions");return r({type:"LineString",coordinates:e},t,n)}function a(e,t){void 0===t&&(t={});var r={type:"FeatureCollection"};return t.id&&(r.id=t.id),t.bbox&&(r.bbox=t.bbox),r.features=e,r}function u(e,t,n){return void 0===n&&(n={}),r({type:"MultiLineString",coordinates:e},t,n)}function s(e,t,n){return void 0===n&&(n={}),r({type:"MultiPoint",coordinates:e},t,n)}function l(e,t,n){return void 0===n&&(n={}),r({type:"MultiPolygon",coordinates:e},t,n)}function c(e,r){void 0===r&&(r="kilometers");var n=t.factors[r];if(!n)throw new Error(r+" units is invalid");return e*n}function f(e,r){void 0===r&&(r="kilometers");var n=t.factors[r];if(!n)throw new Error(r+" units is invalid");return e/n}function h(e){return e%(2*Math.PI)*180/Math.PI}function d(e){return!isNaN(e)&&null!==e&&!Array.isArray(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.earthRadius=6371008.8,t.factors={centimeters:100*t.earthRadius,centimetres:100*t.earthRadius,degrees:t.earthRadius/111325,feet:3.28084*t.earthRadius,inches:39.37*t.earthRadius,kilometers:t.earthRadius/1e3,kilometres:t.earthRadius/1e3,meters:t.earthRadius,metres:t.earthRadius,miles:t.earthRadius/1609.344,millimeters:1e3*t.earthRadius,millimetres:1e3*t.earthRadius,nauticalmiles:t.earthRadius/1852,radians:1,yards:1.0936*t.earthRadius},t.unitsFactors={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:.001,kilometres:.001,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/t.earthRadius,yards:1.0936133},t.areaFactors={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046},t.feature=r,t.geometry=function(e,t,r){switch(void 0===r&&(r={}),e){case"Point":return n(t).geometry;case"LineString":return o(t).geometry;case"Polygon":return i(t).geometry;case"MultiPoint":return s(t).geometry;case"MultiLineString":return u(t).geometry;case"MultiPolygon":return l(t).geometry;default:throw new Error(e+" is invalid")}},t.point=n,t.points=function(e,t,r){return void 0===r&&(r={}),a(e.map((function(e){return n(e,t)})),r)},t.polygon=i,t.polygons=function(e,t,r){return void 0===r&&(r={}),a(e.map((function(e){return i(e,t)})),r)},t.lineString=o,t.lineStrings=function(e,t,r){return void 0===r&&(r={}),a(e.map((function(e){return o(e,t)})),r)},t.featureCollection=a,t.multiLineString=u,t.multiPoint=s,t.multiPolygon=l,t.geometryCollection=function(e,t,n){return void 0===n&&(n={}),r({type:"GeometryCollection",geometries:e},t,n)},t.round=function(e,t){if(void 0===t&&(t=0),t&&!(t>=0))throw new Error("precision must be a positive number");var r=Math.pow(10,t||0);return Math.round(e*r)/r},t.radiansToLength=c,t.lengthToRadians=f,t.lengthToDegrees=function(e,t){return h(f(e,t))},t.bearingToAzimuth=function(e){var t=e%360;return t<0&&(t+=360),t},t.radiansToDegrees=h,t.degreesToRadians=function(e){return e%360*Math.PI/180},t.convertLength=function(e,t,r){if(void 0===t&&(t="kilometers"),void 0===r&&(r="kilometers"),!(e>=0))throw new Error("length must be a positive number");return c(f(e,t),r)},t.convertArea=function(e,r,n){if(void 0===r&&(r="meters"),void 0===n&&(n="kilometers"),!(e>=0))throw new Error("area must be a positive number");var i=t.areaFactors[r];if(!i)throw new Error("invalid original units");var o=t.areaFactors[n];if(!o)throw new Error("invalid final units");return e/i*o},t.isNumber=d,t.isObject=function(e){return!!e&&e.constructor===Object},t.validateBBox=function(e){if(!e)throw new Error("bbox is required");if(!Array.isArray(e))throw new Error("bbox must be an Array");if(4!==e.length&&6!==e.length)throw new Error("bbox must be an Array of 4 or 6 numbers");e.forEach((function(e){if(!d(e))throw new Error("bbox must only contain numbers")}))},t.validateId=function(e){if(!e)throw new Error("id is required");if(-1===["string","number"].indexOf(typeof e))throw new Error("id must be a number or a string")}},357996:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(425960);function i(e,t,r){if(null!==e)for(var n,o,a,u,s,l,c,f,h=0,d=0,g=e.type,p="FeatureCollection"===g,m="Feature"===g,y=p?e.features.length:1,v=0;v<y;v++){s=(f=!!(c=p?e.features[v].geometry:m?e.geometry:e)&&"GeometryCollection"===c.type)?c.geometries.length:1;for(var b=0;b<s;b++){var w=0,x=0;if(null!==(u=f?c.geometries[b]:c)){l=u.coordinates;var M=u.type;switch(h=!r||"Polygon"!==M&&"MultiPolygon"!==M?0:1,M){case null:break;case"Point":if(!1===t(l,d,v,w,x))return!1;d++,w++;break;case"LineString":case"MultiPoint":for(n=0;n<l.length;n++){if(!1===t(l[n],d,v,w,x))return!1;d++,"MultiPoint"===M&&w++}"LineString"===M&&w++;break;case"Polygon":case"MultiLineString":for(n=0;n<l.length;n++){for(o=0;o<l[n].length-h;o++){if(!1===t(l[n][o],d,v,w,x))return!1;d++}"MultiLineString"===M&&w++,"Polygon"===M&&x++}"Polygon"===M&&w++;break;case"MultiPolygon":for(n=0;n<l.length;n++){for(x=0,o=0;o<l[n].length;o++){for(a=0;a<l[n][o].length-h;a++){if(!1===t(l[n][o][a],d,v,w,x))return!1;d++}x++}w++}break;case"GeometryCollection":for(n=0;n<u.geometries.length;n++)if(!1===i(u.geometries[n],t,r))return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function o(e,t){var r;switch(e.type){case"FeatureCollection":for(r=0;r<e.features.length&&!1!==t(e.features[r].properties,r);r++);break;case"Feature":t(e.properties,0)}}function a(e,t){if("Feature"===e.type)t(e,0);else if("FeatureCollection"===e.type)for(var r=0;r<e.features.length&&!1!==t(e.features[r],r);r++);}function u(e,t){var r,n,i,o,a,u,s,l,c,f,h=0,d="FeatureCollection"===e.type,g="Feature"===e.type,p=d?e.features.length:1;for(r=0;r<p;r++){for(u=d?e.features[r].geometry:g?e.geometry:e,l=d?e.features[r].properties:g?e.properties:{},c=d?e.features[r].bbox:g?e.bbox:void 0,f=d?e.features[r].id:g?e.id:void 0,a=(s=!!u&&"GeometryCollection"===u.type)?u.geometries.length:1,i=0;i<a;i++)if(null!==(o=s?u.geometries[i]:u))switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":if(!1===t(o,h,l,c,f))return!1;break;case"GeometryCollection":for(n=0;n<o.geometries.length;n++)if(!1===t(o.geometries[n],h,l,c,f))return!1;break;default:throw new Error("Unknown Geometry Type")}else if(!1===t(null,h,l,c,f))return!1;h++}}function s(e,t){u(e,(function(e,r,i,o,a){var u,s=null===e?null:e.type;switch(s){case null:case"Point":case"LineString":case"Polygon":return!1!==t(n.feature(e,i,{bbox:o,id:a}),r,0)&&void 0}switch(s){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon"}for(var l=0;l<e.coordinates.length;l++){var c={type:u,coordinates:e.coordinates[l]};if(!1===t(n.feature(c,i),r,l))return!1}}))}function l(e,t){s(e,(function(e,r,o){var a=0;if(e.geometry){var u=e.geometry.type;if("Point"!==u&&"MultiPoint"!==u){var s,l=0,c=0,f=0;return!1!==i(e,(function(i,u,h,d,g){if(void 0===s||r>l||d>c||g>f)return s=i,l=r,c=d,f=g,void(a=0);var p=n.lineString([s,i],e.properties);if(!1===t(p,r,o,g,a))return!1;a++,s=i}))&&void 0}}}))}function c(e,t){if(!e)throw new Error("geojson is required");s(e,(function(e,r,i){if(null!==e.geometry){var o=e.geometry.type,a=e.geometry.coordinates;switch(o){case"LineString":if(!1===t(e,r,i,0,0))return!1;break;case"Polygon":for(var u=0;u<a.length;u++)if(!1===t(n.lineString(a[u],e.properties),r,i,u))return!1}}}))}t.coordAll=function(e){var t=[];return i(e,(function(e){t.push(e)})),t},t.coordEach=i,t.coordReduce=function(e,t,r,n){var o=r;return i(e,(function(e,n,i,a,u){o=0===n&&void 0===r?e:t(o,e,n,i,a,u)}),n),o},t.featureEach=a,t.featureReduce=function(e,t,r){var n=r;return a(e,(function(e,i){n=0===i&&void 0===r?e:t(n,e,i)})),n},t.findPoint=function(e,t){if(t=t||{},!n.isObject(t))throw new Error("options is invalid");var r,i=t.featureIndex||0,o=t.multiFeatureIndex||0,a=t.geometryIndex||0,u=t.coordIndex||0,s=t.properties;switch(e.type){case"FeatureCollection":i<0&&(i=e.features.length+i),s=s||e.features[i].properties,r=e.features[i].geometry;break;case"Feature":s=s||e.properties,r=e.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":r=e;break;default:throw new Error("geojson is invalid")}if(null===r)return null;var l=r.coordinates;switch(r.type){case"Point":return n.point(l,s,t);case"MultiPoint":return o<0&&(o=l.length+o),n.point(l[o],s,t);case"LineString":return u<0&&(u=l.length+u),n.point(l[u],s,t);case"Polygon":return a<0&&(a=l.length+a),u<0&&(u=l[a].length+u),n.point(l[a][u],s,t);case"MultiLineString":return o<0&&(o=l.length+o),u<0&&(u=l[o].length+u),n.point(l[o][u],s,t);case"MultiPolygon":return o<0&&(o=l.length+o),a<0&&(a=l[o].length+a),u<0&&(u=l[o][a].length-u),n.point(l[o][a][u],s,t)}throw new Error("geojson is invalid")},t.findSegment=function(e,t){if(t=t||{},!n.isObject(t))throw new Error("options is invalid");var r,i=t.featureIndex||0,o=t.multiFeatureIndex||0,a=t.geometryIndex||0,u=t.segmentIndex||0,s=t.properties;switch(e.type){case"FeatureCollection":i<0&&(i=e.features.length+i),s=s||e.features[i].properties,r=e.features[i].geometry;break;case"Feature":s=s||e.properties,r=e.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":r=e;break;default:throw new Error("geojson is invalid")}if(null===r)return null;var l=r.coordinates;switch(r.type){case"Point":case"MultiPoint":return null;case"LineString":return u<0&&(u=l.length+u-1),n.lineString([l[u],l[u+1]],s,t);case"Polygon":return a<0&&(a=l.length+a),u<0&&(u=l[a].length+u-1),n.lineString([l[a][u],l[a][u+1]],s,t);case"MultiLineString":return o<0&&(o=l.length+o),u<0&&(u=l[o].length+u-1),n.lineString([l[o][u],l[o][u+1]],s,t);case"MultiPolygon":return o<0&&(o=l.length+o),a<0&&(a=l[o].length+a),u<0&&(u=l[o][a].length-u-1),n.lineString([l[o][a][u],l[o][a][u+1]],s,t)}throw new Error("geojson is invalid")},t.flattenEach=s,t.flattenReduce=function(e,t,r){var n=r;return s(e,(function(e,i,o){n=0===i&&0===o&&void 0===r?e:t(n,e,i,o)})),n},t.geomEach=u,t.geomReduce=function(e,t,r){var n=r;return u(e,(function(e,i,o,a,u){n=0===i&&void 0===r?e:t(n,e,i,o,a,u)})),n},t.lineEach=c,t.lineReduce=function(e,t,r){var n=r;return c(e,(function(e,i,o,a){n=0===i&&void 0===r?e:t(n,e,i,o,a)})),n},t.propEach=o,t.propReduce=function(e,t,r){var n=r;return o(e,(function(e,i){n=0===i&&void 0===r?e:t(n,e,i)})),n},t.segmentEach=l,t.segmentReduce=function(e,t,r){var n=r,i=!1;return l(e,(function(e,o,a,u,s){n=!1===i&&void 0===r?e:t(n,e,o,a,u,s),i=!0})),n}},78109:(e,t,r)=>{var n=r(382582),i=r(425960),o=r(357996),a=r(813292).default,u=o.featureEach,s=(o.coordEach,i.polygon,i.featureCollection);function l(e){var t=new n(e);return t.insert=function(e){if("Feature"!==e.type)throw new Error("invalid feature");return e.bbox=e.bbox?e.bbox:a(e),n.prototype.insert.call(this,e)},t.load=function(e){var t=[];return Array.isArray(e)?e.forEach((function(e){if("Feature"!==e.type)throw new Error("invalid features");e.bbox=e.bbox?e.bbox:a(e),t.push(e)})):u(e,(function(e){if("Feature"!==e.type)throw new Error("invalid features");e.bbox=e.bbox?e.bbox:a(e),t.push(e)})),n.prototype.load.call(this,t)},t.remove=function(e,t){if("Feature"!==e.type)throw new Error("invalid feature");return e.bbox=e.bbox?e.bbox:a(e),n.prototype.remove.call(this,e,t)},t.clear=function(){return n.prototype.clear.call(this)},t.search=function(e){var t=n.prototype.search.call(this,this.toBBox(e));return s(t)},t.collides=function(e){return n.prototype.collides.call(this,this.toBBox(e))},t.all=function(){var e=n.prototype.all.call(this);return s(e)},t.toJSON=function(){return n.prototype.toJSON.call(this)},t.fromJSON=function(e){return n.prototype.fromJSON.call(this,e)},t.toBBox=function(e){var t;if(e.bbox)t=e.bbox;else if(Array.isArray(e)&&4===e.length)t=e;else if(Array.isArray(e)&&6===e.length)t=[e[0],e[1],e[3],e[4]];else if("Feature"===e.type)t=a(e);else{if("FeatureCollection"!==e.type)throw new Error("invalid geojson");t=a(e)}return{minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}},t}e.exports=l,e.exports.default=l},382582:function(e){e.exports=function(){"use strict";function e(e,n,i,o,a){!function e(r,n,i,o,a){for(;o>i;){if(o-i>600){var u=o-i+1,s=n-i+1,l=Math.log(u),c=.5*Math.exp(2*l/3),f=.5*Math.sqrt(l*c*(u-c)/u)*(s-u/2<0?-1:1);e(r,n,Math.max(i,Math.floor(n-s*c/u+f)),Math.min(o,Math.floor(n+(u-s)*c/u+f)),a)}var h=r[n],d=i,g=o;for(t(r,i,n),a(r[o],h)>0&&t(r,i,o);d<g;){for(t(r,d,g),d++,g--;a(r[d],h)<0;)d++;for(;a(r[g],h)>0;)g--}0===a(r[i],h)?t(r,i,g):t(r,++g,o),g<=n&&(i=g+1),n<=g&&(o=g-1)}}(e,n,i||0,o||e.length-1,a||r)}function t(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function r(e,t){return e<t?-1:e>t?1:0}var n=function(e){void 0===e&&(e=9),this._maxEntries=Math.max(4,e),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function i(e,t,r){if(!r)return t.indexOf(e);for(var n=0;n<t.length;n++)if(r(e,t[n]))return n;return-1}function o(e,t){a(e,0,e.children.length,t,e)}function a(e,t,r,n,i){i||(i=g(null)),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(var o=t;o<r;o++){var a=e.children[o];u(i,e.leaf?n(a):a)}return i}function u(e,t){return e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY),e}function s(e,t){return e.minX-t.minX}function l(e,t){return e.minY-t.minY}function c(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function f(e){return e.maxX-e.minX+(e.maxY-e.minY)}function h(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function d(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function g(e){return{children:e,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function p(t,r,n,i,o){for(var a=[r,n];a.length;)if(!((n=a.pop())-(r=a.pop())<=i)){var u=r+Math.ceil((n-r)/i/2)*i;e(t,u,r,n,o),a.push(r,u,u,n)}}return n.prototype.all=function(){return this._all(this.data,[])},n.prototype.search=function(e){var t=this.data,r=[];if(!d(e,t))return r;for(var n=this.toBBox,i=[];t;){for(var o=0;o<t.children.length;o++){var a=t.children[o],u=t.leaf?n(a):a;d(e,u)&&(t.leaf?r.push(a):h(e,u)?this._all(a,r):i.push(a))}t=i.pop()}return r},n.prototype.collides=function(e){var t=this.data;if(!d(e,t))return!1;for(var r=[];t;){for(var n=0;n<t.children.length;n++){var i=t.children[n],o=t.leaf?this.toBBox(i):i;if(d(e,o)){if(t.leaf||h(e,o))return!0;r.push(i)}}t=r.pop()}return!1},n.prototype.load=function(e){if(!e||!e.length)return this;if(e.length<this._minEntries){for(var t=0;t<e.length;t++)this.insert(e[t]);return this}var r=this._build(e.slice(),0,e.length-1,0);if(this.data.children.length)if(this.data.height===r.height)this._splitRoot(this.data,r);else{if(this.data.height<r.height){var n=this.data;this.data=r,r=n}this._insert(r,this.data.height-r.height-1,!0)}else this.data=r;return this},n.prototype.insert=function(e){return e&&this._insert(e,this.data.height-1),this},n.prototype.clear=function(){return this.data=g([]),this},n.prototype.remove=function(e,t){if(!e)return this;for(var r,n,o,a=this.data,u=this.toBBox(e),s=[],l=[];a||s.length;){if(a||(a=s.pop(),n=s[s.length-1],r=l.pop(),o=!0),a.leaf){var c=i(e,a.children,t);if(-1!==c)return a.children.splice(c,1),s.push(a),this._condense(s),this}o||a.leaf||!h(a,u)?n?(r++,a=n.children[r],o=!1):a=null:(s.push(a),l.push(r),r=0,n=a,a=a.children[0])}return this},n.prototype.toBBox=function(e){return e},n.prototype.compareMinX=function(e,t){return e.minX-t.minX},n.prototype.compareMinY=function(e,t){return e.minY-t.minY},n.prototype.toJSON=function(){return this.data},n.prototype.fromJSON=function(e){return this.data=e,this},n.prototype._all=function(e,t){for(var r=[];e;)e.leaf?t.push.apply(t,e.children):r.push.apply(r,e.children),e=r.pop();return t},n.prototype._build=function(e,t,r,n){var i,a=r-t+1,u=this._maxEntries;if(a<=u)return o(i=g(e.slice(t,r+1)),this.toBBox),i;n||(n=Math.ceil(Math.log(a)/Math.log(u)),u=Math.ceil(a/Math.pow(u,n-1))),(i=g([])).leaf=!1,i.height=n;var s=Math.ceil(a/u),l=s*Math.ceil(Math.sqrt(u));p(e,t,r,l,this.compareMinX);for(var c=t;c<=r;c+=l){var f=Math.min(c+l-1,r);p(e,c,f,s,this.compareMinY);for(var h=c;h<=f;h+=s){var d=Math.min(h+s-1,f);i.children.push(this._build(e,h,d,n-1))}}return o(i,this.toBBox),i},n.prototype._chooseSubtree=function(e,t,r,n){for(;n.push(t),!t.leaf&&n.length-1!==r;){for(var i=1/0,o=1/0,a=void 0,u=0;u<t.children.length;u++){var s=t.children[u],l=c(s),f=(h=e,d=s,(Math.max(d.maxX,h.maxX)-Math.min(d.minX,h.minX))*(Math.max(d.maxY,h.maxY)-Math.min(d.minY,h.minY))-l);f<o?(o=f,i=l<i?l:i,a=s):f===o&&l<i&&(i=l,a=s)}t=a||t.children[0]}var h,d;return t},n.prototype._insert=function(e,t,r){var n=r?e:this.toBBox(e),i=[],o=this._chooseSubtree(n,this.data,t,i);for(o.children.push(e),u(o,n);t>=0&&i[t].children.length>this._maxEntries;)this._split(i,t),t--;this._adjustParentBBoxes(n,i,t)},n.prototype._split=function(e,t){var r=e[t],n=r.children.length,i=this._minEntries;this._chooseSplitAxis(r,i,n);var a=this._chooseSplitIndex(r,i,n),u=g(r.children.splice(a,r.children.length-a));u.height=r.height,u.leaf=r.leaf,o(r,this.toBBox),o(u,this.toBBox),t?e[t-1].children.push(u):this._splitRoot(r,u)},n.prototype._splitRoot=function(e,t){this.data=g([e,t]),this.data.height=e.height+1,this.data.leaf=!1,o(this.data,this.toBBox)},n.prototype._chooseSplitIndex=function(e,t,r){for(var n,i,o,u,s,l,f,h=1/0,d=1/0,g=t;g<=r-t;g++){var p=a(e,0,g,this.toBBox),m=a(e,g,r,this.toBBox),y=(i=p,o=m,void 0,void 0,void 0,void 0,u=Math.max(i.minX,o.minX),s=Math.max(i.minY,o.minY),l=Math.min(i.maxX,o.maxX),f=Math.min(i.maxY,o.maxY),Math.max(0,l-u)*Math.max(0,f-s)),v=c(p)+c(m);y<h?(h=y,n=g,d=v<d?v:d):y===h&&v<d&&(d=v,n=g)}return n||r-t},n.prototype._chooseSplitAxis=function(e,t,r){var n=e.leaf?this.compareMinX:s,i=e.leaf?this.compareMinY:l;this._allDistMargin(e,t,r,n)<this._allDistMargin(e,t,r,i)&&e.children.sort(n)},n.prototype._allDistMargin=function(e,t,r,n){e.children.sort(n);for(var i=this.toBBox,o=a(e,0,t,i),s=a(e,r-t,r,i),l=f(o)+f(s),c=t;c<r-t;c++){var h=e.children[c];u(o,e.leaf?i(h):h),l+=f(o)}for(var d=r-t-1;d>=t;d--){var g=e.children[d];u(s,e.leaf?i(g):g),l+=f(s)}return l},n.prototype._adjustParentBBoxes=function(e,t,r){for(var n=r;n>=0;n--)u(t[n],e)},n.prototype._condense=function(e){for(var t=e.length-1,r=void 0;t>=0;t--)0===e[t].children.length?t>0?(r=e[t-1].children).splice(r.indexOf(e[t]),1):this.clear():o(e[t],this.toBBox)},n}()},471584:(e,t,r)=>{"use strict";function n(e,t,r){void 0===r&&(r={});var n={type:"Feature"};return(0===r.id||r.id)&&(n.id=r.id),r.bbox&&(n.bbox=r.bbox),n.properties=t||{},n.geometry=e,n}function i(e,t,r){if(void 0===r&&(r={}),e.length<2)throw new Error("coordinates must be an array of two or more positions");return n({type:"LineString",coordinates:e},t,r)}function o(e,t){void 0===t&&(t={});var r={type:"FeatureCollection"};return t.id&&(r.id=t.id),t.bbox&&(r.bbox=t.bbox),r.features=e,r}function a(e){return!isNaN(e)&&null!==e&&!Array.isArray(e)}function u(e){if(Array.isArray(e))return e;if("Feature"===e.type){if(null!==e.geometry)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function s(e){return"Feature"===e.type?e.geometry:e}function l(e,t,r){if(void 0===r&&(r={}),!e)throw new Error("point is required");if(!t)throw new Error("polygon is required");var n=function(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if("Feature"===e.type&&null!==e.geometry&&"Point"===e.geometry.type)return e.geometry.coordinates;if("Point"===e.type)return e.coordinates}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return e;throw new Error("coord must be GeoJSON Point or an Array of numbers")}(e),i=s(t),o=i.type,a=t.bbox,u=i.coordinates;if(a&&!1===function(e,t){return t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[0]&&t[3]>=e[1]}(n,a))return!1;"Polygon"===o&&(u=[u]);for(var l=!1,f=0;f<u.length&&!l;f++)if(c(n,u[f][0],r.ignoreBoundary)){for(var h=!1,d=1;d<u[f].length&&!h;)c(n,u[f][d],!r.ignoreBoundary)&&(h=!0),d++;h||(l=!0)}return l}function c(e,t,r){var n=!1;t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]&&(t=t.slice(0,t.length-1));for(var i=0,o=t.length-1;i<t.length;o=i++){var a=t[i][0],u=t[i][1],s=t[o][0],l=t[o][1];if(e[1]*(a-s)+u*(s-e[0])+l*(e[0]-a)==0&&(a-e[0])*(s-e[0])<=0&&(u-e[1])*(l-e[1])<=0)return!r;u>e[1]!=l>e[1]&&e[0]<(s-a)*(e[1]-u)/(l-u)+a&&(n=!n)}return n}function f(e,t){if("Feature"===e.type)t(e,0);else if("FeatureCollection"===e.type)for(var r=0;r<e.features.length&&!1!==t(e.features[r],r);r++);}function h(e,t){!function(e,t){var r,n,i,o,a,u,s,l,c,f,h=0,d="FeatureCollection"===e.type,g="Feature"===e.type,p=d?e.features.length:1;for(r=0;r<p;r++){for(u=d?e.features[r].geometry:g?e.geometry:e,l=d?e.features[r].properties:g?e.properties:{},c=d?e.features[r].bbox:g?e.bbox:void 0,f=d?e.features[r].id:g?e.id:void 0,a=(s=!!u&&"GeometryCollection"===u.type)?u.geometries.length:1,i=0;i<a;i++)if(null!==(o=s?u.geometries[i]:u))switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":if(!1===t(o,h,l,c,f))return!1;break;case"GeometryCollection":for(n=0;n<o.geometries.length;n++)if(!1===t(o.geometries[n],h,l,c,f))return!1;break;default:throw new Error("Unknown Geometry Type")}else if(!1===t(null,h,l,c,f))return!1;h++}}(e,(function(e,r,i,o,a){var u,s=null===e?null:e.type;switch(s){case null:case"Point":case"LineString":case"Polygon":return!1!==t(n(e,i,{bbox:o,id:a}),r,0)&&void 0}switch(s){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon"}for(var l=0;l<e.coordinates.length;l++){var c=e.coordinates[l];if(!1===t(n({type:u,coordinates:c},i),r,l))return!1}}))}r.d(t,{Z:()=>M});const d=function(e){if(!e)throw new Error("geojson is required");var t=[];return h(e,(function(e){!function(e,t){var r=[],n=e.geometry;if(null!==n){switch(n.type){case"Polygon":r=u(n);break;case"LineString":r=[u(n)]}r.forEach((function(r){var n=function(e,t){var r=[];return e.reduce((function(e,n){var o,a,u,s,l,c,f=i([e,n],t);return f.bbox=(a=n,u=(o=e)[0],s=o[1],[u<(l=a[0])?u:l,s<(c=a[1])?s:c,u>l?u:l,s>c?s:c]),r.push(f),n})),r}(r,e.properties);n.forEach((function(e){e.id=t.length,t.push(e)}))}))}}(e,t)})),o(t)};var g=r(78109);function p(e,t){var r=u(e),i=u(t);if(2!==r.length)throw new Error("<intersects> line1 must only contain 2 coordinates");if(2!==i.length)throw new Error("<intersects> line2 must only contain 2 coordinates");var o=r[0][0],s=r[0][1],l=r[1][0],c=r[1][1],f=i[0][0],h=i[0][1],d=i[1][0],g=i[1][1],p=(g-h)*(l-o)-(d-f)*(c-s);if(0===p)return null;var m=((d-f)*(s-h)-(g-h)*(o-f))/p,y=((l-o)*(s-h)-(c-s)*(o-f))/p;return m>=0&&m<=1&&y>=0&&y<=1?function(e,t,r){if(void 0===r&&(r={}),!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(e.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!a(e[0])||!a(e[1]))throw new Error("coordinates must contain numbers");return n({type:"Point",coordinates:e},t,r)}([o+m*(l-o),s+m*(c-s)]):null}const m=function(e,t){var r={},i=[];if("LineString"===e.type&&(e=n(e)),"LineString"===t.type&&(t=n(t)),"Feature"===e.type&&"Feature"===t.type&&null!==e.geometry&&null!==t.geometry&&"LineString"===e.geometry.type&&"LineString"===t.geometry.type&&2===e.geometry.coordinates.length&&2===t.geometry.coordinates.length){var a=p(e,t);return a&&i.push(a),o(i)}var s=g();return s.load(d(t)),f(d(e),(function(e){f(s.search(e),(function(t){var n=p(e,t);if(n){var o=u(n).join(",");r[o]||(r[o]=!0,i.push(n))}}))})),o(i)};function y(e,t){void 0===t&&(t={});var r=s(e);switch(t.properties||"Feature"!==e.type||(t.properties=e.properties),r.type){case"Polygon":return function(e,t){return void 0===t&&(t={}),v(s(e).coordinates,t.properties?t.properties:"Feature"===e.type?e.properties:{})}(r,t);case"MultiPolygon":return function(e,t){void 0===t&&(t={});var r=s(e).coordinates,n=t.properties?t.properties:"Feature"===e.type?e.properties:{},i=[];return r.forEach((function(e){i.push(v(e,n))})),o(i)}(r,t);default:throw new Error("invalid poly")}}function v(e,t){return e.length>1?function(e,t,r){return void 0===r&&(r={}),n({type:"MultiLineString",coordinates:e},t,r)}(e,t):i(e[0],t)}function b(e,t){for(var r=0;r<e.coordinates.length-1;r++)if(x(e.coordinates[r],e.coordinates[r+1],t.coordinates))return!0;return!1}function w(e,t){for(var r=0,n=t.coordinates;r<n.length;r++)if(l(n[r],e))return!0;return m(t,y(e)).features.length>0}function x(e,t,r){var n=r[0]-e[0],i=r[1]-e[1],o=t[0]-e[0],a=t[1]-e[1];return 0==n*a-i*o&&(Math.abs(o)>=Math.abs(a)?o>0?e[0]<=r[0]&&r[0]<=t[0]:t[0]<=r[0]&&r[0]<=e[0]:a>0?e[1]<=r[1]&&r[1]<=t[1]:t[1]<=r[1]&&r[1]<=e[1])}function M(e,t){var r=!1;return h(e,(function(e){h(t,(function(t){if(!0===r)return!0;r=!function(e,t){var r=!0;return h(e,(function(e){h(t,(function(t){if(!1===r)return!1;r=function(e,t){switch(e.type){case"Point":switch(t.type){case"Point":return r=e.coordinates,n=t.coordinates,!(r[0]===n[0]&&r[1]===n[1]);case"LineString":return!b(t,e);case"Polygon":return!l(e,t)}break;case"LineString":switch(t.type){case"Point":return!b(e,t);case"LineString":return!(m(e,t).features.length>0);case"Polygon":return!w(t,e)}break;case"Polygon":switch(t.type){case"Point":return!l(t,e);case"LineString":return!w(e,t);case"Polygon":return!function(e,t){for(var r=0,n=e.coordinates[0];r<n.length;r++)if(l(n[r],t))return!0;for(var i=0,o=t.coordinates[0];i<o.length;i++)if(l(o[i],e))return!0;return m(y(e),y(t)).features.length>0}(t,e)}}var r,n;return!1}(e.geometry,t.geometry)}))})),r}(e.geometry,t.geometry)}))})),r}}}]);