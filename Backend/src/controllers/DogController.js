const Dog = require('../models/dogModel');

class DogController {
  async findAll(req, res) {
    try {
      //create database connection
      const dogs = await Dog.find();
      res.status(200).json(dogs);
      //close connection
    } catch (err) {
      res.status(500).json({message: "Error connecting to db"});
    }
  }

  async findOneDogByID(req, res) {
    try {
      const dog = await Dog.findById(req.params.id);
      res.status(200).json(dog);
    } catch (err) {
      res.status(500).json({message: "Error connecting to db"});
    }
  }
  async countAllDogs(req, res) {
    try {
      console.log("countAllDogs");
      const count = await Dog.countDocuments();
      console.log(count);
      res.status(200).json({count: count});
    } catch (err) {
      console.log(err);
      res.status(500).json({message: "Error counting dogs"});
    } 
  }

  async createDog(req, res) {
    try {
      const dog = new Dog(req.body);
      const result = await dog.save();
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({message: "Error creating dog"});
    }
  }

  async putDog(req, res) {
    try {
      const dog = await Dog.findById(req.params.id);
      dog.name = req.body.name;
      dog.breed = req.body.breed;
      dog.age = req.body.age;
      dog.gender = req.body.gender;
      dog.weight = req.body.weight;
      dog.size = req.body.size;
      const result = await dog.save();
      res.status(200).json(result);
    } catch (err) {
      //res.status(500).json(err);      Error schema
      res.status(500).json({message: "Error put dog"});
    }
  }

  async patchDog(req, res) {
    try {
      const dog = await Dog.findById(req.params.id);
      
      dog.age = req.body.age;
      const result = await dog.save();
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
}


async deleteDog(req, res) {
  try {

    const result = await Dog.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Dog not found" });
    }
    res.status(200).json({ message: "Dog deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
}

//hello

}


module.exports = DogController;