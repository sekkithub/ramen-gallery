window.jQuery = window.$ = require("jquery");
var waypoints = require('waypoints');
require('viewport-units-buggyfill').init();
require('velocity-animate');
require('velocity-animate/velocity.ui');

require('./modules/spinner').init();
require('./modules/opening-animation').init();
require('./modules/rotatingRamen').init();
require('./modules/shops-hover-effects').init();
require('./modules/smooth-anchor-link').init();
require('./modules/footer-glitch').init();
require('./modules/waypoints').init();
