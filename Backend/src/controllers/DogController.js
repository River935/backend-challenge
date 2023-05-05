const Dog = require('../models/dogModel');

class DogController {
  async findAll(req, res) {
    try {
      const dogs = await Dog.find();
      res.status(200).json(dogs);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

  module.exports = DogController;