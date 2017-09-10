function getIdHeight (id1,id2) {
	var height = ($( id2 ).offset().top - $( id1 ).offset().top) /($(window).height() /370);
	var viewport = $( id1 ).offset().top + height;
	return viewport;
}


$(document).ready(function() {
	$(this).scrollTop(0);
	$('.status').addClass('status1');

});

$(window).scroll(function() {
	if ($(window).scrollTop() < getIdHeight('#home','#our_vision')) {
		$('.status').addClass('status1');
		$('#logo').attr('src', 'assets/logo1.png');
		
	}
	if ($(window).scrollTop() > getIdHeight('#home','#our_vision') && $(window).scrollTop() < getIdHeight('#our_vision','#startup_studio')) {
		$('.slide1').addClass('showNone');
		$('.slide2').addClass('showIt animated fadeIn');
		$('.body').addClass('background1 ');
		$('#vision').addClass('vision showIt fadeInRight');
		$('.status').removeClass('status1');
		$('.status').addClass('status2');
		$('#logo').attr('src', 'assets/logo2.png');

	} else {
		$('.slide1').removeClass('showNone');
		$('.body').removeClass('background1');
		$('#vision').removeClass('vision showIt fadeInRight');
		$('.slide2').removeClass('showIt animated fadeIn');
		$('.status').removeClass('status2');


	}

	if ($(window).scrollTop() > getIdHeight('#our_vision','#startup_studio') && $(window).scrollTop() < getIdHeight('#startup_studio','#startup_capital')) {
		$('.slide2').addClass('showNone');
		$('.body').addClass('background2');
		$('#startup_studio').addClass('showIt animated fadeIn');
		$('#studio').addClass('studio showIt fadeInRight');
		$('.status').addClass('status3');
		$('#logo').attr('src', 'assets/logo4.png');


	} else {
		$('.slide2').removeClass('showNone');
		$('.body').removeClass('background2');
		$('#startup_studio').removeClass('showIt animated fadeIn');
		$('#studio').removeClass('studio showIt fadeInRight');
		$('.status').removeClass('status3');


	}


	if ($(window).scrollTop() > getIdHeight('#startup_studio','#startup_capital') && $(window).scrollTop() < getIdHeight('#startup_capital','#our_portfolio') ) {
		$('#startup_studio1').addClass('showNone');
		$('.body').addClass('background3');
		$('.slide4').addClass('showIt animated fadeIn');
		$('#capital').addClass('capital showIt fadeInRight');
		$('.status').addClass('status4');
		$('#logo').attr('src', 'assets/logo5.png');


	} else {
		$('#startup_studio1').removeClass('showNone');
		$('.body').removeClass('background3');
		$('.slide4').removeClass('showIt animated fadeIn');
		$('#capital').removeClass('capital showIt fadeInRight');
		$('.status').removeClass('status4');


	}
	if ($(window).scrollTop() > getIdHeight('#startup_capital','#our_portfolio')) {
		$('.slide4').addClass('showNone');
		$('.body').addClass('background4');
		$('.slide5').addClass('showIt animated fadeIn');
		$('#portfolio').addClass('portfolio showIt fadeInRight');
		$('.status').addClass('status5');
		$('#logo').attr('src', 'assets/logo4.png');


	} else {
		$('.slide4').removeClass('showNone');
		$('.body').removeClass('background4');
		$('.slide5').removeClass('showIt animated fadeIn');
		$('#portfolio').removeClass('portfolio showIt fadeInRight');
		$('.status').removeClass('status5');


	}
});
// $(window).scroll(function() {

// });

// $(window).scroll(function() {

// });
// $(window).scroll(function() {
// 	if ($(window).scrollTop() > (($(window).height() * 4) - ($(window).height() / 2))) {
// 		$('.slide4').addClass('showNone');
// 		$('.body').addClass('background4');
// 		$('.slide5').addClass('showIt animated fadeIn');
// 		$('#portfolio').addClass('portfolio showIt fadeInRight');
// 		$('.status').addClass('status5');


// 	} else {
// 		$('.slide4').removeClass('showNone');
// 		$('.body').removeClass('background4');
// 		$('.slide5').removeClass('showIt animated fadeIn');
// 		$('#portfolio').removeClass('portfolio showIt fadeInRight');
// 		$('.status').removeClass('status5');


// 	}
// });