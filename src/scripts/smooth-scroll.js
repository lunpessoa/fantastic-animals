export default class SmoothScroll {
  defaultOptions = {
    behavior: 'smooth',
    block: 'start',
  };

  constructor(links, options) {
    this.links = document.querySelectorAll(links);
    this.setOptions(options);

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  init() {
    if (!this.links.length) return this;
    this.addEvent();
    return this;
  }

  setOptions(options) {
    if (!options) {
      this.options = this.defaultOptions;
      return;
    }
    this.options = options;
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addEvent() {
    this.links.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }
}
