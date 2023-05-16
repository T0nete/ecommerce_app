import {productMock} from '../../mock/productListMock'
import ShoppingCartIcon from '../Icons'

const ProductCard = () => {
    return (
        <div className="rounded-xl border-2 border-solid">
            <div className="flex flex-col justify-center items-center w-full">
                <img className='rounded-t-xl' src={productMock.imgs[1]} alt={productMock.name} />
                <div className='flex flex-col w-full p-2'>
                    <p className='font-bold text-lg'>{productMock.name}</p>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-col justify-start'>
                            <p className='font-semibold text-gray-400'>Price</p>
                            <p className='font-bold text-lg'>${productMock.price}</p>
                        </div>
                        <a className='cursor-pointer p-3 bg-blue-700 rounded-xl'>
                            <ShoppingCartIcon />
                        </a>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default ProductCard
