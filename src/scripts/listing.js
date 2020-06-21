export class Listing {
    constructor(element) {
        this.viewport = element.querySelector('.js-list-viewport');
        this.holder = this.viewport.querySelector('.js-list-holder');
        this.lastElement = this.holder.children[this.holder.children.length - 1];
        this.isEnd = null;
        this.observerOptions = {
            root: this.viewport,
            threshold: .6
        }
        this.observerCallback = (entries) => {
            entries.forEach(entry => {
                this.isEnd = !(entry.intersectionRatio > this.observerOptions.threshold);
            });
        }
        this.observer = new IntersectionObserver(this.observerCallback, this.observerOptions);
        this.observer.observe(this.holder);
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
        if (direction > 0 && this.isEnd) {
            return false;
        }
        return true;
    }
    move(direction) {
        let shift;
        direction < 0 ? shift = this.currentPosition + this.step : shift = this.currentPosition - this.step;
        this.holder.style.transform = `translateY(${shift}px)`;
    }
    reset() {
        this.holder.style.transform = '';
    }
}