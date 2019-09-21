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

  /* Reviews Filter */
  $('.reviews-menu__btn').on('click', function () {
    let filterClass = $(this).data('filter');
    $('.reviews-menu__btn').removeClass('reviews-menu__btn_active')
    $(this).addClass('reviews-menu__btn_active');
    if (filterClass === '*') {
      $('.reviews-slider').slick('slickUnfilter');
    } else {
      $('.reviews-slider').slick('slickUnfilter');
      $('.reviews-slider').slick('slickFilter', filterClass);
      $('.slick-arrow').removeClass('slick-hidden');
    }
  });

});