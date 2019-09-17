// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Makes the Grocery Model available for other files (will also create a table)
module.exports = Grocery;

// Creates a "Grocery" model that matches up with DB
var Grocery = sequelize.define("grocery", {
  item: Sequelize.STRING,
  catagory: Sequelize.STRING
});

// Syncs with DB
Grocery.sync();

// Makes the Grocery Model available for other files (will also create a table)
module.exports = Grocery;

//=========================================================================
// Makes the Task Model available for other files (will also create a table)
module.exports = Task;

// Creates a "Grocery" model that matches up with DB
var Task = sequelize.define("task", {
  task: Sequelize.STRING,
  urgency: Sequelize.STRING
});

// Syncs with DB
Task.sync();

// Makes the Grocery Model available for other files (will also create a table)
module.exports = Task;

//=========================================================================
// Makes the Task Model available for other files (will also create a table)
module.exports = Notes;

// Creates a "Grocery" model that matches up with DB
var Notes = sequelize.define("notes", {
  note: Sequelize.STRING,
  author: Sequelize.STRING
});

// Syncs with DB
Notes.sync();

// Makes the Grocery Model available for other files (will also create a table)
module.exports = Notes;
