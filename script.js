const menu = document.querySelector('.menu-btn');
const links = document.querySelector('.nav-links');

menu?.addEventListener('click', () => {
  links.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => links.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .project-card, .skill-card, .timeline-item, .education-list article').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
