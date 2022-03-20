"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _exportNames = {};
var _createColors = _interopRequireWildcard(require("./createColors"));
Object.keys(_createColors).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in exports && exports[key] === _createColors[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _createColors[key];
        }
    });
});
var _createColorsFromMap = _interopRequireWildcard(require("./createColorsFromMap"));
Object.keys(_createColorsFromMap).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in exports && exports[key] === _createColorsFromMap[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _createColorsFromMap[key];
        }
    });
});
var _interfaces = _interopRequireWildcard(require("./interfaces"));
Object.keys(_interfaces).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in exports && exports[key] === _interfaces[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _interfaces[key];
        }
    });
});
var _rgbHex = _interopRequireWildcard(require("./rgbHex"));
Object.keys(_rgbHex).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in exports && exports[key] === _rgbHex[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _rgbHex[key];
        }
    });
});
var _rgbaString = _interopRequireWildcard(require("./rgbaString"));
Object.keys(_rgbaString).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in exports && exports[key] === _rgbaString[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _rgbaString[key];
        }
    });
});
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vY3JlYXRlQ29sb3JzJ1xuZXhwb3J0ICogZnJvbSAnLi9jcmVhdGVDb2xvcnNGcm9tTWFwJ1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzJ1xuZXhwb3J0ICogZnJvbSAnLi9yZ2JIZXgnXG5leHBvcnQgKiBmcm9tICcuL3JnYmFTdHJpbmcnXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBQTs7O0VBQUE7O29EQUFjLGdCQUFnQjtBQUE5QixZQUFBLGFBQThCOzs7MkNBQTlCLGFBQThCOzs7O21CQUE5QixhQUE4Qjs7TUFBOUI7RUFBOEIsQUFBOUI7MkRBQ2MsdUJBQXVCO0FBQXJDLFlBQUEsb0JBQXFDOzs7MkNBQXJDLG9CQUFxQzs7OzttQkFBckMsb0JBQXFDOztNQURyQztFQUNxQyxBQURyQztrREFFYyxjQUFjO0FBQTVCLFlBQUEsV0FBNEI7OzsyQ0FBNUIsV0FBNEI7Ozs7bUJBQTVCLFdBQTRCOztNQUY1QjtFQUU0QixBQUY1Qjs4Q0FHYyxVQUFVO0FBQXhCLFlBQUEsT0FBd0I7OzsyQ0FBeEIsT0FBd0I7Ozs7bUJBQXhCLE9BQXdCOztNQUh4QjtFQUd3QixBQUh4QjtrREFJYyxjQUFjO0FBQTVCLFlBQUEsV0FBNEI7OzsyQ0FBNUIsV0FBNEI7Ozs7bUJBQTVCLFdBQTRCOztNQUo1QjtFQUk0QixBQUo1Qjs7Ozs7Ozs7Ozs7Z0VBQUE7OzhDQUFBOzs7Ozs0QkFBQSJ9