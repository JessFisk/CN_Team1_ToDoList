const {DataTypes} = require("sequelize");
const connection = require("../db/connection");

const User = connection.define("User", {
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    // { indexes: [{unique: true, fields: ["username", "password"] } ]}   
);


module.exports = User;