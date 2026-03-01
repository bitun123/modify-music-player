const { Router } = require("express");
const userController = require("../controllers/user.controllers");
const userRouter = Router();
const authMiddleware = require("../middlewares/auth.middleware");

userRouter.post("/register", userController.registerController);

userRouter.post("/login", userController.loginControllers);

userRouter.get(
  "/getAllUsers",
  authMiddleware.authUser,
  userController.getAllUsersControllers,
);





module.exports = userRouter;
