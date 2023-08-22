import { isMobile } from "./isMobile.js";

const popupAll = document.querySelectorAll('.popup');
const popupOpenButtons = document.querySelectorAll('[data-open-popup]');


if (popupOpenButtons.length)
    popupOpenButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const id = btn.getAttribute('id');
            const popup = document.querySelector(`.popup[data-id="${id}"]`);

            if (popup) {
                popup.classList.add('_open');
                document.body.classList.add('_noscroll');

                if (!isMobile.any()) {
                    lockPadding()
                }
            }
        })
    }) 

if (popupAll.length)
    popupAll.forEach(popup => {
        const popupClose = popup.querySelector('.popup__close');

        popupClose.addEventListener('click', function () {
            popup.classList.remove('_open');
            document.body.classList.remove('_noscroll');

            if (!isMobile.any()) {
                unLockPadding()
            }
        })

        popup.addEventListener('click', function (e) {
            if (e.target.classList.contains('popup')) {
                popup.classList.remove('_open')
                document.body.classList.remove('_noscroll');
                unLockPadding()
            }
        })
    })



const fixedElems = document.querySelectorAll('._fixed');
export const lockPadding = () => {
    const paddingRight = 12; // scrollbarwidth

    if (fixedElems.length) {
        fixedElems.forEach(item => {
            item.style.paddingRight = paddingRight + 'px';
        });
    }
    document.body.style.paddingRight = paddingRight + 'px';
}

export const unLockPadding = () => {
    const paddingRight = 12; // scrollbarwidth

    if (fixedElems.length) {
        fixedElems.forEach(item => {
            item.style.paddingRight = 0 + 'px';
        });
    }
    document.body.style.paddingRight = 0 + 'px';
}


const openCheckoutBtn = document.querySelector('.open-checkout');
const checkoutProductsHidden = document.querySelector('.checkout__product');

if (openCheckoutBtn && checkoutProductsHidden)
    openCheckoutBtn.addEventListener('click', function (e) {
        e.preventDefault();
        openCheckoutBtn.classList.toggle('_active');
        checkoutProductsHidden.classList.toggle('_open');
    })