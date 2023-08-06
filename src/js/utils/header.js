function stickyHeader() {
    const header = document.querySelector('header._home');
    if (!header) return
    
    const headerheigth = header.getBoundingClientRect().height;

    const hero = document.querySelector('.hero');
    const heroheigth = hero.getBoundingClientRect().height;


    const sticky = () => {
        if (window.scrollY >= heroheigth - headerheigth ) header.classList.add('_sticky')
        else header.classList.remove('_sticky')
    }

    sticky();
    window.addEventListener('scroll', sticky);
}

stickyHeader();