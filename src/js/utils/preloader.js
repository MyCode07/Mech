document.addEventListener('DOMContentLoaded', () => {
    const percents = document.querySelector('.preloader-count');
    let count = 0;

    setInterval(() => {
        percents.textContent = count
        if (count < 100) {
            count++;

            
        }
    }, 50);
})