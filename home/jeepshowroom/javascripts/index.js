$(document).ready(function(){
	$("html").niceScroll({
		zindex: "3"
	});
	
	$(".title-right__popup").hover(function(){
		$(".title-right__plus").addClass('hover');
	}, function(){
		$(".title-right__plus").removeClass('hover');
	})
	
});