export default function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll'] ");
  if (!sections.length) return;
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add('active');
      } else if (section.classList.contains('active')) {
        section.classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', animaScroll);
}
