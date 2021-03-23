$(document).ready(function(){
  $(".button1").click(function(){
    $(".button1, .background").addClass("exit_opacity");
    $(".button1").addClass("blocker");
    $(".plane").addClass("exit_plane");
    $(".planet, .blue").addClass("exit_scale");
    $(".white").addClass("exit_white");

    setTimeout(function(){
      $('body').css('background', 'linear-gradient(180deg, #000000 0%, #128BB6 50%)');
    }, 1800);
    // $(".triangle").addClass("entrance_surface");
    $(".triangle2").addClass("entrance_surface");
    $(".cross1, .cross2").addClass("entrance_surface");
    $(".b-top, .b-right, .b-bottom, .b-left").addClass("entrance_surface");
    $(".interface").addClass("entrance_surface");


    $(".surface_1").addClass("entrance_surface");
  });
});

$(document).ready(function(){
  $(".b-top").click(function(){
    $(".cross2").addClass("step_top");
  });
});