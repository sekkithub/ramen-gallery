var init = function() {
    $('.title').velocity('transition.slideUpIn', 1000);
    $('.rotating-ramen').velocity({
        'opacity' : [1, 0],
        'rotateZ' : [0, -10]
    }, {
        'easing'   : 'easeOutQuint',
        'duration' : 2000
    });
}

exports.init = init;