'use strict'

const tv4 = require( 'tv4' )

const validator = tv4.freshApi()

const sChildNodes = require( './schema/domn.childNodes.schema.json' )
const sComment = require( './schema/domn.comment.schema.json' )
const sDocument = require( './schema/domn.document.schema.json' )
const sDocumentFragment = require( './schema/domn.documentFragment.schema.json' )
const sDocumentType = require( './schema/domn.documentType.schema.json' )
const sElement = require( './schema/domn.element.schema.json' )
const sProcessingInstruction = require( './schema/domn.processingInstruction.schema.json' )
const sText = require( './schema/domn.text.schema.json' )

validator.addSchema( 'domon-childNodes', sChildNodes )
validator.addSchema( 'domon-comment', sComment )
validator.addSchema( 'domon-document', sDocument )
validator.addSchema( 'domon-documentFragment', sDocumentFragment )
validator.addSchema( 'domon-documentType', sDocumentType )
validator.addSchema( 'domon-element', sElement )
validator.addSchema( 'domon-processingInstruction', sProcessingInstruction )
validator.addSchema( 'domon-text', sText )

module.exports = validator
