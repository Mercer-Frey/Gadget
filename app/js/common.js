$(function() {
	$(".owl-carousel").owlCarousel({
		loop: true,
	    smartSpeed: 700,
	    navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
	    margin: 10,
	    freeDrag: true,
	    dotsEach: true,
	    responsiveClass: !0,
	    responsive: {
	        0: {
	            items: 2
	        },
	        768: {
	            items: 3
	        },
	        992: {
	            items: 4 
	        },
	        1200: {
	            items: 5
	        }
	    } 	 	
 	});
	$('.thumb a').mouseover(function(e){
		e.preventDefault();
		$('.select-foto img').attr("src", $(this).attr("href"));
	});
});
