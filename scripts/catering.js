// $(document).ready(function(){
//     $.fn.isInViewport = function() {
//         var elementTop = $('.navbar').offset().top;
//         var elementBottom = elementTop + $('.navbar').outerHeight();
//
//         var viewportTop = $(window).scrollTop();
//         var viewportBottom = viewportTop + $(window).height();
//
//         return elementBottom > viewportTop && elementTop < viewportBottom;
//     };
//
//     $(window).on('resize scroll', function() {
//         if ($('.navbar').isInViewport()) {
//             $( "div.navbar-2" ).addClass( "hide" )
//         } else {
//             $( "div" ).removeClass( "hide" )
//         }
//     });
// });
