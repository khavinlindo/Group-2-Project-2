

// Dependencies
// =============================================================
var db = require("../models");

//=============================================================//
//Routes
//=============================================================//
module.exports = function(app) {
  

  /** Grocery List -- ID, Item, Catagory=======================================
    catagories -- 1) produce 2) meats, 3) dairy, 4) dry goods, 5) non-grocery*/
  //===========================================================================
  
  // Get all groceries
  app.get("/api/groceries/all", function(req, res) {
    db.Grocery.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get a grocery by specific catagory
  app.get("/api/groceries/:category", function(req, res) {
    db.Grocery.findAll({
      where: {
       category : req.params.catagory
      }
    }).then(function(results) {
      res.json(results);
    });
  });


  // Add a Grocery Item
  app.post("/api/groceries/new", function(req, res) {
    db.Grocery.create({
      item: req.body.item,
      category: req.body.category,
      amount: req.body.amount
    }).then(function(results) {
      
      res.json(results);
    });
  });

// Delete a Grocery Item
  app.delete("/api/groceries/delete/:id", function(req, res) {
    console.log("Grocery ID:");
    console.log(req.params.id);
    db.Grocery.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.end();
    });
  });
  
  
  
  //====================================================
  // Task List -- ID, Task, Priority
  //    urgency -- 1) Top Priority, 2) Done Today, 3) This Week
  //=========================================================
    
  
  //Get all tasks
  app.get("/api/tasks/all", function(req, res) {
      db.Task.findAll({}).then(function(results) {
        res.json(results);
      });
    });
  
  // Get a task by specific category
    app.get("/api/tasks/:urgency", function(req, res) {
      db.Task.findAll({
        where: {
          urgency : req.params.urgency
        }
      }).then(function(results) {
        res.json(results);
      });
    });

  
  // Add a Task
  app.post("/api/tasks/new", function(req, res) {
    console.log("Task Data: ");
    console.log(req.body);
    db.Task.create({
      task: req.body.task,
      urgency: req.body.urgency
    }).then(function(results) {
      res.json(results);
    });
  });
  
  // Delete a Task
  app.delete("/api/tasks/delete/:id", function(req, res) {
    console.log("Task ID: ");
    console.log(req.params.id);
    db.Task.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.end();
    });
  });
  
  


  //=====================================================
  //Notes -- ID, Note, Author
  //=====================================================  
  
  // Get all Notes
    app.get("/api/notes/all", function(req, res) {
      db.Notes.findAll({}).then(function(results) {
        res.json(results);
      });
    });
  
    
    // Get a note by specific Author
    app.get("/api/notes/:author", function(req, res) {
      db.Notes.findAll({
        where: {
          author : req.params.author
        }
      }).then(function(results) {
        res.json(results);
      });
    });

  
  // Add a Note
  app.post("/api/notes/new", function(req, res) {
    console.log("Note Data: ");
    console.log(req.body);
    db.Notes.create({
      note: req.body.note,
      author: req.body.author
    }).then(function(results) {
      res.json(results);
    });
  });
  

  // Delete a Note
  app.delete("/api/notes/delete/:id", function(req, res) {
    console.log("Note ID: ");
    console.log(req.params.id);
    db.Notes.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.end();
    });
  });
};

