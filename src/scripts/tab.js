export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  if (!tabMenu.length && !tabContent.length) return;

  function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove(content.dataset.anime);
    });
    const tabAnime = tabContent[index].dataset.anime;
    tabContent[index].classList.add(tabAnime);
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => activeTab(index));
  });
  tabMenu[0].click();
}
