import { gsap } from 'gsap'
import { isMobile } from './isMobile.js'
import { lockPadding, unLockPadding } from './popup.js'

const body = document.body;
const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const menuLinks = document.querySelectorAll('.menu li a');
const header = document.querySelector('.header');
if (burger) {
    burger.addEventListener('click', (е) => {
        menu.classList.toggle('_active');
        burger.classList.toggle('_active');

        if (!header.classList.contains('_scrolled')) {
            header.classList.toggle('_sticky')
        }

        document.body.classList.toggle('_noscroll');

        if (!isMobile.any()) {
            if (document.body.classList.contains('_noscroll')) {
                lockPadding()
            }
            else {
                unLockPadding();
            }
        }
    })
}

if (menuLinks.length) {
    const menuImage = document.querySelector('.menu__top-img');

    menuLinks.forEach(link => {
        link.addEventListener('click', (е) => {
            if (!isMobile.any())
                if (menu.classList.contains('_active')) unLockPadding();
                else lockPadding()

            menu.classList.toggle('_active');
            burger.classList.toggle('_active');

            body.classList.toggle('_noscroll');
        })

        if (!isMobile.any()) {
            link.addEventListener('mouseenter', (е) => {
                menuImage.src = link.closest('li').dataset.img
                link.classList.add('_noblur')
            })
            link.addEventListener('mouseleave', (е) => {
                link.classList.remove('_noblur')
            })
        }
    })
}


const arrow = `<button><svg width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.8125 1L7.15565 6.65685L1.49879 1" stroke-width="1.25" stroke-linecap="square" />
</svg></button>
`;

const submenuList = document.querySelectorAll('nav ul li');
if (submenuList.length) {
    submenuList.forEach(li => {
        const submenu = li.querySelector('ul');

        if (submenu) {
            const link = submenu.previousElementSibling;
            link.insertAdjacentHTML('afterend', arrow);

            const btn = li.querySelector('button');

            if (btn && isMobile.any()) {
                btn.addEventListener('click', function () {
                    toggleMenu(li)
                })
            }
        }
    })


    function toggleMenu(item) {
        const menu = item.closest('ul');
        const menuItems = menu.querySelectorAll('li');

        if (!item.hasAttribute('data-open')) {
            const openitem = menu.querySelector('li[data-open]');
            if (openitem) {
                openitem.removeAttribute('data-open')
            }

            menuItems.forEach(item => {
                item.removeAttribute('data-open')
            })

            item.setAttribute('data-open', 'open')
        }
        else {
            item.removeAttribute('data-open')
        }
    }

}


document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('_side-fixed')) {
        targetEl.classList.remove('_active');
        document.body.classList.remove('_noscroll');
    }

    if (targetEl.classList.contains('_side-fixed__close')) {
        targetEl.closest('._side-fixed').classList.remove('_active');
        document.body.classList.remove('_noscroll');
    }
})
