var init = function() {
    $(".shop").hover(function () {
        $(this).toggleClass('transparent');
        $(this).toggleClass('blur');
    });

    $('.shop').mouseenter(function() {
        $(this).next().stop().velocity({ opacity: 1, right: '5%' }, 350)
    }).mouseleave(function() {
        $(this).next().stop().velocity({ opacity: 0, right: '10%' }, 350, function(){
            $(this).velocity({ right: '0%' }, 10);
        });
    });
}

exports.init = init;
