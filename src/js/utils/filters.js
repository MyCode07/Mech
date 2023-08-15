const filters = document.querySelectorAll('.catalog__filters-item');
if (filters.length) {
    filters.forEach(item => {
        const btn = item.querySelector('button');

        if (btn) {
            btn.addEventListener('click', () => {
                toggleTarget(item, filters, '_active');
            })

            const ul = btn.nextElementSibling
            if (ul) {
                const options = ul.querySelectorAll('li');
                if (options)
                    options.forEach(opt => {
                        opt.addEventListener('click', (e) => {

                            const label = opt.closest('.catalog__filters-item').querySelector('label')
                            if (label) label.textContent = e.target.textContent

                            toggleTarget(opt, options, '_selected');
                        })
                    })
            }
        }
    });
}

function toggleTarget(target, targets, classname) {
    if (!target.classList.contains(classname)) {
        targets.forEach(item => {
            if (item.classList.contains(classname)) item.classList.remove(classname)
        })

        target.classList.add(classname)
    }
    else {
        target.classList.remove(classname)
    }
}


document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (!targetEl.closest('.catalog__filters-item') && document.querySelector('.catalog__filters-item._active')) {
        const filter = document.querySelector('.catalog__filters-item._active');

        filter.classList.remove('_active')
    }

    if (targetEl.classList.contains('laod-more')) {
        e.preventDefault();
        const productsGrid = document.querySelector('.products__flex');
        const products = document.querySelectorAll('.product__article');

        if (products.length) {
            targetEl.classList.add('_loading');

            setTimeout(() => {
                products.forEach(item => productsGrid.append(item.cloneNode(true)));
                targetEl.remove();
            }, 2000);
        }
    }
})