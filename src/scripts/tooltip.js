export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    tooltip: null,
    handleEvent(event) {
      this.tooltip.style.top = `${event.pageY}px`;
      this.tooltip.style.left = `${event.pageX + 30}px`;
    },
  };

  const onMouseLeave = {
    tooltip: null,
    element: null,
    handleEvent() {
      this.tooltip.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function createTooltip(element) {
    const tooltip = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltip.classList.add('tooltip');
    tooltip.innerText = text;
    document.body.appendChild(tooltip);
    return tooltip;
  }

  function onMouseOver() {
    const tooltip = createTooltip(this);

    onMouseLeave.element = this;
    onMouseLeave.tooltip = tooltip;
    this.addEventListener('mouseleave', onMouseLeave);

    onMouseMove.tooltip = tooltip;
    this.addEventListener('mousemove', onMouseMove);
  }
  tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', onMouseOver);
  });
}
