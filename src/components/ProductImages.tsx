import { useEffect, useState } from 'react';
import item1 from '../assets/imgs/jacket_1.jpg';
import item2 from '../assets/imgs/jacket_2.jpg';
import item3 from '../assets/imgs/jacket_3.jpg';
import item4 from '../assets/imgs/jacket_4.jpg';
import item5 from '../assets/imgs/jacket_5.jpg';
import item6 from '../assets/imgs/jacket_6.jpg';


const ProductImages = () => {
    const [mainImg, setMainImg] = useState(item1)
    const [oldMainImg, setOldMainImg] = useState('')
    const [arrayImgs, setArrayImgs] = useState([item2, item3, item4, item5, item6])
    
    useEffect(() => {
        const newArray = arrayImgs.filter((img) => img !== mainImg)
        newArray.unshift(oldMainImg)
        setArrayImgs(newArray)
    }, [mainImg])

    const changeMainImg = (img) => {
        const aux = mainImg
        setMainImg(img)
        if (aux !== '') setOldMainImg(aux)
    }

    return (
        <div className='w-full sm:w-1/2 md:w-1/3 lg:1/3 xl:w-1/3 flex flex-col'>
            <img src={mainImg} alt="item" className='rounded-lg'/>
            <div className='flex flex-row'>
                {
                    arrayImgs.map(img => {
                        console.log(img)
                        return (
                            <img
                                key={img}
                                src={img}
                                alt='product'
                                className='rounded-lg object-contain p-1 w-auto sm:h-24 md:w-28 lg:h-32 xl:w-32 cursor-pointer
                                transform hover:scale-110 transition duration-200 ease-in-out'
                                onClick={() => changeMainImg(img)}
                            />
                    )}) 
                }
            </div>
        </div> 
    )
}

export default ProductImages