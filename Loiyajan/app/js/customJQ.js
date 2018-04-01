$(document).ready(function() {

  // Happy clients carousel//////////////
	$('.clients').owlCarousel({
		loop:true,
		dots:false,
		autoWidth:true,
		margin:50,
		responsiveClass: true,
		nav:true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})

  /////// Animation up when clicks/////////////
  // btn toTOP
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.up__btn').addClass('up__btn--active');
		}else {
			$('.up__btn').removeClass('up__btn--active');
		}
	});
	$('.up__btn').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

  //////////////////////
	$('.foto__wrap').mouseover(
		function(){ $(this).addClass('team__hover') }
		);
	$('.foto__wrap').mouseout(
		function(){ $(this).removeClass('team__hover') }
		);
	$('.social').mouseover(
		function(){ $(this).prev().addClass('team__hover') }
		);
	$('.social').mouseout(
		function(){ $(this).prev().removeClass('team__hover') }
		);

    // Mobile menu///////////////

  $('.show_right_menu').click(function(){
    if($(window).scrollTop() >= 50) {
      $('.menu_right').css({"top": 36});
    }
  	$('.menu_right').toggleClass('drop-down show');

    $(window).scroll(function(){
      if($(this).scrollTop() >= 50) {
        $('.menu_right').css({"top": 36});
      } else if($(this).scrollTop() <= 50) {
        $('.menu_right').css({"top": 88});
      }
    });
  });
  $('.show_menu').click(function(){
    if($(window).scrollTop() >= 50) {
      $('.menu_right').css({"top": 169});
      $('.menu_left').css({"top": 17});
    }

  	$('.menu').toggleClass('drop-down show');

    $(window).scroll(function(){
      if($(this).scrollTop() >= 50) {
        $('.menu_left').css({"top": 17});
        $('.menu_right').css({"top": 169});
      } else if($(this).scrollTop() <= 50) {
        $('.menu_left').css({"top": 50});
        $('.menu_right').css({"top": 202});
      }
    });
  });
  // Hide drop-down menu when clicked on item
  $('.menu__item').click(function(){
    $('.menu').removeClass('drop-down show');
  });
  /////////////////////////////////////////
  if(matchMedia) {
  	var screenTwo = window.matchMedia("(max-width:576px)");
  	screenTwo.addListener(changeTwo);
  	changeTwo(screenTwo);
  }
  function changeTwo (screen){
  	if (!screen.matches) {
  		$('.menu').removeClass('drop-down show')
  	}
  }
  if(matchMedia) {
  	var screenOne = window.matchMedia("(max-width:992px)");
  	screenOne.addListener(changeOne);
  	changeOne(screenOne);
  }
  function changeOne (screen){
  	if (!screen.matches) {
  		$('.menu_right').removeClass('drop-down show')
  	}
  }

  // Anchor links/////////////////
  
  $("#top_menu").on("click","a", function (event) {
    event.preventDefault();
    if($(this).hasClass('show_menu'))return;
    if($(this).parent().hasClass('show_right_menu'))return;
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').stop().animate({scrollTop: top}, 1500);    
  });

  // Menu Fixed////////////////////////

  $(window).scroll(function(){
    if($(this).scrollTop() > 50) {
      $('.top--nav').addClass('nav-fixed');
    } else {
      $('.top--nav').removeClass('nav-fixed');
    }
  });

  //////// Modal

  // Open by click
  $('.js-button').click(function(e) {
  	e.preventDefault();
  	$('.content-box').css('filter', 'blur(5px)');
  	$('.js-overlay').fadeIn();
  });

  // Close
  $('.js-close').click(function() {
  	$('.js-overlay').fadeOut();
  	$('.content-box').css('filter', 'none');
  });

  $(document).mouseup(function(e) {
  	var popup = $('.js-popup');
  	if (e.target != popup[0] && popup.has(e.target).length === 0) {
  		$('.js-overlay').fadeOut();
  		$('.content-box').css('filter', 'none');
  	}
  });

  // Footer

  $('.map-container').mouseover(function() {
  	setTimeout(function() {
  		$('.eclipse').stop().fadeOut().css('display', 'none');
  	}, 400)
  });
  $('.map-container').mouseout(function() {
  	setTimeout(function() {
  		$('.eclipse').stop().fadeIn().css('display', 'block');
  	}, 400)
  });

  // Form validate///////////////////////////

  jQuery.browser = {};
  jQuery.browser.mozilla=/mozilla/.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase());
  jQuery.browser.webkit=/webkit/.test(navigator.userAgent.toLowerCase());
  jQuery.browser.opera=/opera/.test(navigator.userAgent.toLowerCase());
  jQuery.browser.msie=/msie/.test(navigator.userAgent.toLowerCase());


  var jVal = {
  	'fullName' : function() {

  		var nameInfo = $('#name-ms');
  		var ele = $('#fullname');

  		if(ele.val().length < 3) {
  			jVal.errors = true;
  			nameInfo.addClass('show-ms').html('Мінімальна допустима кількість символів 3');
  		} else {
  			nameInfo.removeClass('show-ms');
  		}
  	},
  	'email' : function() {

  		var emailInfo = $('#email-ms');
  		var ele = $('#email');
  		var patt = /^.+@.+[.].{2,}$/i;

  		if(!patt.test(ele.val())) {
  			jVal.errors = true;
  			emailInfo.addClass('show-ms').html('Введіть, будь-ласка, коректну адресу поштової скриньки');
  		} else {
  			emailInfo.removeClass('show-ms');
  		}
  	},
  	'phone' : function() {

  		var phoneInfo = $('#phone-ms');
  		var ele = $('#phone');
  		var patt = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

  		if(!patt.test(ele.val())) {
  			jVal.errors = true;
  			phoneInfo.addClass('show-ms').html('Введіть, будь-ласка, номер телефону у форматі +380981234567');
  		} else {
  			phoneInfo.removeClass('show-ms');
  		}
  	},
  	'about' : function() {

  		var aboutInfo = $('#about-ms');
  		var ele = $('#about');

  		if(ele.val().length < 20) {
  			jVal.errors = true;
  			aboutInfo.addClass('show-ms').html('Повідомнення повинно містити більше 20 символів');
  		} else {
  			aboutInfo.removeClass('show-ms');
  		}
  	},
  	'sendIt' : function (){
  		if(!jVal.errors) {
  			$('#jform').submit();
  		}
  	}
  };
  // ====================================================== //
  $('#send').click(function (e){
  	e.preventDefault();
  	var obj = $.browser.webkit ? $('body') : $('html');
  	obj.animate({ scrollTop: $('#jform').offset().top }, 750, function (){
  		jVal.errors = false;
  		jVal.fullName();
  		jVal.email();
  		jVal.phone();
  		jVal.about();
  		jVal.sendIt();
  	});
  	return false;
  });
  $('#fullname').change(jVal.fullName);
  $('#email').change(jVal.email);
  $('#phone').change(jVal.phone);
  $('#about').change(jVal.about);

  // portfolio MagnificPopup
  $('.view').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
});