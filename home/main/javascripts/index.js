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

	var slideBg = $(".bg-slide").find(".bg-slide__img");
	var slideImg = $(".slide-img").find(".slide-img__img");
	var slideText = $(".slide-text__sub").find(".slide-text__sub-text");
	var slideNum = $(".slide-num__current");
	var dirBtn = $(".slide-dir__btn");

	slideBg.eq(0).css('display', 'inline-block');
	slideBg.eq(0).addClass('current');
	slideImg.eq(0).css('display', 'inline-block');
	slideImg.eq(0).addClass('current');
	slideText.eq(0).css('display', 'inline-block');
	slideText.eq(0).addClass('current');

	function runSlideBg(nextSlideIndex, currentSlideBg){
		var nextItem = slideBg.eq(nextSlideIndex);
		currentSlideBg.removeClass('current');
		currentSlideBg.css('display', 'none');
		nextItem.css('display', 'inline-block');
		nextItem.addClass('current');
	}
	function runSlideImg(nextSlideIndex, currentSlideImg){
		var nextItem = slideImg.eq(nextSlideIndex);
		currentSlideImg.removeClass('current');
		currentSlideImg.css('display', 'none');
		nextItem.css('display', 'inline-block');
		nextItem.addClass('current');
	}
	function runSlideText(nextSlideIndex, currentSlideText){
		var nextItem = slideText.eq(nextSlideIndex);
		currentSlideText.removeClass('current');
		currentSlideText.css('display', 'none');
		nextItem.css('display', 'inline-block');
		nextItem.addClass('current');
	}

	dirBtn.on('click', function(e){
		e.preventDefault();
		var currentSlideBg = slideBg.filter(".current");
		var currentSlideIndex = currentSlideBg.index();
		var nextSlideIndex;
		var nextNum;
		var currentSlideImg = slideImg.filter(".current");
		var currentSlideText = slideText.filter(".current");
		if($(this).hasClass('left')){
			nextSlideIndex = currentSlideBg.prev().index();
			currentSlideIndex = nextSlideIndex >= 0 ? nextSlideIndex : slideBg.last().index();
			nextNum = currentSlideIndex + 1
			slideNum.text('0' + nextNum);	
		}
		if($(this).hasClass('right')){
			nextSlideIndex = currentSlideBg.next().index();
			currentSlideIndex = nextSlideIndex >= 0 ? nextSlideIndex : slideBg.first().index();
			nextNum = currentSlideIndex + 1
			slideNum.text('0' + nextNum);		
		}
		runSlideBg(currentSlideIndex, currentSlideBg);
		runSlideImg(currentSlideIndex, currentSlideImg);
		runSlideText(currentSlideIndex, currentSlideText);
	})
});