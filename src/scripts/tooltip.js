export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  init() {
    if (!this.tooltips.length) return this;
    this.addEvent();
    return this;
  }

  addEvent() {
    this.tooltips.forEach((tooltip) => {
      tooltip.addEventListener('mouseover', this.onMouseOver);
    });
  }

  onMouseMove(event) {
    const tooltipWidth = this.tooltipBox.offsetWidth + 20;
    this.tooltipBox.style.top = `${event.pageY}px`;
    if (event.pageX + tooltipWidth > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - tooltipWidth}px`;
      return;
    }
    this.tooltipBox.style.left = `${event.pageX + 30}px`;
  }

  onMouseLeave(e) {
    const element = e.currentTarget;

    this.tooltipBox.remove();
    element.removeEventListener('mouseleave', this.onMouseLeave);
    element.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseOver(e) {
    const element = e.currentTarget;
    this.createTooltip(element);

    element.addEventListener('mouseleave', this.onMouseLeave);
    element.addEventListener('mousemove', this.onMouseMove);
  }

  createTooltip(element) {
    const tooltip = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltip.classList.add('tooltip');
    tooltip.innerText = text;
    document.body.appendChild(tooltip);
    this.tooltipBox = tooltip;
  }
}
