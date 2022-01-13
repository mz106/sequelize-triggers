
const { Sequelize } = require("sequelize");
const Movie = require("../models/movieModel");

const addMovie = async (movieObj) => {
    try {
        const movie = await Movie.create(movieObj);
        console.log(JSON.stringify(movie, null, 2));
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addMovie,
};