const AuthController  = require('../controllers/AuthController');

class AuthRouter{
  constructor(app){
    this.app = app;
    this.authController = new AuthController();
    this.initializeRoutes();
  }

  initializeRoutes(){
    this.app.post("/signup", this.authController.signUp);
    this.app.post("/login", this.authController.login)
    this.app.post("/logout", this.authController.logout);
  }

}

module.exports = AuthRouter;