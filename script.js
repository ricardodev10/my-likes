new Swiper(".mySwiper", {
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: -10,
        },
        400: {
            slidesPerView: 3,
            spaceBetween: -50,
        },
        640: {
            slidesPerView: 4,
            spaceBetween: -50,
        }
    },
});