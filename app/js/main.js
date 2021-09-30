window.onload = function () {

  $('.first__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    arrows: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev">Назад</button>',
    nextArrow: '<button type="button" class="slick-next">Вперед</button>',
    appendArrows: $('.first__arrows'),
    appendDots: '.slick-list'
  });
}