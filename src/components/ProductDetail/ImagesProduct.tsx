import React, { useEffect, useState } from 'react'

interface Props {
  imgs: string[]
}

const ImagesProduct: React.FC<Props> = (images) => {
  const [selectedImg, setSelectedImg] = useState<string>('')
  const [imgsList, setImgsList] = useState<string[]>([])

  useEffect(() => {
    setSelectedImg(images.imgs[0])
    const imgsList = images.imgs.filter((img) => img !== images.imgs[0])
    setImgsList(imgsList)
  }, [])

  const handleImgClick = (image: string): void => {
    const imgsList = images.imgs.filter((img) => img !== image)
    setImgsList(imgsList)
    setSelectedImg(image)
  }

  return (
    <div className='flex flex-col w-5/12 '>
        <img
            src={selectedImg}
            alt={selectedImg}
            className='rounded-xl object-contain shadow-lg'
        />
        <div className='flex flex-row justify-evenly p-2'>
            {
                imgsList.map((img) => {
                  return (
                    <img
                        key={img}
                        src={img}
                        alt={img}
                        onClick ={() => { handleImgClick(img) }}
                        className='shadow-xl h-28 rounded-lg object-contain cursor-pointer' />
                  )
                })
            }
        </div>
    </div>
  )
}

export default ImagesProduct
