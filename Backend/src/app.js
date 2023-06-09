const DatabaseConnector = require("./database/DatabaseConnector");
const express = require("express");
const DogRouter = require("./routes/DogRouter");
const CatRouter = require("./routes/CatRouter");
const AuthRouter = require("./routes/AuthRouter");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:8080" }));

let db = new DatabaseConnector();

let authRouter = new AuthRouter(app);
let dogRouter = new DogRouter(app);
let catRouter = new CatRouter(app);

db.connectToDb()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Not connected to database", err);
  });
