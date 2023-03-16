require ("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5001

const userRouter = require("./users/routes");
const activeTodoRouter = require("./activeTodo/routes");
const doneTodoRouter = require("./DoneTodo/routes");

const User = require ("./users/model");
const ActiveTodo = require ("./activeTodo/model");
const DoneTodo = require ("./DoneTodo/model");

const app = express();

app.use(express.json());
// app.use(cors());

const syncTables = () => {
    User.sync({alter:true, force:false});
    ActiveTodo.sync();
    DoneTodo.sync();
}

app.use(userRouter);
app.use(activeTodoRouter)
app.use(doneTodoRouter)

app.get("/health", (req, res) => {
    res.status(200).json({message: "API is working. Yay"})
})

app.listen(port, () => {
    // syncTables();
    console.log(`app is listening on port ${port}`)
});















