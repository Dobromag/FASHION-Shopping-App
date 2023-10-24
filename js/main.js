// SLIDER
$(document).ready(function () {
	$('.slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 200,
		speed: 2000,
		arrows: false,
		easing: 'ease',
		draggable: false,
		swipe: true,
		touchThreshold: 10,
		touchMove: true
	});
});
// SLIDER