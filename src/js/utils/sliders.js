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

const dropDowns = document.querySelectorAll('.dropdown');

for (let i = 0; i < dropDowns.length; i++) {
    const dropDown = dropDowns[i];
    let targetDataIds = document.querySelectorAll('.item__data-content ol');

    dropDown.addEventListener('click', (e) => {

        for (let k = 0; k < targetDataIds.length; k++) {
            const targetDataId = targetDataIds[k];

            let dropDownContent = targetDataId.dataset.id;

            if (dropDown.id == dropDownContent && !targetDataId.hasAttribute('_open')) {
                targetDataId.classList.add('_open')
                dropDown.classList.add('_active')
            } else {
                targetDataId.classList.remove('_open')
            }

        }

    })
}



const quantityElement = document.querySelector(".quantity-text");
const priceElement = document.querySelector('.item__price');
const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');

let price = 20000
if (plusButton) {
    minusButton.addEventListener("click", () => {
        if (quantityElement.textContent > 1) {
            quantityElement.textContent--
            const totalPrice = priceElement.textContent - price;
            priceElement.textContent = totalPrice;
        }
    });


    plusButton.addEventListener("click", () => {
        quantityElement.textContent++

        const totalPrice = quantityElement.textContent * price;
        priceElement.textContent = totalPrice;
    });
}






