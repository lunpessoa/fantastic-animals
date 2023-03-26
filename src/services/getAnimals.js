import animalsJSON from '../json/animals.json';

export default async function getAnimals() {
  const animalsResponse = await fetch(animalsJSON);
  const json = await animalsResponse.json();
  return json;
}
