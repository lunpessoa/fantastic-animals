export default function initModal() {
  const btnOpen = document.querySelector('[data-modal="open"]');
  const btnClose = document.querySelector('[data-modal="close"]');
  const container = document.querySelector('[data-modal="container"]');

  if (!btnOpen && !btnClose && !container) return;

  function toggleModal(event) {
    event.preventDefault();
    container.classList.toggle('active');
  }

  btnOpen.addEventListener('click', toggleModal);
  btnClose.addEventListener('click', toggleModal);
  container.addEventListener('click', function (event) {
    if (event.target === this) toggleModal(event);
  });
}
