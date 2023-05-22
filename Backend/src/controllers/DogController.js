const Dog = require("../models/dogModel");
const monError = require("../models/errorModel");
const helper = require("../helpers/Helper");
const domain = process.env.DOMAIN;

class DogController {
  async findAll(req, res) {

    try {
      const dogs = await Dog.find();

      if (dogs.length === 0) {
        const errorAnswer = helper.createNewMonError({message: "Collection not found or empty"}, 404, "No dogs found");
        res.status(404).json(errorAnswer);
        return;
      }

      res.status(200).json(dogs);

    } catch (err) {
      const errorAnswer = helper.createNewMonError(err, 500, "Error connecting to db");
      res.status(500).json(errorAnswer);
    }
  }


  async findOneDogByID(req, res) {
    console.log("findOneDogByID")
    try {
      const dog = await Dog.findById(req.params.id);

      res.status(200).json(dog);

    } catch (err) {

      if (err.name === "CastError") {
        const errorAnswer = helper.createNewMonError(err, 404, "Invalid Dog ID");
        return res.status(404).json(errorAnswer);
      }

      const errorAnswer = helper.createNewMonError(err, 500, "Error connecting to db");
      res.status(500).json(errorAnswer);
    }
  }

  async countAllDogs(req, res) {
    try {
      console.log("countAllDogs");
      const count = await Dog.countDocuments();
      console.log(count);
      res.status(200).json({count: count});
    } catch (err) {
      const errorAnswer = helper.createNewMonError(err, 500, "Error counting dogs");
      res.status(500).json(errorAnswer);
    }
  }

  async createDog(req, res) {
    try {
      const dog = new Dog(req.body);
      const result = await dog.save();
      res.status(201).json(result);
    } catch (err) {
      const errorAnswer = helper.createNewMonError(err, 500, "Error creating dog");
      res.status(500).json(errorAnswer);
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

      if (err.name === "CastError") {
        const errorAnswer = helper.createNewMonError(err, 404, "Invalid Dog ID");
        return res.status(404).json(errorAnswer);
      }

      const errorAnswer = helper.createNewMonError(err, 500, "Error put dog");
      res.status(500).json(errorAnswer);
    }
  }

  async patchDog(req, res) {
    try {
      const dog = await Dog.findById(req.params.id);

      dog.age = req.body.age;
      const result = await dog.save();
      res.status(200).json(result);
    } catch (err) {
      const errorAnswer = helper.createNewMonError(err, 500, "Error patch dog");
      res.status(500).json(errorAnswer);
    }
  }

  async deleteDog(req, res) {
    try {
      const result = await Dog.deleteOne({_id: req.params.id});


      res.status(200).json({message: "Dog deleted"});
    } catch (err) {

      if (err.name === "CastError") {
        const errorAnswer = helper.createNewMonError({message: "Dog not found"}, 404, "Dog not found");
        return res.status(404).json(errorAnswer);
      }

      const errorAnswer = helper.createNewMonError(err, 500, "Error delete dog");
      res.status(500).json(errorAnswer);
    }
  }

  async findDogsBySize(req, res) {
    console.log("findDogsBySize")
   
    try {
      console.log(req.params)
      const {sizes} = req.query

      const dogs = await Dog.find({size: {$in: sizes}})
      console.log(dogs)
    } catch (err) {
      console.log(err)
    }


  }
}

module.exports = DogController;
