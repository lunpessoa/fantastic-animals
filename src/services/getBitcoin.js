const url = 'https://blockchain.info/ticker';

export default async function getBitcoin() {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
