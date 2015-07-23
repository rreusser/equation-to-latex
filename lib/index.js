'use strict'

var templateEngine = require('handlebars')
  , fs = require('fs')
  , extend = require('util-extend')

var source = fs.readFileSync(__dirname + '/template.tex')
var template = templateEngine.compile(source.toString())

module.exports = compile

function compile( rawTex, options ) {

  options = extend({
    fontSize: '10pt',
    margin: '1pt',
    rawTex: rawTex
  },options)

  if( options.usepackages !== undefined ) {
    var use = options.usepackages
    for(var i=0; i<use.length; i++) { // no, not gonna cache the length. deal with it.
      use[i] = {package: use[i]}
    }
  }

  return template( options )

}

