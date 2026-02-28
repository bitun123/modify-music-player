const {Router}  = require("express");
const userController = require("../controllers/user.controllers");
const userRouter = Router();

userRouter.post("/register",userController.registerController);


userRouter.post("/login",userController.loginControllers);

module.exports = userRouter;
