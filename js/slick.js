$(document).ready(function(){
  $('.js-slicks').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
  });

  $('.js-slicks-ourSolutions').slick({
    centerMode: true,
    slidesToShow: 3,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    variableWidth: true,
    adaptiveHeight: true,
  });
});



		