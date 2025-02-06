
// -----------------burger__menu---------------
(function () {
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else (document.body.classList.remove('body--opened-menu'))
    }



})()

//---------------first-slider------------------

const swiperGallery = new Swiper('.gallery__slider', {
    effect: 'flip',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    initialSlide: 0,


    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


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
        type: 'bullets',
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

// modal -------------------------------------------

const modal = document.querySelector('.modal')
const modalButton = document.querySelectorAll('.slide__description');


modalButton.forEach(b=>b.addEventListener('click', openModal));
modal.addEventListener('click', closeModal)


function openModal(e) {
    e.preventDefault()
    document.body.classList.toggle('body--modal-opened')
}

function closeModal(e) {
    e.preventDefault()
    const target = e.target

    if (target.closest('.modal__closed-btn') || target.classList.contains('modal')) {
        document.body.classList.remove('body--modal-opened');
    }
}


