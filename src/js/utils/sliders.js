import { Swiper, Lazy, Pagination, Navigation } from "swiper";

const slider = document.querySelector('..swiper');
const sliderSlides = document.querySelectorAll('.swiper .swiper-slide');

if (sliderSlides.length) {
    new Swiper(slider, {
        modules: [
            Lazy, Pagination, Navigation
        ],
        loop: true,
        slidesPerView: 'auto',

        preloadImages: false,
        lazy: {
            loadPrevNext: true,
            loadOnTransitionStart: false
        },
        watchSlidesProgress: true,
        watchOverflow: true,
    })
}