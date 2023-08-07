import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

gsap.to(".fullscreen__img img", {
    scrollTrigger: {
        trigger: ".fullscreen__body",
        scrub: 0.5,
        start: "top top",
        end: "bottom -300%",
        ease: "power2"
    },
    y: "-50%"
});   