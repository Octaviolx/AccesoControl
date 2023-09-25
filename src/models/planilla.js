// Define a schema and model

const { Schema, model } = require("mongoose");

// Planilla model
            
const PlanillaSchema = Schema({
    email : String,
    password : String,
    additionalData : String,
  });

  //Models exportation

module.exports = model('planilla', PlanillaSchema) 