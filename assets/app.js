    	jQuery(document).ready(function($) {
    		new WOW().init();
			$(function () {
			    $.scrollUp({
			        scrollName: 'scrollUp',      // Element ID
			        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
			        scrollFrom: 'top',           // 'top' or 'bottom'
			        scrollSpeed: 300,            // Speed back to top (ms)
			        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
			        animation: 'fade',           // Fade, slide, none
			        animationSpeed: 200,         // Animation speed (ms)
			        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
			        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
			        scrollText: '<i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>', // Text for element, can contain HTML
			        scrollTitle: false,          // Set a custom <a> title if required.
			        scrollImg: false,            // Set true to use image
			        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			        zIndex: 2147483647           // Z-Index for the overlay
			    });
			});
			 $(".lightbox").prettyPhoto({
			 	theme: 'light_square'
			 });

/*			 $('[data-theme-color-scheme]').attr({
			 	'data-theme-color-scheme': 'value1'
			 });*/

			$color_scheme = $('[data-theme-color-scheme]').data('theme-color-scheme');


		if($color_scheme != 'primary-color-dark'){				
				$('.primary-color-dark').removeClass('primary-color-dark').addClass($color_scheme);
		}
/*	
			function switch_theme_color_scheme($previous_color_scheme,$new_color_scheme){
				$('[data-theme-color-scheme]').attr({
			 		'data-theme-color-scheme': $new_color_scheme
			 	});
			 	$('.'+$color_scheme).removeClass($color_scheme).addClass($new_color_scheme);
			}

			$('.theme-switcher-btn').click(function() {
				$selected_theme = $(this).data('selected-theme');
				$color_scheme = $('[data-theme-color-scheme]').data('theme-color-scheme');
				console.log('previous: '+$color_scheme+' new: '+$selected_theme);
				

				switch_theme_color_scheme($selected_theme);
			});*/

    	});