export default function initWorktime() {
  const worktime = document.querySelector('[data-week]');
  const week = Array.from(JSON.parse(worktime.dataset.week));
  const hour = Array.from(JSON.parse(worktime.dataset.hour));

  const now = new Date();
  const weekNow = now.getDay();
  const hourNow = now.getHours();

  const isOpen = week.includes(weekNow) && hourNow >= hour[0] && hourNow < hour[1];

  if (isOpen) worktime.classList.add('open');
}
