import NumberAnimation from '@/scripts/modules/number-animation';
import getAnimals from '@/services/getAnimals.js';

export default async function FetchAnimals() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  try {
    const animals = await getAnimals();
    const numbersGrid = document.querySelector('.numeros-grid');

    animals.forEach((animal) => {
      const animalDiv = createAnimal(animal);
      numbersGrid.appendChild(animalDiv);
    });

    const numberAnimation = new NumberAnimation('[data-number]', '.numeros', 'active');
    numberAnimation.init();
  } catch (e) {
    console.error(e);
  }
}
