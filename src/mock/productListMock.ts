import jacket1 from '../assets/img/jacket1_1.jpg'
import jacket2 from '../assets/img/jacket1_2.jpg'
import jacket3 from '../assets/img/jacket1_3.jpg'
import jacket4 from '../assets/img/jacket1_4.jpg'
import jacket5 from '../assets/img/jacket1_5.jpg'
import { Product } from '../types/productTypes'

export const productMock: Product = {
    id: 1,
    name: 'Jacket',
    imgs: [
        jacket1,
        jacket2,
        jacket3,
        jacket4,
        jacket5,
    ],
    price: 100,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam sapien aliquet nunc, nec ultricies nisl nunc quis nunc.',
    category: 'Clothes',
}