document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to the Severance Blog');

    // Background effect
    const hero = document.querySelector('.hero');
    let hue = 0;
    setInterval(() => {
        hue = (hue + 1) % 360;
        hero.style.background = `linear-gradient(to bottom, hsl(${hue}, 20%, 10%), #333)`;
    }, 100);
});
