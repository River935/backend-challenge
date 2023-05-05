const mongoose = require('mongoose');

class DatabaseConnector {
  constructor() {
    const url = 'mongodb+srv://admin:WArnHs7@backend-challenge.nw6l8ae.mongodb.net/?retryWrites=true&w=majority';
    this.connection = mongoose.createConnection(url, { useNewUrlParser: true, useUnifiedTopology: true });
  }

  connectToDb(callback) {
    this.connection.on('error', (err) => {
      console.log(`Error connecting to database: ${err}`);
      callback(err);
    });

    this.connection.once('open', () => {
      console.log('Connected to database');
      callback();
    });
  }

  getDb() {
    return this.connection;
  }
}

module.exports = DatabaseConnector;

