export class Listing {
    constructor(element) {
        this.viewport = element.querySelector('.js-list-viewport');
        this.holder = this.viewport.querySelector('.js-list-holder');
        this.lastElement = this.holder.children[this.holder.children.length - 1];
    }
    get currentPosition() {
        return Number(this.holder.style.transform.match(/-?\d+/g));
    }
    set currentPosition(value) {
        this._currentPosition = value;
    }
    get step() {
        return this.holder.querySelector('.js-list-item').clientHeight;
    }
    set step(value) {
        this._step = value;
    }
    canMove(direction) {
        if (direction < 0 && this.currentPosition === 0) {
            return false;
        }
        if (direction > 0 && this.checkEnd()) {
            return false;
        }
        return true;
    }
    checkEnd() {
        return this.lastElement.getBoundingClientRect().top / 2 < this.viewport.getBoundingClientRect().top;
    }
    move(direction) {
        let shift;
        if (direction < 0) {
            shift = this.currentPosition + this.step;
        } else {
            shift = this.currentPosition - this.step;
        }
        this.holder.style.transform = `translateY(${shift}px)`;
    }
    reset() {
        this.count = 0;
        this.holder.style.transform = '';
    }
}