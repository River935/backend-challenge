const Dog = require('../models/dogModel');

class DogController {
  async findAll(req, res) {
    try {
      const dogs = await Dog.find();
      res.status(200).json(dogs);
    } catch (err) {
      res.status(500).json({message: "Error connecting to db"});
    }
  }

  async findOne(req, res) {
    try {
      const dog = await Dog.findById(req.params.id);
      res.status(200).json(dog);
    } catch (err) {
      res.status(500).json({message: "Error connecting to db"});
    }
  }


}

module.exports = DogController;