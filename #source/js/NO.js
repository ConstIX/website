// Бургер==========================================================
$('.icon-menu').click(function (event) {
   $(this).toggleClass('active');
   $('.menu__body').toggleClass('active');
   $('body').toggleClass('lock');
});


// Картинка - задний фон===========================================
function ibg() {
   $.each($('.ibg'), function (index, val) {
      if ($(this).find('img').length > 0) {
         $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
      }
   });
}
ibg();


// Слайдер=========================================================
$('.testimonials__slider').slick({
   dots: false,
   infinite: false,
   slidesToShow: 2,
   slidesToScroll: 1,
   vertical: true,
   verticalSwiping: true,
   nextArrow: '<button type="button" class="slick-next"></button>',
   prevArrow: '<button type="button" class="slick-prev"></button>'
});

$('.team__body').slick({
   dots: false,
   infinite: false,
   adaptiveHeight: true,
   arrows: false,
   fade: true,
   asNavFor: '.team__nav',
   responsive: [
      {
         breakpoint: 480,
         settings: {
            dots: true
         }
      }
   ]
});

$('.team__nav').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   infinite: false,
   asNavFor: '.team__body',
   centerMode: true,
   centerPadding: '0',
   focusOnSelect: true,
   nextArrow: '<button type="button" class="slick-next"></button>',
   prevArrow: '<button type="button" class="slick-prev"></button>',
   responsive: [
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }
   ]
});


// Спойлер=========================================================
$(document).ready(function () {
   $('.services__spoiler').click(function (event) {
      if ($('.services__block').hasClass('one')) {
         $('.services__spoiler').not($(this)).removeClass('active');
         $('.services__row').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
});











