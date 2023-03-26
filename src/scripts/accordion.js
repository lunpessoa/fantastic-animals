export default function initAccord() {
  const accordList = document.querySelectorAll("[data-anime='accordion']  dt");
  const activeClass = 'active';
  if (!accordList.length) return;

  function activeAccord() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  accordList.forEach((dt) => {
    dt.addEventListener('click', activeAccord);
  });
  accordList[0].click();
}
