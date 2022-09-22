import { Hotel } from '../models';

export function sortPriceAscending(a: Hotel, b: Hotel) {
  const priceA = a.offer.displayPrice.amount;
  const priceB = b.offer.displayPrice.amount;

  return priceA < priceB ? -1 : priceA > priceB ? 1 : 0;
}

export function sortPriceDescending(a: Hotel, b: Hotel) {
  const priceA = a.offer.displayPrice.amount;
  const priceB = b.offer.displayPrice.amount;

  return priceA < priceB ? 1 : priceA > priceB ? -1 : 0;
}
