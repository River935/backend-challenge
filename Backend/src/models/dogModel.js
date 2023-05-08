const mongoose = require('mongoose');
//Better Import?
//import mongoose from 'mongoose';
//const { Schema, model } = mongoose;

//const dogSchema = new Schema({
const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    enum: ['Small', 'Medium', 'Large', 'Superlarge', 'Ultralarge'],
    required: true
  }
});

//const Dog = model("Dog", dogSchema);
//export default Dog;
const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;