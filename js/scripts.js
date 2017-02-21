$(function(){
  $("form#height").submit(function(event){
    event.preventDefault();

    var height = parseInt($("#heightInput").val());

    if (height <= 5) {
      $("#shortRides").slideToggle();
    } else {
      $("#tallRides").slideToggle();
      $("#shortRides").slideToggle();
      $(".tooTall").hide();
    }


  });
});
