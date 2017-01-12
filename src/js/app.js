(function () {

    "use strict";

    global.$    = require("jquery");
  	window.jQuery = $;

	function isElementInViewport (el) {

	      //special bonus for those using jQuery
	      if (typeof jQuery === "function" && el instanceof jQuery) {
	          el = el[0];
	      }

	      var rect = el.getBoundingClientRect();

	      return (
	          rect.top >= 0 &&
	          rect.left >= 0 &&
	          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
	          rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
	      );
	  }

    $(function () {


    $('#index').on('click', function(){
      $('html, body').animate({
        scrollTop: $(window).offset().top
      }, 800);
    });

	$(window).on('scroll', function(){
	    $('.block').each(function(){
	    	var isVisible = isElementInViewport(this);
	    	if(isVisible){
	    		console.log(isVisible);
	    	}
	    });
	});

    });

}());