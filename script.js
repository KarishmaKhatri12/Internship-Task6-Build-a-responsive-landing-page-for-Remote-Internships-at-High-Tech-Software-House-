// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.className = 'scroll-to-top';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form validation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const name = document.getElementById('fullName');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const response = document.getElementById('formMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email.value)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate success
    response.textContent = "Thank you! Your application has been submitted.";
    form.reset();
  });
});
