$( document ).ready(function() {
    $.fn.isInViewport = function() {
        var elementTop = $('.navimage').offset().top;
        var elementBottom = elementTop + $('.navimage').outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('resize scroll', function() {
        if ($('.navimage').isInViewport()) {
            $( "div.navbar-2" ).addClass( "hide" )
        } else {
            $( "div" ).removeClass( "hide" )
        }
    });
});
