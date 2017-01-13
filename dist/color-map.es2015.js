var ColorMap=function(){"use strict";function r(r,n){return n={exports:{}},r(n,n.exports),n.exports}function n(r,n,t,o){const e=[],u=[...r],s=[n[0]-r[0],n[1]-r[1],n[2]-r[2]];o&&(u.push(o[0]),s.push(o[1]-o[0]));for(let a=0;a<t;a++){const r=1/Math.max(t-1,1),n=[Math.round(u[0]+a*s[0]*r),Math.round(u[1]+a*s[1]*r),Math.round(u[2]+a*s[2]*r),o?u[3]+a*s[3]*r:1];e.push(n)}return e}function t(r,n,t){if(n<r.length)throw new Error(`Requires at least ${r.length} shades.`);const o=[],e=[];for(let u=0;u<r.length;u++)e.push(Math.round(r[u].index*n));for(let u=0;u<r.length-1;u++){const n=e[u+1]-e[u],s=r[u].rgb,a=r[u+1].rgb;o.push(...c.createColors(s,a,n,t))}return o}function o(r){let n="#";for(let t=0;t<3;t++)n+=e(r[t]);return n}function e(r){let n=(+r).toString(16);return n.length<2?"0"+n:n}function u(r){return"rgba("+r.join(",")+")"}var s=n,a={createColors:s};const c=a;var h=t,i={createColorsFromMap:h},f=o,g={rgbHex:f},p=u,l={rgbaString:p},M=r(function(r,n){function t(r){for(var t in r)n.hasOwnProperty(t)||(n[t]=r[t])}t(a),t(i),t(g),t(l)});return M}();
//# sourceMappingURL=color-map.es2015.js.map