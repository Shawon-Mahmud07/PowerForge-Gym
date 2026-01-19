const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

//About us-Slider dots interaction
// Select all necessary elements
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

/** Updates the active slide and navigation dot based on the provided index. */
function updateSlider(index) {
  // Remove active class from current slide and dot
  document.querySelector(".slide.active").classList.remove("active");
  document.querySelector(".dot.active").classList.remove("active");

  // Add active class to the new selected slide and dot
  slides[index].classList.add("active");
  dots[index].classList.add("active");

  console.log(`Switched to slide: ${index + 1}`);
}

// Add click event listeners to dots for direct navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider(currentIndex);
  });
});

// Navigate to the next slide
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider(currentIndex);
});

// Navigate to the previous slide
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider(currentIndex);
});

// --- Animation Logic for Trainer Cards (Scroll-in effect) ---
const initScrollAnimations = () => {
  const trainerCards = document.querySelectorAll(".trainer-card");
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
        observer.unobserve(card);
      }
    });
  }, observerOptions);

  trainerCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    revealOnScroll.observe(card);
  });
};

// Initialize all functions after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initSocialInteractions();
});
