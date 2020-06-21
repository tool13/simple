const noize = document.querySelector('.noize');
const title = document.querySelector('.stub__title');
const heading = document.querySelector('.stub__heading');
const fake = document.querySelector('.stub__fake');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;;
};

function makeMush() {
    noize.classList.add('play');
    noize.addEventListener('animationend', () => {
        noize.classList.remove('play');
    });
}

function playShadow() {
    heading.classList.add('shadow');
    heading.addEventListener('animationend', () => {
        heading.classList.remove('shadow');
    });
}

function playMoving() {
    heading.style.color = 'transparent';
    fake.style.cssText = 'color: #fff; opacity: 1; transform: translate(' + getRandomInt(-200,200) + 'px, ' + getRandomInt(-50,50) + 'px);';
    setTimeout(() => {
        heading.style.color = '#fff';
        fake.style.cssText = 'opacity: 0';
    }, 200);
}

function playInvert() {
    getRandomInt(0, 2) === 0 ? title.style.cssText = 'transform: scaleX(-1)' : title.style.cssText = 'transform: scaleY(-1)';
    setTimeout(() => {
        title.style.cssText = '';
    }, 200);
}

makeMush();
setInterval(() => {
    makeMush();
}, 4000);

setInterval(() => {
    playInvert();
}, 7000);

playShadow();
setInterval(() => {
    playShadow();
    setTimeout(() => {
        playMoving();
    }, 500);
}, 2500);