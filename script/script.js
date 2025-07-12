document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll("section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
  
    fadeElements.forEach((el) => {
      el.classList.add("fade-in");
      observer.observe(el);
    });
  });
  