// Define a schema and model

const { Schema, model } = require("mongoose");

//Form model

const FormSchema = new mongoose.Schema({
    name: String,
    password: String,
    additionalData: String,
  });

//Models exportation

module.exports = model('form', FormSchema) 