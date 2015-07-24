'use strict'

var templateEngine = require('handlebars')
  , fs = require('fs')

var source = fs.readFileSync(__dirname + '/template.tex')
var template = templateEngine.compile(source.toString())

module.exports = compile

function compile( rawTex, options ) {

  options = options || {}

  if( options.margin===undefined ) {
    options.margin = '{0pt}'
  } else {
    // Wrap this with brackets as required:
    options.margin = '{' + options.margin + '}'
  }

  options.rawTex = rawTex

  if( options.plain ) {
    options.display = false
    options.inline = false
  }

  if( options.usepackages !== undefined ) {
    var use = options.usepackages
    for(var i=0; i<use.length; i++) { // no, not gonna cache the length. deal with it.
      use[i] = {package: use[i]}
    }
  }

  return template( options )

}

