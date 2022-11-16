/*! For license information please see 18672.ab9fa3e86d68dfb4e875.chunk.js.LICENSE.txt */
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[18672],{665045:(t,n,r)=>{"use strict";r.d(n,{Z:()=>o});var e=r(949179);const o=function(t){function n(n){var r="Assertion failed. See https://openlayers.org/en/"+("latest"===e.q4?e.q4:"v"+e.q4.split("-")[0])+"/doc/errors/#"+n+" for details.";t.call(this,r),this.code=n,this.name="AssertionError",this.message=r}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n}(Error)},438906:(t,n,r)=>{"use strict";r.d(n,{h:()=>o});var e=r(665045);function o(t,n){if(!t)throw new e.Z(n)}},421915:(t,n,r)=>{"use strict";r.d(n,{hI:()=>u,f3:()=>a,d9:()=>c,qf:()=>s,b8:()=>f,r4:()=>l,jE:()=>h,pX:()=>E,lJ:()=>p,T9:()=>d,YN:()=>g,HK:()=>v,ZT:()=>M,GN:()=>_,fS:()=>T,l7:()=>I,Wj:()=>O,qP:()=>P,H6:()=>S,bg:()=>R,hC:()=>N,w$:()=>x,qg:()=>y,g0:()=>w,p8:()=>L,Cr:()=>Z,Ed:()=>b,rL:()=>m,Xv:()=>U,dz:()=>C,kK:()=>W,xb:()=>H,EO:()=>Y,H9:()=>F,I7:()=>A,Ne:()=>B});var e=r(438906),o=r(851748),i=r(434178);function u(t){for(var n=[1/0,1/0,-1/0,-1/0],r=0,e=t.length;r<e;++r)O(n,t[r]);return n}function a(t,n,r){return r?(r[0]=t[0]-n,r[1]=t[1]-n,r[2]=t[2]+n,r[3]=t[3]+n,r):[t[0]-n,t[1]-n,t[2]+n,t[3]+n]}function c(t,n){return n?(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n):t.slice()}function s(t,n,r){var e,o;return(e=n<t[0]?t[0]-n:t[2]<n?n-t[2]:0)*e+(o=r<t[1]?t[1]-r:t[3]<r?r-t[3]:0)*o}function f(t,n){return h(t,n[0],n[1])}function l(t,n){return t[0]<=n[0]&&n[2]<=t[2]&&t[1]<=n[1]&&n[3]<=t[3]}function h(t,n,r){return t[0]<=n&&n<=t[2]&&t[1]<=r&&r<=t[3]}function E(t,n){var r=t[0],e=t[1],o=t[2],u=t[3],a=n[0],c=n[1],s=i.Z.UNKNOWN;return a<r?s|=i.Z.LEFT:a>o&&(s|=i.Z.RIGHT),c<e?s|=i.Z.BELOW:c>u&&(s|=i.Z.ABOVE),s===i.Z.UNKNOWN&&(s=i.Z.INTERSECTING),s}function p(){return[1/0,1/0,-1/0,-1/0]}function d(t,n,r,e,o){return o?(o[0]=t,o[1]=n,o[2]=r,o[3]=e,o):[t,n,r,e]}function g(t){return d(1/0,1/0,-1/0,-1/0,t)}function v(t,n){var r=t[0],e=t[1];return d(r,e,r,e,n)}function M(t,n){return function(t,n){for(var r=0,e=n.length;r<e;++r)O(t,n[r]);return t}(g(n),t)}function _(t,n,r,e,o){return P(g(o),t,n,r,e)}function T(t,n){return t[0]==n[0]&&t[2]==n[2]&&t[1]==n[1]&&t[3]==n[3]}function I(t,n){return n[0]<t[0]&&(t[0]=n[0]),n[2]>t[2]&&(t[2]=n[2]),n[1]<t[1]&&(t[1]=n[1]),n[3]>t[3]&&(t[3]=n[3]),t}function O(t,n){n[0]<t[0]&&(t[0]=n[0]),n[0]>t[2]&&(t[2]=n[0]),n[1]<t[1]&&(t[1]=n[1]),n[1]>t[3]&&(t[3]=n[1])}function P(t,n,r,e,o){for(;r<e;r+=o)G(t,n[r],n[r+1]);return t}function G(t,n,r){t[0]=Math.min(t[0],n),t[1]=Math.min(t[1],r),t[2]=Math.max(t[2],n),t[3]=Math.max(t[3],r)}function S(t,n,r){var e;return(e=n.call(r,N(t)))||(e=n.call(r,x(t)))||(e=n.call(r,U(t)))?e:(e=n.call(r,m(t)))||!1}function R(t){var n=0;return H(t)||(n=C(t)*Z(t)),n}function N(t){return[t[0],t[1]]}function x(t){return[t[2],t[1]]}function y(t){return[(t[0]+t[2])/2,(t[1]+t[3])/2]}function w(t,n){var r;return n===o.Z.BOTTOM_LEFT?r=N(t):n===o.Z.BOTTOM_RIGHT?r=x(t):n===o.Z.TOP_LEFT?r=m(t):n===o.Z.TOP_RIGHT?r=U(t):(0,e.h)(!1,13),r}function L(t,n,r,e,o){var i=n*e[0]/2,u=n*e[1]/2,a=Math.cos(r),c=Math.sin(r),s=i*a,f=i*c,l=u*a,h=u*c,E=t[0],p=t[1],g=E-s+h,v=E-s-h,M=E+s-h,_=E+s+h,T=p-f-l,I=p-f+l,O=p+f+l,P=p+f-l;return d(Math.min(g,v,M,_),Math.min(T,I,O,P),Math.max(g,v,M,_),Math.max(T,I,O,P),o)}function Z(t){return t[3]-t[1]}function b(t,n,r){var e=r||[1/0,1/0,-1/0,-1/0];return W(t,n)?(t[0]>n[0]?e[0]=t[0]:e[0]=n[0],t[1]>n[1]?e[1]=t[1]:e[1]=n[1],t[2]<n[2]?e[2]=t[2]:e[2]=n[2],t[3]<n[3]?e[3]=t[3]:e[3]=n[3]):g(e),e}function m(t){return[t[0],t[3]]}function U(t){return[t[2],t[3]]}function C(t){return t[2]-t[0]}function W(t,n){return t[0]<=n[2]&&t[2]>=n[0]&&t[1]<=n[3]&&t[3]>=n[1]}function H(t){return t[2]<t[0]||t[3]<t[1]}function Y(t,n){return n?(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n):t}function F(t,n){var r=(t[2]-t[0])/2*(n-1),e=(t[3]-t[1])/2*(n-1);t[0]-=r,t[2]+=r,t[1]-=e,t[3]+=e}function A(t,n,r){var e=!1,o=E(t,n),u=E(t,r);if(o===i.Z.INTERSECTING||u===i.Z.INTERSECTING)e=!0;else{var a,c,s=t[0],f=t[1],l=t[2],h=t[3],p=n[0],d=n[1],g=r[0],v=r[1],M=(v-d)/(g-p);u&i.Z.ABOVE&&!(o&i.Z.ABOVE)&&(e=(a=g-(v-h)/M)>=s&&a<=l),e||!(u&i.Z.RIGHT)||o&i.Z.RIGHT||(e=(c=v-(g-l)*M)>=f&&c<=h),e||!(u&i.Z.BELOW)||o&i.Z.BELOW||(e=(a=g-(v-f)/M)>=s&&a<=l),e||!(u&i.Z.LEFT)||o&i.Z.LEFT||(e=(c=v-(g-s)*M)>=f&&c<=h)}return e}function B(t,n,r){var e=[t[0],t[1],t[0],t[3],t[2],t[1],t[2],t[3]];return n(e,e,2),function(t,n,r){return d(Math.min.apply(null,t),Math.min.apply(null,n),Math.max.apply(null,t),Math.max.apply(null,n),r)}([e[0],e[2],e[4],e[6]],[e[1],e[3],e[5],e[7]],r)}},851748:(t,n,r)=>{"use strict";r.d(n,{Z:()=>e});const e={BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"}},434178:(t,n,r)=>{"use strict";r.d(n,{Z:()=>e});const e={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16}},28795:(t,n,r)=>{"use strict";r.d(n,{Z:()=>e});const e={POINT:"Point",LINE_STRING:"LineString",LINEAR_RING:"LinearRing",POLYGON:"Polygon",MULTI_POINT:"MultiPoint",MULTI_LINE_STRING:"MultiLineString",MULTI_POLYGON:"MultiPolygon",GEOMETRY_COLLECTION:"GeometryCollection",CIRCLE:"Circle"}},921882:(t,n,r)=>{"use strict";function e(t,n,r){return Math.min(Math.max(t,n),r)}r.d(n,{uZ:()=>e,f9:()=>o,rU:()=>i,bI:()=>u,SV:()=>a,Ux:()=>c,Yr:()=>s,$W:()=>f,t7:()=>l});var o="cosh"in Math?Math.cosh:function(t){var n=Math.exp(t);return(n+1/n)/2};function i(t,n,r,e,o,i){var a=o-r,c=i-e;if(0!==a||0!==c){var s=((t-r)*a+(n-e)*c)/(a*a+c*c);s>1?(r=o,e=i):s>0&&(r+=a*s,e+=c*s)}return u(t,n,r,e)}function u(t,n,r,e){var o=r-t,i=e-n;return o*o+i*i}function a(t){for(var n=t.length,r=0;r<n;r++){for(var e=r,o=Math.abs(t[r][r]),i=r+1;i<n;i++){var u=Math.abs(t[i][r]);u>o&&(o=u,e=i)}if(0===o)return null;var a=t[e];t[e]=t[r],t[r]=a;for(var c=r+1;c<n;c++)for(var s=-t[c][r]/t[r][r],f=r;f<n+1;f++)r==f?t[c][f]=0:t[c][f]+=s*t[r][f]}for(var l=new Array(n),h=n-1;h>=0;h--){l[h]=t[h][n]/t[h][h];for(var E=h-1;E>=0;E--)t[E][n]-=t[E][h]*l[h]}return l}function c(t){return 180*t/Math.PI}function s(t){return t*Math.PI/180}function f(t,n){var r=t%n;return r*n<0?r+n:r}function l(t,n,r){return t+r*(n-t)}},218672:(t,n,r)=>{"use strict";r.d(n,{zY:()=>L,rM:()=>x,Sx:()=>S,UQ:()=>y,OP:()=>b,U2:()=>R,_Q:()=>N,Ck:()=>U,WO:()=>m,gD:()=>G,bU:()=>Z,vs:()=>C,$A:()=>W});var e=r(870295),o=r(421915),i=r(921882),u=r(444183),a=r(440868),c=6378137,s=Math.PI*c,f=[-s,-s,s,s],l=[-180,-85,180,85],h=function(t){function n(n){t.call(this,{code:n,units:a.default.METERS,extent:f,global:!0,worldExtent:l,getPointResolution:function(t,n){return t/(0,i.f9)(n[1]/c)}})}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n}(u.Z),E=[new h("EPSG:3857"),new h("EPSG:102100"),new h("EPSG:102113"),new h("EPSG:900913"),new h("urn:ogc:def:crs:EPSG:6.18:3:3857"),new h("urn:ogc:def:crs:EPSG::3857"),new h("http://www.opengis.net/gml/srs/epsg.xml#3857")];var p,d,g,v=[-180,-90,180,90],M=6378137*Math.PI/180,_=function(t){function n(n,r){t.call(this,{code:n,units:a.default.DEGREES,extent:v,axisOrientation:r,global:!0,metersPerUnit:M,worldExtent:v})}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n}(u.Z),T=[new _("CRS:84"),new _("EPSG:4326","neu"),new _("urn:ogc:def:crs:EPSG::4326","neu"),new _("urn:ogc:def:crs:EPSG:6.6:4326","neu"),new _("urn:ogc:def:crs:OGC:1.3:CRS84"),new _("urn:ogc:def:crs:OGC:2:84"),new _("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new _("urn:x-ogc:def:crs:EPSG:4326","neu")],I={},O=r(884110);function P(t,n,r){var e;if(void 0!==n){for(var o=0,i=t.length;o<i;++o)n[o]=t[o];e=n}else e=t.slice();return e}function G(t,n,r){if(void 0!==n&&t!==n){for(var e=0,o=t.length;e<o;++e)n[e]=t[e];t=n}return t}function S(t){!function(t,n){I[t]=n}(t.getCode(),t),(0,O.IH)(t,t,P)}function R(t){return"string"==typeof t?I[t]||null:t||null}function N(t,n,r,o){var i,u=(t=R(t)).getPointResolutionFunc();if(u)i=u(n,r);else if(t.getUnits()==a.default.DEGREES&&!o||o==a.default.DEGREES)i=n;else{var c=m(t,R("EPSG:4326")),s=[r[0]-n/2,r[1],r[0]+n/2,r[1],r[0],r[1]-n/2,r[0],r[1]+n/2];s=c(s,s,2),i=((0,e.Sp)(s.slice(0,2),s.slice(2,4))+(0,e.Sp)(s.slice(4,6),s.slice(6,8)))/2;var f=o?a.METERS_PER_UNIT[o]:t.getMetersPerUnit();void 0!==f&&(i/=f)}return i}function x(t){!function(t){t.forEach(S)}(t),t.forEach((function(n){t.forEach((function(t){n!==t&&(0,O.IH)(n,t,P)}))}))}function y(t,n){return t?"string"==typeof t?R(t):t:R(n)}function w(t){return function(n,r,e){for(var o=n.length,i=void 0!==e?e:2,u=void 0!==r?r:new Array(o),a=0;a<o;a+=i){var c=t([n[a],n[a+1]]);u[a]=c[0],u[a+1]=c[1];for(var s=i-1;s>=2;--s)u[a+s]=n[a+s]}return u}}function L(t,n,r,e){var o=R(t),i=R(n);(0,O.IH)(o,i,w(r)),(0,O.IH)(i,o,w(e))}function Z(t,n){var r=C(t,void 0!==n?n:"EPSG:3857","EPSG:4326"),e=r[0];return(e<-180||e>180)&&(r[0]=(0,i.$W)(e+180,360)-180),r}function b(t,n){if(t===n)return!0;var r=t.getUnits()===n.getUnits();return(t.getCode()===n.getCode()||m(t,n)===P)&&r}function m(t,n){var r=t.getCode(),e=n.getCode(),o=(0,O.U2)(r,e);return o||(o=G),o}function U(t,n){return m(R(t),R(n))}function C(t,n,r){return U(n,r)(t,void 0,t.length)}function W(t,n,r){var e=U(n,r);return(0,o.Ne)(t,e)}x(E),x(T),p=E,d=function(t,n,r){var e=t.length,o=r>1?r:2,i=n;void 0===i&&(i=o>2?t.slice():new Array(e));for(var u=s,a=0;a<e;a+=o){i[a]=u*t[a]/180;var f=c*Math.log(Math.tan(Math.PI*(t[a+1]+90)/360));f>u?f=u:f<-u&&(f=-u),i[a+1]=f}return i},g=function(t,n,r){var e=t.length,o=r>1?r:2,i=n;void 0===i&&(i=o>2?t.slice():new Array(e));for(var u=0;u<e;u+=o)i[u]=180*t[u]/s,i[u+1]=360*Math.atan(Math.exp(t[u+1]/c))/Math.PI-90;return i},T.forEach((function(t){p.forEach((function(n){(0,O.IH)(t,n,d),(0,O.IH)(n,t,g)}))}))},444183:(t,n,r)=>{"use strict";r.d(n,{Z:()=>i});var e=r(440868),o=function(t){this.code_=t.code,this.units_=t.units,this.extent_=void 0!==t.extent?t.extent:null,this.worldExtent_=void 0!==t.worldExtent?t.worldExtent:null,this.axisOrientation_=void 0!==t.axisOrientation?t.axisOrientation:"enu",this.global_=void 0!==t.global&&t.global,this.canWrapX_=!(!this.global_||!this.extent_),this.getPointResolutionFunc_=t.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=t.metersPerUnit};o.prototype.canWrapX=function(){return this.canWrapX_},o.prototype.getCode=function(){return this.code_},o.prototype.getExtent=function(){return this.extent_},o.prototype.getUnits=function(){return this.units_},o.prototype.getMetersPerUnit=function(){return this.metersPerUnit_||e.METERS_PER_UNIT[this.units_]},o.prototype.getWorldExtent=function(){return this.worldExtent_},o.prototype.getAxisOrientation=function(){return this.axisOrientation_},o.prototype.isGlobal=function(){return this.global_},o.prototype.setGlobal=function(t){this.global_=t,this.canWrapX_=!(!t||!this.extent_)},o.prototype.getDefaultTileGrid=function(){return this.defaultTileGrid_},o.prototype.setDefaultTileGrid=function(t){this.defaultTileGrid_=t},o.prototype.setExtent=function(t){this.extent_=t,this.canWrapX_=!(!this.global_||!t)},o.prototype.setWorldExtent=function(t){this.worldExtent_=t},o.prototype.setGetPointResolution=function(t){this.getPointResolutionFunc_=t},o.prototype.getPointResolutionFunc=function(){return this.getPointResolutionFunc_};const i=o},440868:(t,n,r)=>{"use strict";r.r(n),r.d(n,{METERS_PER_UNIT:()=>o,default:()=>i});var e={DEGREES:"degrees",FEET:"ft",METERS:"m",PIXELS:"pixels",TILE_PIXELS:"tile-pixels",USFEET:"us-ft"},o={};o[e.DEGREES]=2*Math.PI*6370997/360,o[e.FEET]=.3048,o[e.METERS]=1,o[e.USFEET]=1200/3937;const i=e},884110:(t,n,r)=>{"use strict";r.d(n,{IH:()=>o,U2:()=>i});var e={};function o(t,n,r){var o=t.getCode(),i=n.getCode();o in e||(e[o]={}),e[o][i]=r}function i(t,n){var r;return t in e&&n in e[t]&&(r=e[t][n]),r}},870295:(t,n,r)=>{"use strict";r.d(n,{Sp:()=>u,bg:()=>c,cv:()=>s});var e=r(921882);if(31219!=r.j)var o=r(28795);var i=6371008.8;function u(t,n,r){var o=r||i,u=(0,e.Yr)(t[1]),a=(0,e.Yr)(n[1]),c=(a-u)/2,s=(0,e.Yr)(n[0]-t[0])/2,f=Math.sin(c)*Math.sin(c)+Math.sin(s)*Math.sin(s)*Math.cos(u)*Math.cos(a);return 2*o*Math.atan2(Math.sqrt(f),Math.sqrt(1-f))}function a(t,n){for(var r=0,o=t.length,i=t[o-1][0],u=t[o-1][1],a=0;a<o;a++){var c=t[a][0],s=t[a][1];r+=(0,e.Yr)(c-i)*(2+Math.sin((0,e.Yr)(u))+Math.sin((0,e.Yr)(s))),i=c,u=s}return r*n*n/2}function c(t,n){var r=n||{},e=r.radius||i,u=r.projection||"EPSG:3857",s=t.getType();s!==o.Z.GEOMETRY_COLLECTION&&(t=t.clone().transform(u,"EPSG:4326"));var f,l,h,E,p,d,g=0;switch(s){case o.Z.POINT:case o.Z.MULTI_POINT:case o.Z.LINE_STRING:case o.Z.MULTI_LINE_STRING:case o.Z.LINEAR_RING:break;case o.Z.POLYGON:for(f=t.getCoordinates(),g=Math.abs(a(f[0],e)),h=1,E=f.length;h<E;++h)g-=Math.abs(a(f[h],e));break;case o.Z.MULTI_POLYGON:for(h=0,E=(f=t.getCoordinates()).length;h<E;++h)for(l=f[h],g+=Math.abs(a(l[0],e)),p=1,d=l.length;p<d;++p)g-=Math.abs(a(l[p],e));break;case o.Z.GEOMETRY_COLLECTION:var v=t.getGeometries();for(h=0,E=v.length;h<E;++h)g+=c(v[h],n);break;default:throw new Error("Unsupported geometry type: "+s)}return g}function s(t,n,r,o){var u=o||i,a=(0,e.Yr)(t[1]),c=(0,e.Yr)(t[0]),s=n/u,f=Math.asin(Math.sin(a)*Math.cos(s)+Math.cos(a)*Math.sin(s)*Math.cos(r)),l=c+Math.atan2(Math.sin(r)*Math.sin(s)*Math.cos(a),Math.cos(s)-Math.sin(a)*Math.sin(f));return[(0,e.Ux)(l),(0,e.Ux)(f)]}},949179:(t,n,r)=>{"use strict";function e(){return function(){throw new Error("Unimplemented abstract method.")}()}function o(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t}r.d(n,{O3:()=>e,XW:()=>o,sq:()=>u,q4:()=>a});var i=0;function u(t){return t.ol_uid||(t.ol_uid=String(++i))}var a="5.3.0"}}]);