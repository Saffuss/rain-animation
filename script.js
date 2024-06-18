const rainContainer = document.getElementById('rain-container');
const numDrops = 200;

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = `${Math.random() * 100}vw`;
    raindrop.style.animationDuration = `${Math.random() * 2 + 0.5}s`;
    raindrop.style.animationDelay = `${Math.random() * 2}s`;
    rainContainer.appendChild(raindrop);
}

for (let i = 0; i < numDrops; i++) {
    createRaindrop();
}
