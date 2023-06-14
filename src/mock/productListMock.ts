import jacket1 from '../assets/img/jacket1_1.jpg'
import jacket2 from '../assets/img/jacket1_2.jpg'
import jacket3 from '../assets/img/jacket1_3.jpg'
import jacket4 from '../assets/img/jacket1_4.jpg'
import jacket5 from '../assets/img/jacket1_5.jpg'
import shirt1 from '../assets/img/jacket2_1.jpg'
import shirt2 from '../assets/img/jacket2_2.jpg'
import shirt3 from '../assets/img/jacket2_3.jpg'
import shirt4 from '../assets/img/jacket2_4.jpg'
import shirt5 from '../assets/img/jacket2_5.jpg'
import trousers1 from '../assets/img/jacket3_1.jpg'
import trousers2 from '../assets/img/jacket3_2.jpg'
import trousers3 from '../assets/img/jacket3_3.jpg'
import trousers4 from '../assets/img/jacket3_4.jpg'
import trousers5 from '../assets/img/jacket3_5.jpg'

import { type Product } from '../types/productTypes'

export const productMock: Product = {
  id: 1,
  name: 'Jacket',
  imgs: [
    jacket1,
    jacket2,
    jacket3,
    jacket4,
    jacket5
  ],
  price: 100,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam sapien aliquet nunc, nec ultricies nisl nunc quis nunc.',
  categoryId: 5
}

export const productListMock: Product[] = [
  {
    id: 1,
    name: 'Jacket',
    imgs: [
      jacket1,
      jacket2,
      jacket3,
      jacket4,
      jacket5
    ],
    price: 100,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam sapien aliquet nunc, nec ultricies nisl nunc quis nunc.',
    categoryId: 5
  },
  {
    id: 2,
    name: 'Shirt',
    imgs: [
      shirt1,
      shirt2,
      shirt3,
      shirt4,
      shirt5
    ],
    price: 50,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam sapien aliquet nunc, nec ultricies nisl nunc quis nunc.',
    categoryId: 1
  },
  {
    id: 3,
    name: 'Trousers',
    imgs: [
      trousers1,
      trousers2,
      trousers3,
      trousers4,
      trousers5
    ],
    price: 70,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam sapien aliquet nunc, nec ultricies nisl nunc quis nunc.',
    categoryId: 6
  }
]
