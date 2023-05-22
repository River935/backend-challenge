const DogController = require('../controllers/DogController');
const Authenticator = require('../middleware/Authenticator');

class DogRouter {
  constructor(app) {
    this.app = app;
    this.dogController = new DogController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.app.get("/dogs", this.dogController.findAll);
    this.app.get("/dogs/count", this.dogController.countAllDogs);
    this.app.get("/dogs/:id",  this.dogController.findOneDogByID);

    this.app.get("/dogs/:size",  this.dogController.findDogsBySize);
    
    this.app.post("/dogs/create", Authenticator.authenticate, this.dogController.createDog);

    this.app.put("/dogs/put/:id", this.dogController.putDog);

    this.app.patch("/dogs/patch/:id", this.dogController.patchDog);

    this.app.delete("/dogs/delete/:id", this.dogController.deleteDog);
  }

}

module.exports = DogRouter;