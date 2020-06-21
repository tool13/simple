import {Listing} from './listing.js';
import {debounce} from './debounce.js';

const colorsTheme = {
    default: {
        bg: '#171718',
        text: 'rgba(255,255,255,.5)'
    },
    mms: {
        bg: '#005996',
        text: '#fff'
    },
    heinz: {
        bg: '#b21110',
        text: '#fed696'
    },
    epidemia: {
        bg: '#0f1113',
        text: '#ffb800'
    },
    baskin: {
        bg: '#df3e9c',
        text: '#1f4c9a'
    }
}

const projects = document.querySelector('.js-projects');
const projectsGallery = projects.querySelector('.js-projects-gallery');
const projectsItems = projects.querySelectorAll('.js-projects-item');
const projectsList = new Listing(projects);

projectsItems.forEach(project => {
    project.addEventListener('mouseenter', onProjectHover);
});

function onProjectHover() {
    setColors(this.dataset.name);
    this.classList.add('active');
    this.addEventListener('mouseleave', onProjectOut, {once:true});
}

function onProjectOut(evt) {
    setColors('default');
    this.classList.remove('active');
}

function setColors(name) {
    document.documentElement.style.setProperty('--projects-bg', colorsTheme[name].bg);
    document.documentElement.style.setProperty('--projects-text', colorsTheme[name].text);
}

function checkProjects(direction) {
    return projectsList.canMove(direction);
}

function moveProjects(direction) {
    projectsList.move(direction);
}

function resetProjectsPosition(direction) {
    projectsList.reset();
}

export {checkProjects, moveProjects, resetProjectsPosition}