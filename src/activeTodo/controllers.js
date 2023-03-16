const ActiveTodo = require("./model");





const addActiveTodo = async (req, res) => {
    try {
        if (!req.authCheck) {
            const error = new Error("User not authorised");
            res.status(401).json({ errorMessage: error.message, error: error });
        }
        const newTodo = await ActiveTodo.create(req.body);
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
        const deleteTodo = await ActiveTodo.destroy({ where: { id: req.body.todo } });

        if (deleteTodo >= 1) {
            res.status(204).json({ message: "success", deleteTodo: deleteTodo });
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