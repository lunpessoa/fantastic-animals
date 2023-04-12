import NumberAnimation from '@/scripts/modules/number-animation';
import getAnimals from '@/services/getAnimals';

export default async function FetchAnimals() {
  const numbersGrid = document.querySelector('.numeros-grid');

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  function putAnimals(animal) {
    const animalDiv = createAnimal(animal);
    numbersGrid.appendChild(animalDiv);
  }

  function animateNumbers() {
    const numberAnimation = new NumberAnimation('[data-number]', '.numeros', 'active');
    numberAnimation.init();
  }

  try {
    const animals = await getAnimals();
    animals.forEach((animal) => putAnimals(animal));
    animateNumbers();
  } catch (e) {
    console.error(e);
  }
}
