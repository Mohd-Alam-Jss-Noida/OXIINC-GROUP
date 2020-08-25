$(document).ready(function($){
	
	
//-- Main Wrapper Height	
	var contentheight = $(window).height() - $("header").height() - $("footer").height() + "px";
	$(".main-wrapper").css("min-height", contentheight);
	
	
//-- Sticky Header Script  	
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$("header").addClass("fixed-header");
		} else {
			$("header").removeClass("fixed-header");
		}
	});	
	
	
//-- Toggle the side navigation
	if(window.matchMedia('(max-width: 980px)').matches)
    {
		$('.mb-link-btn').on('click', function(){
			$(this).toggleClass('active-mb-btn');
			$('.head-block-01').toggleClass('show-head-block');
			$('.search-col').removeClass('show-search-col');
			$('.search-btn-click').removeClass('active-mb-search-btn');
			$('#cssmenu .button').removeClass('menu-opened');
			$('.nav-main-ul').removeClass('open');
			$('.nav-main-ul').css("display", "none");
		});
		$('#cssmenu .button').on('click', function(){
			$('.mb-link-btn').removeClass('active-mb-btn');
			$('.head-block-01').removeClass('show-head-block');
			$('.search-col').removeClass('show-search-col');
			$('.search-btn-click').removeClass('active-mb-search-btn');
		});
		$('.search-btn-click').on('click', function(){
			$(this).toggleClass('active-mb-search-btn');
			$('.search-col').toggleClass('show-search-col');
			$('.mb-link-btn').removeClass('active-mb-btn');
			$('.head-block-01').removeClass('show-head-block');
			$('#cssmenu .button').removeClass('menu-opened');
			$('.nav-main-ul').removeClass('open');
			$('.nav-main-ul').css("display", "none");
		});
    }
	
	if(window.matchMedia('(min-width: 981px)').matches) {
		$('.search-btn-click').on('click', function(){
			$(this).toggleClass('active-mb-search-btn');
			$('.search-col').toggleClass('show-search-col');
		});
	}


//-- Go to Top Scroll
	var offset = 500,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $('.cd-top');

	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
			}, scroll_top_duration
		);
	});
	
	
//-- Owlcarousel
	var owl = $('.home-categories-section .owl-carousel');
	  owl.owlCarousel({
		margin: 25,
		nav: true,
		loop: true,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		responsive: {
		  0: {
			margin: 15,
			items: 1
		  },
		  400: {
			margin: 10,
			items: 2
		  },
		  768: {
			margin: 15,
			items: 3
		  },
		  1200: {
			items: 4
		  }
		}
	  })
	

//-- Equal Height Col	
	equalheight = function(container){
		
		var currentTallest = 0,
		currentRowStart = 0,
		rowDivs = new Array(),
		$el,
		topPosition = 0;
		$(container).each(function() {
			
			$el = $(this);
			$($el).height('auto')
			topPostion = $el.position().top;
			
			if (currentRowStart != topPostion) {
				for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
				rowDivs.length = 0; // empty the array
				currentRowStart = topPostion;
				currentTallest = $el.height();
				rowDivs.push($el);
				} else {
				rowDivs.push($el);
				currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
			}
			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
		});
	}
	
	$(window).load(function() {
		equalheight('.equal-height-col');
	});
	
	$(window).resize(function(){
		equalheight('.equal-height-col');
	});		
	
	
});




