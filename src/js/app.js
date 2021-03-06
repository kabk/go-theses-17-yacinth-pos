(function () {

    "use strict";

    global.$    	= require("jquery");
  	window.jQuery 	= $;

	var 	groter = true,
			baskerville = true,
			kleuren = true,
			dikgedrukt = true,
			herhaling = true,
			afbeeldingen = true;

	var 	paragraphs = $(' #abstract, #introductie, #ch-1, #ch-2-0, #ch-2-1, #ch-2-2, #ch-2-3, #ch-2-4, #ch-2-5, #ch-2-6, #ch-3, #conclusie, #bronnen');

	function isElementInViewport (el) {

	      //special bonus for those using jQuery
	      if (typeof jQuery === "function" && el instanceof jQuery) {
	          el = el[0];
	      }

	      var rect = el.getBoundingClientRect();

	      return (
	          rect.top >= 0 &&
	          rect.left >= 0 &&
	          rect.bottom <= $(window).height() * 0.66 && /* (window.innerHeight || document.documentElement.clientHeight) for full screen */ 
	          rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
	      );
	}

  	function change (id) {

		// elements to be excluded from styling
		var exceptions = '#title > p, .block > p, p.header, .block p > sup, #shoutout > p, #print > p, #print > a';
		var footnoteExceptions = '#f-I > *, #f-II > *, #f-III > *, #f-IV > *, #f-V > *'

		// elements to be included
		var inclusions = '.footnote > sup, .footnote > p';

		if (id === 'groter' || id === 'baskerville' || id === 'kleuren' || id === 'dikgedrukt' ) {
		
			console.log('adding classes ' +id+ '');

			$('.trigger-change#' +id+ '').parents('div').find('p, blockquote, sup').not(exceptions).each(function(){
				$(this).addClass(id);	
			});

			$(inclusions).not(footnoteExceptions).each(function(){
				$(this).addClass(id);		
			});
		} else if( id === 'herhaling' ) {

			console.log('adding elements ' +id+ '');
			$('.herhaling-quote').show().css( "display", "block" );
		} else if( id === 'afbeeldingen' ) {

			console.log('adding elements ' +id+ '');
			$('.afbeeldingen-image').show().css( "display", "block" );
		}
		return "";
	  }

	  function footNote (el) {
    	var value = el.text();
    	console.log(value);

    	if( el.offset().left < $(window).width() * 0.66 ) {
	    	$('#f-' +value+ '').show().css({
	    		"top" : el.offset().top,
	    		"left" : el.offset().left
	    	});
    	} else {
	    	$('#f-' +value+ '').show().addClass('right-align').css({
	    		"top" : el.offset().top,
	    		"left" : el.offset().left - $('#f-' +value+ '').outerWidth() + 7 + 13
	    	});	    		
    	}
	  }

    $(function () {

	    $('#index').on('click', function(){

	      $('body').animate({
	        
	        'scrollTop' : 0

	      }, 3000);
	    });

	    $('#showcase').on('click', function(){

	      $('body').animate({
	        
	        'scrollTop' : 45000

	      }, 180000, "linear");
	    });

		$('p > sup').on('click', function(){
	    	footNote($(this));
	    });

	    $('.footnote').on('click', function(){
	    	$(this).hide();
	    })

		$(window).on('scroll', function(){

		    $('.trigger').each(function(){

		    	var isVisible = isElementInViewport(this);
		    	
		    	if( isVisible ) {

		    		$(this).addClass('underline')

		    		var thisId = $(this).attr('id');

		    		switch ( thisId ) {
		    			
		    			case 'groter':
		    			if(groter) {
							change(thisId);
					    	return groter = false;
		    			}
		    			break;

		    			case 'baskerville':
		    			if(baskerville) {
	    					change(thisId);
	    					return baskerville = false;
		    			}	    			
		    			break;

		    			case 'kleuren':
		    			if(kleuren) {
	    					change(thisId);
	    					return kleuren = false;
		    			}
		    			break;
		    			
		    			case 'dikgedrukt':
		    			if(dikgedrukt) {
	    					change(thisId);
	    					return dikgedrukt = false;
		    			}
		    			break;

		    			case 'herhaling':
		    			if(herhaling) {
	    					change(thisId);
	    					return herhaling = false;
		    			}
		    			break;

		    			case 'afbeeldingen':
		    			if(afbeeldingen) {
	    					change(thisId);
	    					return afbeeldingen = false;
		    			}
		    			break;

		    			default:
		    			console.log('no classes found');
		    		}
		    	}
		    });
		});

    });

}());