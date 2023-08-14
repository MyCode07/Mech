import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);
const processSlider = document.querySelector('.category__flex');

if (window.innerWidth >= 768 && processSlider) {
    const slides = gsap.utils.toArray('.category__article');

    let x = slides[0].getBoundingClientRect().width * (slides.length - 1) - (processSlider.offsetWidth - slides[0].getBoundingClientRect().width)
    gsap.to(slides, {
        x: -x,
        ease: "none",
        scrollTrigger: {
            trigger: processSlider,
            pin: true,
            start: "center center",
            scrub: 1,
            invalidateOnRefresh: true,

            end: () => "+=" + processSlider.offsetWidth,
        }
    });
}

