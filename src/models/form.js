// Define a schema and model

const { Schema, model } = require("mongoose");

//Form model

const FormSchema = Schema({
    email: String,
    password: String,
    additionalData: String,
  });

//Models exportation

module.exports = model('form', FormSchema) 