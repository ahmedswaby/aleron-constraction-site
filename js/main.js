/*global $*/
$(function () {
	
	'use strict';

	//Start hover on boxs 
	
	$('.quality .cons').on('mouseenter', function () {
		
		
		$('.quality .cons img').attr('src', 'img/building.png');
	
		$(this).addClass('hover');
		
	});
	$('.quality .cons').on('mouseleave', function () {
		
		$(this).removeClass('hover');
		$('.quality .cons img').attr('src', 'img/building-2.png');
	
	});
	
	
	$('.quality .arc').on('mouseenter', function () {

		$('.quality .arc img').attr('src', 'img/drawing.png');

		$(this).addClass('hover');

	});
	$('.quality .arc').on('mouseleave', function () {

		$(this).removeClass('hover');
		$('.quality .arc img').attr('src', 'img/drawing-2.png');

	});
	
	
	
	$('.quality .reno').on('mouseenter', function () {

		$('.quality .reno img').attr('src', 'img/paintbrush-3.png');

		$(this).addClass('hover');

	});
	$('.quality .reno').on('mouseleave', function () {

		$(this).removeClass('hover');
		$('.quality .reno img').attr('src', 'img/paintbrush-2.png');

	});
	
	
	
	$('.quality .saf').on('mouseenter', function () {

		$('.quality .saf img').attr('src', 'img/safety-2.png');

		$(this).addClass('hover');

	});
	$('.quality .saf').on('mouseleave', function () {

		$(this).removeClass('hover');
		$('.quality .saf img').attr('src', 'img/safety-3.png');

	});
	
	// End hover on Quality
	
	
	$('.features-service .service-one').on('mouseenter', function () {
		
		$('.features-service .service-one img').attr('src', 'img/building.png');
		
		$('.features-service .service-one .img').addClass('service-hover');
	
	});
	$('.features-service .service-one').on('mouseleave', function () {
		
		$('.features-service .service-one img').attr('src', 'img/building-2.png');
		
		$('.features-service .service-one .img').removeClass('service-hover');
	
	});
	
	
	
	$('.features-service .service-two').on('mouseenter', function () {
		
		$('.features-service .service-two img').attr('src', 'img/paintbrush-3.png');
		
		$('.features-service .service-two .img').addClass('service-hover');
	});
	$('.features-service .service-two').on('mouseleave', function () {
		
		$('.features-service .service-two img').attr('src', 'img/paintbrush-2.png');
		
		$('.features-service .service-two .img').removeClass('service-hover');
	
	});
	
	
	
	$('.features-service .service-three').on('mouseenter', function () {
		
		$('.features-service .service-three img').attr('src', 'img/safety-2.png');
		
		$('.features-service .service-three .img').addClass('service-hover');
	});
	$('.features-service .service-three').on('mouseleave', function () {
		
		$('.features-service .service-three img').attr('src', 'img/safety-3.png');
		
		$('.features-service .service-three .img').removeClass('service-hover');
	
	});
	
	
	
	$('.features-service .service-four').on('mouseenter', function () {
		
		$('.features-service .service-four img').attr('src', 'img/leaf.png');
		
		$('.features-service .service-four .img').addClass('service-hover');
	});
	$('.features-service .service-four').on('mouseleave', function () {
		
		$('.features-service .service-four img').attr('src', 'img/leaf-2.png');
		
		$('.features-service .service-four .img').removeClass('service-hover');
	});
	
	
	
	$('.features-service .service-five').on('mouseenter', function () {
		
		$('.features-service .service-five img').attr('src', 'img/crane.png');
		
		$('.features-service .service-five .img').addClass('service-hover');
	});
	$('.features-service .service-five').on('mouseleave', function () {
		
		$('.features-service .service-five img').attr('src', 'img/crane-2.png');
		
		$('.features-service .service-five .img').removeClass('service-hover');
	
	});
	
	
	
	$('.features-service .service-six').on('mouseenter', function () {
		
		$('.features-service .service-six img').attr('src', 'img/hammer.png');
		
		$('.features-service .service-six .img').addClass('service-hover');
	});
	$('.features-service .service-six').on('mouseleave', function () {
		
		$('.features-service .service-six img').attr('src', 'img/hammer-2.png');
		
		$('.features-service .service-six .img').removeClass('service-hover');
	
	});
	

// Enter num from and to
	
	$({countNum: $('.projects .counter').text()}).animate({countNum: 564}, {

	  duration: 4000,

	  easing:'linear',

	  step: function() {

		// What todo on every count
		$('.projects .counter').text(Math.floor(this.countNum));
	  },

	  complete: function() {
		$('.projects .counter').text(this.countNum)
	  }

	});
	
	
	$({countNum: $('.goals .counter').text()}).animate({countNum: 8546}, {

	  duration: 4000,

	  easing:'linear',

	  step: function() {

		// What todo on every count
		$('.goals .counter').text(Math.floor(this.countNum));
	  },

	  complete: function() {
		$('.goals .counter').text(this.countNum)
	  }

	});
	
	
	$({countNum: $('.awards .counter').text()}).animate({countNum: 77}, {

	  duration: 4000,

	  easing:'linear',

	  step: function() {

		// What todo on every count
		$('.awards .counter').text(Math.floor(this.countNum));
	  },

	  complete: function() {
		$('.awards .counter').text(this.countNum)
	  }

	});
	
	
	$({countNum: $('.customers-numbers .counter').text()}).animate({countNum: 10000}, {

	  duration: 4000,

	  easing:'linear',

	  step: function() {

		// What todo on every count
		$('.customers-numbers .counter').text(Math.floor(this.countNum));
	  },

	  complete: function() {
		$('.customers-numbers .counter').text(this.countNum)
	  }

	});
	
	
	// Scroll to top 
	var scrollDiv = $('.scroll-top');
	
	$(window).scroll(function () {
		
		if ($(window).scrollTop() >= 500) {
			
			scrollDiv.fadeIn(1000);
		} else {
			scrollDiv.fadeOut(1000);
		}
		if ($(window).scrollTop() >= 1000) {
			
			scrollDiv.css('opacity', 1)
		} else {
			scrollDiv.css('opacity', 0.6)
		}
		
	});
	
	scrollDiv.click(function () {
		
		
		$(window).scrollTop(0);
	});
	

});












