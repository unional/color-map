var ColorMap=function(r){function e(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};return e.m=r,e.c=t,e.d=function(r,t,n){e.o(r,t)||Object.defineProperty(r,t,{configurable:!1,enumerable:!0,get:n})},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},e.p="",e(e.s=1)}([function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createColors=function(r,e,t,n){void 0===n&&(n=[1,1]);var o=[],u=r.slice(),a=[e[0]-r[0],e[1]-r[1],e[2]-r[2]];u.push(n[0]),a.push(n[1]-n[0]);for(var i=1/Math.max(t-1,1),c=0;c<t;c++){var s=[Math.round(u[0]+c*a[0]*i),Math.round(u[1]+c*a[1]*i),Math.round(u[2]+c*a[2]*i),u[3]+c*a[3]*i];o.push(s)}return o}},function(r,e,t){"use strict";function n(r){for(var t in r)e.hasOwnProperty(t)||(e[t]=r[t])}Object.defineProperty(e,"__esModule",{value:!0}),n(t(0)),n(t(2)),n(t(3)),n(t(4))},function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(0);e.createColorsFromMap=function(r,e,t){if(e<r.length)throw new Error("Requires at least "+r.length+" shades.");for(var o=[],u=[],a=0;a<r.length;a++)u.push(Math.round(r[a].index*e));for(a=0;a<r.length-1;a++){var i=u[a+1]-u[a],c=r[a].rgb,s=r[a+1].rgb;o.push.apply(o,n.createColors(c,s,i,t))}return o}},function(r,e,t){"use strict";function n(r){var e=(+r).toString(16);return e.length<2?"0"+e:e}Object.defineProperty(e,"__esModule",{value:!0}),e.rgbHex=function(r){for(var e="#",t=0;t<3;t++)e+=n(r[t]);return e}},function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.rgbaString=function(r){return"rgba("+r.join(",")+")"}}]);
//# sourceMappingURL=color-map.es5.js.map