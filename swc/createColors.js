"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createColors = createColors;
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
function createColors(from, to, shades) {
    var alpha = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [
        from.length === 4 ? from[3] : to.length === 4 ? to[3] : 1,
        to.length === 4 ? to[3] : from.length === 4 ? from[3] : 1
    ];
    var start = _toConsumableArray(from);
    var diff = [
        to[0] - from[0],
        to[1] - from[1],
        to[2] - from[2],
        alpha[1] - alpha[0]
    ];
    if (start.length === 3) start.push(alpha[0]);
    var inc = 1 / Math.max(shades - 1, 1);
    var rgba = [];
    for(var i = 0; i < shades; i++){
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NyZWF0ZUNvbG9ycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSR0IsIFJHQkEsIEFscGhhIH0gZnJvbSAnLi9pbnRlcmZhY2VzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29sb3JzKFxuICBmcm9tOiBSR0IgfCBSR0JBLFxuICB0bzogUkdCIHwgUkdCQSxcbiAgc2hhZGVzOiBudW1iZXIsXG4gIGFscGhhOiBBbHBoYSA9IFtcbiAgICBmcm9tLmxlbmd0aCA9PT0gNCA/IGZyb21bM10gOiB0by5sZW5ndGggPT09IDQgPyB0b1szXSA6IDEsXG4gICAgdG8ubGVuZ3RoID09PSA0ID8gdG9bM10gOiBmcm9tLmxlbmd0aCA9PT0gNCA/IGZyb21bM10gOiAxXG4gIF0pOiBSR0JBW10ge1xuICBjb25zdCBzdGFydCA9IFsuLi5mcm9tXVxuICBjb25zdCBkaWZmID0gW1xuICAgIHRvWzBdIC0gZnJvbVswXSxcbiAgICB0b1sxXSAtIGZyb21bMV0sXG4gICAgdG9bMl0gLSBmcm9tWzJdLFxuICAgIGFscGhhWzFdIC0gYWxwaGFbMF1cbiAgXVxuXG4gIGlmIChzdGFydC5sZW5ndGggPT09IDMpXG4gICAgc3RhcnQucHVzaChhbHBoYVswXSlcblxuICBjb25zdCBpbmMgPSAxIC8gTWF0aC5tYXgoc2hhZGVzIC0gMSwgMSlcblxuICBjb25zdCByZ2JhOiBhbnlbXSA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hhZGVzOyBpKyspIHtcbiAgICBjb25zdCBjb2xvciA9IFtcbiAgICAgIE1hdGgucm91bmQoc3RhcnRbMF0gKyBpICogZGlmZlswXSAqIGluYyksXG4gICAgICBNYXRoLnJvdW5kKHN0YXJ0WzFdICsgaSAqIGRpZmZbMV0gKiBpbmMpLFxuICAgICAgTWF0aC5yb3VuZChzdGFydFsyXSArIGkgKiBkaWZmWzJdICogaW5jKSxcbiAgICAgIHN0YXJ0WzNdICsgaSAqIGRpZmZbM10gKiBpbmNcbiAgICBdXG4gICAgcmdiYS5wdXNoKGNvbG9yKVxuICB9XG4gIHJldHVybiByZ2JhXG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29sb3JzIiwiZnJvbSIsInRvIiwic2hhZGVzIiwiYWxwaGEiLCJsZW5ndGgiLCJzdGFydCIsImRpZmYiLCJwdXNoIiwiaW5jIiwiTWF0aCIsIm1heCIsInJnYmEiLCJpIiwiY29sb3IiLCJyb3VuZCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBQTs7O0VBQUE7UUFFZ0JBLFlBQVksR0FBWkEsWUFBWSxBQUY1Qjs7eURBQUE7dUVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0RBQUE7Ozs7QUFFTyxTQUFTQSxZQUFZLENBQzFCQyxJQUFnQixFQUNoQkMsRUFBYyxFQUNkQyxNQUFjLEVBSUg7UUFIWEMsS0FBWSxHQUFaQSwrQ0FHQyxrQkFIYztRQUNiSCxJQUFJLENBQUNJLE1BQU0sS0FBSyxDQUFDLEdBQUdKLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR0MsRUFBRSxDQUFDRyxNQUFNLEtBQUssQ0FBQyxHQUFHSCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN6REEsRUFBRSxDQUFDRyxNQUFNLEtBQUssQ0FBQyxHQUFHSCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUdELElBQUksQ0FBQ0ksTUFBTSxLQUFLLENBQUMsR0FBR0osSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7S0FDMUQ7SUFDRCxJQUFNSyxLQUFLLEdBQUksbUJBQUdMLElBQUksQ0FBSkEsQUFBSztJQUN2QixJQUFNTSxJQUFJLEdBQUc7UUFDWEwsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHRCxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBR0QsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNmQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUdELElBQUksQ0FBQyxDQUFDLENBQUM7UUFDZkcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3BCO0lBRUQsSUFBSUUsS0FBSyxDQUFDRCxNQUFNLEtBQUssQ0FBQyxFQUNwQkMsS0FBSyxDQUFDRSxJQUFJLENBQUNKLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxBQW5CeEI7SUFxQkUsSUFBTUssR0FBRyxHQUFHLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxHQUFHLENBQUNSLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXZDLElBQU1TLElBQUksR0FBVSxFQUFFO0lBQ3RCLElBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHVixNQUFNLEVBQUVVLENBQUMsRUFBRSxDQUFFO1FBQy9CLElBQU1DLEtBQUssR0FBRztZQUNaSixJQUFJLENBQUNLLEtBQUssQ0FBQ1QsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHTyxDQUFDLEdBQUdOLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR0UsR0FBRyxDQUFDO1lBQ3hDQyxJQUFJLENBQUNLLEtBQUssQ0FBQ1QsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHTyxDQUFDLEdBQUdOLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR0UsR0FBRyxDQUFDO1lBQ3hDQyxJQUFJLENBQUNLLEtBQUssQ0FBQ1QsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHTyxDQUFDLEdBQUdOLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR0UsR0FBRyxDQUFDO1lBQ3hDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUdPLENBQUMsR0FBR04sSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHRSxHQUFHO1NBQzdCO1FBQ0RHLElBQUksQ0FBQ0osSUFBSSxDQUFDTSxLQUFLLENBQUMsQUEvQnBCO0tBZ0NHO0lBQ0QsT0FBT0YsSUFBSSxDQUFBO0NBQ1oifQ==