var $ = require('jquery');
var utilities = require('./utilities');

var init = function() {
    console.log('Greetings.');
    utilities.hello();
    utilities.goodbye();
}

exports.init = init;