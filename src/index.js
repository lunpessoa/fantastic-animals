import SmoothScroll from './scripts/smooth-scroll';
import Accordion from './scripts/accordion';
import TabNav from './scripts/tab-navigator';
import Modal from './scripts/modal';
import Tooltip from './scripts/tooltip.js';

import initAnimaScroll from './scripts/scroll-animation.js';
import initDropdown from './scripts/dropdown.js';
import initMobileMenu from './scripts/mobile-menu.js';
import initWorktime from './scripts/worktime.js';
import initFetchAnimals from './scripts/fetch-animals.js';
import initFetchBitcoin from './scripts/fetch-bitcoin.js';

import './styles/index.css';

import body from './index.html';

const contentBody = document.createElement('div');
contentBody.innerHTML = body;

document.body.innerHTML = contentBody.innerHTML;

document.documentElement.className += ' js';

const smoothScroll = new SmoothScroll("[data-scroll='smooth']  a[href^='#']");
smoothScroll.init();

const accordion = new Accordion("[data-anime='accordion']  dt");
accordion.init();

const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
tabNav.init();

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initAnimaScroll();
initDropdown();
initMobileMenu();
initWorktime();
initFetchAnimals();
initFetchBitcoin();
