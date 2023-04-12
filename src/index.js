import AnimateScroll from '@/scripts/modules/animate-scroll';
import SmoothScroll from '@/scripts/modules/smooth-scroll';
import Accordion from '@/scripts/modules/accordion';
import TabNav from '@/scripts/modules/tab-navigator';
import Modal from '@/scripts/modules/modal';
import Tooltip from '@/scripts/modules/tooltip';
import Dropdown from '@/scripts/modules/dropdown';
import MobileMenu from '@/scripts/modules/mobile-menu';
import Worktime from '@/scripts/modules/worktime';
import { SliderNav } from '@/scripts/modules/slider';

import FetchAnimals from '@/scripts/fetch-animals';
import FetchBitcoin from '@/scripts/fetch-bitcoin';

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

const animateScroll = new AnimateScroll("[data-anime='scroll']");
animateScroll.init();

const dropdown = new Dropdown('[data-dropdown]');
dropdown.init();

const mobileMenu = new MobileMenu("[data-menu='button']", "[data-menu='list']");
mobileMenu.init();

const worktime = new Worktime('[data-week]');
worktime.init();

FetchAnimals();
FetchBitcoin();

const slider = new SliderNav('[data-slider="content"]', '[data-slider="wrapper"]', {
  indicators: { el: '.slider__indicators', activeClass: 'indicators__item--active' },
});
slider.setConfig({ speed: 1.5 });
