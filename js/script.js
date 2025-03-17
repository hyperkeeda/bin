document.addEventListener('DOMContentLoaded', function () {
    /* Mobile Hamburger Menu */
    const hamburger = document.querySelector('.hamburger') || document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links') || document.querySelector('.main-menu');
    
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
      });
    }
  
    /* Testimonial Slider Functionality */
    const slides = document.querySelectorAll('.testimonial-slide');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    let currentSlide = 0;
    let slideInterval;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      if (dots.length) {
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });
      }
      currentSlide = index;
    }
  
    function nextSlide() {
      let index = currentSlide + 1;
      if (index >= slides.length) index = 0;
      showSlide(index);
    }
  
    function prevSlide() {
      let index = currentSlide - 1;
      if (index < 0) index = slides.length - 1;
      showSlide(index);
    }
  
    if (slides.length) {
      showSlide(currentSlide);
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          nextSlide();
          resetInterval();
        });
      }
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          prevSlide();
          resetInterval();
        });
      }
      if (dots.length) {
        dots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
            showSlide(index);
            resetInterval();
          });
        });
      }
      slideInterval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
  
      function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
      }
    }
  
    /* FAQ Accordion (for Contact Page FAQ Section) */
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      if (question) {
        question.addEventListener('click', () => {
          const answer = item.querySelector('.faq-answer');
          if (answer) {
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            // Optionally toggle an active class to change arrow direction
            question.classList.toggle('active');
          }
        });
      }
    });
  });
  