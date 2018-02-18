$(function(){
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

    //////// Modal

    // Open by click
    $('.js-button').click(function() {
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

    dots[dotIndex].addEventListener('click', showSlide);

    function showSlide() {
        hideClassActive();
        
    };
    
    function hideClassActive() {
        for (var i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }
    };
    // box.setAttribute('style', x);

    // Comments slider

    var prevComment  = document.getElementsByClassName('comment__prev')[0],
        nextComment  = document.getElementsByClassName('comment__next')[0],
        items = document.getElementsByClassName('client__comment'),
        count = 0;

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
        images = document.getElementsByClassName('slider__item'),
        index = 0;

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

});