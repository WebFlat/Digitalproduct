$(document).ready(function() {
  $('.slider-one').slick({
      dots: true,
      arrows: true,
      slidesToShow: 1,
      autoplay: true,
      swipeToSlide: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 6000,
  });
   $('.slider-two').slick({
      arrows: true,
      nextArrow: '<a href="#" class="arrow arrow--right"></a>',
      prevArrow: '<a href="#" class="arrow arrow--left"></a>', 
      slidesToShow: 3,
      adaptiveHeight: true,
      autoplay: true,
      swipeToSlide: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 6000,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

//Flip******************************************************
function flip1() {
    $('.service__card--graf').toggleClass('flipped');
}; 
function flip2() {
    $('.service__card--web').toggleClass('flipped');
};
function flip3() {
    $('.service__card--seo').toggleClass('flipped');
};
function flip4() {
    $('.service__card--mobile').toggleClass('flipped');
};

//MAp**********************************************************

function initMap() {
  let geo = {
    lat: -7.963919,
    lng: 112.589311
  }
  let markerPosition = {
    lat: -7.9407512,
    lng: 112.6055576
  }

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: geo,
  });

  let marker = new google.maps.Marker({
    position: markerPosition,
    map: map,
    icon: './img/map-marker.png',
    title: 'Ikan Piranha Atas 220C  Malang - East Java Indonesia'
  });


//Validate form******************************************************
$(".form__input--name").unbind().blur(function() {
        if ($(".form__input--name").val().length !== 0) {
          $(".form__star--name").addClass("hide");
        } else {
          $(".form__star--name").removeClass("hide");
        }
});
$(".form__input--email").unbind().blur(function() {
  if ($(".form__input--email").val().length !== 0) {
            $(".form__star--email").addClass("hide");
          } else {
            $(".form__star--email").removeClass("hide");
        }
});
$(".form__text").unbind().blur(function() {
      if ($(".form__text").val().length !== 0) {
            $(".form__star--text").addClass("hide");
          } else {
            $(".form__star--text").removeClass("hide");
          }
});          



//Scroll Nav
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
        $(".nav").addClass("scrolling");
    } else {
        $(".nav").removeClass("scrolling");
    }
});
}