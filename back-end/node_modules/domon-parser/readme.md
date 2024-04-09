# domon-parser

## Parse HTML strings into the DOMON format

The DOMON format is just a lightweight DOM representation with no circular references, making it suitable for JSON etc.

## Install

`npm install domon-parser`

## Usage

```javascript
const parser = require( 'domon-parser' )

const domonDoc = parser.parse( '<div></div>' )

const domonFragment = parser.parseFragment( '<div></div>' )
```
