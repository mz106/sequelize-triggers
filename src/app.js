require("dotenv").config();
const yargs = require('yargs');
const { Sequelize, DataTypes } = require("sequelize");

const connection = require('./db/connection');
const { Test, Counter } = require("./models/models");

const command = yargs.argv._[0];

const app = async (yargsObj) => {
    
    try {
        if (command === 'add') {
            console.log("add hot")
            await connection.authenticate();
            await Test.sync({alter: true});
            // await Counter.sync({alter: true});
            const test = Test.create({name: yargsObj.name, isTrue: parseInt(yargsObj.isTrue), update_counter: parseInt(yargsObj.updateCounter)});
            const counter = Counter.build({name: yargsObj.name, counter: parseInt(yargsObj.Updateounter)});
            // await test.save();
            // await counter.save();
        } else if (command === "list") {
            console.log("list hot")
            await connection.authenticate();
            const test = await Test.findAll({
                // where: {
                //     name: yargsObj.name
                // }
            });
            console.log(test);
        
        } else if (command === 'update') {
            // console.log("update hit");
            // console.log(yargsObj)
            // await connection.authenticate();
            // const update = await Test.update({isTrue: parseInt(yargsObj.isTrue)}, {
            //     where: {
            //         name: yargsObj.name
            //     }
            // });
            const test = await Test.findOne({where: {name: yargsObj.name}});
            console.log("test: ", test)
            await test.update({isTrue: yargsObj.isTrue});
            console.log(test);
        }
    } catch (error) {
        console.log(error);
    }
};

// {isTrue: parseInt(yargsObj.isTrue)}
app(yargs.argv);

