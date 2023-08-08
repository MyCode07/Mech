import { isMobile } from './isMobile.js';

const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');

if (burger) {
    burger.addEventListener('click', (е) => {
        menu.classList.toggle('_active');
        burger.classList.toggle('_active');
        header.classList.toggle('_sticky');

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

