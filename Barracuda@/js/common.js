$(document).ready(function(){
	$(function() {
		$('input, select').styler({
			selectPlaceholder: "Вид діяльності",
		});
		$( "#ui-datepicker-div" ).cssClip({"z-index": 10});
		$( "#datepicker" ).datepicker();
		$( "#anim" ).on( "change", function() {
			$( "#datepicker" ).datepicker( "option", "showAnim", $( this ).val() );
			$( "#datepicker" ).datepicker( "option", "dateFormat", $( this ).val() );
		});
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.to__top').addClass('to__top--active');
		}else {
			$('.to__top').removeClass('to__top--active');
		}
	});
	$('.to__top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	$('.owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		dots: false,
		margin: 50,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:1
			},
			768:{
				items:2,
				margin: 20
			},
			992:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});
});




(function(){
// Header Slider///////////////////////////////

var images 	   = document.getElementsByClassName('slider__image'),
		headers    = document.getElementsByClassName('slider__header'),
		controls   = document.getElementsByClassName('control'),
		count      = 0;

var int 		 = setInterval(moveSlider, 5000);

function moveSlider() {
	count++;
	if(count === images.length) {
		count = 0;
	};
	removeClassShowing();
	removeClassActive();
	images[count].classList.add('showing');
	controls[count].classList.add('control--active');
};

for(var i = controls.length - 1; i >= 0; i--) {
	controls[i].addEventListener('click', addClassActive);
} 

function removeClassShowing(){
	for (var i = 0; i < images.length; i++) {
		images[i].classList.remove('showing');
	}
} 

function addClassActive(e) {
	var target = e.target;
	removeClassActive();
	if(target.tagName === 'SPAN') {
		findTarget(target);
		target.parentElement.classList.add('control--active');
	}
	target.classList.add('control--active');
	findTarget(target);

}

function removeClassActive() {
	for(var i = controls.length - 1; i >= 0; i--) {
		controls[i].classList.remove('control--active');
	} 
}

function findTarget(target) {
	for(var i = controls.length - 1; i >= 0; i--) {
		if(target === controls[i]) {
			removeClassShowing();
			images[i].classList.add('showing');
			count = i;
		}
	} 
}

})();