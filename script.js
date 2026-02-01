    // NAVBAR NAV BAR NAVBAR NAVBAR 

      document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const openIcon = document.getElementById("openIcon");
    const closeIcon = document.getElementById("closeIcon");

    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      openIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
    });
  });


//   NUMBERS NUMBERS NUMBERS NUMBERS

 document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
      const target = Number(counter.dataset.target);
      const suffix = counter.dataset.suffix || "";
      let count = 0;

      const duration = 1200; // total animation time (ms)
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = target / steps;

      const updateCounter = () => {
        count += increment;

        if (count < target) {
          counter.textContent = Math.floor(count);
          setTimeout(updateCounter, stepTime);
        } else {
          counter.textContent = target + suffix;
        }
      };

      updateCounter();
    });
  });


//   TESTIMONIAL TESTIMONIAL TESTIMONIAL TESTIMONIAL

  document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("sliderTrack");
    const slides = track.children;
    const dots = document.querySelectorAll(".dot");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    let index = 0;

    function updateSlider() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle("bg-blue-600", i === index);
        dot.classList.toggle("bg-gray-300", i !== index);
      });
    }

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      updateSlider();
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      updateSlider();
    });
  });