const mongoose = require('mongoose');

class DatabaseConnector {

  connectToDb() {
    return mongoose.connect("mongodb+srv://admin:WArnHs7@backend-challenge.nw6l8ae.mongodb.net/Shelter?retryWrites=true&w=majority")
      .then(() => {
        console.log("Connected to database");
      }).catch((err) => {
        console.log("Not connected to database", err);
      });
  }

}

module.exports = DatabaseConnector;

