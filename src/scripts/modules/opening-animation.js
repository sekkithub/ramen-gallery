var $ = require('jquery');

var init = function() {
    $('.title').velocity({opacity: 1, paddingTop: 0}, 500);
}

exports.init = init;