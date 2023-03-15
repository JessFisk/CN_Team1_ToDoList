const AddTodo = require("./model");
const User = require("../user/model");



const addActiveTodo = async (req, res) => {
    try {
        if (!req.authCheck) {
            const error = new Error("User not authorised");
            res.status(401).json({ errorMessage: error.message, error: error });
        }
        const newTodo = await AddTodo.create(req.body.todo);
        res.status(201).json({ message: "success", newTodo: newTodo });
    }
    catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}


const deleteActiveTodo = async (req, res) => {
    try {
        if (!req.authCheck) {
            const error = new Error("User is not authorised");
            res.status(401).json({ errorMessage: error.message, error: error });
        }
        const deleteTodo = await AddTodo.destroy({ where: { id: req.body.todo } });

        if (deletedTodo >= 1) {
            res.status(204).json({ message: "success", deletedTodo: deleteTodo });
            return
        } 
        else {
            res.status(404).json({ message: "Todo not found" });
        }
    }

    catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}








module.exports = {
    addActiveTodo,
    deleteActiveTodo,
};