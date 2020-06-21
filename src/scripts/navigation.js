import {moveSections, changeSections} from './section_change.js';

let startPoint;
const sectionHolder = document.querySelector('.js-sections');
const navigationLinks = document.querySelectorAll('.js-nav-link');

navigationLinks.forEach(link => {
    link.addEventListener('click', onNavBtnClick);
});

if ('ontouchstart' in window) {
    sectionHolder.addEventListener('touchstart', onTouchStart);
}

sectionHolder.addEventListener('wheel', onMousewheel);

function onNavBtnClick() {
    if (!this.classList.contains('active')) {
        const target = document.querySelector(this.getAttribute('href'));
        changeSections(target);
    }
}

function onMousewheel(evt) {
    moveSections(evt.deltaY);
}

function onTouchStart(evt) {
    startPoint = evt.changedTouches[0].pageY;
    sectionHolder.addEventListener('touchmove', onTouchMove, {once: true});
}

function onTouchMove(evt) {
    let nowPoint = evt.changedTouches[0];
    let delta = nowPoint.pageY - startPoint;
    moveSections(-delta);
}