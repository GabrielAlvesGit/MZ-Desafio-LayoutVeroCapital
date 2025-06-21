$(document).ready(function(){

  /* ==== News Home ==== */

  $('.js-slicks-news').slick({
    slidesToScroll: 1,
    speed: 300,
    infinite: false,
    initialSlide: 0,
    variableWidth: true,
  });

  $('.js-slicks-news').on('afterChange', function(event, slick, currentSlide) {
    $('.js-slicks-news .slick-slide').removeClass('.slick-slide');
    const firstVisible = slick.$slides.get(currentSlide);
    $(firstVisible).addClass('.slick-slide');
  });
});



		