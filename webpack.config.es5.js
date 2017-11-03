'use strict';
const paramCase = require('param-case')
const pascalCase = require('pascal-case')
const path = require('path')
const webpack = require('webpack')

const pjson = require('./package.json')

const filename = paramCase(pjson.name)
const globalVariable = pascalCase(filename)

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    'color-map': './src/index.ts',
    'color-map.min': './src/index.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].es5.js',
    library: globalVariable,
    libraryTarget: 'umd'
  },
  // output: {
  //   path: path.join(__dirname, 'dist'),
  //   filename: `${filename}.es5.js`,
  //   library: globalVariable,
  //   libraryTarget: 'var',
  //   devtoolModuleFilenameTemplate: (info) => {
  //     console.log(info.resource, info.resourcePath)
  //     if (info.identifier.lastIndexOf('.ts') === info.identifier.length - 3) {
  //       return `webpack:///${pjson.name}/${info.resource.slice(9)}`
  //     }
  //     else {
  //       return `webpack:///${info.resourcePath}`
  //     }
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        query: {
          declaration: false
        }
      }
      //   {
      //     enforce: 'pre',
      //     loader: "source-map-loader",
      //     test: /\.js?$/
      //   }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}
