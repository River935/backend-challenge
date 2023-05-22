const express = require('express');
const Users = require('../models/userModel');
const Helper = require('../helpers/Helper');
const jwt = require("jsonwebtoken");

class Authenticator {

  static async authenticate(req, res, next) {
    console.log("authenticating...")

    const {jwt,user,role} = req.cookies;

    try {
      const decodedToken = Authenticator.verifyToken(jwt);
      // const currentUser = await Users.findOne({_id: id});

      if(decodedToken && role === "admin"){
        console.log("admin")
        next();
        return;
      }

      const errorAnswer = Helper.createNewMonError({message:"Unauthorized User"}, 401, "Unauthorized");
      res.status(401).json(errorAnswer);

    }catch (err) {
      console.log(err)
    }

  }

  static verifyToken(token) {
    console.log("verifying token...")
    const secret = process.env.JWT_SECRET;
    return jwt.verify(token, secret);
  }


}

module.exports = Authenticator;