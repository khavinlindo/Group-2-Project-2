// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
<<<<<<< HEAD
var sequelize = new Sequelize("daytimer_db", "root", "", {
=======
var sequelize = new Sequelize("sequelize_library", "root", "root", {
>>>>>>> 6675ead5d499bbec566d4954fb822cef2debe51c
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
