$(function(){
    $('.clients').owlCarousel({
        loop:true,
        dots:false,
        autoWidth:true,
    // items:5,
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




    
})