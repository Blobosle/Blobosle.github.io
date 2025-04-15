const overlapWrapper = document.querySelector('.showcase .overlap-wrapper');

document.addEventListener('mousemove', (e) => {
    const xOffset = (e.clientX - window.innerWidth / 2) / 50;
    const yOffset = (e.clientY - window.innerHeight / 2) / 50;

    overlapWrapper.style.setProperty('--offsetX', `${xOffset}px`);
    overlapWrapper.style.setProperty('--offsetY', `${yOffset}px`);
});

document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    if (content) {
        content.classList.remove('pre-animation');
        content.classList.add('animate-entry');
    }
});

