var $ = require('jquery');

var init = function() {
    $(window).scroll(function() {
        var position = $(window).scrollTop();
        var rotation = ( position / ( $(document).height() - $(window).height() ) ) * 360;
        var opacity  = position > $(window).height() ? 0.2 : 1 - ( ( position / $(window).height() ) * 0.8 );
        $('.rotating-ramen').css({ 
            'opacity'   : opacity,
            'transform' : 'rotate(' + rotation + 'deg) translateZ(0)'
        });

    });
}

exports.init = init;