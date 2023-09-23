/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("link-container");
    if (x.className === "link-container") {
        x.className += " responsive";
    } else {
        x.className = "link-container";
    }

    var y = document.getElementById("overlay-wrapper");
    if (y.className === "overlay-wrapper-2") {
        y.className += " show";
    } else {
        y.className = "overlay-wrapper-2";
    }
}

function scroll_about(){
    var element = document.getElementById("home-about");
    element.scrollIntoView({block: 'center', behavior:'smooth'});
}

$(document).ready(function(){
    $("img.event-1-img").on("click", function (event) {
        $("div.embed-container").append("<script src=\"https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js\" async></script>\n" +
            "<div class=\"pa-gallery-player-widget\" style=display:none;\"\n" +
            "  data-link=\"https://photos.app.goo.gl/TMkDWLLjTWZBpjYL9\"\n" +
            "  data-title=\"Sweet Treats\"\n" +
            "  data-description=\"5 new photos added to shared album\">\n>" +
            "  <object data=\"https://lh3.googleusercontent.com/VwzbAyYU6ZOq-nF7hEGxvGt3kSKGZl2OBBDe6sJLUj0KmowboMbw6p6PFctx5alTRTpKYHU1BZolYnt62WmIJOt8YVhDBXPSFwcmqtUswV6zwFhycbb-GEUD4MwLaCW0K5Y3kL9jsg=w1920-h1080\"></object>\n" +
            "  <object data=\"https://lh3.googleusercontent.com/wBNvE3r7p6ru-IkSycGMJStx5tI1U4kRMnUt0FM-ijGcVzD6f8PJkE5Bo7mDuVk7Q1l8GMv8wTWXf3RFz7Fx0KLXRiDeun4MuArNMLckN63VuW2HVw3V3r7K5YGRwLyFQpMu9lSDkA=w1920-h1080\"></object>\n" +
            "  <object data=\"https://lh3.googleusercontent.com/mcyRDlZaBF_V8Trpymnje76LTZpsFPkFkXM1y9gJuMmfVdYA72upn1lGp4AMjYk4vQ1w5SJn1y4sRpaopjKIgZsOQKQPS8idvkQWdsEtnTP02m52nW_6vpfmCloczIgxtLId97_HwA=w1920-h1080\"></object>\n" +
            "  <object data=\"https://lh3.googleusercontent.com/ESphqyT1pWLcTIsPk4jpyxTwZFgZhi0hgUDZvAskp2WqwANeYPYJsjOPKkueLO6f95pQ8zVPTeObc1cf3PUBAqr2lnHWOgrp0VLDn9cJczWmOlzKSbBZayKq5AZHTFmHBAQiWN7Tgw=w1920-h1080\"></object>\n" +
            "  <object data=\"https://lh3.googleusercontent.com/wWn56_7PlJyn1cSAw2hlFAuoaBJDNMoP223vA8zDDqQtviqtpabUBOfraMpw1WiMzIZ1VqbLM0s0CptXfzpXoiWcPQ9Pe10SqDrXfrR5KXZCUp6gOuzGFGXNWLyrVX2Sk9LmAH_qbQ=w1920-h1080\"></object>\n" +
            "</div>\n");
        $("div.overlay-wrapper").show();
    });

    $("img.event-2-img").on("click", function (event) {
        $("div.embed-container").append("<script src=\"https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js\" async></script>\n" +
            "<div class=\"pa-gallery-player-widget\" style= display:none;\"\n" +
            "  data-link=\"https://photos.app.goo.gl/9Jq2XzWAPkojBq2d8\"\n" +
            "  data-title=\"GabbysSweetTreats\"\n" +
            "  data-description=\"9 new photos added to shared album\">\n" +
            "  <object data=\"https://lh3.googleusercontent.com/pw/AIL4fc8njn6D0tRR9hPAfefdiXnd1GSkf741PdxcYFr0YnkV4bhpV4TK0lIpKIrKsHNr_tzTI6HkmPS_mXr32HwGrMtW2n9vXOsgcSR4sHedOJOG3BNtKfM=w1920-h1080\"></object>\n" +
            "  <object data=\"https://lh3.googleusercontent.com/pw/AIL4fc8Iid50ocxvReWWyMNbgs77-Paqf_Oe9OLbkPCfZhR3gcAqtxHRnPPA_8kTLrg7IyR5imA2_EVGQ_EiUuZiWQpdc21HAe63kQkYNSLt4ZDisvAdeUE=w1920-h1080\"></object>\n" +
            "  <object data=\"https://lh3.googleusercontent.com/pw/AIL4fc_7qxDupiNUMw9FPJN650xHh472In8IaynAqwL6Yv4Om4Xl11PHim1l0vXxwYSlQYS3vbnMC4a-lyUjb33KoTbtKuH5A_7WYu9c5Q4W8tBSlt7Tse8=w1920-h1080\"></object>\n" +
            "  <object data=\"https://lh3.googleusercontent.com/pw/AIL4fc-00w0Ue6pQXlmar6bLgH3wKqadOC_rVE6v8IDApxPTaqs-oC-b_aaNdFJcil8BLxeqPvllWrg2j9Q0iUbFH5eq0k6j7mM-r0iJH46axui3uyFOBQg=w1920-h1080\"></object>\n" +
            "  <object data=\"https://lh3.googleusercontent.com/pw/AIL4fc84tXp4U4GojYnmtQBQvyRpL1z2DAhk7BGllBGHVMlzVDU2xMFpCW50uDEbI5bmf3xAzi_riq32Mpo6uAzymRaMxX_fY6Wn6mlmO3zPI2ZRZjyL1XM=w1920-h1080\"></object>\n" +
            "  <object data=\"https://lh3.googleusercontent.com/pw/AIL4fc_H6ry28rpgJfrmcMdOzLt4BE4x3n7zhL5DNS5u9TAG0RCSp4j8-w2NhVGVNzqg87NyMb5egj1G1AkFyKEkT_TxXQ_9O7ZQLGKhp-cgdm01oN7ZruU=w1920-h1080\"></object>\n" +
            "  <object data=\"https://lh3.googleusercontent.com/pw/AIL4fc8EaCwtT-YwPOLMcsE4k89RVTQXmFAz5xTv4qmFNV4nc3wMivKuWZ0nVeUmmXbW_0oP_NqKyTFzXyUH0ha26J_UKkMc6jxVQ6Z5h4Twy9hINolJ6h0=w1920-h1080\"></object>\n" +
            "  <object data=\"https://lh3.googleusercontent.com/pw/AIL4fc8gl7BOr0uEcMfLiDvx6o2Jt0xIcGc1jUYDDPy70FCThtDpPvZzLFhaJdML3RUrDSgNcP1B4HFBsJrwhGh0-80nNcPbOl6YkJOJt2xFYyujUJUQ3SQ=w1920-h1080\"></object>\n" +
            "  <object data=\"https://lh3.googleusercontent.com/pw/AIL4fc8VE4B2CZ-5pCDnmouYNoYflXFtiI-ISfDyEDa_W0_kLCLKmigyy2rdPNLoyNDEfqhRU-PYHkGVSqkw2_DbXHLOGI3J3eegJMbb7NpFtC7pmkmEj0w=w1920-h1080\"></object>\n" +
            "</div>\n");
        $("div.overlay-wrapper").show();
    });

    //
    //
    // $("img.event-3-img").on("click", function (event) {
    //     $("div.embed-container").append("<script src=\"https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js\" async></script>\n" +
    //         "<div class=\"pa-gallery-player-widget\" style=display:none;\"\n" +
    //         "  data-link=\"https://photos.app.goo.gl/41iQ6ZAUcuPTNTzG8\"\n" +
    //         "  data-title=\"Cupcakes\"\n" +
    //         "  data-description=\"3 new photos added to shared album\">\n" +
    //         "  <object data=\"https://lh3.googleusercontent.com/Myl1CZi7nbqfu2roy8lhhKEWay_6H-P45_12qGHlniPT3pi91VzToJJeUkXYSbyQMma85Wcrt5y_XUWPKhMbItm6qg7T3LKtJTupVZhOi7zHhPxuyGP0ref-H_1Ie_iYT-9ARNmu=w1920-h1080\"></object>\n" +
    //         "  <object data=\"https://lh3.googleusercontent.com/B2tuYPSNnIL98Xoub4XmsY78qtPgE9YsfY9K8lUgdJ0cg2ty5NtyqllWvZc3X1rHarrDA7MvxhCR8HfJN4R4RaYS4DHk1aYXt_JnOsI0zVo-DATTQejCp1hARVezz5FDt_Q07Dwe=w1920-h1080\"></object>\n" +
    //         " <object data=\"https://lh3.googleusercontent.com/oL6ZxUzVknT5qXLnHiCY8_aOj2udNcSV9aZcyqd6OHWj1omXEwn9fTIScRlx0SAZmNFzzIwOQcesPPrektxDOi9xyWjE7u_jXYUiL8PUSkrjOVFH5NuR1pRZBR5BUbsml7uqa0LD=w1920-h1080\"></object>\n" +
    //         "</div>\n");
    //     $("div.overlay-wrapper").show();
    // });

    $("img.close").on("click", function () {
        $("div.pa-gallery-player-widget").remove();
        $("div.overlay-wrapper").hide();
    });

    $(document).on('keydown', function(event) {
        if (event.key === "Escape") {
            $("div.pa-gallery-player-widget").remove();
            $("div.overlay-wrapper").hide();
        }
    });

    $.fn.isInViewport = function() {
        var elementTop = $('.navbar').offset().top;
        var elementBottom = elementTop + $('.navbar').outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('resize scroll', function() {
        if ($('.navbar').isInViewport()) {
            $( "div.navbar-2" ).addClass( "hide" )
            $( ".icon" ).removeClass( "fixed-2" )
        } else {
            $( "div" ).removeClass( "hide" )
            $( ".icon" ).addClass( "fixed-2" )
        }
    });

    $("a.on-click").click(function(){
        $(".link-container").removeClass("responsive");
        $(".overlay-wrapper").removeClass("show");
    });
});
