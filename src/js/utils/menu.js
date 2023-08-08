import { isMobile } from "./isMobile.js";
import { lockPadding, unLockPadding } from "./popup.js";

const body = document.body;
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');

if (burger) {
    burger.addEventListener('click', (е) => {
        if (!isMobile.any())
            if (menu.classList.contains('_active')) unLockPadding();
            else lockPadding()

        menu.classList.toggle('_active');
        burger.classList.toggle('_active');

        body.classList.toggle('_noscroll');

        if (!header.classList.contains('_scrolled')) header.classList.toggle('_sticky');
    })
}


const menuLink = document.querySelectorAll('.menu__top-nav ul li a');
let dataImg = document.querySelector('.menu__top-img');

for (let i = 0; i < menuLink.length; i++) {
    const element = menuLink[i];

    element.addEventListener("mouseenter", (e) => {
        e.preventDefault();
        let hoverDataImg = element.closest('li').dataset.img;
        dataImg.src = hoverDataImg;
    });
};

