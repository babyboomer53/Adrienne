// Get IE or Edge browser version

    var version = detectIE();
    var x = document.getElementsByClassName("inner");
    var y = document.getElementsByClassName("clock-container");

    if (version === false) {
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].classList.add("inset-shadow");
        }
        var i;
        for (i = 0; i < y.length; i++) {
            y[i].classList.add("inset-shadow");
        }
    } else {
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].classList.add("alt-shadow");
        }
        var i;
        for (i = 0; i < y.length; i++) {
            y[i].classList.add("alt-shadow");
        }
    }

    /**
     * detect IE
     * returns version of IE or false, if browser is not Internet Explorer
     */

    function detectIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
        }

        var trident = ua.indexOf("Trident/");
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf("rv:");
            return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
        }

        var edge = ua.indexOf("Edge/");
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
        }
        // other browser
        return false;
    }