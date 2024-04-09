# domon-validator

## A validator for the DOMON format

The DOMON format is just a lightweight DOM representation with no circular
references, making it suitable for JSON etc.

## Install

`npm install domon-validator`

## Usage

The validator is just an instance of [tv4](https://github.com/geraintluff/tv4)
prepopulated with the DOMON schema

```javascript
const validator = require( 'domon-validator' )

const domon = [ 'div', { id: 'myDiv' }, [ 'Hello World' ] ]

console.log( validator.validate( domon, 'domon-element' ) )
```
