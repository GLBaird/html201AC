// debulked onresize handler
// https://github.com/louisremi/jquery-smartresize
function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};

$(document).ready(function(){

	// Sticky menu
	var $sticky = $('.sticky');

	// If sticky sidebar exists
	if( $sticky.length ) {

		var $sticked = $sticky.clone().addClass('sticked').removeClass('sticky').insertAfter('.sticky');
		var stickyHeight = $sticked.height(); 

		$(window).scroll(function () {
			var stickyOffsetTop = $('.sticky').offset().top;
			var currentScrollPos = $(document).scrollTop(); 

			// If the window's scrollTop position is larger than sticky element's vertical top offset
			// Clone and hide the original element
			// 
			if( stickyOffsetTop < currentScrollPos ) {

				$sticky.css({
					"visibility": "hidden"
				});

				$sticked.css({
					"display": "block", 
					"width": $sticky.width(), 
					"position": "fixed",
					"z-index": "10", 
					"top": "0"
				});

			} else {

				$sticky.css({
					"visibility": "visible"
				});

				$sticked.css({
					"display": "none"
				});

			}
		});

	} // sticky menu ends

	// On resize
	// Use a debounced resize instead of normal resize event to minimize resource 
	on_resize(function() {
		if( $('.sticked').length ) {
			$sticked.css({
				"width": $sticky.width()
			});
		}
	}); // sticky resize handler ends


	// Smooth scrolling to internal anchors
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top - stickyHeight - 50
	            }, 600);
	            return false;
	        }
	    }
	});


	// Mobile menu
	$('#mainmenu').typeMenu(); 

});




$(window).load(function () {

});




$(window).resize(function () {

});
