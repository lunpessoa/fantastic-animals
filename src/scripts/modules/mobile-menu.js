import outsideClick from './outside-click';

export default class MobileMenu {
  constructor(button, list, activeClass, events) {
    this.button = document.querySelector(button);
    this.list = document.querySelector(list);
    this.activeClass = activeClass !== undefined ? activeClass : 'active';
    this.events = events !== undefined ? events : ['touchstart', 'click'];

    this.toggle = this.toggle.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  init() {
    if (!this.button && !this.list) return this;
    this.addEvent();
    return this;
  }

  addEvent() {
    this.events.forEach((eventType) => this.button.addEventListener(eventType, this.toggle));
  }

  isActive() {
    return (
      this.button.classList.contains(this.activeClass) ||
      this.list.classList.contains(this.activeClass)
    );
  }

  toggle(event) {
    event.preventDefault();
    if (this.isActive()) {
      this.close();
      return;
    }
    this.open(event);
  }

  open(event) {
    this.button.classList.add(this.activeClass);
    this.list.classList.add(this.activeClass);

    outsideClick(this.list, event.type, () => {
      this.close();
    });
  }

  close() {
    this.button.classList.remove(this.activeClass);
    this.list.classList.remove(this.activeClass);
  }
}
