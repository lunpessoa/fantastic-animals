export default class Modal {
  constructor(btnOpen, btnClose, container) {
    this.btnOpen = document.querySelector(btnOpen);
    this.btnClose = document.querySelector(btnClose);
    this.container = document.querySelector(container);

    this.initEvent = this.initEvent.bind(this);
  }

  init() {
    if (!this.btnOpen && !this.btnClose && !this.container) return;
    this.addEvents();
  }

  addEvents() {
    this.btnOpen.addEventListener('click', this.initEvent);
    this.btnClose.addEventListener('click', this.initEvent);
    this.container.addEventListener('click', (e) => {
      if (e.target === this.container) this.initEvent(e);
    });
  }

  initEvent(event) {
    event.preventDefault();
    this.toggleModal();
  }

  toggleModal() {
    this.container.classList.toggle('active');
  }
}
