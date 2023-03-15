const AddTodo = require("./model");
const User = require("../user/model");



const addActiveTodo = async (req, res) => {
    try {
        if (!req.authCheck) {
            const error = new Error("User not authorised");
            res.status(401).json({ errorMessage: error.message, error: error });
        }
        const newTodo = await AddTodo.create(req.body);
        res.status(201).json({ message: "success", newTodo: newTodo });
    }
    catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}

module.exports = {
    addActiveTodo,
  };