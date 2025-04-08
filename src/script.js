document.addEventListener("mousemove", function(event) {
    const aboutSection = document.querySelector(".about");

    const offsetX = (event.clientX / window.innerWidth - 0.5) * 15;
    const offsetY = (event.clientY / window.innerHeight - 0.5) * 15;

    aboutSection.style.backgroundPosition =
        `calc(50% + ${offsetX}px) calc(50% + ${offsetY}px)`;
});

document.addEventListener('DOMContentLoaded', () => {
  const firstElement = document.querySelector('.about *');
  if (firstElement) {
    firstElement.style.animationDelay = "0ms";
    firstElement.classList.add('animate-entry');
  }
});

