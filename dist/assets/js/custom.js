
/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */

function switchLanguage() {
    // Get the current URL
    var url = window.location.href;
    
    // Check if the current URL has the English suffix
    if (url.indexOf('-en') !== -1) {
      // If it's in English, remove the '-en' to switch to Bulgarian variant.
      // This assumes your Bulgarian pages are named without the "-en" suffix.
      var newUrl = url.replace('-en', '');
      window.location.href = newUrl;
    } else {
      // If it's not in English, add '-en' before the ".html" extension.
      // This assumes that all your pages end with .html.
      var newUrl = url.replace('.html', '-en.html');
      window.location.href = newUrl;
    }
  }

(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
                      
            //HOVER DROPDOWN SCRIPTS
            $('ul.nav li.dropdown').hover(function () {
                $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
            }, function () {
                $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
            });

            //TESTIMONIAL & SLIDEER SPEED
            $('.carousel').carousel({
                interval: 4000 //TIME IN MILLI SECONDS
            })

           
           
            /*====================================
            WRITE YOUR SCRIPTS HERE
            ======================================*/
        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));
