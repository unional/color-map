(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ColorMap"] = factory();
	else
		root["ColorMap"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createColors(from, to, shades, alpha) {
    if (alpha === void 0) { alpha = [1, 1]; }
    var rgba = [];
    var start = from.slice();
    var diff = [
        to[0] - from[0],
        to[1] - from[1],
        to[2] - from[2]
    ];
    start.push(alpha[0]);
    diff.push(alpha[1] - alpha[0]);
    var inc = 1 /
        Math.max(shades - 1, 1);
    for (var i = 0; i < shades; i++) {
        var color = [
            Math.round(start[0] + i * diff[0] * inc),
            Math.round(start[1] + i * diff[1] * inc),
            Math.round(start[2] + i * diff[2] * inc),
            start[3] + i * diff[3] * inc
        ];
        rgba.push(color);
    }
    return rgba;
}
exports.createColors = createColors;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(0));
__export(__webpack_require__(2));
__export(__webpack_require__(3));
__export(__webpack_require__(4));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var createColors_1 = __webpack_require__(0);
/**
 * Create colors with specified color map.
 */
function createColorsFromMap(colormap, shades, alpha) {
    if (shades < colormap.length) {
        throw new Error("Requires at least " + colormap.length + " shades.");
    }
    var result = [];
    var steps = [];
    for (var i = 0; i < colormap.length; i++) {
        steps.push(Math.round(colormap[i].index * shades));
    }
    for (var i = 0; i < colormap.length - 1; i++) {
        var n = steps[i + 1] - steps[i];
        var from = colormap[i].rgb;
        var to = colormap[i + 1].rgb;
        result.push.apply(result, createColors_1.createColors(from, to, n, alpha));
    }
    return result;
}
exports.createColorsFromMap = createColorsFromMap;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Convert `RGB` to `#rgb`
 * JavaScript note: no check for array length, use it properly.
 */
function rgbHex(rgb) {
    var hex = '#';
    for (var i = 0; i < 3; i++) {
        hex += d2h(rgb[i]);
    }
    return hex;
}
exports.rgbHex = rgbHex;
function d2h(d) {
    var s = (+d).toString(16);
    return s.length < 2 ? '0' + s : s;
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function rgbaString(rgba) {
    return 'rgba(' + rgba.join(',') + ')';
}
exports.rgbaString = rgbaString;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3ZTFlM2Q4M2JmNDgwMzcwY2VkOCIsIndlYnBhY2s6Ly8vLi9zcmMvY3JlYXRlQ29sb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY3JlYXRlQ29sb3JzRnJvbU1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmdiSGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yZ2JhU3RyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUMzREEsc0JBQTZCLElBQVMsRUFBRSxFQUFPLEVBQUUsTUFBYyxFQUFFLEtBQXFCO0lBQXJCLGlDQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BGLElBQU0sSUFBSSxHQUFVLEVBQUU7SUFDdEIsSUFBTSxLQUFLLEdBQU8sSUFBSSxRQUFDO0lBQ3ZCLElBQU0sSUFBSSxHQUFHO1FBQ1gsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFD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Q0FBQztJQUVELE1BQU0sQ0FBQyxNQUFNO0FBQ2YsQ0FBQztBQW5CRCxrREFtQkM7Ozs7Ozs7Ozs7QUN2QkQ7OztHQUdHO0FBQ0gsZ0JBQXVCLEdBQVE7SUFDN0IsSUFBSSxHQUFHLEdBQUcsR0FBRztJQUNiLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDM0IsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUNELE1BQU0sQ0FBQyxHQUFHO0FBQ1osQ0FBQztBQU5ELHdCQU1DO0FBRUQsYUFBYSxDQUFTO0lBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3pCLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQyxDQUFDOzs7Ozs7Ozs7O0FDZkQsb0JBQTJCLElBQVU7SUFDbkMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUN4QyxDQUFDO0FBRkQsZ0NBRUMiLCJmaWxlIjoiY29sb3ItbWFwLmVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkNvbG9yTWFwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNvbG9yTWFwXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdlMWUzZDgzYmY0ODAzNzBjZWQ4IiwiaW1wb3J0IHsgUkdCLCBSR0JBLCBBbHBoYSB9IGZyb20gJy4vaW50ZXJmYWNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbG9ycyhmcm9tOiBSR0IsIHRvOiBSR0IsIHNoYWRlczogbnVtYmVyLCBhbHBoYTogQWxwaGEgPSBbMSwgMV0pOiBSR0JBW10ge1xuICBjb25zdCByZ2JhOiBhbnlbXSA9IFtdXG4gIGNvbnN0IHN0YXJ0ID0gWy4uLmZyb21dXG4gIGNvbnN0IGRpZmYgPSBbXG4gICAgdG9bMF0gLSBmcm9tWzBdLFxuICAgIHRvWzFdIC0gZnJvbVsxXSxcbiAgICB0b1syXSAtIGZyb21bMl1cbiAgXVxuXG4gIHN0YXJ0LnB1c2goYWxwaGFbMF0pXG4gIGRpZmYucHVzaChhbHBoYVsxXSAtIGFscGhhWzBdKVxuXG4gIGNvbnN0IGluYyA9IDEgL1xuICAgIE1hdGgubWF4KHNoYWRlcyAtIDEsIDEpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGFkZXM7IGkrKykge1xuICAgIGNvbnN0IGNvbG9yID0gW1xuICAgICAgTWF0aC5yb3VuZChzdGFydFswXSArIGkgKiBkaWZmWzBdICogaW5jKSxcbiAgICAgIE1hdGgucm91bmQoc3RhcnRbMV0gKyBpICogZGlmZlsxXSAqIGluYyksXG4gICAgICBNYXRoLnJvdW5kKHN0YXJ0WzJdICsgaSAqIGRpZmZbMl0gKiBpbmMpLFxuICAgICAgc3RhcnRbM10gKyBpICogZGlmZlszXSAqIGluY1xuICAgIF1cbiAgICByZ2JhLnB1c2goY29sb3IpXG4gIH1cbiAgcmV0dXJuIHJnYmFcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jcmVhdGVDb2xvcnMudHMiLCJleHBvcnQgKiBmcm9tICcuL2NyZWF0ZUNvbG9ycydcbmV4cG9ydCAqIGZyb20gJy4vY3JlYXRlQ29sb3JzRnJvbU1hcCdcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcydcbmV4cG9ydCAqIGZyb20gJy4vcmdiSGV4J1xuZXhwb3J0ICogZnJvbSAnLi9yZ2JhU3RyaW5nJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwiaW1wb3J0IHsgQ29sb3JNYXAsIEFscGhhLCBSR0JBLCBSR0IgfSBmcm9tICcuL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBjcmVhdGVDb2xvcnMgfSBmcm9tICcuL2NyZWF0ZUNvbG9ycydcblxuLyoqXG4gKiBDcmVhdGUgY29sb3JzIHdpdGggc3BlY2lmaWVkIGNvbG9yIG1hcC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbG9yc0Zyb21NYXAoY29sb3JtYXA6IENvbG9yTWFwLCBzaGFkZXM6IG51bWJlciwgYWxwaGE/OiBBbHBoYSk6IFJHQkFbXSB7XG4gIGlmIChzaGFkZXMgPCBjb2xvcm1hcC5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJlcXVpcmVzIGF0IGxlYXN0ICR7Y29sb3JtYXAubGVuZ3RofSBzaGFkZXMuYClcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdDogUkdCQVtdID0gW11cbiAgY29uc3Qgc3RlcHM6IG51bWJlcltdID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcm1hcC5sZW5ndGg7IGkrKykge1xuICAgIHN0ZXBzLnB1c2goTWF0aC5yb3VuZChjb2xvcm1hcFtpXS5pbmRleCAqIHNoYWRlcykpXG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9ybWFwLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGNvbnN0IG4gPSBzdGVwc1tpICsgMV0gLSBzdGVwc1tpXVxuICAgIGNvbnN0IGZyb206IFJHQiA9IGNvbG9ybWFwW2ldLnJnYjtcbiAgICBjb25zdCB0byA9IGNvbG9ybWFwW2kgKyAxXS5yZ2I7XG4gICAgcmVzdWx0LnB1c2goLi4uY3JlYXRlQ29sb3JzKGZyb20sIHRvLCBuLCBhbHBoYSkpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY3JlYXRlQ29sb3JzRnJvbU1hcC50cyIsImltcG9ydCB7IFJHQiB9IGZyb20gJy4vaW50ZXJmYWNlcydcblxuLyoqXG4gKiBDb252ZXJ0IGBSR0JgIHRvIGAjcmdiYFxuICogSmF2YVNjcmlwdCBub3RlOiBubyBjaGVjayBmb3IgYXJyYXkgbGVuZ3RoLCB1c2UgaXQgcHJvcGVybHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZ2JIZXgocmdiOiBSR0IpIHtcbiAgbGV0IGhleCA9ICcjJ1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGhleCArPSBkMmgocmdiW2ldKVxuICB9XG4gIHJldHVybiBoZXhcbn1cblxuZnVuY3Rpb24gZDJoKGQ6IG51bWJlcikge1xuICBsZXQgcyA9ICgrZCkudG9TdHJpbmcoMTYpXG4gIHJldHVybiBzLmxlbmd0aCA8IDIgPyAnMCcgKyBzIDogc1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JnYkhleC50cyIsImltcG9ydCB7IFJHQkEgfSBmcm9tICcuL2ludGVyZmFjZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JhU3RyaW5nKHJnYmE6IFJHQkEpIHtcbiAgcmV0dXJuICdyZ2JhKCcgKyByZ2JhLmpvaW4oJywnKSArICcpJztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZ2JhU3RyaW5nLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==