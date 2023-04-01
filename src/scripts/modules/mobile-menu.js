import outsideClick from './outside-click.js';

export default function initMobileMenu() {
  const menuBtn = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");

  if (!menuBtn) return;

  function openMenu(event) {
    menuBtn.classList.add('active');
    menuList.classList.add('active');

    outsideClick(menuList, event.type, () => {
      menuBtn.classList.remove('active');
      menuList.classList.remove('active');
    });
  }

  ['click', 'touchstart'].forEach((eventType) => menuBtn.addEventListener(eventType, openMenu));
}
