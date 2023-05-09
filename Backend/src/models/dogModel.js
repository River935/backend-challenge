const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema(
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
  { collection: "Dogs" }
);

const Dogs = mongoose.model("Dogs", dogSchema);

module.exports = Dogs;
