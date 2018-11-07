$(document).ready(function() {

  $(window).on('scroll', function() {
    // for blur affect as you scroll
    var pixs = $(document).scrollTop();

    pixs = pixs / 100;
    $(".mainWrapper").css({
      "filter": "blur(" + pixs + "px)"
    });

    // change menu to be fixed
    var distance = $('.navigation').offset().top;
    var $window = $(window);

    var x = $(".navigation").offset();
    var bottom = $(".mainWrapper").height();
    x = x.top - bottom;

    $window.scroll(function() {
      if ($window.scrollTop() > distance) {
        // animated = ($window.scrollTop() + distance) / 2;
        $('.navigation').css({
          "position": "sticky",
          "height": "170px",
          "top": "0"
        });
        $('.tabs li').css({
          "font-size": "50px"
        });
        $('#icon').css({
          "padding": "25px 10px"
        });
      } else if ($window.scrollTop() < distance && (x < 1)) {
        $('.navigation').css({
          "height": "150px"
        });
        $('.tabs li').css({
          "font-size": "40px"
        });
        $('#icon').css({
          "padding": "15px 10px"
        });
      }
    });
  });
  var $speed = 1000;
  // on click, smooth scroll to section
  $("#events").click(function() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".events").offset().top
    }, $speed);
  });
  $("#bookings").click(function() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".bookings").offset().top
    }, $speed);
  });
  $("#contact").click(function() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".contact").offset().top
    }, $speed);
  });
  $("#specials").click(function() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".specials").offset().top
    }, $speed);
  });
  $("#icon").click(function() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".mainWrapper").offset().top
    }, $speed);
  });
  $("#videoScroll").click(function() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".events").offset().top
    }, $speed);
  });

});
