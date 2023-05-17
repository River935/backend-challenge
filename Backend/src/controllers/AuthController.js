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
      res.redirect('http://192.168.32.1:8080/home.html');
    } catch (err) {
      const errorAnswer = helper.createNewMonError(err, 500, "Error creating user");

      res.redirect(`http://192.168.32.1:8080/index.html?error=FEHLER`);
    }
  }

  async login(req, res) {
    const {email, password} = req.body;


    try {
      const user = await User.login(email, password);
      const token = helper.createToken(user._id);
      res.set('Set-Cookie', `jwt=${token}`);
      res.redirect('/home');
    } catch (err) {
      const errorAnswer = helper.createNewMonError(err, 500, "Error logging in");



      res.redirect(`http://192.168.32.1:8080/login.html?error=${err.message}&email=${email}`);
    }

  }
}

module.exports = AuthController;