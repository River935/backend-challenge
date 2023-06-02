const CatController = require("../controllers/CatController");

class CatRouter {
  constructor(app) {
    this.app = app;
    this.CatController = new CatController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.app.get("/cats", this.CatController.findAllCats);
    this.app.get("/cats/count", this.CatController.countAllCats);
    this.app.get("/cats/:id", this.CatController.findOneCatByID);

    this.app.get("/cats/bysize/:size",  this.CatController.findCatsBySize);

    this.app.post("/cats/create", this.CatController.createCat);

    this.app.put("/cats/put/:id", this.CatController.putCat);

    this.app.patch("/cats/patch/:id", this.CatController.patchCat);

    this.app.delete("/cats/delete/:id", this.CatController.deleteCat);
  }
}

module.exports = CatRouter;
