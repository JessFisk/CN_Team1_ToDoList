
const { Router } = require("express");
const doneTodoRouter = Router();

const { tokenCheck } = require("../middleware");
const { addDoneTodo, deleteDoneTodo } = require("./controller");

doneTodoRouter.post( "/donetodos/adddonetodo", tokenCheck,  addDoneTodo );
doneTodoRouter.delete( "/donetodos/deletedonetodo", tokenCheck, deleteDoneTodo );

module.exports = doneTodoRouter;
