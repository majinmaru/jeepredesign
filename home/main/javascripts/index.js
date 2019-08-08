$(document).ready(function(){
	$("html").niceScroll({
		zindex: "3"
	});

	$(".first-context__left-tab").eq(0).addClass('current');
	$(".first-context__left-tab").eq(0).find(".left-tab__btn-img").attr('src', './images/vehicles-btn-active.png');

	$(".first-context__left-tab").hover(function(){
		var getIndex = $(this).index();
		if($(this).hasClass('current')){
			return false;
		} else {
			$(".first-context__left-tab").eq(getIndex).addClass('hover');
		}
	}, function(){
		$(".first-context__left-tab.hover").removeClass('hover');
	});

	$(".left-tab__btn").click(function(e){
		e.preventDefault();
		var getIndex = $(this).parent().index();
		if($(".first-context__left-tab").eq(getIndex).hasClass('current')){
			return false;
		} else {
			$(".first-context__left-tab").eq(getIndex).addClass('current');
			$(".first-context__left-tab").eq(getIndex).find(".left-tab__btn-img").attr('src', './images/vehicles-btn-active.png');
			$(".first-context__left-tab").eq(getIndex).siblings().removeClass('current');
			$(".first-context__left-tab").eq(getIndex).siblings().find(".left-tab__btn-img").attr('src', './images/vehicles-btn-hover.png');
		}
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