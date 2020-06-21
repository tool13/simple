export function Grain(el) {
    /**
    * Options
    */
    this.patternSize = 150;
    this.patternScaleX = 1;
    this.patternScaleY = 1;
    this.patternRefreshInterval = 3; // 8
    this.patternAlpha = 15; // int between 0 and 255,
    /**
    * Create canvas
    */
    this.canvas = el;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.scale(this.patternScaleX, this.patternScaleY);
    /**
    * Create a canvas that will be used to generate grain and used as a
    * pattern on the main canvas.
    */
    this.patternCanvas = document.createElement('canvas');
    this.patternCanvas.width = this.patternSize;
    this.patternCanvas.height = this.patternSize;
    this.patternCtx = this.patternCanvas.getContext('2d');
    this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
    this.patternPixelDataLength = this.patternSize * this.patternSize * 4; // rgba = 4
    this.resize = this.resize.bind(this);
    this.loop = this.loop.bind(this);
    this.frame = 0;
    window.addEventListener('resize', this.resize);
    this.resize();
    window.requestAnimationFrame(this.loop);
}

Grain.prototype.resize = function resize() {
    this.canvas.width = window.innerWidth * devicePixelRatio;
    this.canvas.height = window.innerHeight * devicePixelRatio;
};

Grain.prototype.update = function update() {
    var patternPixelDataLength = this.patternPixelDataLength;
    var patternData = this.patternData;
    var patternAlpha = this.patternAlpha;
    var patternCtx = this.patternCtx;
    // put a random shade of gray into every pixel of the pattern
    for (var i = 0; i < patternPixelDataLength; i += 4) {
        // const value = (Math.random() * 255) | 0;
        var value = Math.random() * 255;
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
    }
    patternCtx.putImageData(patternData, 0, 0);
};

Grain.prototype.draw = function draw() {
    var ctx = this.ctx;
    var patternCanvas = this.patternCanvas;
    var canvas = this.canvas;
    var viewHeight = this.viewHeight;
    var width = canvas.width;
    var height = canvas.height;
    // clear canvas
    ctx.clearRect(0, 0, width, height);
    // fill the canvas using the pattern
    ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
    ctx.fillRect(0, 0, width, height);
};

Grain.prototype.loop = function loop() {
    // only update grain every n frames
    var shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
    if (shouldDraw) {
        this.update();
        this.draw();
    }
    window.requestAnimationFrame(this.loop);
};
