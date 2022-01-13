
const { Sequelize } = require("sequelize");
const Admin = require("../models/adminModel");

const addAdmin = async (adminObj) => {
    try {
        const admin = await Admin.create(adminObj);
    } catch (error) {
        console.log(error);
    }
};

const listAdmins = async () => {
    try {
        const admins = await Admin.findAll({});
        console.log(JSON.stringify(admins, null, 2));
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addAdmin,
    listAdmins
};