

var db = require("../models");



module.exports = function(app) {

  app.get("/", function(req, res) {
    db.Grocery.findAll({}).then(function(dbGroceries) {
      res.render("index", {
        groceries: dbGroceries
      });
    });

    db.Task.findAll({}).then(function(dbTasks) {
      res.render("index", {
        tasks: dbTasks
      });
    });

    db.Notes.findAll({}).then(function(dbNotes) {
      res.render("index", {
        notes: dbNotes
      });
    });
  });

  app.get("/grocery", function(req, res) {
    res.render("grocery");
  });

  app.get("/task", function(req, res) {
    res.render("task");
  });

  app.get("/note", function(req, res) {
    res.render("note");
  });
/*
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("note", {
        msg: "Day Planner",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
*/
};


