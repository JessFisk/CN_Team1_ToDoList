
const DoneTodo = require("./model");
const ActiveTodo = require("../activeTodo/model");




const addDoneTodo = async (req, res) => {
    try {
        if (!req.authCheck) {
            const error = new Error("User is not authorised");
            res.status(401).json({ message: error.message, error: error });
        }
        const newTodo = await ActiveTodo.findOne({ where: { id: req.body.todo }})

        const doneTodo = await DoneTodo.create ({ todo: newTodo.dataValues.todo })
       
        const deleteTodo = await ActiveTodo.destroy ({ where: { id: req.body.todo } })

        if (deleteTodo){
            res.status(202).json({ message:"success" })
        } else {
            res.status(404).json({ message: "Todo not found" })
        }
    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
    }
}











const deleteDoneTodo = async (req, res) => {
    try {
        if (!req.authCheck) {
            const error = new Error("User is not authorised");
            res.status(401).json({ message: error.message, error: error });
        }

        const deleteTodo = await DoneTodo.destroy ({ where: { id: req.body.newtodo } })

        if (deleteTodo >= 1) {
            res.status(202).json({ message: "success", deleteTodo: deleteTodo });
            return
        } 
        else {
            res.status(404).json({ message: "Todo not found" });
        }

    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
    }
}






module.exports = {
    addDoneTodo,
    deleteDoneTodo,
};
