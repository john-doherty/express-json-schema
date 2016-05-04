# express-json-schema

Adds `res.jsonSchema` to express response object tp return JSON Schema from jsDoc @schema tags.

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

## License

[ISC License](LICENSE) &copy; 2016 [John Doherty](http://wwww.johndoherty.info/)