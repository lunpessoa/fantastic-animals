import outsideClick from './outside-click';

export default class Dropdown {
  constructor(dropdowns, activeClass, events) {
    this.dropdowns = document.querySelectorAll(dropdowns);
    this.activeClass = activeClass !== undefined ? activeClass : 'active';
    this.events = events !== undefined ? events : ['touchstart', 'click'];

    this.activeDropdown = this.activeDropdown.bind(this);
  }

  init() {
    if (!this.dropdowns.length) return this;
    this.addEvent();
    return this;
  }

  addEvent() {
    this.dropdowns.forEach((dropdown) => {
      this.events.forEach((eventType) => dropdown.addEventListener(eventType, this.activeDropdown));
    });
  }

  activeDropdown(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, event.type, () => {
      element.classList.remove(this.activeClass);
    });
  }
}
