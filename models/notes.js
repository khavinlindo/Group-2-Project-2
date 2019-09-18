// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Tables" model that matches up with DB ---- NEEDS WORK
var Notes = sequelize.define("notes", {
    note: Sequelize.STRING,
    author: Sequelize.STRING
});

// Syncs with DB
Notes.sync();

// Makes the Notes Model available for other files (will also create a table)
module.exports = Notes;
