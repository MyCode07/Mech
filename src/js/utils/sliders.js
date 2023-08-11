import { Swiper, FreeMode, Thumbs, Manipulation, Mousewheel, Lazy, Pagination } from "swiper";

const projectImages = document.querySelector('.item__images');
if (projectImages) {

    const bigSlider = projectImages.querySelector('.item__images-big .swiper');
    const bigSlides = bigSlider.querySelectorAll('.item__images-big .swiper-slide');
    const thumbsSlider = projectImages.querySelector('.item__images-small .swiper');

    let direction = 'vertical';
    if (window.innerWidth > 992) direction = 'vertical'
    else direction = 'horizontal'

    if (bigSlides.length) {

        const swiperThumbs = new Swiper(thumbsSlider, {
            modules: [
                FreeMode, Manipulation, Lazy
            ],
            direction: direction,
            freeMode: true,
            watchSlidesProgress: true,
            lazy: true,
            spaceBetween: 15,
            slidesPerView: 'auto',
        });

        const swiperMain = new Swiper(bigSlider, {
            modules: [
                Thumbs, Manipulation, Mousewheel, Lazy, Pagination
            ],
            lazy: true,

            direction: direction,
            slidesPerView: 1,
            thumbs: {
                swiper: swiperThumbs,
            },

            pagination: {
                el: ".item__images-count",
                type: "fraction",
            },

            breakpoints: {
                300: {
                    mousewheel: false,
                },
                993: {
                    mousewheel: true,
                }
            }
        });
    }
}





