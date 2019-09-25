




$(document).ready(function () {

//Add grocery item to database
  $("#groceryButton").on("click", function () {

    var grocery = {
      item: $("#item").val(),
      category: $("#groceryCategory").val(),
      amount: $("#groceryQuantity").val(),
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
      urgency: priority
    }

    $.post("/api/tasks/new", task)
    .then(function(data) {
      JSON.stringify(data);
      console.log(data);
    })
  });

});

//Add note to database
$("#noteButton").on("click", function () {
  
  var note = {
    author: $("#noteAuthor").val(),
    note: $("#noteArea").val()
  }


  $.post("/api/notes/new", note)
  .then(function(data) {
    JSON.stringify(data);
    console.log(data);
  })
});

$(".deleteNote").on("click", function (id) {
  $.delete("/api/notes/delete/" + id);
})

$(".homeButton").on("click", function () {
 
    location.href = "/";
});

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})










// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
