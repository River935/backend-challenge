const {Schema, model} = require('mongoose');

const errorSchema = new Schema({

  type : {type : String, default : "error"},
  code : {type : Number, description : "HTTP status code", required : true},
  message : {type : String, description : "HTTP status text", required : true},
  description : {type : String}

  // type: Object,
  // code: Number,
  // message: String,
  // description: String
});

const monError = model('monError', errorSchema);

module.exports = monError;