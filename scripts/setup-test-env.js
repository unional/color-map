require('aurelia-polyfills')
const LogManager = require('aurelia-logging')
const ConsoleAppender = require('aurelia-logging-console').ConsoleAppender

LogManager.addAppender(new ConsoleAppender())

LogManager.setLevel(LogManager.logLevel.none)
