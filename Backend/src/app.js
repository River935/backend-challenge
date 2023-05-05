const DatabaseConnector = require("./database/DatabaseConnector");

const express = require("express");
const mongoose = require('mongoose');
const DogRouter = require("./routes/DogRouter");
const Dogs = require("./models/dogModel");

const app = express();
app.use(express.json());

//db connection
let db = new DatabaseConnector();
let dogRouter = new DogRouter(app);

mongoose.connect("mongodb+srv://admin:WArnHs7@backend-challenge.nw6l8ae.mongodb.net/Shelter?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to database");
  }).catch((err) => {
  console.log("Not connected to database", err);
});




console.log(Dogs)
app.get("/dogs", (req, res) => {

  Dogs.find().then((dogs) => {
    console.log("dogs", dogs)
    res.status(200).json(dogs);
  }).catch(() => {
    res.status(500).json({message: "Error connecting to db"});
  });

});

app.post("/dogs", (req, res) => {
  Dogs.create(req.body).then((dog) => {
    res.status(200).json(dog);
  } ).catch(() => {
    res.status(500).json({message: "Error connecting to db"});
  });
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
})


/*db.connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
    db = db.getDb();
  }
});*/

// dogRouter.getAllDogs()

//routes




