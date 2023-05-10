const { Schema, model } = require("mongoose");

// import { Schema } from 'mongoose';
// const catSchema = new Schema({

const catSchema = new Schema(
  {
    name: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["Male", "Female"], required: true },
    weight: { type: Number, required: true },
    size: {
      type: String,
      enum: ["Small", "Medium", "Large", "Superlarge", "Ultralarge"],
      required: true,
    },
  },
  { collection: "Cats" }
);

const Cats = model("Cats", catSchema);

module.exports = Cats;
