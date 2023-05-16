const DatabaseConnector = require("./database/DatabaseConnector");

const express = require("express");
const DogRouter = require("./routes/DogRouter");
const CatRouter = require("./routes/CatRouter");

const app = express();
app.use(express.json());

//db connection
let db = new DatabaseConnector();
let dogRouter = new DogRouter(app);
let catRouter = new CatRouter(app);

db.connectToDb().then(() => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}).catch((err) => {
    console.log("Not connected to database", err);
  }
);




