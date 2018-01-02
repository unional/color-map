# color-map

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
![badge-size-es5-url]

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
# after fork
npm install

# begin making changes
git checkout -b <branch>
npm run watch

# edit `webpack.config.dev.js` to exclude dependencies for the global build.

# after making change(s)
git commit -m "<commit message>"
git push

# create PR
```

## Npm Commands

There are a few useful commands you can use during development.

```sh
# Run tests (and lint) automatically whenever you save a file.
npm run watch

# Run tests with coverage stats (but won't fail you if coverage does not meet criteria)
npm run test

# Manually verify the project.
# This will be ran during 'npm preversion' so you normally don't need to run this yourself.
npm run verify

# Build the project.
# You normally don't need to do this.
npm run build

# Run tslint
# You normally don't need to do this as `npm run watch` and `npm version` will automatically run lint for you.
npm run lint
```

Generated by [`generator-unional@0.3.1`](https://github.com/unional/unional-cli)

[npm-image]: https://img.shields.io/npm/v/color-map.svg?style=flat
[npm-url]: https://npmjs.org/package/color-map
[downloads-image]: https://img.shields.io/npm/dm/color-map.svg?style=flat
[downloads-url]: https://npmjs.org/package/color-map
[travis-image]: https://img.shields.io/travis/unional/color-map/master.svg?style=flat
[travis-url]: https://travis-ci.org/unional/color-map?branch=master
[coveralls-image]: https://coveralls.io/repos/github/unional/color-map/badge.svg
[coveralls-url]: https://coveralls.io/github/unional/color-map
[badge-size-es5-url]: http://img.badgesize.io/unional/color-map/master/dist/color-map.es5.js.svg?label=es5_size
[greenkeeper-image]:https://badges.greenkeeper.io/unional/color-map.svg
[greenkeeper-url]:https://greenkeeper.io/
[semantic-release-image]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[wallaby-image]:https://img.shields.io/badge/wallaby.js-configured-green.svg
[wallaby-url]:https://wallabyjs.com
[vscode-image]:https://img.shields.io/badge/vscode-ready-green.svg
[vscode-url]:https://code.visualstudio.com/
