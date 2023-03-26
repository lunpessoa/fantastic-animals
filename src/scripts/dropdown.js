import outsideClick from './outside-click.js';

export default function initDropdown() {
  const dropdowns = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');

    outsideClick(this, event.type, () => {
      this.classList.remove('active');
    });
  }

  dropdowns.forEach((dropdown) => {
    ['touchstart', 'click'].forEach((eventType) =>
      dropdown.addEventListener(eventType, handleClick),
    );
  });
}
