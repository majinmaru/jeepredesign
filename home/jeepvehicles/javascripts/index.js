$(document).ready(function(){
	$("html").niceScroll({
		zindex: "3"
	});
	$(".more-btn").hover(function(){
		if($(".more-title").hasClass('visible')){
			return false;
		} else {
			$(".more-title").css({
				'left' : '0',
				'opacity' : '1'
			});
		}
	}, function(){
		if($(".more-title").hasClass('visible')){
			return false;
		} else {
			$(".more-title").css({
				'left' : '-16.5rem',
				'opacity' : '0'
			});
		}
	})
	$(".more-btn").click(function(e){
		e.preventDefault();
		if($(".more-title").hasClass('visible')){
			$(".more-title").css({
				'left' : '-16.5rem',
				'opacity' : '0'
			});
			$(".more-title").removeClass('visible');
			$(".more-btn").find("img").removeClass('rotate');
		} else {
			$(".more-title").css({
				'left' : '0',
				'opacity' : '1'
			});
			$(".more-title").addClass('visible');
			$(".more-btn").find("img").addClass('rotate');
		}
	});
	$(".more-title__text").click(function(e){
		e.preventDefault();
		$(".exterior-popup").css('display', 'block');
		$(".exterior-popup").addClass('on');
		/*
		$(this).on('scroll touchmove mousewheel', function(event) {
		  event.preventDefault();
		  event.stopPropagation();
		  return false;
		});
		*/
	})
	$(".popup-content__close").click(function(e){
		e.preventDefault();
		$(".exterior-popup").css('display', 'none');
		$(".exterior-popup").removeClass('on');
	});
	/*
	$('html').click(function(e) { 
		if(!$(e.target).hasClass('visible')) { 
			$(".more-title").css({
				'left' : '-16.5rem',
				'opacity' : '0'
			});
			$(".more-title").removeClass('visible');
		}
	});
	*/
});