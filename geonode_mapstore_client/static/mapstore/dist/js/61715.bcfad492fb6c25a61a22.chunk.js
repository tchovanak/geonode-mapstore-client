(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[61715],{408097:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Feature:()=>p,LLayer:()=>q,LMap:()=>v,MeasurementSupport:()=>d,Overview:()=>c,ScaleBar:()=>l,default:()=>y});var r=n(152792),i=n(739726),o=n(442047),m=n(521975),s=n.n(m),a=n(20564),u=n.n(a),f=n(444948),q=r.Z,v=i.Z,d=o.Z,c=s(),l=u(),p=f.Z;const y={LLayer:q,LMap:v,MeasurementSupport:d,Overview:c,ScaleBar:l,Feature:p}},808797:(e,t,n)=>{"use strict";n.d(t,{L0:()=>v,Ov:()=>f,rp:()=>a,wd:()=>q}),n(701469);var r=n(91175),i=n.n(r),o=n(807654),m=n.n(o);function s(e){var t=Math.floor(e),n=60*(e-t),r=Math.floor(n),i=60*(n-r);return t+"° "+r+"' "+Math.floor(i)+"'' "}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.measureTrueBearing,r=void 0!==n&&n,i=t.fractionDigits,o=void 0===i?0:i,m="";if(r){var a="";e>=0&&e<10?a="00":e>10&&e<100&&(a="0");var u=o>0?e.toFixed(o):Math.floor(e);m=a+u+"°"}else e>=0&&e<90?m="N "+s(e)+"E":e>90&&e<=180?m="S "+s(180-e)+"E":e>180&&e<270?m="S "+s(e-180)+"W":e>=270&&e<=360&&(m="N "+s(360-e)+"W");return m}var u={yd:{ft:3,m:.9144,km:9144e-7,yd:1,mi:.00056818181818,nm:.00049373650107},ft:{ft:1,m:.3048,km:3048e-7,yd:.33333333333334,mi:.0001893932,nm:164579e-9},m:{ft:3.28084,m:1,km:.001,yd:1.0936132983377,mi:621371e-9,nm:.000539956803},km:{ft:3280.84,m:1e3,km:1,yd:1093.6132983377,mi:.62137121212121,nm:.5399568207343395},mi:{ft:5280.000168959982,m:1609.3440514990027,km:1.6093440514990027,yd:1760,mi:1,nm:.8689762697078849},nm:{ft:6076.115679999979,m:1852.0000592639938,km:1.8520000592639938,yd:2025.3718285214,mi:1.150779484848481,nm:1},sqft:{sqft:1,sqm:.09290304,sqkm:9.2903043596611e-8,sqmi:3.587e-8,sqnm:2.7051601137505e-8},sqyd:{sqft:8.9999247491639,sqm:.83612040133779,sqkm:8.3612040133779e-7,sqyd:1,sqmi:3.228278917579e-7,sqnm:2.4346237458194e-7},sqm:{sqft:10.76391,sqm:1,sqkm:1e-6,sqyd:1.196,sqmi:3.8610215854245e-7,sqnm:2.91181e-7},sqkm:{sqft:10763910,sqm:1e6,sqkm:1,sqyd:1196e3,sqmi:.38610215854245,sqnm:.291181},sqmi:{sqft:27878398.920726,sqm:2589988.110336,sqkm:2.589988110336,sqyd:27878398.920726,sqmi:1,sqnm:.75415532795574},sqnm:{sqft:36966388.603652,sqm:3434290.0120544,sqkm:3.4342900120544,sqyd:36966388.603652,sqmi:1.325986786715,sqnm:1}};function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"m",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"m";return u[t]&&u[t][n]?e*u[t][n]:e}var q=function(e){return!m()(parseFloat(e[0]))&&!m()(parseFloat(e[1]))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.coordinates,n=e.type,r=t;if("LineString"===n){if((r=t.filter(q)).length<2)return[]}else if("Polygon"===n){if((r=i()(t).filter(q)).length<3)return[[]];r=[r.concat([i()(r)])]}return r}},23279:(e,t,n)=>{var r=n(513218),i=n(707771),o=n(14841),m=Math.max,s=Math.min;e.exports=function(e,t,n){var a,u,f,q,v,d,c=0,l=!1,p=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=a,r=u;return a=u=void 0,c=t,q=e.apply(r,n)}function k(e){return c=e,v=setTimeout(M,t),l?h(e):q}function g(e){var n=e-d;return void 0===d||n>=t||n<0||p&&e-c>=f}function M(){var e=i();if(g(e))return w(e);v=setTimeout(M,function(e){var n=t-(e-d);return p?s(n,f-(e-c)):n}(e))}function w(e){return v=void 0,y&&a?h(e):(a=u=void 0,q)}function x(){var e=i(),n=g(e);if(a=arguments,u=this,d=e,n){if(void 0===v)return k(d);if(p)return clearTimeout(v),v=setTimeout(M,t),h(d)}return void 0===v&&(v=setTimeout(M,t)),q}return t=o(t)||0,r(n)&&(l=!!n.leading,f=(p="maxWait"in n)?m(o(n.maxWait)||0,t):f,y="trailing"in n?!!n.trailing:y),x.cancel=function(){void 0!==v&&clearTimeout(v),c=0,a=d=u=v=void 0},x.flush=function(){return void 0===v?q:w(i())},x}},807654:(e,t,n)=>{var r=n(281763);e.exports=function(e){return r(e)&&e!=+e}},707771:(e,t,n)=>{var r=n(555639);e.exports=function(){return r.Date.now()}}}]);