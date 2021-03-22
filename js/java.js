$(document).ready(function(){
  $(".button1").click(function(){
    $(".button1, .background").addClass("exit_opacity");
    $(".plane").addClass("exit_plane");
    $(".planet, .blue").addClass("exit_scale");
    $(".white").addClass("exit_white");

    $(".surface_1").addClass("entrance_surface");
  });
});