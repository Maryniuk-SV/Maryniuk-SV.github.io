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
  'facebook-f'  : 'http://facebook.com/profile.php?id=100004690685995',
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
})();