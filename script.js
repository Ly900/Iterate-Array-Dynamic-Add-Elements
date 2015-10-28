$(document).ready(function(){

  var Array = ["A", "B", "C", "D"];

  var divChildren = $(".board").children();

  $.each(Array, function (index, value) {

      $("<div class='letterDiv'> </div>").html(value).appendTo(".board");
      
  })

























}); // ends document.ready
