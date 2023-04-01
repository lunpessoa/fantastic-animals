export default function outsideClick(element, eventType, callback) {
  const html = document.documentElement;

  function handleOutsideClick(event) {
    if (element.contains(event.target)) return;
    html.removeEventListener(eventType, handleOutsideClick);
    callback();
  }

  if (element.classList.contains('active')) {
    setTimeout(() => html.addEventListener(eventType, handleOutsideClick));
  }
}
