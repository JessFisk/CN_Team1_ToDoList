const bcrypt = require("bcrypt");
const saltRounds = process.env.SALT_ROUNDS;





const hashPass = async (req, res, next) => {
    try {
      req.body.password = await bcrypt.hash(req.body.password, parseInt(saltRounds));
      next();
    
    if (!user) {
      const error = new Error("Not authorised");
      res.status(401).json({ errorMessage: error.message, error: error });
    }}
    catch (error) {
      res.status(501).json({ errorMessage: "failure" , error: error });
    };
  };











  const tokenCheck = async (req, res, next) => {
    try {
      const token = req.header("Authorization");
  
      const decodedToken = await jwt.verify(token, process.env.SECRET_KEY);
      const user = await User.findOne({ where: { id: decodedToken.id } });
  
      if (!user) {
        const error = new Error("User not authorised");
        res.status(401).json({ errorMessage: error.message, error: error });
      }
  
      req.authCheck = user;
      next();
    }
    catch (error) {
      res.status(501).json({ errorMessage: "failure" , error: error });
    }
  }
  
module.exports = {
    hashPass,
    tokenCheck,
    
  }

