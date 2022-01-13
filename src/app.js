require("dotenv").config();
const yargs = require('yargs/yargs');
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const { Sequelize } = require("sequelize");

const connection = require('./db/connection');
const { Test, Counter } = require("./models/models");
const Movie = require("./models/movieModel");
const { addMovie } = require("./utils/movieFunctions");
const { addAdmin } = require("./utils/adminFunctions");
const Admin = require("./models/adminModel");

const app = async (argv) => {
    try {
        await connection.authenticate();
        await Movie.sync({alter: true});
        await Admin.sync({alter: true});
        await Test.sync({alter: true});
    } catch (error) {
        console.log(error);
    }
    
    try {
        if (argv.add) {
            console.log("add hot")
            // await Counter.sync({alter: true});
            // const test = Test.create({name: yargsObj.name, isTrue: parseInt(yargsObj.isTrue), update_counter: parseInt(yargsObj.updateCounter)});
            // const counter = Counter.build({name: yargsObj.name, counter: parseInt(yargsObj.Updateounter)});
            if (argv.movie) {
                await addMovie({title: argv.title, actor: argv.actor, rating: argv.rating});
            } else if (argv.admin) {
                await addAdmin({name: argv.name});
            }
           
        } else if (argv.list) {
            console.log("list hot")
            const test = await Test.findAll({
                // where: {
                //     name: yargsObj.name
                // }
            });
            console.log(JSON.stringify(test, null, 2));
        
        } else if (argv.update) {
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

