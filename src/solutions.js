const carousel = () => {
  let currentSlide = 0;
  const indicators = document.querySelectorAll(".indicator");

  // Function to show a specific slide
  function showSlide(index) {
    const carousel = document.querySelector(".carousel");

    carousel.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("bg-black", i === index);
      indicator.classList.toggle("bg-gray-400", i !== index);
    });
    currentSlide = index;
  }

  // Set the first indicator as active on page load
  document.addEventListener("DOMContentLoaded", () => {
    showSlide(0);
  });

  // Auto-switch slides every 3 seconds
  setInterval(() => {
    currentSlide =
      (currentSlide + 1) % document.querySelectorAll(".carousel-item").length;
    showSlide(currentSlide);
  }, 1500);
};

carousel();
