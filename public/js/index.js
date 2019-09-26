$(document).ready(function () {

  var dT = new Date();
  var day = dT.getDate();
  var month;

  if ((dT.getMonth() + 1 < 10)) {
    month = "0" + (dT.getMonth() + 1)
  } else if ((dT.getMonth() + 1 >= 10)) {
    month = dT.getMonth() + 1;
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

    $.post("/api/groceries/new", grocery)
      .then(function (data) {

        $('#item').val('');
        $('#groceryCategory').val('');
        $('#groceryQuantity').val('');

        JSON.stringify(data);
        console.log(data);
      });
  });

  //Delete grocery item from database
  $(".deleteGrocery").on("click", function () {
    var id = $("#groceryItem").attr("data-id");
    console.log(id);

    $.ajax({
      url: "/api/groceries/delete/" + id,
      type: "DELETE"
    }).then(function (result) {
      console.log(result);
      location.href = "/";
    });
  });

  //Add task to database
  $("#addTask").on("click", function () {

    var task = {
      task: $("#taskInput").val(),
      urgency: $("input[name='urgency']:checked").val(),
      date: year + "-" + month + "-" + day
    }

    $.post("/api/tasks/new", task)
    .then(function(data) {
      $('#taskInput').val('');
      JSON.stringify(data);
      console.log(data);
    });
   });

  //Delete task from database
  $(".deleteTask").on("click", function () {
    var id = $("#taskItem").attr("data-id");
    console.log(id);

    $.ajax({
      url: "/api/tasks/delete/" + id,
      type: "DELETE"
    }).then(function (result) {
      console.log(result);
    location.href = "/";
    });
  });

  //Add note to database
  $("#noteButton").on("click", function () {

    var note = {
      author: $("#noteAuthor").val(),
      note: $("#noteArea").val(),
      date: year + "-" + month + "-" + day
    }

    $.post("/api/notes/new", note)
    .then(function(data) {
      $('#noteAuthor').val('');
      $('#noteArea').val('');
      JSON.stringify(data);
      console.log(data);
    })
  });

  //Delete note 
  $(".deleteNote").on("click", function () {
    var id = $("#noteItem").attr("data-id");
    console.log(id);

    $.ajax({
      url: "/api/notes/delete/"+id,
      type: "DELETE"
    }).then(function (result) {
      console.log(result);
      location.href = "/";
    });
  });


  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh');
  });

  //Returns to homepage
  $(".homeButton").on("click", function (e) {
    e.preventDefault();
    location.href = "/";
  });

  
});


