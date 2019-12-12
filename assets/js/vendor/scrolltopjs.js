var isHero = false;
var $window = $(window),
        $document = $(document),
        $body = $("body"),
        $html = $("html, body");


// Global var
var ROCKET = {};
/* -----------------------
 * Settings
 * --------------------- */
ROCKET.settings = {
    smoothScroll: true,
};



ROCKET.scrollToTop = function () {
        if ($("#scrollToTop").length) {
            var scrollVal = isHero ? $heroSection.height() / 2 + 400 : 500;
            var scrollTo = isHero && !isMobile ? 450 : 0;
            var showed = false;

            $window.scroll(function () {
                if ($window.scrollTop() > scrollVal) {
                    if (!showed) {
                        $("#scrollToTop").find(".scrollToTop-icon").show();
                        $("#scrollToTop").addClass("show");
                        showed = true;
                    }
                } else {
                    if (showed) {
                        $("#scrollToTop").removeClass("show");
                        showed = false;
                    }
                }
            });
            $body.on("click", ".scrollToTop-circle", function () {
                $("#scrollToTop").addClass("animated");
                $html.animate({scrollTop: scrollTo + "px", display: "none"}, {
                    duration: 750,
                    easing: "linear",
                    complete: function () {
                        $("#scrollToTop").find(".scrollToTop-icon").hide();
                        $("#scrollToTop").removeClass("animated");
                    }
                });
            })
        }
    };

    

    /* -----------------------------
     * SMOOTH SCROLL
     * ---------------------------*/
    ROCKET.smoothScroll = function () {
        SmoothScroll({
            animationTime: 600, // [ms]
            stepSize: 100 // [px]
        })
    };

// Init functions
        ROCKET.scrollToTop();
        if (ROCKET.settings.smoothScroll) {
            ROCKET.smoothScroll();
        }
            /* -----------------------------
     * On DOM ready functions
     * ---------------------------*/




    $(function () {

       
        ROCKET.scrollToTop();
        if (ROCKET.settings.smoothScroll) {
            ROCKET.smoothScroll();
        }

        
        if (ROCKET.settings.onScrollAnimation && $animatedSections.length) {
            ROCKET.onScrollAnimation();
        }

    });