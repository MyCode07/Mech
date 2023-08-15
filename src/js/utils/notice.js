import { CookieManager } from "./cookie.js";

document.addEventListener('DOMContentLoaded', function (e) {
    const notice = document.querySelector('.notice');
    let allowClick = false;
    const accept = CookieManager.get('accept');

    if (!accept) {
        setTimeout(() => {
            notice.classList.add('_open')
            allowClick = true
        }, 8000);
    }

    document.addEventListener('click', function (e) {
        let targetEl = e.target;

        if (allowClick == true) {
            if (targetEl.classList.contains('notice__close')) {
                notice.classList.remove('_open')
                CookieManager.set('accept', 'accepted');
            }
            if (targetEl.classList.contains('accept')) {
                notice.classList.remove('_open')
                CookieManager.set('accept', 'accepted');
            }

            if (!targetEl.closest('.notice') && notice.classList.contains('_open')) {
                notice.classList.remove('_open')
                CookieManager.set('accept', 'accepted');
            }
        }
    })
})