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

/**
 * Updates the slider UI by toggling active classes 
 * for both slides and navigation dots.
 * @param {number} index - The index of the slide to display.
 */
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