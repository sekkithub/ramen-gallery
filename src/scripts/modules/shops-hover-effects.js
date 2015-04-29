

var init = function() {
    $(".shop").hover(function () {
        $(this).toggleClass('transparent');
        $(this).toggleClass('blur');
    });
}

exports.init = init;