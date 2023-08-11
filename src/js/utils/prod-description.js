
//product descr open
const dropDowns = document.querySelectorAll('.dropdown');
let dropDownContens = document.querySelectorAll('.item__data-content ol');

for (let i = 0; i < dropDowns.length; i++) {
    const dropDown = dropDowns[i];

    dropDown.addEventListener('click', (e) => {

        let dropDownTtile = dropDown.closest('.item__data-title').querySelector('._active');

        if (dropDownTtile) {
            dropDownTtile.classList.remove('_active')
            dropDown.classList.add('_active')
        }

        for (let i = 0; i < dropDownContens.length; i++) {
            const dropDownConten = dropDownContens[i];

            let dropDownContenClass = dropDownConten.closest('.item__data-content').querySelector('._open');


            if (e.target.id == dropDownConten.dataset.id) {
                dropDownConten.classList.add('_open')
            }
            if (dropDownContenClass) {
                dropDownConten.classList.remove('_open')
            }


        }
        dropDown.classList.add('_active')
    })
}




//product qty calculator

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





