require("dotenv").config();
const yargs = require('yargs/yargs');
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const { Sequelize, DataTypes } = require("sequelize");

const connection = require('./db/connection');
const { Test, Counter } = require("./models/models");

const app = async (argv) => {
    try {
        await connection.authenticate();
        await Test.sync({alter: true});
    } catch (error) {
        console.log(error);
    }
    
    try {
        if (argv.add) {
            console.log("add hot")
            // await Counter.sync({alter: true});
            const test = Test.create({name: yargsObj.name, isTrue: parseInt(yargsObj.isTrue), update_counter: parseInt(yargsObj.updateCounter)});
            const counter = Counter.build({name: yargsObj.name, counter: parseInt(yargsObj.Updateounter)});
            // await test.save();
            // await counter.save();
        } else if (argv.list) {
            console.log("list hot")
            const test = await Test.findAll({
                // where: {
                //     name: yargsObj.name
                // }
            });
            console.log(JSON.stringify(test, null, 2));
        
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
        await connection.close();
        process.exit();
    } catch (error) {
        console.log(error);
    }
};

// {isTrue: parseInt(yargsObj.isTrue)}
app(argv);

