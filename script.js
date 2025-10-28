document.addEventListener('DOMContentLoaded', () => {
  // Animate skill progress bars when the skills section enters the viewport
  const skillsSection = document.querySelector('.skills-section');
  const progressBars = document.querySelectorAll('.skill-progress');

  if (skillsSection && progressBars.length) {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          progressBars.forEach(bar => {
            const value = bar.getAttribute('data-width');
            if (value) {
              bar.style.width = value + '%';
            }
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.35 });

    io.observe(skillsSection);
  }

  // Scroll-to-top button behavior if present
  const toTop = document.getElementById('scroll-to-top');
  if (toTop) {
    const toggleVisibility = () => {
      if (window.scrollY > 250) {
        toTop.classList.add('visible');
      } else {
        toTop.classList.remove('visible');
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
});


