'use strict'

var test = require('tape')
  , wrap = require('../lib')

test('inserts the equation',function(t) {
  var re = /x\+y/m
  t.assert( re.test(wrap('x+y')), 'Contains the equation')
  t.end()
})

test("ampersands don't get escaped improperly",function(t) {
  var wrapped = wrap('\\begin{array}{cc} x & y \\end{array}')
  var re = /\\begin\{array\}\{cc\} x & y \\end\{array\}/
  t.assert( re.test(wrapped), 'Contains the equation')
  t.end()
})

test('sets the margin',function(t) {
  var re = /12345pt/m
  t.assert( re.test(wrap('x+y', {margin: '12345pt'})), 'sets the margin')
  t.end()
})

test('sets displaystyle=false',function(t) {
  var re = /\\displaystyle/m
  t.assert( ! re.test(wrap('x+y',{display:false})), 'sets displaystyle=false')
  t.end()
})

test('sets displaystyle=true',function(t) {
  var re = /\\displaystyle/m
  t.assert( re.test(wrap('x+y',{display:true})), 'sets displaystyle=false')
  t.end()
})

test('uses packages',function(t) {
  var result = wrap('x+y',{usepackages: ['package1', 'package2']})
  t.assert( new RegExp('\\\\usepackage\\{\\s*package1\\s*\\}', 'm').test(result))
  t.assert( new RegExp('\\\\usepackage\\{\\s*package2\\s*\\}', 'm').test(result))
  t.end()
})
