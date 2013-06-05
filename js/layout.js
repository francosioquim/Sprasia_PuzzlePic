
/*
 *	Available background image sizes.
 *
 *  small: 480
 *  medium: 800
 *  large: 1280  
 *
 */

// adjust background image
function initializeLayout(bgheight){	
	$('body').css('background-size','auto '+bgheight+'px');
	$('body').css('height',bgheight+'px');
}

$(document).ready(function() {
	
	initializeLayout(window.screen.availHeight);
	$(window).resize(function () 
    {
		initializeLayout(window.screen.availHeight);
    });

});

