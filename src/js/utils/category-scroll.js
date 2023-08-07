import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth >= 768) {
    const process = document.querySelector('.category__flex');
    if ((typeof (process) != 'undefined' && process != null)) {
        let sections = gsap.utils.toArray('.category__article');
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1.3),
            ease: "none",
            scrollTrigger: {
                trigger: process,
                markers: false,
                scrub: 1,
                pin: true,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + document.querySelector(".category__flex").offsetWidth
            },
        });
    }
}

 