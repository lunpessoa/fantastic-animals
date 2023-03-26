import getBitcoin from '../services/getBitcoin.js';

export default async function initFetchBitcoin() {
  try {
    const bitcoin = await getBitcoin();
    const bitcoinField = document.querySelector('.btc-preco');

    bitcoinField.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
  } catch (e) {
    console.error(e);
  }
}
