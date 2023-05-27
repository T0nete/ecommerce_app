import React, { useEffect, useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '../Icons'

interface Props {
  imgs: string[]
  isSmallScreen: boolean
}

const ImagesProduct: React.FC<Props> = ({ imgs, isSmallScreen }) => {
  const [selectedImg, setSelectedImg] = useState<string>('')
  const [imgsList, setImgsList] = useState<string[]>([])

  useEffect(() => {
    setSelectedImg(imgs[0])
    if (isSmallScreen) {
      setImgsList(imgs)
    } else {
      const imgsList = imgs.filter((img) => img !== imgs[0])
      setImgsList(imgsList)
    }
  }, [])

  const handleImgClick = (image: string): void => {
    // const imgsList = imgs.filter((img) => img !== image)
    setImgsList(imgs)
    setSelectedImg(image)
  }

  const handleLeftRightImgClick = (isRight: boolean): void => {
    let index = 0

    if (!isRight) {
      index = imgsList.indexOf(selectedImg) - 1
    } else {
      index = imgsList.indexOf(selectedImg) + 1
    }

    if (index >= 0 && index < imgsList.length) {
      setSelectedImg(imgsList[index])
    }
  }

  return (
    <div className='flex flex-col w-full'>
      <div className='relative'>
        <img
            src={selectedImg}
            alt={selectedImg}
            className='rounded-xl object-contain shadow-lg'
        />
        {
          isSmallScreen && (
            <div className='absolute inset-0 flex items-center justify-between p-1'>
              <button
                onClick={() => { handleLeftRightImgClick(false) }}
                className='flex items-center justify-center p-2'>
                <ArrowLeftIcon />
              </button>
              <button
                onClick={() => { handleLeftRightImgClick(true) }}
                className='flex items-center justify-center p-2'>
                <ArrowRightIcon />
              </button>
            </div>
          )
        }
      </div>
        {
          !isSmallScreen && (
            <div className='flex flex-row justify-between p-2'>
              {
                imgsList.map((img) => {
                  return (
                    selectedImg !== img &&
                    <img
                        key={img}
                        src={img}
                        alt={img}
                        onClick ={() => { handleImgClick(img) }}
                        className='shadow-xl h-14 md:h-16 lg:h-20 rounded-lg object-contain cursor-pointer' />
                  )
                })
              }
          </div>
          )
        }
    </div>
  )
}

export default ImagesProduct
