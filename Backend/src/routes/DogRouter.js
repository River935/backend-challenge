const express = require('express');
const DogController = require('../controllers/DogController');

class DogRouter {
  constructor() {
    this.router = express.Router();
    this.dogController = new DogController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/', this.dogController.findAll.bind(this.dogController));
  }

  getRouter() {
    return this.router;
  }
}

module.exports = DogRouter;