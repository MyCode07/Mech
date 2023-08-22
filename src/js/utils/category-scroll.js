import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { isMobile } from './isMobile.js';

gsap.registerPlugin(ScrollTrigger);
const processSlider = document.querySelector('.category__flex');

if (processSlider) {
    const slides = gsap.utils.toArray('.category__article');
    if (slides.length) {
        if (window.innerWidth >= 768 && !isMobile.any()) {
            let x = slides[0].getBoundingClientRect().width * (slides.length - 1)
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
        else {
            processSlider.classList.add('_scroll')
        }
    }
}