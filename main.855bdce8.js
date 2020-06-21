parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OB9b":[function(require,module,exports) {
"use strict";function e(){let e=window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.setFullHeight=e;
},{}],"K08W":[function(require,module,exports) {
"use strict";function t(t){this.patternSize=150,this.patternScaleX=1,this.patternScaleY=1,this.patternRefreshInterval=3,this.patternAlpha=15,this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.ctx.scale(this.patternScaleX,this.patternScaleY),this.patternCanvas=document.createElement("canvas"),this.patternCanvas.width=this.patternSize,this.patternCanvas.height=this.patternSize,this.patternCtx=this.patternCanvas.getContext("2d"),this.patternData=this.patternCtx.createImageData(this.patternSize,this.patternSize),this.patternPixelDataLength=this.patternSize*this.patternSize*4,this.resize=this.resize.bind(this),this.loop=this.loop.bind(this),this.frame=0,window.addEventListener("resize",this.resize),this.resize(),window.requestAnimationFrame(this.loop)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Grain=t,t.prototype.resize=function(){this.canvas.width=window.innerWidth*devicePixelRatio,this.canvas.height=window.innerHeight*devicePixelRatio},t.prototype.update=function(){for(var t=this.patternPixelDataLength,e=this.patternData,a=this.patternAlpha,i=this.patternCtx,s=0;s<t;s+=4){var n=255*Math.random();e.data[s]=n,e.data[s+1]=n,e.data[s+2]=n,e.data[s+3]=a}i.putImageData(e,0,0)},t.prototype.draw=function(){var t=this.ctx,e=this.patternCanvas,a=this.canvas,i=(this.viewHeight,a.width),s=a.height;t.clearRect(0,0,i,s),t.fillStyle=t.createPattern(e,"repeat"),t.fillRect(0,0,i,s)},t.prototype.loop=function(){++this.frame%this.patternRefreshInterval==0&&(this.update(),this.draw()),window.requestAnimationFrame(this.loop)};
},{}],"ygTU":[function(require,module,exports) {
"use strict";function e(e,t=250){let u;return(...o)=>{clearTimeout(u),u=setTimeout(()=>{u=null,e(...o)},t)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.debounce=e;
},{}],"Jiwl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Listing=void 0;class t{constructor(t){this.viewport=t.querySelector(".js-list-viewport"),this.holder=this.viewport.querySelector(".js-list-holder"),this.lastElement=this.holder.children[this.holder.children.length-1],this.isEnd=null,this.observerOptions={root:this.viewport,threshold:.6},this.observerCallback=(t=>{t.forEach(t=>{this.isEnd=!(t.intersectionRatio>this.observerOptions.threshold)})}),this.observer=new IntersectionObserver(this.observerCallback,this.observerOptions),this.observer.observe(this.holder)}get currentPosition(){return Number(this.holder.style.transform.match(/-?\d+/g))}set currentPosition(t){this._currentPosition=t}get step(){return this.holder.querySelector(".js-list-item").clientHeight}set step(t){this._step=t}canMove(t){return!(t<0&&0===this.currentPosition)&&!(t>0&&this.isEnd)}move(t){let e;e=t<0?this.currentPosition+this.step:this.currentPosition-this.step,this.holder.style.transform=`translateY(${e}px)`}reset(){this.holder.style.transform=""}}exports.Listing=t;
},{}],"QjyC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkProjects=d,exports.moveProjects=f,exports.resetProjectsPosition=l;var e=require("./listing.js"),t=require("./debounce.js");const s={default:{bg:"#171718",text:"rgba(255,255,255,.5)"},mms:{bg:"#005996",text:"#fff"},heinz:{bg:"#b21110",text:"#fed696"},epidemia:{bg:"#0f1113",text:"#ffb800"},baskin:{bg:"#df3e9c",text:"#1f4c9a"}},o=document.querySelector(".js-projects"),r=o.querySelector(".js-projects-gallery"),c=o.querySelectorAll(".js-projects-item"),n=new e.Listing(o);function i(){a(this.dataset.name),this.classList.add("active"),this.addEventListener("mouseleave",u,{once:!0})}function u(e){a("default"),this.classList.remove("active")}function a(e){document.documentElement.style.setProperty("--projects-bg",s[e].bg),document.documentElement.style.setProperty("--projects-text",s[e].text)}function d(e){return n.canMove(e)}function f(e){n.move(e)}function l(e){n.reset()}c.forEach(e=>{e.addEventListener("mouseenter",i)});
},{"./listing.js":"Jiwl","./debounce.js":"ygTU"}],"moGU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.changeActiveLinks=c;var e=require("./listing.js"),t=require("./debounce.js");const n=document.querySelector(".js-menu"),s=n.querySelectorAll(".js-nav-link");function c(e){n.querySelector(".js-nav-link.active").classList.remove("active"),n.querySelector(`.js-nav-link[href="#${e}"]`).classList.add("active")}if(window.matchMedia("(max-width: 1023px)").matches){let c;const d=document.querySelector(".js-menu-toggle"),u=new e.Listing(n),v=document.querySelector(".js-slogan"),g=(0,t.debounce)(l);function o(e){g(e.deltaY)}function i(e){c=e.changedTouches[0].pageY,n.addEventListener("touchmove",a,{once:!0})}function a(e){let t=e.changedTouches[0].pageY-c;g(-t)}function l(e){u.canMove(e)&&u.move(e)}function r(){d.classList.contains("opened")&&u.reset(),d.classList.toggle("opened"),n.classList.toggle("opened"),v.classList.toggle("visually-hidden")}d.addEventListener("click",r),s.forEach(e=>{e.addEventListener("click",r)}),n.addEventListener("wheel",o),"ontouchstart"in window&&n.addEventListener("touchstart",i)}
},{"./listing.js":"Jiwl","./debounce.js":"ygTU"}],"JE6j":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.changeSections=o,exports.moveSections=void 0;var e=require("./debounce.js"),t=require("./projects.js"),n=require("./menu.js");const i=(0,e.debounce)(r);exports.moveSections=i;const s=document.querySelector(".js-slogan");function o(e){l().classList.remove("current"),e.classList.add("current"),(0,n.changeActiveLinks)(l().id),u("projects")&&(0,t.resetProjectsPosition)(),window.matchMedia("(max-width: 1023px)").matches&&(u("hero")?s.classList.remove("visually-hidden"):s.classList.add("visually-hidden"))}function r(e){u("projects")&&(0,t.checkProjects)(e)?(0,t.moveProjects)(e):c(e)||o(d(e))}function c(e){if(e<0&&!l().previousElementSibling||e>0&&!l().nextElementSibling)return!0}function u(e){return l().id===e}function d(e){return e<0?l().previousElementSibling:e>0?l().nextElementSibling:void 0}function l(){return document.querySelector(".js-section.current")}
},{"./debounce.js":"ygTU","./projects.js":"QjyC","./menu.js":"moGU"}],"vjt7":[function(require,module,exports) {
"use strict";var e=require("./section_change.js");let t;const n=document.querySelector(".js-sections"),c=document.querySelectorAll(".js-nav-link");function o(){if(!this.classList.contains("active")){const t=document.querySelector(this.getAttribute("href"));(0,e.changeSections)(t)}}function s(t){(0,e.moveSections)(t.deltaY)}function i(e){t=e.changedTouches[0].pageY,n.addEventListener("touchmove",a,{once:!0})}function a(n){let c=n.changedTouches[0].pageY-t;(0,e.moveSections)(-c)}c.forEach(e=>{e.addEventListener("click",o)}),"ontouchstart"in window&&n.addEventListener("touchstart",i),n.addEventListener("wheel",s);
},{"./section_change.js":"JE6j"}],"iyF3":[function(require,module,exports) {
const e=document.querySelector(".js-form"),t=e.querySelector(".js-upload-text"),n=e.querySelector(".js-upload-input");function o(e){n.files[0].name&&(t.textContent=n.files[0].name)}function u(e){e.preventDefault()}e.addEventListener("submit",u),n.addEventListener("change",o);
},{}],"KIzB":[function(require,module,exports) {
"use strict";var e=require("./fix_height.js"),i=require("./noize.js");require("./navigation.js"),require("./menu.js"),require("./form.js"),(0,e.setFullHeight)(),window.addEventListener("resize",e.setFullHeight);const r=document.querySelector(".js-noize").firstElementChild;
},{"./fix_height.js":"OB9b","./noize.js":"K08W","./navigation.js":"vjt7","./menu.js":"moGU","./form.js":"iyF3"}]},{},["KIzB"], null)
//# sourceMappingURL=../build/main.855bdce8.js.map