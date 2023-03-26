import initScrollSuave from './scripts/scroll-smooth.js';
import initAnimaScroll from './scripts/scroll-animation.js';
import initAccord from './scripts/accordion.js';
import initTabNav from './scripts/tab.js';
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

  initScrollSuave();
  initAnimaScroll();
  initAccord();
  initTabNav();
  initModal();
  initTooltip();
  initDropdown();
  initMobileMenu();
  initWorktime();
  initFetchAnimals();
  initFetchBitcoin();
}
init();
