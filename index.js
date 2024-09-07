const planetContainer = document.querySelector('.planet-container');
const planetCount = 5;

for (let i = 0; i < planetCount; i++) {
  const planet = document.createElement('div');
  planet.classList.add('planet');
  planet.style.width = `${Math.random() * 50}px`;
  planet.style.height = `${Math.random() * 50}px`;
  planet.style.top = `${Math.random() * 100}%`;
  planet.style.left = `${Math.random() * 100}%`;
  planetContainer.appendChild(planet);
}