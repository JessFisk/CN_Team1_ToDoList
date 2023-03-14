const { Router } = require("express");
const userRouter = Router();

const { registerUser } = require("./controllers");

userRouter.post( "/users/registeruser", registerUser );

module.exports = userRouter;
