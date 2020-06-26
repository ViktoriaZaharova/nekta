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

$('.links-load').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.filter-box').find('ul li:hidden').slideDown();
    // $('.equipment-product:hidden').slice(0, 12).slideDown();

    var onBlock = $(this).parents('.filter-box').find('ul li:hidden').length;
    if(onBlock <= 0) {
        $(this).hide();
    }
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

