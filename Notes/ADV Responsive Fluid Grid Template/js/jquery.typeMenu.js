/*!
 * 
 * jQuery typeMenu
 * 
 * simple plugin written for Typereport
 * 
 * Original author: Ye Joo Park
 * Licensed under the MIT license
 *
 */

;(function ( $, window, document, undefined) {

	// Defaults
	var pluginName = 'typeMenu', 
		defaults = { 
			mobileToggle: true, 
			mobileWrapperId: "menu-mobile-wrapper", 
			mobileMenuId: "menu-mobile", 
			toggleElementId: "toggle-menu", 
			menuOnCollapseText: "Menu", 
			menuOnExpandText: "Close", 
			breakpoint: 768 
		}; 


	// Actual plugin constructor
	function Plugin( element, options ) {
		this.element = element;

		this.options = $.extend( {}, defaults, options );

		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	}


	Plugin.prototype.init = function() {

		// Original menu
		var menu = $(this.element);

		// Store HTML inside the menu
		// Note that the content is stored before automatically adding arrows
		var menuContent = $(menu).html();

		// Options
		var mobileWrapperId = this.options.mobileWrapperId;
		var mobileMenuId = this.options.mobileMenuId; 
		var toggleElementId = this.options.toggleElementId; 
		var menuOnCollapseText = this.options.menuOnCollapseText; 
		var menuOnExpandText = this.options.menuOnExpandText; 

		var mobileWrapper = "#" + mobileWrapperId; 
		var mobileMenu = "#" + mobileMenuId; 
		var toggleElement = "#" + toggleElementId; 

		var mobileWrapperHeight;


		// If mobileToggle options is turned on (default)
		// Create a mobile menu wrapper and copy contents from the original menu
		if( this.options.mobileToggle == true ) {
			$('body').css({"position": "relative"}).prepend('<div id=' + mobileWrapperId + '><div class="container"><div class="desktop-12 columns"><ul id="menu-mobile"></ul></div></div></div>'); 
			$(mobileMenu).html(menuContent).before('<div id="' + toggleElementId + '">' + menuOnCollapseText + '</div>');

			// When the user clicks on the toggle element
			$(toggleElement).bind('click', function(e) {

				// Toggle the menu 
				// Apply stop() before slideToggle() to stop animation
				$(mobileMenu).stop().slideToggle();

				// Apply .toggle-open to the wrapper
				$(mobileWrapper).toggleClass("toggle-open");

				// If the menu is open
				if( $(mobileWrapper).hasClass("toggle-open") ) {

					// Display the "Close" text
					$(toggleElement).text(menuOnExpandText);

				} else {

					// Display the "Menu" text
					$(toggleElement).text(menuOnCollapseText);

				}
			});

			$(mobileMenu + " a").bind('click', function(e) {

				// Store the height of the mobile menu before initiating toggle close
				mobileWrapperHeight = $(mobileWrapper).height()

				// If the menu is open
				if( $(mobileWrapper).hasClass("toggle-open") ) {
					// Toggle the menu 
					// Apply stop() before slideToggle() to stop animation
					$(mobileMenu).stop().slideToggle();

					// Toggle open/close class
					$(mobileWrapper).toggleClass("toggle-open");

					// Display the "Menu" text
					$(toggleElement).text(menuOnCollapseText);
				}

			});


			// Smooth scrolling to internal anchors
			$(mobileMenu + ' a[href*=#]:not([href=#])').click(function() {

				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
					|| location.hostname == this.hostname) {

					var target = $(this.hash);

					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

					if (target.length) {

						$('html,body').animate({
							scrollTop: target.offset().top - mobileWrapperHeight
						}, 600);

						return false;
					}
				}
			});

		}
	};


	$.fn[pluginName] = function ( options ) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, 
					new Plugin( this, options ));
			}
		});
	}

})( jQuery, window, document );