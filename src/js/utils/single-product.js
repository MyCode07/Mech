import { CookieManager } from "./cookie.js";
import { isMobile } from "./isMobile.js";
import { lockPadding } from "./popup.js";

//product descr open
const tabsContainer = document.querySelector('.item__data');
const tabs = document.querySelectorAll('.item__data-tabs .tab');
const tabsContent = document.querySelectorAll('.item__data-content ol');

if (tabs.length)
    tabs.forEach(tab => {
        const id = tab.getAttribute('id');
        const tabContent = tabsContainer.querySelector(`ol[data-id="${id}"]`);
        tab.addEventListener('click', (e) => {
            toggleTabContent(tab, tabs)
            toggleTabContent(tabContent, tabsContent)
        })
    });

function toggleTabContent(tab, parent) {
    if (!tab.hasAttribute('data-open')) {
        parent.forEach(item => {
            if (item.hasAttribute('data-open')) item.removeAttribute('data-open')
        })

        tab.setAttribute('data-open', 'open')
    }
    else {
        tab.removeAttribute('data-open')
    }
}

// product qty calculator
const quantityElement = document.querySelector(".quantity-text");
const priceElement = document.querySelector('.item__price');
const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');

if (plusButton) {
    minusButton.addEventListener("click", () => {
        if (quantityElement.textContent > 1) {
            quantityElement.textContent--
        }
    });

    plusButton.addEventListener("click", () => {
        quantityElement.textContent++
    });
}


document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (!targetEl.classList.contains('tab') && document.querySelector('.tab[data-open]') && !targetEl.closest('.item__data')) {
        const id = document.querySelector('.tab[data-open]').getAttribute('id');
        const tab = document.querySelector('.tab[data-open]');
        const tabContent = tabsContainer.querySelector(`ol[data-id="${id}"]`);

        tab.removeAttribute('data-open');
        tabContent.removeAttribute('data-open');
    }

    if (targetEl.classList.contains('add-to-cart')) {
        e.preventDefault();


        addtoCart(targetEl)
    }
})


function addtoCart(targetEl) {
    // const product = targetEl.closest('.product')
    // const productName = product.querySelector('h2').textContent;
    // const productImage = product.querySelector('.item__images-big img').src;
    // const productPrice = +product.querySelector('.price').dataset.price;
    // const productCount = +product.querySelector('.quantity-text').textContent;

    // CookieManager.set('productName', productName);
    // CookieManager.set('productImage', productImage);
    // CookieManager.set('productPrice', productPrice);
    // CookieManager.set('productCount', productCount);


    const miniCart = document.querySelector('.mini-cart');
    miniCart.classList.add('_open');
    document.body.classList.add('_noscroll');

    if (!isMobile.any()) {
        lockPadding()
    }

    console.log(
        CookieManager.get('productName'),
        CookieManager.get('productImage'),
        CookieManager.get('productPrice'),
        CookieManager.get('productCount')
    );
}
