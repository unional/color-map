# color-map

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

[![Circle CI][circleci-image]][circleci-url]
[![Travis CI][travis-image]][travis-url]
[![Codecov][codecov-image]][codecov-url]
[![Coveralls Status][coveralls-image]][coveralls-url]

[![Greenkeeper][greenkeeper-image]][greenkeeper-url]
[![Semantic Release][semantic-release-image]][semantic-release-url]

[![Visual Studio Code][vscode-image]][vscode-url]
[![Wallaby.js][wallaby-image]][wallaby-url]

Color map generator with no dependency.

Inspired from [`colormap`](https://github.com/bpostlethwaite/colormap).

## `createColors(from, to, shades, alpha?)`

```ts
import { createColors } from 'color-map'

// creates array of [r,g,b,a]
const rgbaRange = createColors([0, 0, 255], [0, 255, 128], 72, [0, 1])

// creates array of [r,g,b,1]
const rgbRange = createColors([0, 0, 255], [0, 255, 128], 72)
```

## `rgbHex(rgb)`

```ts
import { rgbHex } from 'color-map'

rgbHex([0, 128, 255]) // '#0080ff'
rgbHex([0, 128, 255, 0.3]) // '#0080ff'
```

## `rgbaString(rgba)`

```ts
import { rgbaString } from 'color-map'

rgbaString([0, 128, 255, 0.2]) // 'rgba(0,128,255,0.2)`

```

## `createColorsFromMap(colormap, shades, alpha?)`

```ts
import { createColorsFromMap, ColorMap } from 'color-map'

const summer: ColorMap = [{ index: 0, rgb: [0,128,102] }, { index: 1, rgb: [255,255,102] }]

const colors = createColorsFromMap(summer, 60)
```

## Contribute

```sh
# after fork and clone
npm install

# begin making changes
git checkout -b <branch>
npm run watch

# after making change(s)
git commit -m "<commit message>"
git push

# create PR
```

[circleci-image]: https://circleci.com/gh/unional/color-map/tree/master.svg?style=shield
[circleci-url]: https://circleci.com/gh/unional/color-map/tree/master
[codecov-image]: https://codecov.io/gh/unional/color-map/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/unional/color-map
[coveralls-image]: https://coveralls.io/repos/github/unional/color-map/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/unional/color-map?branch=master
[downloads-image]: https://img.shields.io/npm/dm/color-map.svg?style=flat
[downloads-url]: https://npmjs.org/package/color-map
[greenkeeper-image]: https://badges.greenkeeper.io/unional/color-map.svg
[greenkeeper-url]: https://greenkeeper.io/
[npm-image]: https://img.shields.io/npm/v/color-map.svg?style=flat
[npm-url]: https://npmjs.org/package/color-map
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[travis-image]: https://img.shields.io/travis/unional/color-map/master.svg?style=flat
[travis-url]: https://travis-ci.org/unional/color-map?branch=master
[vscode-image]: https://img.shields.io/badge/vscode-ready-green.svg
[vscode-url]: https://code.visualstudio.com/
[wallaby-image]: https://img.shields.io/badge/wallaby.js-configured-green.svg
[wallaby-url]: https://wallabyjs.com
