# express-json-schema
[![npm](https://img.shields.io/npm/dt/express-json-schema.svg)](https://www.npmjs.com/package/express-json-schema) [![Linked In](https://img.shields.io/badge/Linked-In-blue.svg)](https://www.linkedin.com/in/john-i-doherty) [![Twitter Follow](https://img.shields.io/twitter/follow/MrJohnDoherty.svg?style=social&label=Twitter&style=plastic)](https://twitter.com/MrJohnDoherty)

Adds express `res.jsonSchema` method to allow automatic generation of JSON schemas from a JS/JSON files containing [@schema](https://github.com/john-doherty/jsdoc-to-json-schema) **@schema** tags

## Installation

```js
npm install --save express-json-schema
```

## Usage

```js
var app = require('express')(),
    expJsonSchema = require('express-json-schema');

// add as middleware
app.use(expJsonSchema);

// use within route handler
app.get('/', function(req, res){

    // return json schema for person.js file using new res.jsonSchema method
    res.jsonSchema('./examples/person.js');
});

// start the server
app.listen(8080, function(){
    console.log('Example app listening on port 8080');
});
```

### Example person.js

```js
/**
 * @schema.name Person
 * @schema.description This is an example Person object marked up with JSON schema tags to allow schema generation
 */
var Person = {
    
    /**
     * @schema.title Name
     * @schema.description Please enter your full name
     * @schema.type string
     * @schema.maxLength 30
     * @schema.minLength 1
     * @schema.required true
     */
    name: '',
    
    /**
     * @schema.title Job Title
     * @schema.type string
     */
    jobTitle: '',
    
    /**
     * @schema.title Telephone Number
     * @schema.description Please enter telephone number including country code
     * @schema.type string
     * @schema.required true
     */
    telephone: '',
    
    /**
     * @schema.type string
     * @schema.required true
     */
    dateOfBirth: '',

    /**
     * @schema.type object
     */
    address: {
        
    }
};
```

### Example response

```js
{
    "name": "Person",
    "description": "This is an example Person object marked up with JSON schema tags to allow schema generation",
    "properties": {
        "name": {
            "title": "Name",
            "description": "Please enter your full name",
            "type": "string",
            "maxLength": 30,
            "minLength": 1,
            "required": true
        },
        "jobTitle": {
            "title": "Job Title",
            "type": "string"
        },
        "telephone": {
            "title": "Telephone Number",
            "description": "Please enter telephone number including country code",
            "type": "string",
            "required": true
        },
        "dateOfBirth": {
            "type": "string",
            "required": true
        },
        "address": {
            "type": "object"
        }
    }
}
```

## Supported tags

A list of supported tags can be viewed at [jsdoc-to-json-schema](https://github.com/john-doherty/jsdoc-to-json-schema#supported-json-schema-tags)

## License

[ISC License](LICENSE) &copy; 2016 [John Doherty](https://twitter.com/CambridgeMVP)