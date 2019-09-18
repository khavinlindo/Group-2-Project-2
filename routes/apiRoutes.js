

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
  app.get("/api/all", function(req, res) {
    db.Grocery.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get a grocery by specific catagory
  app.get("/api/:catagory", function(req, res) {
    db.Grocery.findAll({
      where: {
       category : req.params.catagory
      }
    }).then(function(results) {
      res.json(results);
    });
  });


  // Add a Grocery Item
  app.post("/api/new", function(req, res) {
    console.log("Grocery Data:");
    console.log(req.body);
    Book.create({
      item: req.body.title,
      catagory: req.body.author
    }).then(function(results) {
      res.json(results);
    });
  });

// Delete a Grocery Item
  app.delete("/api/grocery/:id", function(req, res) {
    console.log("Grocery ID:");
    console.log(req.params.id);
    Grocery.destroy({
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
  app.get("/api/all", function(req, res) {
      Task.findAll({}).then(function(results) {
        res.json(results);
      });
    });
  
  // Get a task by specific catagory
    app.get("/api/:urgency", function(req, res) {
      Task.findAll({
        where: {
          urgency : req.params.urgency
        }
      }).then(function(results) {
        res.json(results);
      });
    });

  
  // Add a Task
  app.post("/api/new", function(req, res) {
    console.log("Task Data:");
    console.log(req.body);
    Task.create({
      task: req.body.title,
      urgency: req.body.author
    }).then(function(results) {
      res.json(results);
    });
  });
  
  // Delete a Task
  app.delete("/api/task/:id", function(req, res) {
    console.log("Task ID:");
    console.log(req.params.id);
    Task.destroy({
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
    app.get("/api/all", function(req, res) {
      Notes.findAll({}).then(function(results) {
        res.json(results);
      });
    });
  
    
    // Get a note by specific Author
    app.get("/api/:author", function(req, res) {
      Task.findAll({
        where: {
          author : req.params.author
        }
      }).then(function(results) {
        res.json(results);
      });
    });

  
  // Add a Note
  app.post("/api/new", function(req, res) {
    console.log("Note Data:");
    console.log(req.body);
    Note.create({
      note: req.body.note,
      author: req.body.author
    }).then(function(results) {
      res.json(results);
    });
  });
  

  // Delete a Note
  app.delete("/api/note/:id", function(req, res) {
    console.log("Note ID:");
    console.log(req.params.id);
    Note.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.end();
    });
  });
};

