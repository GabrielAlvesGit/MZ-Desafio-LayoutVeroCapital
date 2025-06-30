$(document).ready(function () {

  $('.js-menu').click(function () {
    $('.js-menu-open').toggleClass('active');
    $('.js-menu-close').toggleClass('active');
    $('.js-navigation').toggleClass('active');
  });

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('.js-header').addClass('active');
    } else {
      $('.js-header').removeClass('active');
    }
  })

});