export default class TabNav {
  constructor(menu, content) {
    this.menu = document.querySelectorAll(menu);
    this.content = document.querySelectorAll(content);
  }

  init() {
    if (!this.menu.length && !this.content.length) return;
    this.activeTab(0);
    this.addEvent();
  }

  addEvent() {
    this.menu.forEach((item, index) => {
      item.addEventListener('click', () => this.activeTab(index));
    });
  }

  activeTab(index) {
    this.content.forEach((item) => {
      item.classList.remove(item.dataset.anime || 'active');
    });
    const tabAnime = this.content[index].dataset.anime || 'active';
    this.content[index].classList.add(tabAnime);
  }
}
