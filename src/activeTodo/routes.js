
const { Router } = require("express");
const activeTodoRouter = Router();


const { tokenCheck } = require("../middleware");
const { addActiveTodo, deleteActiveTodo } = require("./controllers");


activeTodoRouter.post( "/activetodos/addtodo", tokenCheck,  addActiveTodo );
activeTodoRouter.delete( "/activetodos/deleteactivetodo", tokenCheck, deleteActiveTodo );





module.exports = activeTodoRouter;

