$(document).ready(function() {
    $(window).scroll(function() {
      $('.section').each(function() {
        var position = $(this).offset().top;
        var scrollPosition = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        if (position < scrollPosition + windowHeight - 100) { // Adjust 100 for earlier fade in
          $(this).addClass('visible');
        }
      });
    });
  });
  