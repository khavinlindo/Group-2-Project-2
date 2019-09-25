

var db = require("../models");


module.exports = function (app) {

  app.get("/", function (req, res) {
    var dayPlannerObject = {};
    var date = req.params.date || new Date().toLocaleDateString(); 

    console.log(date);

    db.Grocery.findAll({
      where: {createdAt: date} 
    })
      .then(function (dbGroceries) {
        //console.log(dbGroceries);
        dayPlannerObject.groceries = dbGroceries;

        db.Task.findAll({
          where: {createdAt: date} 
        })
          .then(function (dbTasks) {
            //console.log(dbTasks);
            dayPlannerObject.tasks = dbTasks;

            db.Notes.findAll({
              where: {createdAt: date} 
            })
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
  
};


