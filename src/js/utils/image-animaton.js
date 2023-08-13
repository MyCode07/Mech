const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animate(entry.target);
        }
    })
}, { threshold: 0.3 });

const animateImages = document.querySelectorAll('[data-hidden]');
if (animateImages.length)
    animateImages.forEach(elem => {
        observer.observe(elem);
    })


function animate(elem) {
    elem.classList.add('_remove');
}