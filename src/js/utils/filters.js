
const filterBtns = document.querySelectorAll('.catalog__filters-sort');
const options = document.querySelectorAll('.catalog__filters-sort ul li');

if (filterBtns) {

    for (let i = 0; i < filterBtns.length; i++) {
        const filterBtn = filterBtns[i];

        filterBtn.addEventListener('click', (e) => {
            e.target.classList.add('_active')

            let ul = filterBtn.querySelector('._active')
            if (ul) {
                ul.classList.remove('_active')

                filterBtn.querySelector('ul').classList.add('_active')
            }

        })


        for (let k = 0; k < options.length; k++) {
            const option = options[k];

            option.addEventListener('click', (e) => {

                let contentSelected = option.closest('.catalog__filters-sort').querySelector('._selected')


                if (contentSelected) {
                    contentSelected.classList.remove('_selected')
                    option.classList.add('_selected')
                }

                filterBtn.querySelector('ul').classList.remove('_active')
                filterBtn.classList.remove('_active')

                let label = option.closest('.catalog__filters-sort').querySelector('label')
                label.textContent = e.target.textContent
            })


        }
    }
}
