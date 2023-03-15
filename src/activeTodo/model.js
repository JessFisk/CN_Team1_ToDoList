const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

const ActiveTodo = connection.define("ActiveTodo", {
  todo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});


//Below is an option, as we have needed this for bug fixes in the past

// { indexes: [{ unique: true, fields: ["todo"] }] }

module.exports = ActiveTodo;