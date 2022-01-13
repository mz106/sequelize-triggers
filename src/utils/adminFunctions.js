
const { Sequelize } = require("sequelize");
const Admin = require("../models/adminModel");

const addAdmin = async (adminObj) => {
    try {
        const admin = await Admin.create(adminObj);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addAdmin
};