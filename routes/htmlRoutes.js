

var db = require("../models");


module.exports = function (app) {

  // db.Grocery.findAll({})
  // .then(function(dbGroceries) {
  //   console.log(dbGroceries);
  //    res.render("index", {
  //     groceries: dbGroceries
  //    });
  // });

  app.get("/", function (req, res) {
    var dayPlannerObject = {};

    db.Grocery.findAll({})
      .then(function (dbGroceries) {
        //console.log(dbGroceries);
        dayPlannerObject.groceries = dbGroceries;

        db.Task.findAll({})
          .then(function (dbTasks) {
            //console.log(dbTasks);
            dayPlannerObject.tasks = dbTasks;

            db.Notes.findAll({})
              .then(function (dbNotes) {
                //console.log(dbNotes);
                dayPlannerObject.notes = dbNotes;

                res.render("index", {
                  groceries: dayPlannerObject.groceries,
                  tasks: dayPlannerObject.tasks,
                  notes: dayPlannerObject.notes
                });
              });
          });
      });
  });




  app.get("/grocery", function (req, res) {
    res.render("grocery");
  });

  app.get("/task", function (req, res) {
    res.render("task");
  });

  app.get("/note", function (req, res) {
    res.render("note");
  });

  app.get("/homepage", function (req, res) {
    res.redirect("/");
  })
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


