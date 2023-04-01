export default class AnimateScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = Math.floor(window.innerHeight * 0.6);

    this.animate = this.animate.bind(this);
  }

  init() {
    if (!this.sections.length) return this;
    this.getDistances();
    this.animate();
    this.addEvent();
    return this;
  }

  addEvent() {
    window.addEventListener('scroll', this.animate);
  }

  getDistances() {
    this.distances = [...this.sections].map((section) => ({
      el: section,
      offset: section.offsetTop - this.windowHalf,
    }));
  }

  animate() {
    this.distances.forEach((dist) => {
      if (window.scrollY > dist.offset) {
        dist.el.classList.add('active');
      } else if (dist.el.classList.contains('active')) {
        dist.el.classList.remove('active');
      }
    });
  }

  stop() {
    window.removeEventListener('scroll', this.animate);
  }
}
