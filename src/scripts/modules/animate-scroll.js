export default class AnimateScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * 0.6;

    this.animateScroll = this.animateScroll.bind(this);
  }

  init() {
    if (!this.sections.length) return this;
    this.addEvent();
    return this;
  }

  addEvent() {
    window.addEventListener('scroll', this.animateScroll);
  }

  animateScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add('active');
      } else if (section.classList.contains('active')) {
        section.classList.remove('active');
      }
    });
  }
}
