export const FILTERSBY_TYPE = {
  PRICE: 1,
  SIZE: 2,
  COLOR: 3
}

export const SIZE_TYPE = {
  XS: 'XS',
  S: 'S',
  M: 'M',
  L: 'L',
  XL: 'XL'
}

export type SizeType = typeof SIZE_TYPE[keyof typeof SIZE_TYPE]
