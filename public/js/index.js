

$(document).ready(function () {
  console.log("ready!");

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


  //Add grocery item to database
  $("#groceryButton").on("click", function () {

    var grocery = {
      item: $("#item").val(),
      category: $("#groceryCategory").val(),
      amount: $("#groceryQuantity").val(),
      date: year + "-" + month + "-" + day
    }

    console.log(grocery.item);
    console.log(grocery.category);
    console.log(grocery.amount);


    $.post("/api/groceries/new", grocery)
      .then(function (data) {

        JSON.stringify(data);
        console.log(data);
      });
  });



  //Add task to database
  $("#addTask").on("click", function () {

    var priority;

    if ($("#todayButton").val()) {
      priority = 1;
    } else if ($("#thisWeekButton").val()) {
      priority = 3;
    } else if ($("#asapButton").val()) {
      priority = 2;
    }

    var task = {
      task: $("#taskInput").val(),
      urgency: priority,
      date: year + "-" + month + "-" + day
    }

    $.post("/api/tasks/new", task)
      .then(function (data) {
        JSON.stringify(data);
        console.log(data);
      })
  });


  //Add note to database
  $("#noteButton").on("click", function () {

    var note = {
      author: $("#noteAuthor").val(),
      note: $("#noteArea").val()
    }


    $.post("/api/notes/new", note)
      .then(function (data) {
        JSON.stringify(data);
        console.log(data);
      })
  });




  $(".deleteNote").on("click", function (id) {
    $.delete("/api/notes/delete/" + id);
  })


  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  })


  //Add note to database
  $("#noteButton").on("click", function () {

    var note = {
      author: $("#noteAuthor").val(),
      note: $("#noteArea").val(),
      date: year + "-" + month + "-" + day
    }


    $.post("/api/notes/new", note)
      .then(function (data) {
        JSON.stringify(data);
        console.log(data);
      })
  });


//Returns to homepage
  $(".homeButton").on("click", function () {

    location.href = "/";
  });


});










