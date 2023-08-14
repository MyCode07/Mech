import { gsap, Power4 } from "gsap";
import { heroAnimation } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');

    if (!preloader) return
    const icon = document.querySelector('.preloader-icon__before');

    const timeline = gsap.timeline();

    timeline.to(icon, {
        width: 0,
        duration: 2,
        delay: 1,
        ease: Power4.easeInOut
    }).to(preloader, {
        opacity: 0,
        duration: 1.5,
        scale: 8,
        onComplete: () => {
            preloader.remove();
            heroAnimation();
        }
    })
})