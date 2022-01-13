const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

const Admin = connection.define("Admins", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    update_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});
module.exports = Admin;