document.addEventListener("DOMContentLoaded", function() {
    // Lightbox functionality for Gallery page
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
  
    galleryItems.forEach(item => {
      item.addEventListener('click', function() {
        lightbox.style.display = "block";
        lightboxImg.src = this.src;
      });
    });
  
    // Close the lightbox when clicking the close button
    closeBtn.addEventListener('click', function() {
      lightbox.style.display = "none";
    });
  
    // Also close when clicking outside the lightbox image
    lightbox.addEventListener('click', function(e) {
      if(e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  });
  