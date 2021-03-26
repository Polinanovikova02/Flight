$(document).ready(function(){
  $(".button1").click(function(){
    $(".button1, .background").addClass("exit_opacity");
    $(".button1").addClass("blocker");
    $(".plane").addClass("exit_plane");
    $(".planet, .blue").addClass("exit_scale");
    $(".white").addClass("exit_white");

    setTimeout(function(){
      $('body').css('background', 'linear-gradient(180deg, #000000 19.79%, #128BB6 100%)');
    }, 1800);
    $(".circle1, .circle2, .circle3").addClass("entrance_surface");
    $(".triangle, .triangle2, .triangle3, .triangle4").addClass("entrance_surface");
    $(".line_centre, .centre").addClass("entrance_surface");
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