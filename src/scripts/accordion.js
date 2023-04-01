export default class Accordion {
  constructor(list) {
    this.list = document.querySelectorAll(list);
    this.activeClass = 'active';
  }

  init() {
    if (!this.list.length) return;
    this.toogleAccordion(this.list[0]);
    this.addEvent();
  }

  addEvent() {
    this.list.forEach((item) => {
      item.addEventListener('click', () => this.toogleAccordion(item));
    });
  }

  toogleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }
}
