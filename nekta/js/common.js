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
