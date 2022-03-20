"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createColorsFromMap = createColorsFromMap;
var _createColors = require("./createColors");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function createColorsFromMap(colormap, shades, alpha) {
    if (shades < colormap.length) {
        throw new Error("Requires at least ".concat(colormap.length, " shades."));
    }
    var result = [];
    var steps = [];
    for(var i = 0; i < colormap.length; i++){
        steps.push(Math.round(colormap[i].index * shades));
    }
    for(var i1 = 0; i1 < colormap.length - 1; i1++){
        var _result;
        var n = steps[i1 + 1] - steps[i1];
        var from = colormap[i1].rgb;
        var to = colormap[i1 + 1].rgb;
        (_result = result).push.apply(_result, _toConsumableArray((0, _createColors).createColors(from, to, n, alpha)));
    }
    return result;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NyZWF0ZUNvbG9yc0Zyb21NYXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29sb3JzIH0gZnJvbSAnLi9jcmVhdGVDb2xvcnMnXG5pbXBvcnQgeyBDb2xvck1hcCwgQWxwaGEsIFJHQkEgfSBmcm9tICcuL2ludGVyZmFjZXMnXG5cbi8qKlxuICogQ3JlYXRlIGNvbG9ycyB3aXRoIHNwZWNpZmllZCBjb2xvciBtYXAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb2xvcnNGcm9tTWFwKGNvbG9ybWFwOiBDb2xvck1hcCwgc2hhZGVzOiBudW1iZXIsIGFscGhhPzogQWxwaGEpOiBSR0JBW10ge1xuICBpZiAoc2hhZGVzIDwgY29sb3JtYXAubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSZXF1aXJlcyBhdCBsZWFzdCAke2NvbG9ybWFwLmxlbmd0aH0gc2hhZGVzLmApXG4gIH1cblxuICBjb25zdCByZXN1bHQ6IFJHQkFbXSA9IFtdXG4gIGNvbnN0IHN0ZXBzOiBudW1iZXJbXSA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JtYXAubGVuZ3RoOyBpKyspIHtcbiAgICBzdGVwcy5wdXNoKE1hdGgucm91bmQoY29sb3JtYXBbaV0uaW5kZXggKiBzaGFkZXMpKVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcm1hcC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBjb25zdCBuID0gc3RlcHNbaSArIDFdIC0gc3RlcHNbaV1cbiAgICBjb25zdCBmcm9tID0gY29sb3JtYXBbaV0ucmdiO1xuICAgIGNvbnN0IHRvID0gY29sb3JtYXBbaSArIDFdLnJnYjtcbiAgICByZXN1bHQucHVzaCguLi5jcmVhdGVDb2xvcnMoZnJvbSwgdG8sIG4sIGFscGhhKSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDb2xvcnNGcm9tTWFwIiwiY29sb3JtYXAiLCJzaGFkZXMiLCJhbHBoYSIsImxlbmd0aCIsIkVycm9yIiwicmVzdWx0Iiwic3RlcHMiLCJpIiwicHVzaCIsIk1hdGgiLCJyb3VuZCIsImluZGV4IiwibiIsImZyb20iLCJyZ2IiLCJ0byIsImNyZWF0ZUNvbG9ycyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBQTs7O0VBQUE7UUFNZ0JBLG1CQUFtQixHQUFuQkEsbUJBQW1CLEFBTm5DO0FBQTZCLElBQUEsYUFBZ0IsV0FBaEIsZ0JBQWdCLENBQUE7O3lEQUE3Qzt1RUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrREFBQTs7OztBQU1PLFNBQVNBLG1CQUFtQixDQUFDQyxRQUFrQixFQUFFQyxNQUFjLEVBQUVDLEtBQWEsRUFBVTtJQUM3RixJQUFJRCxNQUFNLEdBQUdELFFBQVEsQ0FBQ0csTUFBTSxFQUFFO1FBQzVCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLEFBQUMsb0JBQWtCLENBQWtCLE1BQVEsQ0FBeEJKLFFBQVEsQ0FBQ0csTUFBTSxFQUFDLFVBQVEsQ0FBQyxDQUFDLENBQUE7S0FDaEU7SUFFRCxJQUFNRSxNQUFNLEdBQVcsRUFBRTtJQUN6QixJQUFNQyxLQUFLLEdBQWEsRUFBRTtJQUMxQixJQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1AsUUFBUSxDQUFDRyxNQUFNLEVBQUVJLENBQUMsRUFBRSxDQUFFO1FBQ3hDRCxLQUFLLENBQUNFLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUNWLFFBQVEsQ0FBQ08sQ0FBQyxDQUFDLENBQUNJLEtBQUssR0FBR1YsTUFBTSxDQUFDLENBQUMsQUFkdEQ7S0FlRztJQUVELElBQUssSUFBSU0sRUFBQyxHQUFHLENBQUMsRUFBRUEsRUFBQyxHQUFHUCxRQUFRLENBQUNHLE1BQU0sR0FBRyxDQUFDLEVBQUVJLEVBQUMsRUFBRSxDQUFFO1lBSTVDRixPQUFNO1FBSE4sSUFBTU8sQ0FBQyxHQUFHTixLQUFLLENBQUNDLEVBQUMsR0FBRyxDQUFDLENBQUMsR0FBR0QsS0FBSyxDQUFDQyxFQUFDLENBQUM7UUFDakMsSUFBTU0sSUFBSSxHQUFHYixRQUFRLENBQUNPLEVBQUMsQ0FBQyxDQUFDTyxHQUFHLEFBQUM7UUFDN0IsSUFBTUMsRUFBRSxHQUFHZixRQUFRLENBQUNPLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ08sR0FBRyxBQUFDO1FBQy9CVCxDQUFBQSxPQUFNLEdBQU5BLE1BQU0sRUFBQ0csSUFBSSxDQUFYSCxLQUFnRCxDQUFoREEsT0FBTSxFQUFNLG1CQUFHVyxDQUFBQSxHQUFBQSxhQUFZLEFBQW9CLENBQUEsY0FBbkJILElBQUksRUFBRUUsRUFBRSxFQUFFSCxDQUFDLEVBQUVWLEtBQUssQ0FBQyxDQUFoQ2MsQ0FBaUMsQUFyQnBEO0tBc0JHO0lBRUQsT0FBT1gsTUFBTSxDQUFBO0NBQ2QifQ==