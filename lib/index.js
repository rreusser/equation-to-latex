'use strict'

module.exports = compile

var handlebars = require('hogan.js'),
    fs = require('fs'),
    extend = require('util-extend'),
    appRoot = require('app-root-path')

var source = fs.readFileSync(appRoot + '/lib/templates/equation.tex').toString()
var template = handlebars.compile(source)

function compile( rawTex, options ) {

  var context = extend({
    fontSize: 12
  }, options || {})

  context.rawTex = rawTex

  return template.render( context )

}
