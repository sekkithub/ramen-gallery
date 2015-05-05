$.Velocity.RegisterUI("callout.glitch", {
  defaultDuration: 225,
  calls: [
      [ { opacity: [ 1, [ 3 ], 0.50 ], skewX: [ 0, "spring", function(){ return ((Math.random() * 600) * -1) + 300  } ] }, 1 ]
  ]
});


var init = function() {
    $('.ramen-map--logo').hover(function(){ 
        $(this)
            .stop().velocity({ 'translateZ' : 0 }, 0)
            .stop().velocity('callout.glitch');
    });

    $('#footer').hover(function() {
        $(this)
            .find('.ramen-map--logo')
            .stop().velocity({ 'translateZ' : 0 }, 0)
            .stop().velocity('callout.glitch');
    });
}

exports.init = init;