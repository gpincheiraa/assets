(function(window) {
      var enableRedirect = window.location.hash.indexOf('send?to') !== -1 ? true 
                                                                          : false;
      if(!enableRedirect) {
        return;
      }
      //Browser Detection
      var isOpera = !!window.opera || navigator.userAgent.indexOf('OPR/') >= 0, // Opera 8.0+
          isFirefox = typeof InstallTrigger !== 'undefined', // Firefox 1.0+
          isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0, // At least Safari 3+ 
          isChrome = !!window.chrome && !isOpera, // Chrome 1+
          isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6
      //Urls Dinex
      var appUrlScheme = 'dinex://' + window.location.hash.substring(2),
        webAppUrl =  'http://www.dinex.cl/webapp/'+ window.location.hash; //'http://192.168.1.39:3000/build/bundle/app-buyer/index_debug.html'

      //Begin the redirect process
      goRedirect();

      function openInAndroid() {
        if(isChrome) {
          setTimeout(function() { 
            //alert("Falló el url scheme")
            window.location = webAppUrl;
          }, 25);
          window.location = appUrlScheme;
        }
        else{
          //alert("Utilice Chrome");
          window.location = webAppUrl;
        }
      }

      function openInIphone() {

      }

      function goRedirect() {
        
        //Android
        if (/Android/i.test(navigator.userAgent)) {
          openInAndroid();
        }
        //iPhone
        else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          openInIphone();
        }
        //Desktop redirects to webApp
        else {
          window.location = webAppUrl;
        }
      }

    })(window);