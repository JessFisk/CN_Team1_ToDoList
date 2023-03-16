const User = require("./model");


const registerUser = async (req, res) => {

    try {

        const user = await User.create(req.body);

        res.status(201).json({
            message: "success",
            user: {
                username: req.body.username,
                password: req.body.password,
            }
        });

        // test
        console.log(user)

    } catch (error) {
        res.status(501).json({ message: error.message, error: error })
    }
};


const login = async (req, res) => {
    try {
        //AuthCheck????
        if (!req.authCheck) {
            const error = new Error("User not authorised");
            res.status(401).json({ message: error.message, error: error });
        }
        res.status(201).json({
            message: "success",
            user: {
                username: req.body.username,
                password: req.body.password,
            }
        })

    } catch (error) {
        res.status(501).json({ message: error.message, error: error })
    }
}


module.exports = {
    registerUser,
    login,
}
