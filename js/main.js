$(document).ready(() => {

  $('.partners').slick({
    infinite: true,
    slidesToShow: 4,
    prevArrow: $('.partners__arrow_left'),
    nextArrow: $('.partners__arrow_right')
  });

});