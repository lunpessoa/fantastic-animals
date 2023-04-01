export default class NumberAnimation {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass || 'active';

    this.handleMutation = this.handleMutation.bind(this);
  }

  init() {
    if (!this.numbers.length && !this.observerTarget) return this;
    this.addMutationObserver();
    return this;
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animateNumbers();
    }
  }

  animateNumbers() {
    this.numbers.forEach((number) => this.constructor.increment(number));
  }

  static increment(number) {
    const total = +number.innerText;

    const increment = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      number.innerText = start;
      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }
}
