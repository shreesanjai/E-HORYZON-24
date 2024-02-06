$(document).ready(function() {
    // Show/hide the button based on scroll position
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#goToTopBtn').fadeIn();
        } else {
            $('#goToTopBtn').fadeOut();
        }
    });

    // Smooth scroll to top when button is clicked
    $('#goToTopBtn').click(function() {
        $('html, body').animate({scrollTop : 0}, 200);
        return false;
    });
});
