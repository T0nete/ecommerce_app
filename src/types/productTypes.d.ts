export interface Product {
    id: number
    name: string
    imgs: string[]
    price: number
    description: string
    category: string
}

export interface ProductList {
    products: Product[]
}