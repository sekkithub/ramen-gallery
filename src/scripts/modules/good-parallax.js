var $ = require('jquery');
var utilities = require('./utilities');

var init = function() {

    $(function(){
        function draw() {
            requestAnimationFrame(draw);
            // Drawing code goes here
            scrollEvent();
        }
        draw();

        $(window).resize(function () {
            $('img').css({
                left: ($(window).width() - $('img').outerWidth()) / 2,
            });
        });

    });

    function scrollEvent(){
        if(!is_touch_device()){
            viewportTop = $(window).scrollTop();
            windowHeight = $(window).height();
            viewportBottom = windowHeight+viewportTop;
    
            if($(window).width())
    
            $('[data-parallax="true"]').each(function(){
                distance = viewportTop * $(this).attr('data-speed');
                if($(this).attr('data-direction') === 'up'){ sym = '-'; } else { sym = ''; }
                $(this).css('transform','translate3d(0, ' + sym + distance +'px,0)');
            });

            $('[data-bg="true"]').each(function(){
                distance = viewportTop * $(this).attr('data-speed');
                $(this).css('transform','rotate(' + sym + distance + 'deg)');
            });
        }
    }   
    
    function is_touch_device() {
      return 'ontouchstart' in window // works on most browsers 
          || 'onmsgesturechange' in window; // works on ie10
    }

}

exports.init = init;