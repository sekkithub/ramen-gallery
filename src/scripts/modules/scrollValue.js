var $ = require('jquery');

var init = function() {
    $(window).scroll(function() {
        var value = $(this).scrollTop();
        $('.scroll-value').text(value);
    });
}

exports.init = init;