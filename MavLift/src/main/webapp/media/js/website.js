$(document).ready(function() {
  $(".feedback-slider").toggle(
      function(){
          $("#feedBack").animate({left:"0px"});
              return false;
      },
      function(){
          $("#feedBack").animate({left:"-195px"});
          return false;
      }
  );
  $('#feedback-angel').submit(function(e) {
    e.preventDefault();
    $.post($(this).attr("action"), $(this).serialize(), function(data) {
      console.log("it works");
      console.log(data);
    });
  });

  $('#feedback-demon').submit(function(e) {
    e.preventDefault();
    $.post($(this).attr("action"), $(this).serialize(), function(data) {
      console.log("it works");
      console.log(data);
    });
  });

  $('#feedback-idea').submit(function(e) {
    e.preventDefault();
    $.post($(this).attr("action"), $(this).serialize(), function(data) {
      console.log("it works"),
      console.log(data);
    });
  });
});
