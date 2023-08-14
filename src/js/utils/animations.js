import gsap from 'gsap'

let threshold = 0.2
if (window.innerWidth <= 768) {
    threshold = 0.1
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animate(entry.target);
        }
    })
}, { threshold: threshold });

const animateElems = document.querySelectorAll('[data-animate]');
if (animateElems.length) {
    animateElems.forEach(elem => {
        observer.observe(elem);
    })
}


function animate(elem) {
    if (elem) {
        if (elem.hasAttribute('data-opacity-only')) {
            gsap.to(elem, {
                opacity: 1,
                duration: 1,
                delay: +elem.dataset.delay ? +elem.dataset.delay : 0,
                ease: 'ease'
            });
        }
        else {
            gsap.to(elem, {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 1,
                delay: +elem.dataset.delay ? +elem.dataset.delay : 0,
                ease: 'ease'
            });
        }
    }
}


const tl = gsap.timeline();
const homeHeroSection = document.querySelector('.hero');

export function heroAnimation() {
    gsap.to('.header', { opacity: 1, delay: 0.5, duration: 1, y: 0 });
    gsap.to('.main', { opacity: 1, delay: 0, duration: 1, });

    if (!homeHeroSection) return

    const lines = homeHeroSection.querySelectorAll('.hero .line span');

    gsap.to('.hero__bgi', { scale: 1, delay: 0, duration: 0.8, });
    tl.from(lines, {
        transform: "skewY(10deg) translateY(100%)",
        ease: "power4.out",
        delay: 1,
        duration: 2,
    })
    gsap.to('.hero__top', { opacity: 1, delay: 1, duration: 2, });
    gsap.to('.hero__bottom', { opacity: 1, delay: 1, duration: 2, y: 0 });
}