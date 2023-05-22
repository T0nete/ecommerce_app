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
  }, [])

  useEffect(() => {
    if (product !== null) {
      setSelectedImg(product.imgs[0])
      const imgsList = product.imgs.filter((img) => img !== product.imgs[0])
      setImgsList(imgsList)
    }
  }, [product])

  const handleImgClick = (image: string) => {
    if (product === null) return
    const imgsList = product?.imgs.filter((img) => img !== image)
    setImgsList(imgsList)
    setSelectedImg(image)
  }

  return (
    <div className='mx-auto w-10/12'>
        {loading && <p>Loading...</p>}
        {(product !== null) && (
          <div className='flex flex-row p-2'>
            <div className='flex flex-col w-5/12 '>
                <img
                  src={selectedImg}
                  alt={product.name}
                  className='rounded-xl object-contain shadow-lg'
                />
                <div className='flex flex-row justify-evenly p-2'>
                  {
                    imgsList.map((img) => {
                      return (
                        <img
                          key={img}
                          src={img}
                          alt={product.name}
                          onClick ={() => { handleImgClick(img) }}
                          className='shadow-xl h-28 rounded-lg object-contain cursor-pointer' />
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
