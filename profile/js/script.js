// fade-inout
$(function () {
    $(window).scroll(function () {
        $(".fade").each(function () {
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight / 5) {
                $(this).addClass("fade-on");
            } else {
                $(this).removeClass("fade-on");
            }
        });
    });
});

// linein
$(window).on('scroll', function () {

    $(".JS_ScrollAnimationItem").each(function () {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 100) {
            $(this).addClass('isActive');
        }
    });

});

console.log("huga");