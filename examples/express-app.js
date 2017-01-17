var app = require('express')(),
    expJsonSchema = require('../lib/express-json-schema.js');

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