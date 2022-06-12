var ColorMap;(()=>{"use strict";var e={938:function(e,r){var t=this&&this.__spreadArray||function(e,r,t){if(t||2===arguments.length)for(var o,n=0,a=r.length;n<a;n++)!o&&n in r||(o||(o=Array.prototype.slice.call(r,0,n)),o[n]=r[n]);return e.concat(o||Array.prototype.slice.call(r))};Object.defineProperty(r,"__esModule",{value:!0}),r.createColors=void 0,r.createColors=function(e,r,o,n){void 0===n&&(n=[4===e.length?e[3]:4===r.length?r[3]:1,4===r.length?r[3]:4===e.length?e[3]:1]);var a=t([],e,!0),i=[r[0]-e[0],r[1]-e[1],r[2]-e[2],n[1]-n[0]];3===a.length&&a.push(n[0]);for(var l=1/Math.max(o-1,1),u=[],c=0;c<o;c++){var s=[Math.round(a[0]+c*i[0]*l),Math.round(a[1]+c*i[1]*l),Math.round(a[2]+c*i[2]*l),a[3]+c*i[3]*l];u.push(s)}return u}},879:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.createColorsFromMap=void 0;var o=t(938);r.createColorsFromMap=function(e,r,t){if(r<e.length)throw new Error("Requires at least ".concat(e.length," shades."));for(var n=[],a=[],i=0;i<e.length;i++)a.push(Math.round(e[i].index*r));for(i=0;i<e.length-1;i++){var l=a[i+1]-a[i],u=e[i].rgb,c=e[i+1].rgb;n.push.apply(n,(0,o.createColors)(u,c,l,t))}return n}},403:function(e,r,t){var o=this&&this.__createBinding||(Object.create?function(e,r,t,o){void 0===o&&(o=t);var n=Object.getOwnPropertyDescriptor(r,t);n&&!("get"in n?!r.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,o,n)}:function(e,r,t,o){void 0===o&&(o=t),e[o]=r[t]}),n=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||o(r,e,t)};Object.defineProperty(r,"__esModule",{value:!0}),n(t(938),r),n(t(879),r),n(t(676),r),n(t(140),r),n(t(0),r)},676:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0})},140:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.rgbHex=void 0,r.rgbHex=function(e){for(var r,t="#",o=0;o<3;o++)t+=(void 0,(r=(+e[o]).toString(16)).length<2?"0"+r:r);return t}},0:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.rgbaString=void 0,r.rgbaString=function(e){return"rgba("+e.join(",")+")"}}},r={},t=function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}(403);ColorMap=t})();
//# sourceMappingURL=color-map.es5.js.map