import { gsap, Power2, } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

const fullscreenImages = document.querySelectorAll('.fullscreen__img img');

if (fullscreenImages.length) {
    fullscreenImages.forEach(img => {

        gsap.to(img, {
            scrollTrigger: {
                trigger: img.closest('.fullscreen'),
                scrub: 1,
                start: "top bottom",
                end: "+=200%",
                ease: Power2.easeInOut,
                // markers: true
            },
            y: "-25%"
        })
    })
}
