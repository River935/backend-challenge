

const DatabaseConnector = require("./database/DatabaseConnector");

const express = require("express");
const mongoose = require('mongoose');
const DogRouter = require("./routes/DogRouter");
const Dog = require("./models/dogModel");

const app = express();
app.use(express.json());

//db connection
let db = new DatabaseConnector();
let dogRouter = new DogRouter(app);
db.connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
    db = db.getDb();
  }
});

// dogRouter.getAllDogs()

//routes

app.get('/dogs', async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.status(200).json(dogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/dogs", (req, res) => {

  let dogs = [];

  db.collection("Dogs").find().forEach((dog) => {
    console.log(db.collection);
    dogs.push(dog);
  } ).then(() => {
    res.status(200).json(dogs);
  }).catch(() => {
    res.status(500).json({ message: "Error connecting to db" });
  });
});

