require ("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5001
const userRouter = require("./db/connection");

const User = require ("./users/model");

const app = express();

app.use(express());
app.use(cors());

const syncTables = () => {
    User.sync({alter:true, force:false})
}

app.use(userRouter);

app.get("/health", (req, res) => {
    res.status(200).json({message: "API is working. Yay"})
})

app.listen(port, () => {
    syncTables();
    console.log(`app is listening on port ${port}`)
});















