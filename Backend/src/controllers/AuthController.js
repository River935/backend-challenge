const helper = require("../helpers/Helper");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const domain = "http://localhost:8080";

class AuthController {
  async signUp(req, res) {
    const {name, password, email} = req.body;

    try {
      const user = await User.create({name, password, email});
      console.log("User created");
      console.log(user);
      const token = helper.createToken(user._id);

      const cookieJwt = `jwt=${token}; httpOnly; domain=localhost`;
      const cookieUser = `user=${user._id}; httpOnly; domain=localhost`;
      const cookieRole = `role=${user.role}; httpOnly; domain=localhost`;
      res.set("Set-Cookie", [cookieJwt, cookieUser, cookieRole]);

      res.redirect(`${domain}/home.html`);
    } catch (err) {
      const errorAnswer = helper.createNewMonError(err, 400, "Error signing up!");
      console.log(errorAnswer);
      res.redirect(`${domain}/index.html?error=${errorAnswer.description}, ${errorAnswer.message}&name=${name}&email=${email}`);
    }
  }

  async login(req, res) {
    const {email, password} = req.body;

    try {
      const user = await User.login(email, password);
      const token = helper.createToken(user._id);

      const cookieJwt = `jwt=${token}; httpOnly; domain=localhost`;
      const cookieUser = `user=${user._id}; httpOnly; domain=localhost`;
      const cookieRole = `role=${user.role}; httpOnly; domain=localhost`;
      res.set("Set-Cookie", [cookieJwt, cookieUser, cookieRole]);

      res.redirect(`${domain}/home.html`);
    } catch (err) {
      const errorAnswer = helper.createNewMonError(err, 400, "Error logging in");
      console.log(errorAnswer);
      res.redirect(`${domain}/login.html?error=${errorAnswer.description}, ${errorAnswer.message}&email=${email}`);
    }
  }
}

module.exports = AuthController;
