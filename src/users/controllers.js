const User = require("./model");


const registerUser = async (req, res) => {

    try {

        const user = await User.create(req.body);

        res.status(201).json
        
    } catch (error) {
        res.status(501).json({ errorMsg: error.message, error: error })
    }
}
