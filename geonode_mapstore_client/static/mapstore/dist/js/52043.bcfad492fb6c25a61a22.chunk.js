"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[52043],{208204:(t,e,r)=>{r.d(e,{Z:()=>p});var n=r(949179),o=r(558493),i=r(421915),s=r(517882),a=r(218672),u=r(440868),f=r(782359),h=(0,f.Ue)();const p=function(t){function e(){t.call(this),this.extent_=(0,i.lJ)(),this.extentRevision_=-1,this.simplifiedGeometryCache={},this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=0}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){return(0,n.O3)()},e.prototype.closestPointXY=function(t,e,r,o){return(0,n.O3)()},e.prototype.containsXY=function(t,e){return!1},e.prototype.getClosestPoint=function(t,e){var r=e||[NaN,NaN];return this.closestPointXY(t[0],t[1],r,1/0),r},e.prototype.intersectsCoordinate=function(t){return this.containsXY(t[0],t[1])},e.prototype.computeExtent=function(t){return(0,n.O3)()},e.prototype.getExtent=function(t){return this.extentRevision_!=this.getRevision()&&(this.extent_=this.computeExtent(this.extent_),this.extentRevision_=this.getRevision()),(0,i.EO)(this.extent_,t)},e.prototype.rotate=function(t,e){(0,n.O3)()},e.prototype.scale=function(t,e,r){(0,n.O3)()},e.prototype.simplify=function(t){return this.getSimplifiedGeometry(t*t)},e.prototype.getSimplifiedGeometry=function(t){return(0,n.O3)()},e.prototype.getType=function(){return(0,n.O3)()},e.prototype.applyTransform=function(t){(0,n.O3)()},e.prototype.intersectsExtent=function(t){return(0,n.O3)()},e.prototype.translate=function(t,e){(0,n.O3)()},e.prototype.transform=function(t,e){var r=(0,a.U2)(t),n=r.getUnits()==u.default.TILE_PIXELS?function(t,n,o){var u=r.getExtent(),p=r.getWorldExtent(),c=(0,i.Cr)(p)/(0,i.Cr)(u);return(0,f.qC)(h,p[0],p[3],c,-c,0,0,0),(0,s.vT)(t,0,t.length,o,h,n),(0,a.Ck)(r,e)(t,n,o)}:(0,a.Ck)(r,e);return this.applyTransform(n),this},e}(o.ZP)},303696:(t,e,r)=>{r.d(e,{Z:()=>n});const n={XY:"XY",XYZ:"XYZ",XYM:"XYM",XYZM:"XYZM"}},752043:(t,e,r)=>{r.d(e,{Z:()=>u});var n=r(421915),o=r(28795),i=r(432538),s=r(438667),a=r(921882);const u=function(t){function e(e,r){t.call(this),this.setCoordinates(e,r)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout)},e.prototype.closestPointXY=function(t,e,r,n){var o=this.flatCoordinates,i=(0,a.bI)(t,e,o[0],o[1]);if(i<n){for(var s=this.stride,u=0;u<s;++u)r[u]=o[u];return r.length=s,i}return n},e.prototype.getCoordinates=function(){return this.flatCoordinates?this.flatCoordinates.slice():[]},e.prototype.computeExtent=function(t){return(0,n.HK)(this.flatCoordinates,t)},e.prototype.getType=function(){return o.Z.POINT},e.prototype.intersectsExtent=function(t){return(0,n.jE)(t,this.flatCoordinates[0],this.flatCoordinates[1])},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,s.IG)(this.flatCoordinates,0,t,this.stride),this.changed()},e}(i.ZP)},432538:(t,e,r)=>{r.d(e,{Kr:()=>h,ZP:()=>p});var n=r(949179),o=r(421915),i=r(208204),s=r(303696),a=r(517882),u=r(913580);function f(t){var e;return t==s.Z.XY?e=2:t==s.Z.XYZ||t==s.Z.XYM?e=3:t==s.Z.XYZM&&(e=4),e}function h(t,e,r){var n=t.getFlatCoordinates();if(n){var o=t.getStride();return(0,a.vT)(n,0,n.length,o,e,r)}return null}const p=function(t){function e(){t.call(this),this.layout=s.Z.XY,this.stride=2,this.flatCoordinates=null}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.computeExtent=function(t){return(0,o.GN)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)},e.prototype.getCoordinates=function(){return(0,n.O3)()},e.prototype.getFirstCoordinate=function(){return this.flatCoordinates.slice(0,this.stride)},e.prototype.getFlatCoordinates=function(){return this.flatCoordinates},e.prototype.getLastCoordinate=function(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)},e.prototype.getLayout=function(){return this.layout},e.prototype.getSimplifiedGeometry=function(t){if(this.simplifiedGeometryRevision!=this.getRevision()&&((0,u.ZH)(this.simplifiedGeometryCache),this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||0!==this.simplifiedGeometryMaxMinSquaredTolerance&&t<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;var e=t.toString();if(this.simplifiedGeometryCache.hasOwnProperty(e))return this.simplifiedGeometryCache[e];var r=this.getSimplifiedGeometryInternal(t);return r.getFlatCoordinates().length<this.flatCoordinates.length?(this.simplifiedGeometryCache[e]=r,r):(this.simplifiedGeometryMaxMinSquaredTolerance=t,this)},e.prototype.getSimplifiedGeometryInternal=function(t){return this},e.prototype.getStride=function(){return this.stride},e.prototype.setFlatCoordinates=function(t,e){this.stride=f(t),this.layout=t,this.flatCoordinates=e},e.prototype.setCoordinates=function(t,e){(0,n.O3)()},e.prototype.setLayout=function(t,e,r){var n;if(t)n=f(t);else{for(var o=0;o<r;++o){if(0===e.length)return this.layout=s.Z.XY,void(this.stride=2);e=e[0]}t=function(t){var e;return 2==t?e=s.Z.XY:3==t?e=s.Z.XYZ:4==t&&(e=s.Z.XYZM),e}(n=e.length)}this.layout=t,this.stride=n},e.prototype.applyTransform=function(t){this.flatCoordinates&&(t(this.flatCoordinates,this.flatCoordinates,this.stride),this.changed())},e.prototype.rotate=function(t,e){var r=this.getFlatCoordinates();if(r){var n=this.getStride();(0,a.U1)(r,0,r.length,n,t,e,r),this.changed()}},e.prototype.scale=function(t,e,r){var n=e;void 0===n&&(n=t);var i=r;i||(i=(0,o.qg)(this.getExtent()));var s=this.getFlatCoordinates();if(s){var u=this.getStride();(0,a.bA)(s,0,s.length,u,t,n,i,s),this.changed()}},e.prototype.translate=function(t,e){var r=this.getFlatCoordinates();if(r){var n=this.getStride();(0,a.Iu)(r,0,r.length,n,t,e,r),this.changed()}},e}(i.Z)},438667:(t,e,r)=>{function n(t,e,r,n){for(var o=0,i=r.length;o<i;++o)t[e++]=r[o];return e}function o(t,e,r,n){for(var o=0,i=r.length;o<i;++o)for(var s=r[o],a=0;a<n;++a)t[e++]=s[a];return e}function i(t,e,r,n,i){for(var s=i||[],a=0,u=0,f=r.length;u<f;++u){var h=o(t,e,r[u],n);s[a++]=h,e=h}return s.length=a,s}function s(t,e,r,n,o){for(var s=o||[],a=0,u=0,f=r.length;u<f;++u){var h=i(t,e,r[u],n,s[a]);s[a++]=h,e=h[h.length-1]}return s.length=a,s}r.d(e,{IG:()=>n,QT:()=>s,Sg:()=>o,_5:()=>i})},517882:(t,e,r)=>{function n(t,e,r,n,o,i){for(var s=i||[],a=0,u=e;u<r;u+=n){var f=t[u],h=t[u+1];s[a++]=o[0]*f+o[2]*h+o[4],s[a++]=o[1]*f+o[3]*h+o[5]}return i&&s.length!=a&&(s.length=a),s}function o(t,e,r,n,o,i,s){for(var a=s||[],u=Math.cos(o),f=Math.sin(o),h=i[0],p=i[1],c=0,l=e;l<r;l+=n){var d=t[l]-h,y=t[l+1]-p;a[c++]=h+d*u-y*f,a[c++]=p+d*f+y*u;for(var g=l+2;g<l+n;++g)a[c++]=t[g]}return s&&a.length!=c&&(a.length=c),a}function i(t,e,r,n,o,i,s,a){for(var u=a||[],f=s[0],h=s[1],p=0,c=e;c<r;c+=n){var l=t[c]-f,d=t[c+1]-h;u[p++]=f+o*l,u[p++]=h+i*d;for(var y=c+2;y<c+n;++y)u[p++]=t[y]}return a&&u.length!=p&&(u.length=p),u}function s(t,e,r,n,o,i,s){for(var a=s||[],u=0,f=e;f<r;f+=n){a[u++]=t[f]+o,a[u++]=t[f+1]+i;for(var h=f+2;h<f+n;++h)a[u++]=t[h]}return s&&a.length!=u&&(a.length=u),a}r.d(e,{Iu:()=>s,U1:()=>o,bA:()=>i,vT:()=>n})},782359:(t,e,r)=>{r.d(e,{Iu:()=>c,U_:()=>d,Ue:()=>i,bA:()=>p,lk:()=>f,mc:()=>s,nn:()=>h,qC:()=>l});var n=r(438906),o=new Array(6);function i(){return[1,0,0,1,0,0]}function s(t){return u(t,1,0,0,1,0,0)}function a(t,e){var r=t[0],n=t[1],o=t[2],i=t[3],s=t[4],a=t[5],u=e[0],f=e[1],h=e[2],p=e[3],c=e[4],l=e[5];return t[0]=r*u+o*f,t[1]=n*u+i*f,t[2]=r*h+o*p,t[3]=n*h+i*p,t[4]=r*c+o*l+s,t[5]=n*c+i*l+a,t}function u(t,e,r,n,o,i,s){return t[0]=e,t[1]=r,t[2]=n,t[3]=o,t[4]=i,t[5]=s,t}function f(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function h(t,e){var r=e[0],n=e[1];return e[0]=t[0]*r+t[2]*n+t[4],e[1]=t[1]*r+t[3]*n+t[5],e}function p(t,e,r){return a(t,u(o,e,0,0,r,0,0))}function c(t,e,r){return a(t,u(o,1,0,0,1,e,r))}function l(t,e,r,n,o,i,s,a){var u=Math.sin(i),f=Math.cos(i);return t[0]=n*f,t[1]=o*u,t[2]=-n*u,t[3]=o*f,t[4]=s*n*f-a*n*u+e,t[5]=s*o*u+a*o*f+r,t}function d(t){var e,r=(e=t)[0]*e[3]-e[1]*e[2];(0,n.h)(0!==r,32);var o=t[0],i=t[1],s=t[2],a=t[3],u=t[4],f=t[5];return t[0]=a/r,t[1]=-i/r,t[2]=-s/r,t[3]=o/r,t[4]=(s*f-a*u)/r,t[5]=-(o*f-i*u)/r,t}}}]);