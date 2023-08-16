import { gsap, Power4 } from "gsap";
import { heroAnimation } from './animations.js';


document.addEventListener('DOMContentLoaded', function (e) {
    const heroImage = document.querySelector('.hero__bgi');
    if (heroImage) {
        const isLoaded = heroImage.complete && heroImage.naturalHeight !== 0;
        if (isLoaded) runPrelaoder()
    }
    else runPrelaoder()
})

function runPrelaoder() {
    const preloader = document.querySelector('.preloader');
    document.body.classList.add('_noscroll')

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
            document.body.classList.remove('_noscroll')
            preloader.remove();
            heroAnimation();
        }
    })
}