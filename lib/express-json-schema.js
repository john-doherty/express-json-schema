var toJsonSchema = require('jsdoc-to-json-schema');

module.exports = function(req, res, next){
    
    // add .jsonSchema method to response object
    res.jsonSchema = function(file){
        
        // if we have a file
        if (file){
            
            // generate JSON Schema from JSDoc comments and stream output to client
            toJsonSchema(file, res);
        }
    };
    
    next();
};