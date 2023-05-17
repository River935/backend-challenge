const helper = require("../helpers/Helper");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");


class AuthController {
  async signUp(req, res) {

    const {name, password, email} = req.body;

    try {
      const user = await User.create({name, password, email});
      const token = helper.createToken(user._id);
      console.log(token)
      res.set('Set-Cookie', `jwt=${token}`);
      res.redirect('/home');
    } catch (err) {
      const errorAnswer = helper.createNewMonError(err, 500, "Error creating user");
      res.status(500).json(errorAnswer);
    }
  }

  async login(req, res) {
    const {email, password} = req.body;

    try {
      const user = await User.login(email, password);
      res.status(200).json({user: user._id});

    } catch (err) {
      const errorAnswer = helper.createNewMonError(err, 500, "Error logging in");
      res.status(500).json(errorAnswer);
    }

  }
}

module.exports = AuthController;