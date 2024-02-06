$(document).ready(function() {
    var aboveImage = $(".above-centered-image");
    var belowImage = $(".below-centered-image");

    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();
        var windowHeight = $(window).height();
        var aboveImagePosition = aboveImage.offset().top;
        var belowImagePosition = belowImage.offset().top + belowImage.height();

        // Slide in the above image from top to center
        if (scrollPosition + windowHeight > aboveImagePosition) {
            aboveImage.removeClass("hidden").css({opacity: 1, transform: "translateY(0)"});
        } else {
            aboveImage.addClass("hidden").css({opacity: 0, transform: "translateY(-100%)"});
        }

        // Slide in the below image from bottom to center
        if (scrollPosition + windowHeight > belowImagePosition) {
            belowImage.removeClass("hidden").css({opacity: 1, transform: "translateY(0)"});
        } else {
            belowImage.addClass("hidden").css({opacity: 0, transform: "translateY(100%)"});
        }
    });
});

