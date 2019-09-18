// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Tables" model that matches up with DB ---- NEEDS WORK
var Task = sequelize.define("task", {
    task: Sequelize.STRING,
    urgency: Sequelize.STRING
});

// Syncs with DB
Task.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Task;
