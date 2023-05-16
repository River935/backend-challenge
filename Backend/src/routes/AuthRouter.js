const AuthController  = require('../controllers/AuthController');

class AuthRouter{
  constructor(app){
    this.app = app;
    this.authController = new AuthController();
    this.initializeRoutes();
  }

  initializeRoutes(){
    this.app.post("/signUp", this.authController.signUp)
  }

}

module.exports = AuthRouter;