const {Schema, model} = require('mongoose');

const errorSchema = new Schema({

  type: {
    type: String,
    default: "error"
  },
  code: {
    type: Number,
    description: "HTTP status code",
    required: true
  },
  message: {
    type: String,
    description: "Error message",
    required: true
  },
  description: {
    type: String,
    description: "description of the Error",
    required: true
  }


});

const monError = model('monError', errorSchema);

module.exports = monError;