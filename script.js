$(document).ready(function() {
    // Scroll event handler
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 56) {
            $(".sticky").addClass("stickyadd");
        } else {
            $(".sticky").removeClass("stickyadd");
        }
    });

    // Typed.js initialization
    var typed = new Typed(".element", {
        strings: ["Aman.", "a Developer."],
        typeSpeed: 100,
        backSpeed: 100,
        smartBackspace: true,
        loop: true,
        loopCount: Infinity,
        startDelay: 800
    });
});
