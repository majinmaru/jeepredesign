$(document).ready(function(){
	$("html").niceScroll({
		zindex: "3"
	});

	$(".third-right__category-container").mCustomScrollbar({
	    axis:"x", // horizontal scrollbar
	    theme: "minimal",
	    scrollInertia: 500,
	    mouseWheel:{
	    	enable: true,
	    	normalizeDelta: true
	    }
	});
});