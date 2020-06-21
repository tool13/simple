import {Listing} from './listing.js';
import {debounce} from './debounce.js';
export {changeActiveLinks};

const menu = document.querySelector('.js-menu');
const menuNavigationLinks = menu.querySelectorAll('.js-nav-link');

function changeActiveLinks(id) {
    menu.querySelector('.js-nav-link.active').classList.remove('active');
    menu.querySelector(`.js-nav-link[href="#${id}"]`).classList.add('active');
}

if (window.matchMedia('(max-width: 1023px)').matches) {
    let startPoint;
    const menuToggle = document.querySelector('.js-menu-toggle');
    const menuList = new Listing(menu);
    const slogan = document.querySelector('.js-slogan');
    const debounceMoveMenu = debounce(tryMoveMenu);

    menuToggle.addEventListener('click', toggleMenu);
    menuNavigationLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    menu.addEventListener('wheel', onMousewheel);
    if ('ontouchstart' in window) {
        menu.addEventListener('touchstart', onTouchStart);
    }

    function onMousewheel(evt) {
        debounceMoveMenu(evt.deltaY);
    }

    function onTouchStart(evt) {
        startPoint = evt.changedTouches[0].pageY;
        menu.addEventListener('touchmove', onTouchMove, {once: true});
    }

    function onTouchMove(evt) {
        let nowPoint = evt.changedTouches[0];
        let delta = nowPoint.pageY - startPoint;
        debounceMoveMenu(-delta);
    }

    function tryMoveMenu(direction) {
        if (menuList.canMove(direction)) {
            menuList.move(direction);
        }
    }

    function toggleMenu() {
        if (menuToggle.classList.contains('opened')) {
            menuList.reset();
        }
        menuToggle.classList.toggle('opened');
        menu.classList.toggle('opened');
        slogan.classList.toggle('visually-hidden');
    };
}