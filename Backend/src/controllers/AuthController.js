const helper = require("../helpers/Helper");
const User = require("../models/userModel");

class AuthController {


  async signUp(req,res) {

    const {name, password, email} = req.body;

    try {
      const user = await User.create({name, password, email});
      res.status(201).json(user);
    } catch (err) {
      const errorAnswer = helper.createNewMonError(err, 500, "Error creating user");
      res.status(500).json(errorAnswer);
    }
  }


}

module.exports = AuthController;