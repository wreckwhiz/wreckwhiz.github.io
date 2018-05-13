// variable to hold current window state - small, medium, or large
var windowState = 'large';

// check intital width of the screen, respond with appropriate menu
$(document).ready(function() {
    var sw = document.body.clientWidth;
    if (sw < 481) {
       smMenu();
    } else if (sw >= 481 && sw <= 768) {
		medMenu();
	} else {
		lgMenu();
	}
})


// take care of resizing the window
$(window).resize(function() {
	var sw = document.body.clientWidth;
    if (sw < 481 && windowState != 'small') {
       smMenu();
    }
	if (sw > 480 && sw < 769 && windowState != 'medium') {
       medMenu();
    }  
    if (sw > 768 && windowState != 'large') {
       lgMenu();
    } 
});

//handle menu for medium screen sizes
function smMenu() {
	$(function(){
		$('#mainNav').slicknav({
			label: '',
			duration: 1000,
			prependTo:'.topMenu'
});
	});
}

//handle menu for medium screen sizes
function medMenu() {
	
}

//handle menu for medium screen sizes
function lgMenu() {
	
}

