'use strict'

var compile = require('../lib'),
    path = require('path'),
    fs = require('fs')


fs.writeFileSync('example.tex',compile('\\int_0^\\pi \\sin(x^2)\\, dx'))
