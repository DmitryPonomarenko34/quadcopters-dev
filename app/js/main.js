window.onload = function () {

  let catalogBtn = document.querySelector('.catalog__more');

  async function getProducts(catalogBtn) {
    if (!catalogBtn.classList.contains('_hold')) {
      catalogBtn.classList.add('_hold');
      const file = "json/catalog.json";
      let response = await fetch(file, {
        method: "GET"
      });
      if (response.ok) {
        let result = await response.json();
        loadProducts(result);
        catalogBtn.classList.remove('_hold');
        catalogBtn.remove();
      } else {
        alert("error")
      }
    }

    function loadProducts(date) {
      const catalogItems = document.querySelector('.catalog__items');

      date.catalog.forEach(item => {
        const itemId = item.id;
        const itemUrl = item.url;
        const itemTitle = item.title;
        const itemTitleAccent = item.titleAccent;
        const itemImage = item.image;
        const itemImageWebp = item.imageWebp;
        const itemPrice = item.price;
        const itemBg = item.bg;

        let template = `
        <a class="mix ezvizc6t catalog__item" href="${itemUrl}" style="background-image: url(images/content/catalog/${itemBg})" data-pid="${itemId}">
        <div class="catalog__img-box">
          <picture>
            <source srcset="images/content/catalog/${itemImageWebp}" type="image/webp">
            <img class="catalog__item-img" src="images/content/catalog/${itemImage}" alt="quadrocopter">
          </picture>
        </div>
        <h3 class="catalog__item-title">
        ${itemTitle} <span class="catalog__item-title--accent">${itemTitleAccent}</span>
        </h3>
        <span class="catalog__item-price">
          ${itemPrice}
        </span>
        <button class="catalog__item-btn">
          <svg>
            <use xlink:href="images/icons/mono/spriteMono.svg#plus"></use>
          </svg>
        </button>
      </a>
        `;

        catalogItems.insertAdjacentHTML('beforeend', template);
      });
    }
  }

  if (catalogBtn) {
    catalogBtn.addEventListener('click', (e) => {
      getProducts(catalogBtn);
      e.preventDefault();
    });
  }


  let containerEl = document.querySelector('.catalog__items');
  let mixer = mixitup(containerEl);

  $('.catalog__select').on('change', function () {
    $('.catalog__select option:selected').trigger('click');
  });

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