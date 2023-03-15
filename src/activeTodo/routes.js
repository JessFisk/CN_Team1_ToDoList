const { Router } = require("express");
const activeTodoRouter = Router();

const { tokenCheck } = require("../middleware");
const { addActiveTodo, deleteActiveTodo } = require("./controllers");

activeTodoRouter.post( "/activetodos/addtodo", tokenCheck,  addActiveTodo );
activeTodoRouter.post( "/activetodos/deleteactivetodo", tokenCheck, deleteActiveTodo );

module.exports = activeTodoRouter;







// Active Todos
// POST - /activetodos/addtodo - adds active todo to db through user association
// POST - /activetodos/deleteactivetodo - deletes active todo from db through user association


// !!!!!!!!!!!!!!!!!!!!!
// I am aware that delete active to do it a 
//post not a delete request but Michaels design 
//docs have it as a post request. 
//I will query this thursday (seeAbove)