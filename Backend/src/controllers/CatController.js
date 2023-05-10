const Cat = require("../models/catModel");

class CatController {
  async findAll(req, res) {
    try {
      // create database connection
      const cats = await Cat.find();
      res.status(200).json(cats);
      // close connection
    } catch (err) {
      res.status(500).json({ message: "Error connecting to db" });
    }
  }

  async findOneCatByID(req, res) {
    try {
      const cat = await at.findById(req.params.id);
      res.status(200).json(cat);
    } catch (err) {
      res.status(500).json({ message: "Error connecting to db" });
    }
  }
  async countAllCats(req, res) {
    try {
      console.log("countAllCats");
      const count = await Cat.countDocuments();
      console.log(count);
      res.status(200).json({ count: count });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error counting cats" });
    }
  }

  async createDog(req, res) {
    try {
      const cat = new Cat(req.body);
      const result = await cat.save();
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ message: "Error creating cat" });
    }
  }

  async putCat(req, res) {
    try {
      const cat = await Cat.findById(req.params.id);
      cat.name = req.body.name;
      cat.breed = req.body.breed;
      cat.age = req.body.age;
      cat.gender = req.body.gender;
      cat.weight = req.body.weight;
      cat.size = req.body.size;
      const result = await cat.save();
      res.status(200).json(result);
    } catch (err) {
      // res.status(500).json(err);      Error schema
      res.status(500).json({ message: "Error put cat" });
    }
  }

  async patchCat(req, res) {
    try {
      const cat = await Cat.findById(req.params.id);

      cat.age = req.body.age;
      const result = await cat.save();
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async deleteCat(req, res) {
    try {
      const result = await Cat.deleteOne({ _id: req.params.id });
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "Cat not found" });
      }
      res.status(200).json({ message: "Cat deleted" });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // hello
}

module.exports = CatController;
