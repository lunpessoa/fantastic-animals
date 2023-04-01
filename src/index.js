import SmoothScroll from './scripts/smooth-scroll';
import Accordion from './scripts/accordion';
import TabNav from './scripts/tab-navigator.js';

import initAnimaScroll from './scripts/scroll-animation.js';
import initModal from './scripts/modal.js';
import initTooltip from './scripts/tooltip.js';
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

function init() {
  document.documentElement.className += ' js';

  const smoothScroll = new SmoothScroll("[data-scroll='smooth']  a[href^='#']");
  smoothScroll.init();

  const accordion = new Accordion("[data-anime='accordion']  dt");
  accordion.init();

  const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
  tabNav.init();

  initAnimaScroll();
  initModal();
  initTooltip();
  initDropdown();
  initMobileMenu();
  initWorktime();
  initFetchAnimals();
  initFetchBitcoin();
}
init();
