import {debounce} from './debounce.js';
import {moveProjects, checkProjects, resetProjectsPosition} from './projects.js';
import {changeActiveLinks} from './menu.js';
export {debounceMoveSections as moveSections, changeSections};

const debounceMoveSections = debounce(tryMoveSection);

const slogan = document.querySelector('.js-slogan');

function changeSections(nextSection) {
    detectCurrentSection().classList.remove('current');
    nextSection.classList.add('current');

    changeActiveLinks(detectCurrentSection().id);

    if (isSection('projects')) {
        resetProjectsPosition();
    }

    if (window.matchMedia('(max-width: 1023px)').matches) {
        if (isSection('hero')) {
            slogan.classList.remove('visually-hidden');
        } else {
            slogan.classList.add('visually-hidden');
        }
    }
}

function tryMoveSection(direction) {
    if (isSection('projects') && checkProjects(direction)) {
        moveProjects(direction);
        return;
    }
    if (!isLastSection(direction)) {
        changeSections(detectNextSection(direction));
    }
}

function isLastSection(direction) {
    if ((direction < 0 && !detectCurrentSection().previousElementSibling) ||
        (direction > 0 && !detectCurrentSection().nextElementSibling)) {
            return true;
    }
}

function isSection(sectionName) {
    return detectCurrentSection().id === sectionName;
}

function detectNextSection(direction) {
    if (direction < 0) {
        return detectCurrentSection().previousElementSibling;
    }
    if (direction > 0) {
        return detectCurrentSection().nextElementSibling;
    }
}

function detectCurrentSection() {
    return document.querySelector('.js-section.current');
}