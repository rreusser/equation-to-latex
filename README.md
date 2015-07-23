# equation-to-latex

[![Build Status](https://travis-ci.org/rreusser/equation-to-latex.svg)](https://travis-ci.org/rreusser/equation-to-latex) [![npm version](https://badge.fury.io/js/equation-to-latex.svg)](http://badge.fury.io/js/equation-to-latex) [![Dependency Status](https://david-dm.org/rreusser/equation-to-latex.svg)](https://david-dm.org/rreusser/equation-to-latex)

Generate a tex document for a single equation or set of equations


## Introduction

Insert a single equation into a LaTeX document that renders it.

Sample usage:

```javascript
var template = require('equation-to-latex')

template( tex, {fontSize: '11pt', usepackages: ['extsizes']})
```


## Install

```sh
$ npm install equation-to-latex
```


## API

### `require('equation-to-latex')( tex[, options] )`
Render LaTeX, using any options provided as handlebars variables in the template.

**Returns** a string containing the rendered template


## Credits

(c) 2015 Ricky Reusser. MIT License
