$(function() {
    $(".bio").click(function() {
        $('html, body').animate({
            scrollTop: $(".bioHeading").offset().top
        }, 2000);
    });

    $(".projects").click(function() {
        $('html, body').animate({
            scrollTop: $(".projectsDiv").offset().top
        }, 2000);
    });

    $(".contactMe").click(function() {
        $('html, body').animate({
            scrollTop: $(".contactNav").offset().top
        }, 2000);
    });
});
