$(document).ready(function() {

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

    // $('.up__btn').click(function() {
    //     $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    // });
    $('#home').click(function() {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });

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

    // Mobile menu

    $('.show_right_menu').click(function(){
        $('.menu_right').toggleClass('drop-down show')
    });
    $('.show_menu').click(function(){
        $('.menu').toggleClass('drop-down show')
    });

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

    var $nav = $('.top--nav');

    $(window).scroll(function(){
        if($(this).scrollTop() > 50) {
            $nav.addClass('nav-fixed');
        } else {
            $nav.removeClass('nav-fixed');
        }
    });


    //////// Modal

    // Open by click
    $('.js-button').click(function(e) {
        e.preventDefault();
        $('.content-box').css('filter', 'blur(5px)');
        $('.js-overlay').fadeIn();
        // $('.js-overlay').addClass('disabled');
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


    // Anchor links
    
    $("#top_menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });



    // Form validate

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

});


(function() {
        // Header Slider

    var box         = document.getElementsByClassName('slider')[0],
        dots        = document.getElementsByClassName('dot'),
        dotIndex    = 0,
        sliderItems = [
                    "background-image: url(app/img/slider/slider_bg.png);",
                    "background-image: url(app/img/slider/slider_1.jpg);",
                    "background-image: url(app/img/slider/slider_2.jpg);",
                    "background-image: url(app/img/slider/slider_3.jpg);",
                    "background-image: url(app/img/slider/slider_4.jpg);"
        ];

    var int = setInterval(moveSlider, 7000);

    function moveSlider() {
        dotIndex++;
        if(dotIndex === sliderItems.length) {
            dotIndex = 0;
        };
        box.setAttribute('style', sliderItems[dotIndex]);

        for(var i = 0; i < sliderItems.length; i++) {
            if(box.getAttribute('style') === sliderItems[i]) {
                for(var j = 0; j < dots.length; j++) {
                    dots[j].classList.remove('active');
                };
                dots[i].classList.add('active');
            };
        };
    };

    for(var i = dots.length - 1; i >= 0; i--) {
        dots[i].addEventListener('click', addClassActive, false);
    }  

    function addClassActive(e) {
        var target = e.target;
        removeClassActive();
        target.classList.add('active');
        findTarget(target);
    }

    function removeClassActive() {
        for(var i = dots.length - 1; i >= 0; i--) {
            dots[i].classList.remove('active');
        } 
    }
    function findTarget(target) {
        for(var i = dots.length - 1; i >= 0; i--) {
            if(target === dots[i]) {
                box.setAttribute('style', sliderItems[i]);
                dotIndex = i;
            }
        } 
    }


    // Comments slider

    var prevComment  = document.getElementsByClassName('comment__prev')[0],
        nextComment  = document.getElementsByClassName('comment__next')[0],
        items        = document.getElementsByClassName('client__comment'),
        count        = 0;

    prevComment.addEventListener('click', moveRight);
    nextComment.addEventListener('click', moveLeft);

    function moveLeft(e){
        e.preventDefault();
        hide();
        count++;
        if(count === 3){
            count = 0;
            items[count].style.opacity = '1';
        }
        items[count].style.opacity = '1';
    }

    function moveRight(e){
        e.preventDefault();
        hide();
        count--;
        if(count === -1){
            count = 2;
            items[count].style.opacity = '1';
        }
        items[count].style.opacity = '1';
    }

    function hide(){
        for (var i = 0; i < items.length; i++) {
            items[i].style.opacity = '0';
        }
    };


    // About Us slider

    var prevImg  = document.getElementsByClassName('prev')[0],
        nextImg  = document.getElementsByClassName('next')[0],
        images   = document.getElementsByClassName('slider__item'),
        index    = 0;

    prevImg.addEventListener('click', prevImage);
    nextImg.addEventListener('click', nextImage);

    function prevImage() {
        hideImage();
        index--;
        if(index === -1){
            index = images.length - 1;
            images[index].style.opacity = '1';
        }
        images[index].style.opacity = '1';
    };

    function nextImage() {
        hideImage();
        index++;
        if(index === images.length) {
            index = 0;
            images[index].style.opacity = '1';
        };
        images[index].style.opacity = '1';
    };

    function hideImage(){
        for (var i = 0; i < images.length; i++) {
            images[i].style.opacity = '0';
        }
    };


// Dinamic block of social networks

var socialMedia = {
  'facebook-f'  : 'http://facebook.com/',
  'pinterest-p' : 'https://www.pinterest.com/',
  'google-plus' : 'https://plus.google.com/',
  'twitter'     : 'https://twitter.com/',
  'linkedin'    : 'https://www.linkedin.com/',
  'dribbble'    : 'https://dribbble.com/',
  'instagram'   : 'https://www.instagram.com/'
};

var socialList = function() {
  var output = '<ul>',
  myList = document.querySelectorAll('.footer__social');

  for (var key in arguments[0]) {
    output += '<li><a href="' + socialMedia[key] + '" target="_blank">' +
      '<i class="fa fa-' + key + '"></i>' +
      '</a></li>';
  }
  output += '</ul>';
  
  for (var i = myList.length - 1; i >= 0; i--) {
    myList[i].innerHTML = output;
  };
}(socialMedia);


// Second Modal Window

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span     = document.getElementsByClassName("close")[0],
    btnClose = document.getElementById('closeModal');


// When the user clicks on the button, open the modal 
btn.onclick = function(e) {
    e.preventDefault();
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = clModal;
btnClose.onclick = clModal;

function clModal(e) {
    e.preventDefault();
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Portfolio filter

var btnCategories  = document.querySelectorAll('.categories > ul > li > a'),
    portfolioItems = document.getElementsByClassName('portfolio__item');

for (var i = btnCategories.length - 1; i >= 0; i--) {
        btnCategories[i].addEventListener('click', addClassBtn, false); 
        btnCategories[i].addEventListener('click', filter, false); 
    }

function addClassBtn(e) {
    var target = e.target;
    e.preventDefault();
    removeClassBtn();
    target.classList.add('active__categories');
};

function removeClassBtn() {
    for (var i = btnCategories.length - 1; i >= 0; i--) {
        btnCategories[i].classList.remove('active__categories');
    }
};

function filter(e) {
    e.preventDefault();
    
    var target    = e.target;
    var className = target.textContent;

    for (var j = portfolioItems.length - 1; j >= 0; j--) {
        if(portfolioItems[j].classList.contains(className)){
            portfolioItems[j].style.display = 'block';
        } else if(className === 'all'){
            for (var i = portfolioItems.length - 1; i >= 0; i--) {
                portfolioItems[i].style.display = 'block';
            }
        } else{
            portfolioItems[j].style.display = 'none';
        }
    }
}

    // geolocation
        
    // var elMap = document.getElementById('loc');
    // var msg = 'Sorry, we were unable to get your location.';

    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(success, fail);
    //     elMap.textContent = 'Визначення місцезнаходження...';
    // } else {
    //     elMap.textContent = msg;
    // }

    // function success(position) {
    //     msg = '<h3>Долгота:<br>';
    //     msg += position.coords.latitude + '</h3>';
    //     msg += '<h3>Широта:<br>';
    //     msg += position.coords.longitude + '</h3>';
    //     elMap.innerHTML = msg;
    // }

    // function fail(msg) {
    //     elMap.textContent = msg;
    //     console.log(msg.code);
    // }





 
    // var nav = document.getElementsByClassName('header__navigation');
 
    // (window).scroll(function () {
    //     if ((document).scrollTop() > 0) {
    //         nav.classList.add("fixed-menu");
    //     } else {
    //         nav.classList.remove("fixed-menu");
    //     }
    // });
 



})();