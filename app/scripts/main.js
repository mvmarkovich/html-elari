//
// Header and mobile menu
//

let header = document.querySelector('.header'),
    headerBurger = document.querySelector('.header__burger'),
    headerSearch = document.querySelector('.header__search'),
    headerSearchBtn = document.querySelector('.header__btn-search'),
    headerSearchInput = document.querySelector('.search__form-input');

function toggleMobileMenu() {
    header.classList.toggle('header-mobile-menu');
    headerBurger.classList.toggle('btn--cross');
    document.body.classList.toggle('overflow-hidden');
}

function toggleHeaderSearch() {
    header.classList.toggle('header-search-show');
    document.body.classList.toggle('overflow-hidden');
    headerSearchInput.focus();
    document.querySelector('.page-container').classList.toggle('container--move')
}

function stickyHeader() {
    if (window.scrollY > 0) {
        header.classList.add("header--sticky");
    } else {
        header.classList.remove("header--sticky");
    }
}

headerBurger.addEventListener("click", toggleMobileMenu);
headerSearchBtn.addEventListener("click", toggleHeaderSearch);

document.addEventListener("click", function (e) {
    if (!header.contains(e.target) && header.classList.contains('header-search-show')) {
        toggleHeaderSearch();
    }
})

window.addEventListener("scroll", stickyHeader);

//
// Sliders
//

let sliderApps = new Swiper('.home-apps__slider', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 16,
    arrows: false,

    navigation: {
        prevEl: ".home-apps .slider-arrow-prev",
        nextEl: ".home-apps .slider-arrow-next"
    },

    pagination: {
        el: '.home-apps .slider-pagination',
        type: 'bullets',
        clickable: false
    },

    breakpoints: {
        '768': {
            slidesPerView: 'auto',
            spaceBetween: 24
        },
        '1280': {
            slidesPerView: 'auto',
            spaceBetween: 32
        }
    },
});

let sliderBenefits = new Swiper('.home-benefits__slider', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 16,
    arrows: false,

    navigation: {
        prevEl: ".home-benefits .slider-arrow-prev",
        nextEl: ".home-benefits .slider-arrow-next"
    },

    pagination: {
        el: '.home-benefits .slider-pagination',
        type: 'bullets',
        clickable: false
    },

    breakpoints: {
        '768': {
            slidesPerView: 'auto',
            spaceBetween: 24
        },
        '1280': {
            slidesPerView: 'auto',
            spaceBetween: 32
        }
    },
});

let sliderFaq = new Swiper('.home-faq__slider', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 16,
    arrows: false,

    breakpoints: {
        '1280': {
            slidesPerView: 'auto',
            spaceBetween: 24
        }
    },
});

if (window.innerWidth >= 768) {
    sliderFaq.init();
}
else {
    sliderFaq.destroy(true, true)
}

//
// Text blur
//

document.addEventListener("DOMContentLoaded", () => {
    let textBlur = document.querySelectorAll('.text-blur');

    textBlur.forEach(function (text) {
        text.addEventListener('click', () => text.classList.toggle('active'))
    })
});