import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../../hooks/useProduct'
import { type ProductId } from '../../types/productTypes'

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { product, loading, getProduct } = useProduct()

  const [selectedImg, setSelectedImg] = React.useState<string>('')
  const [imgsList, setImgsList] = React.useState<string[]>([])


  useEffect(() => {
    getProduct(Number(id))
  }, [id])

  useEffect(() => {
    if (product !== null) {
      setSelectedImg(product.imgs[0])
      const imgsList = product.imgs.filter((img) => img !== selectedImg)
      setImgsList(imgsList)
    }
  }, [product])

  return (
    <div className='mx-auto w-4/5 bg-slate-400'>
        {loading && <p>Loading...</p>}
        {(product !== null) && (
            <div className='flex flex-row'>
                <div className='flex flex-col w-5/12'>
                    <img src={selectedImg} alt={product.name} className='rounded-xl' />
                    <div className='flex flex-row'>
                      {
                        imgsList.map((img) => {
                          return (
                            <div key={img} className='h-32'>
                              <img src={img} alt={product.name} className='rounded-xl' />
                            </div>
                          )
                        })
                      }
                    </div>
                </div>
                <div className='flex flex-col w-7/12'>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            </div>
        )}
    </div>
  )
}

export default ProductDetail
