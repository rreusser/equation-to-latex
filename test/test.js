'use strict'

var assert = require('chai').assert,
    compile = require('../lib')


describe( "generate-tex", function() {

  it("inserts the equation",function() {
    var re = /x\+y/m
    assert( re.test(compile('x+y')), 'Contains the equation')
  })

  it("sets the font size",function() {
    var re = /14pt/m
    assert( re.test(compile('x+y', {fontSize: 14})), 'Contains the font size')
  })

})
