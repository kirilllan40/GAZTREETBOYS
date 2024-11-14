
// -----------------burger__menu---------------
// -----------------swiper---------------------
const swiper = new Swiper('.market__slider', {

    loop: true,
    speed: 400,
    autoHeight: 'true',
    slidesPerView: 'auto',
    spaceBetween: 40,
    grabCursor: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
        el: '.slider__pagination',
        type:'bullets',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },



    breakpoints: {

        620: {
            slidesPerView: 2,
            spaceBetween: 32
        },
        820: {
            slidesPerView: 2,
            spaceBetween: 32,
        },
        1150: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 3,
        }
    }


});

