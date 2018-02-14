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

});