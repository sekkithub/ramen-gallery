var init = function() {
    $(".shop").hover(function () {
        $(this).toggleClass('blur');
    });

    $('.shop').mouseenter(function() {
        $(this).velocity({
            opacity: 0.8,
            letterSpacing: '.1em',
            fontSize: '100px'
        }, 70);
        $(this).next().stop().velocity({
            opacity: 1,
            right: '5%'
        }, 350)
    }).mouseleave(function() {
        $(this).velocity({
            opacity: 1,
            letterSpacing: 0,
            fontSize: '80px'
        }, 70);
        $(this).next().stop().velocity({ opacity: 0, right: '10%' }, 350, function(){
            $(this).stop().velocity({ right: '0%' }, 0);
        });
    });
}

exports.init = init;
