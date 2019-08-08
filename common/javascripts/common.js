$(document).ready(function(){
	var windowWidth = $(window).width();

	$(".menu-link, .hamburger-icon").mouseover(function(){
		$("body").on('scroll touchmove mousewheel', function(event) {
		  	event.preventDefault();
		  	event.stopPropagation();
		 	return false;
		});

		$(".megamenu").addClass("open");
		var megamenuBg = $(".megamenu").find(".megamenu-bg__block");
		var megamenuLogo = $(".megamenu-header__logo").find(".megamenu-header__logo-tab");
		var megamenuCategory = $(".megamenu").find(".megamenu-category");
		var megamenuSearch = $(".megamenu").find(".megamenu-search");
		var megamenuCloseLine = $(".megamenu").find(".close-line");
		var megamenuSns = $(".megamenu").find(".megamenu-sns");
		megamenuBg.eq(0).animate({
			height: "100%"
		}, 300)
		setTimeout(function(){
			megamenuBg.eq(1).animate({
				height: "100%"
			}, 300)
		}, 100);
		setTimeout(function(){
			megamenuBg.eq(2).animate({
				height: "100%"
			}, 300)
		}, 200);
		setTimeout(function(){
			megamenuBg.eq(3).animate({
				height: "100%"
			}, 300)
		}, 300);

		setTimeout(function(){
			megamenuLogo.addClass("logo-open");
		}, 900);

		setTimeout(function(){
			megamenuCategory.eq(0).addClass("cate-open");
		}, 300);
		setTimeout(function(){
			megamenuCategory.eq(1).addClass("cate-open");
		}, 400);
		setTimeout(function(){
			megamenuCategory.eq(2).addClass("cate-open");
		}, 500);
		setTimeout(function(){
			megamenuCategory.eq(3).addClass("cate-open");
		}, 600);

		setTimeout(function(){
			megamenuSearch.addClass("search-open");
		}, 600);

		setTimeout(function(){
			megamenuCloseLine.addClass("close-open");
		}, 900);

		setTimeout(function(){
			megamenuSns.addClass("sns-open");
		}, 700);
	});

	$(".megamenu-header__close-icon").click(function(e){
		e.preventDefault();

		$("body").off('scroll touchmove mousewheel');

		setTimeout(function(){
			$(".megamenu.open").removeClass("open");
		}, 310);
		var megamenuBg = $(".megamenu").find(".megamenu-bg__block");
		var megamenuLogo = $(".megamenu-header__logo").find(".megamenu-header__logo-tab.logo-open");
		var megamenuCategory = $(".megamenu").find(".megamenu-category.cate-open");
		var megamenuSearch = $(".megamenu").find(".megamenu-search.search-open");
		var megamenuCloseLine = $(".megamenu").find(".close-line.close-open");
		var megamenuSns = $(".megamenu").find(".megamenu-sns.sns-open");
/*
		setTimeout(function(){
			megamenuBg.eq(3).animate({
				height: "0"
			}, 300)
		}, 400);
		setTimeout(function(){
			megamenuBg.eq(2).animate({
				height: "0"
			}, 300)
		}, 500);
		setTimeout(function(){
			megamenuBg.eq(1).animate({
				height: "0"
			}, 300)
		}, 600);
		setTimeout(function(){
			megamenuBg.eq(0).animate({
				height: "0"
			}, 300)
		}, 700);
*/

		megamenuBg.css('height', '0');

		megamenuLogo.removeClass("logo-open");

		megamenuCategory.removeClass("cate-open");

		megamenuSearch.removeClass("search-open");

		megamenuCloseLine.removeClass("close-open");

		megamenuSns.removeClass("sns-open");
/*
		setTimeout(function(){
			megamenuCategory.eq(3).removeClass("cate-open");
		}, 100);
		setTimeout(function(){
			megamenuCategory.eq(2).removeClass("cate-open");
		}, 200);
		setTimeout(function(){
			megamenuCategory.eq(1).removeClass("cate-open");
		}, 300);
		setTimeout(function(){
			megamenuCategory.eq(0).removeClass("cate-open");
		}, 400);
*/
	});


	var stickyHeader = function() {
		//var stickyHeaderTop = $(".container").offset().top;
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 0){
			$("#header").addClass("sticky");
			$(".container").css('margin-top', '-4.25rem');
		} else {
			$("#header").removeClass("sticky");
			$(".container").css('margin-top', '-8.25rem');
		}
	}

	$(window).scroll(function() {
		stickyHeader();
	});
});