'use strict';
const paramCase = require('param-case')
const pascalCase = require('pascal-case')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const pjson = require('./package.json')

const filename = paramCase(pjson.name)
const globalVariable = pascalCase(filename)

module.exports = {
  devtool: 'source-map',
  entry: {
    'color-map': './src/index'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].es5.js',
    library: globalVariable,
    devtoolModuleFilenameTemplate: (info) => {
      if (info.identifier.lastIndexOf('.ts') === info.identifier.length - 3) {
        return `webpack:///${pjson.name}/${info.resource.slice(6)}`
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        query: {
          declaration: false
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    mainFields: ['jsnext:main', 'browser', 'main']
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
}
