$(document).ready(function(){
  let yShift = 0;
  let xShift = 0;
  let screenHeight;
  let screenWidth;

  function getCross2Top() {
    return Math.max(0, screenHeight / 2 - 30 / 2 + 141 + yShift);
  }
  function getCross2Right() {
    return Math.max(0, screenWidth / 2 - 30 / 2 + xShift);
  }

  function onResize() {
    screenHeight = $(window).height();
    screenWidth = $(window).width();
    $(".cross1").offset({ left: screenWidth / 2 - 30 / 2, top: screenHeight / 2 - 30 / 2 - 80 });
    $(".cross2").offset({ left: screenWidth / 2 - 30 / 2 + 450, top: getCross2Top() });
  }

  $(".b-top").click(function(){
    let screenHeight = $(window).height();
    let cross2 = $(".cross2");
    yShift -= 31;
    cross2.animate({ top: getCross2Top() }, 300);
  });

  $(".b-bottom").click(function(){
    let screenHeight = $(window).height();
    let cross2 = $(".cross2");
    yShift += 31;
    cross2.animate({ top: getCross2Top() }, 300);
  });

  $(".b-right").click(function(){
    let screenWidth = $(window).width();
    let cross2 = $(".cross2");
    xShift += 30;
    cross2.animate({ left: getCross2Right() }, 300);
  });

  $(".b-left").click(function(){
    let screenWidth = $(window).width();
    let cross2 = $(".cross2");
    xShift -= 30;
    cross2.animate({ left: getCross2Right() }, 300);
  });

  $(window).resize(onResize);

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
    $(".interface, .details").addClass("entrance_surface");
    $(".surface_1").addClass("entrance_surface");

    onResize();
  });
});