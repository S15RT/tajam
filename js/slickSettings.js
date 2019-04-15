
// TOP SLIDER
$('.single-slide').slick({
    dots: true,
    arrows: false
    });

// REVIEWS SLIDER

$('.text-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.img-slider'
});

$('.img-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.text-slider',
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0px',
    responsive: [
            {
                breakpoint: 450,
                settings: {
                    dots: false,
                    slidesToShow: 3,  
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 420,
                settings: {
                    autoplay: true,
                    dots: false,
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
});

