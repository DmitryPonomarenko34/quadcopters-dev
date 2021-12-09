window.onload = function () {

  $('.burger').on('click', function () {
    $(this).toggleClass('burger--active');
    $(this).next().toggleClass('menu__list--active');
    $('.header').toggleClass('header--bg');
  });

  if ($(window).width() <= 1440) {
    let headerHeight = $('.header').innerHeight();

    $('.first__container').css('padding-top', headerHeight);
    $('.menu__list').css('padding-top', headerHeight);
  }

  $('.first__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    arrows: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev">Назад</button>',
    nextArrow: '<button type="button" class="slick-next">Вперед</button>',
    // appendArrows: $('.first__arrows'),
    appendDots: '.slick-list',
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

  $('.slider-product__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    nextArrow: '<button type="button" class="slick-next"><svg width="29" height="53" viewBox="0 0 29 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.80762 1L27.4179 27.8077L0.610257 52.418" stroke="black"/></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg width="29" height="53" viewBox="0 0 29 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.6104 1L1.00002 27.8077L27.8077 52.418" stroke="black"/></svg></button>',
    asNavFor: '.slider-product__nav'
  });

  $('.slider-product__nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-product__for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });
}