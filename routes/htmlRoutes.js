

var db = require("../models");


module.exports = function (app) {

  app.get("/", function (req, res) {

    //Formats current date
   var dT = new Date();
   var day = dT.getDate();
   var month;
   if ((dT.getMonth()+1 < 10)) {
     month = "0"+(dT.getMonth()+1)
   }
   else if ((dT.getMonth()+1 >= 10)) {
     month=dT.getMonth()+1;
   }
   var year = dT.getFullYear();
    

    var dayPlannerObject = {};
    
    var currentDate = year + "-" + month + "-" + day;
    var returnDate = req.query.date || currentDate; 

  
    db.Grocery.findAll({
      where: {date: returnDate} 
    })
      .then(function (dbGroceries) {
      
        dayPlannerObject.groceries = dbGroceries;

        db.Task.findAll({
          where: {date: returnDate} 
        })
          .then(function (dbTasks) {
            
            dayPlannerObject.tasks = dbTasks;

            db.Notes.findAll({
              where: {date: returnDate} 
            })
              .then(function (dbNotes) {
              
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
  });

  
};


