$(function(){
  $("form#height").submit(function(event){
    event.preventDefault();

    var height = parseInt($("#heightInput").val());

    if (height >= 5) {
      $("#tallRides").slideToggle();
    } else {
      $("#shortRides").slideToggle();
    }


  });
});
