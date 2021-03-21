$("body").on("click", ".click-scroll__top", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});

$('.news-slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.partners-wrapper').slick({
    slidesToShow: 1,
    dots: true,
    appendDots: '.partners-slider__nav',
    appendArrows: '.partners-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
});

$('.acquaintance-slider').slick({
    slidesToShow: 1,
    appendArrows: '.acquaintance-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="25.124" height="29.011" viewBox="0 0 25.124 29.011">\n' +
        '  <path d="M387.6,2151.374l11.812-6.82,11.812-6.82v27.279l-11.812-6.82Z" transform="translate(-386.599 -2136.868)" stroke-miterlimit="10" stroke-width="1"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="23.624" height="27.279" viewBox="0 0 23.624 27.279">\n' +
        '  <path d="M454.069,2151.374l-11.812,6.82-11.812,6.82v-27.279l11.812,6.82Z" transform="translate(-430.445 -2137.734)"/>\n' +
        '</svg>\n</button>',
});

let homeSlider = $('.acquaintance-slider');

$('.counter-slide .default').text("/ " + homeSlider.slick("getSlick").slideCount);

homeSlider.on('afterChange', function(event, slick, currentSlide){
    $(".counter-slide .cp").text(currentSlide<10?`${currentSlide+1}`:currentSlide+1);
});

$('.links-load').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.filter-box').find('ul li:hidden').slideDown();
    // $('.equipment-product:hidden').slice(0, 12).slideDown();

    var onBlock = $(this).parents('.filter-box').find('ul li:hidden').length;
    if(onBlock <= 0) {
        $(this).hide();
    }
});

$('.links-question').click(function(e){
    e.preventDefault();

    var
        $this = $(this),
        content = $(this).parents('.question-box').find('.answer');


    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');
        $this.html('Свернуть ответ');

        content.slideDown();
    } else {
        $this.removeClass('trigger');
        $this.html('Развернуть ответ');

        content.slideUp();
    }
});



$(document).ready(function () {
    var cStars = function(nowPos) {
        // У всех убираем active
        $('.stars .star').removeClass('active');

        for (var i = 0; nowPos + 1 > i; i++) {
            $('.stars .star').eq(i).toggleClass('active');
        }
    }
// переменная содержит количество активных звезд
    var starsCount = $('.star.active').length;

// При наведении
    $('.stars .star').hover(function() {
        cStars($(this).index());
    });

// При клике
    $('.stars .star').click(function() {
        cStars($(this).index());
        // меняем количество по клику
        starsCount = $('.star.active').length;
    });

// Как только отводим мышку, возвращаем количество активных айтемов, которые были изначально
    $('.stars .star').on('mouseleave', function() {
        cStars(+starsCount - 1);
    });
});


$('.datepicker').datepicker({
    autoclose: true,
    language: 'ru',
    format: "mm",
    viewMode: "months",
    minViewMode: "months",
});

$('.still-links').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('click').siblings('.sorting-list').toggleClass('open');
});


// активная ссылка пагинации
$('.pagination li a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location == link) {
        $(this).addClass('active');
    }
});
// end





