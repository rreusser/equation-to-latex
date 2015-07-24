'use strict'

var compile = require('../lib')
  , path = require('path')
  , fs = require('fs')

fs.writeFileSync('outputs/display.tex',compile(fs.readFileSync('inputs/display.tex').toString(), {display: true}))

fs.writeFileSync('outputs/inline.tex',compile(fs.readFileSync('inputs/inline.tex').toString(), {inline: true}))

fs.writeFileSync('outputs/margin.tex',compile(fs.readFileSync('inputs/display.tex').toString(), {display: true, margin: '10pt'}))

fs.writeFileSync('outputs/eqnarray.tex',compile(fs.readFileSync('inputs/eqnarray.tex').toString(), {margin: '{1pt 1pt 1pt -13pt}'}))


