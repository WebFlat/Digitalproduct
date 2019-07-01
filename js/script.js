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
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
});