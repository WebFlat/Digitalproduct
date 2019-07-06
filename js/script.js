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
    icon: './img/pin.png',
    title: 'Ikan Piranha Atas 220C  Malang - East Java Indonesia'
  });


//Validate form******************************************************
function validate() {
  let label = document.getElementByClassName(".form__star");
  let nameInput = document.getElementById(".name");
  if (nameInput.value.length > 0) {
      label.classList.add("hide");
  }
};



$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        $(".nav").addClass("scrolling");
    } else {
        $(".nav").removeClass("scrolling");
    }
});


}