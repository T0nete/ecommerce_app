import { Link } from 'react-router-dom'
import { HeartIcon, MenuIcon, ShoppingCartIconBlack } from '../Icons'
import { useAppSelector } from '../../hooks/store'
import { SCREEN_SIZE } from '../../store/screenSize/slice'
import { useEffect } from 'react'

interface Props {
  showMenu: boolean
}

const Header: React.FC<Props> = ({ showMenu }) => {
  const isSmallScreen = useAppSelector(state => state.screenSize)
  useEffect(() => {
    console.log(isSmallScreen)
  }, [isSmallScreen])
  return (
    <div className="w-full h-14 border-b-2 p-4 items-center  justify-center">
        <div className='flex flex-row justify-between'>
            <div className={`${(isSmallScreen === SCREEN_SIZE.SMALL && showMenu) ? '' : 'invisible'}`}>
                <MenuIcon />
            </div>
            <div className='flex flex-row'>
                <Link to='/'>
                    <p className='font-semibold text-lg'>Home</p>
                </Link>
            </div>
            <div className='flex flex-row gap-2'>
                <div className='flex flex-row'>
                    <div className='px-1'>
                        <HeartIcon />
                    </div>
                    <p>Wishlist</p>
                </div>
                <div className='flex flex-row'>
                    <div className='px-1'>
                        <ShoppingCartIconBlack />
                    </div>
                    <p>Cart</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
