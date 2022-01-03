'use strict';
const paramCase = require('param-case')
const pascalCase = require('pascal-case')
const path = require('path')

const pkg = require('./package.json')

const filename = paramCase(pkg.name)
const globalVariable = pascalCase(filename)

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    'color-map': './ts/index'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].es5.js',
    library: globalVariable
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.cjs.json',
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    mainFields: ['jsnext:main', 'browser', 'main']
  },
}
