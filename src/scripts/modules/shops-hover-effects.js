var init = function() {
    $(".shop").hover(function () {
        $(this).toggleClass('transparent');
        $(this).toggleClass('blur');
    });

    $('.shop').mouseenter(function() {
        $(this).next().stop().velocity({ opacity: 1 }, 350)
    }).mouseleave(function() {
        $(this).next().stop().velocity({ opacity: 0 }, 350)
    });
}

exports.init = init;
