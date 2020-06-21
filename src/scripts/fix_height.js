export function setFullHeight() {
    let vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}