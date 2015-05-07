var init = function() {
    $('.title').delay(1000).velocity('transition.slideUpIn', 1000);
    $('.rotating-ramen').delay(800).velocity({
        'opacity' : [1, 0],
        'rotateZ' : [0, -10]
    }, {
        'easing'   : 'easeOutQuint',
        'duration' : 2000
    }, function(){
        $('.container, .page-foot').velocity({
            'display': 'block'
        })
    });

    $('.container, .page-foot').delay(3000).velocity({ opacity: 1 }, { display: "block" }, 1000);

}

exports.init = init;