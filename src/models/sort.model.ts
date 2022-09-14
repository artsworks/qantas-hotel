export interface Sorts {
  price: SortDirection;
  star: SortDirection;
  review: SortDirection;
}

export enum SortDirection {
  ASC,
  DES,
}

export enum SortOptions {
  PRICE_ASC,
  PRICE_DES,
  STAR_ASC,
  STAR_DES,
  REVIEW_ASC,
  REVIEW_DES,
}

export const defaultSorting: Sorts = {
  price: SortDirection.DES,
  star: SortDirection.DES,
  review: SortDirection.DES,
};

export const defaultDropdownOption = [
  {
    key: SortOptions.PRICE_DES,
    value: SortOptions.PRICE_DES,
    text: 'Price high-low',
  },
  {
    key: SortOptions.PRICE_ASC,
    value: SortOptions.PRICE_ASC,
    text: 'Price low-high',
  },
];
