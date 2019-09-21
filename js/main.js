$(document).ready(() => {

  /* Parners Slider */
  $('.partners').slick({
    infinite: true,
    slidesToShow: 4,
    prevArrow: $('.partners__arrow_left'),
    nextArrow: $('.partners__arrow_right')
  });

  /* Reviews Slider */
  $('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 3,
    prevArrow: $('.reviews-slider__arrow_left'),
    nextArrow: $('.reviews-slider__arrow_right')
  });

  /* Reviews Tabs Filtering */

});