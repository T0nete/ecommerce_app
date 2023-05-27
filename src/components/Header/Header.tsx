import { Link } from 'react-router-dom'
import { HeartIcon, MenuIcon, ShoppingCartIconBlack } from '../Icons'
import { useAppSelector } from '../../hooks/store'

const Header: React.FC = () => {
  const isSmallScreen = useAppSelector(state => state.screenSize)

  return (
    <div className="w-full h-14 border-b-2 p-4 items-center  justify-center">
        <div className='flex flex-row justify-between'>
            <div className={`${isSmallScreen ? '' : 'invisible'}`}>
                <MenuIcon />
            </div>
            <div className='flex flex-row'>
                <Link to='/'>
                    <p className='font-semibold text-lg'>Home</p>
                </Link>
            </div>
            <div className='flex flex-row gap-2'>
                <p className='flex flex-row'>
                    <div className='px-1'>
                        <HeartIcon />
                    </div>
                    Wishlist
                </p>
                <p className='flex flex-row'>
                    <div className='px-1'>
                        <ShoppingCartIconBlack />
                    </div>
                    Cart
                </p>
            </div>
        </div>
    </div>
  )
}

export default Header
