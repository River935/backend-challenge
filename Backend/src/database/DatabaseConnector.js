const mongoose = require('mongoose');
require("dotenv").config();

class DatabaseConnector {
  connectToDb() {
    const dbPwd = process.env.DB_PWD;
    console.log(dbPwd)
    return mongoose.connect(`mongodb+srv://admin:${dbPwd}@backend-challenge.nw6l8ae.mongodb.net/Shelter`)
      .then(() => {
        console.log("Connected to database");
      }).catch((err) => {
        console.log("Not connected to database", err);
      });
  }
}

module.exports = DatabaseConnector;