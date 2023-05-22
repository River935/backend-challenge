const express = require('express');
const Users = require('../models/userModel');
const Helper = require('../helpers/Helper');

class Authenticator {

  static async authenticate(req, res, next) {
    console.log("authenticating...")

    const {jwt,user,role} = req.cookies;


    try {
      const decodedToken = Helper.verifyToken(jwt)
      const { id } = decodedToken;
      console.log(decodedToken)
      console.log(id)
      console.log(user)
      // const currentUser = await Users.findOne({_id: id});

      if(decodedToken && role === "admin"){
        console.log("admin")
        next();
      }

    }catch (err) {
      console.log(err)
    }





    // if () {
    //   console.log("jwt verified")
    // }


    // if(currentUser.role === "admin"){
    //   console.log("admin")
    // }


    // next();
  }


}

module.exports = Authenticator;