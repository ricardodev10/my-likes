new Swiper(".mySwiper", {
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: -50,
        },
        375: {
            slidesPerView: 3,
            spaceBetween: -30,
        },
        500: {
            slidesPerView: 4,
            spaceBetween: -50,
        }
    },
});