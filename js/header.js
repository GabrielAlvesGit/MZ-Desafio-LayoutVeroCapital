$(document).ready(function () {
  
  /* ======== Menu ========*/

  $('.js-menu').click(function () {
    $('.js-menu-open').toggleClass('active');
    $('.js-menu-close').toggleClass('active');
    $('.js-navigation').toggleClass('active');
    $('.js-header').addClass('active');
  });

  /* ======== ScrollUp ========*/

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 1) {
      $('.js-header').addClass('active');
    } else {
      $('.js-header').removeClass('active');
      $('.js-menu').removeClass('active');
      $('.js-navigation').removeClass('active');
      $('.js-menu-close').removeClass('active');
      $('.js-menu-open').removeClass('active');
    }
  })
});