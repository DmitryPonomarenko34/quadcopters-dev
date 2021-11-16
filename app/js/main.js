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

  let accardeonTrigger = $('.accardeon__title');
  let accardeonContent = $('.accardeon__content');
  let accardeontOpenClass = $('.accardeon__content--open');
  accardeonTrigger.on('click', function () {
    $(this).next(accardeonContent).slideToggle();
    $(this).toggleClass('accardeon__title--open');
    if ($(this).next().hasClass('accardeon__content--open')) {
      setTimeout(() => {
        $(this).next().removeClass('accardeon__content--open');
      }, 450);
    }
  });
  accardeontOpenClass.prev().addClass('accardeon__title--open');
}