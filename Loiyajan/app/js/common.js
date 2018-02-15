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

    $('.show_right_menu').click(function(){
        $('.menu_right').toggleClass('drop-down show')
    });
    $('.show_menu').click(function(){
        $('.menu').toggleClass('drop-down show')
    });

    // Modal


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

    // Comments slider

    var prev  = document.getElementsByClassName('comment__prev')[0],
        next  = document.getElementsByClassName('comment__next')[0],
        items = document.getElementsByClassName('client__comment'),
        count = 0;

    prev.addEventListener('click', moveRight);
    next.addEventListener('click', moveLeft);

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

});