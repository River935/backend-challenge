const DogController = require('../controllers/DogController');

class DogRouter {
  constructor(app) {
    this.app = app;
    this.dogController = new DogController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.app.get("/dogs", this.dogController.findAll);
    this.app.get("/dogs/:id", this.dogController.findOneDogByID);
  }

}

module.exports = DogRouter;