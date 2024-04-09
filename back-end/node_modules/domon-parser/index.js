'use strict'

const parse5 = require( 'parse5' )
const Adapter = require( 'domon-treeadapter' )

const adapter = Adapter()

const parse = str => parse5.parse( str, { treeAdapter: adapter } )
const parseFragment = str => parse5.parseFragment( str, { treeAdapter: adapter } )

module.exports = { parse, parseFragment }
