const overlapWrapper = document.querySelector('.showcase .bg');

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

(function() {
    const DASH = document.querySelector('.dashboard');
    const W    = 1372, H = 883;
    const descalingFactor = 0.07;
    const verticalShiftPx = 120;

    DASH.style.position         = 'absolute';
    DASH.style.left             = '50%';
    DASH.style.top              = '50%';
    DASH.style.transformOrigin  = '650px 10px';

    function rescale() {
        const sx = window.innerWidth  / W;
        const sy = window.innerHeight / H;
        const s  = Math.min(sx, sy) - descalingFactor;

        DASH.style.transform =
            `translate(-50%, calc(-50% - ${verticalShiftPx}px)) ` +
            `scale(${s})`;
    }

    window.addEventListener('resize', rescale);
    rescale();
})();

