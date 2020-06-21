'use stirct';

// set height screen
import {setFullHeight} from './fix_height.js';
setFullHeight();
window.addEventListener('resize', setFullHeight);

// grain animation
import {Grain} from './noize.js';
const el = document.querySelector('.js-noize').firstElementChild;
//const grain = new Grain(el);

// navigation
import './navigation.js';

// menu
import './menu.js';

// form
import './form.js';
