const { Router } = require("express");
const activeTodoRouter = Router();

const { tokenCheck } = require("../middleware");
const { addTodo, deleteActiveTodo } = require("./controllers");

activeTodoRouter.post( "/activetodos/addtodo", tokenCheck, addTodo );
activeTodoRouter.post( "/activetodos/deleteactivetodo", tokenCheck, deleteActiveTodo );

module.exports = activeTodoRouter;

// Active Todos

// POST - /activetodos/addtodo - adds active todo to db through user association
// POST - /activetodos/deleteactivetodo - deletes active todo from db through user association