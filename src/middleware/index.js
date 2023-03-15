






























const comparePass = async (req, res, next) => {
    try {

        req.user = await User.findOne({ where: {username: req.body.username }});

        const match = await bcrypt.compare(req.body.password, req.user.password);

        if (!match) {
            const error = new Error("password do not match")
            res.status(500).json({ errorMessage: error.message, error: error });
        }
        
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}
