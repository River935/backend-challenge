const Dog = require('../models/dogModel');

class DogController {
  async findAll(req, res) {
    try {
      // create database connection
      const dogs = await Dog.find();
      res.status(200).json(dogs);
      // close connection
    } catch (err) {
      res.status(500).json({message : "Error connecting to db"});
    }
  }

  async findOneDogByID(req, res) {
    try {
      const dog = await Dog.findById(req.params.id);
      res.status(200).json(dog);
    } catch (err) {
      res.status(500).json({message : "Error connecting to db"});
    }
  }
}

module.exports = DogController;