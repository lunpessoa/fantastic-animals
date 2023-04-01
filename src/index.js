import SmoothScroll from '@/scripts/modules/smooth-scroll';
import Accordion from '@/scripts/modules/accordion';
import TabNav from '@/scripts/modules/tab-navigator';
import Modal from '@/scripts/modules/modal';
import Tooltip from '@/scripts/modules/tooltip.js';

import initAnimaScroll from '@/scripts/modules/scroll-animation.js';
import initDropdown from '@/scripts/modules/dropdown.js';
import initMobileMenu from '@/scripts/modules/mobile-menu.js';
import initWorktime from '@/scripts/modules/worktime.js';

import FetchAnimals from '@/scripts/fetch-animals.js';
import FetchBitcoin from '@/scripts/fetch-bitcoin.js';

import '@/styles/index.css';

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

FetchAnimals();
FetchBitcoin();
