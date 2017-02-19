(function (exports) {
'use strict';

function createColors(from, to, shades, alpha) {
    const rgba = [];
    const start = [...from];
    const diff = [
        to[0] - from[0],
        to[1] - from[1],
        to[2] - from[2]
    ];
    if (alpha) {
        start.push(alpha[0]);
        diff.push(alpha[1] - alpha[0]);
    }
    for (let i = 0; i < shades; i++) {
        const inc = 1 /
            Math.max(shades - 1, 1);
        const color = [
            Math.round(start[0] + i * diff[0] * inc),
            Math.round(start[1] + i * diff[1] * inc),
            Math.round(start[2] + i * diff[2] * inc),
            alpha ? start[3] + i * diff[3] * inc : 1
        ];
        rgba.push(color);
    }
    return rgba;
}

/**
 * Create colors with specified color map.
 */
function createColorsFromMap(colormap, shades, alpha) {
    if (shades < colormap.length) {
        throw new Error(`Requires at least ${colormap.length} shades.`);
    }
    const result = [];
    const steps = [];
    for (let i = 0; i < colormap.length; i++) {
        steps.push(Math.round(colormap[i].index * shades));
    }
    for (let i = 0; i < colormap.length - 1; i++) {
        const n = steps[i + 1] - steps[i];
        const from = colormap[i].rgb;
        const to = colormap[i + 1].rgb;
        result.push(...createColors(from, to, n, alpha));
    }
    return result;
}

/**
 * Convert `RGB` to `#rgb`
 * JavaScript note: no check for array length, use it properly.
 */
function rgbHex(rgb) {
    let hex = '#';
    for (let i = 0; i < 3; i++) {
        hex += d2h(rgb[i]);
    }
    return hex;
}
function d2h(d) {
    let s = (+d).toString(16);
    return s.length < 2 ? '0' + s : s;
}

function rgbaString(rgba) {
    return 'rgba(' + rgba.join(',') + ')';
}

exports.createColors = createColors;
exports.createColorsFromMap = createColorsFromMap;
exports.rgbHex = rgbHex;
exports.rgbaString = rgbaString;

}((this.ColorMap = this.ColorMap || {})));
//# sourceMappingURL=color-map.es2015.js.map
