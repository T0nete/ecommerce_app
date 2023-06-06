import { Link } from 'react-router-dom'
import { HeartIcon, MenuIcon, ShoppingCartIconBlack } from '../Icons'
import { SCREEN_SIZE, type ScreenSizeState } from '../../types/constants'

interface Props {
  showMenu: boolean
  isSmallScreen: ScreenSizeState
  handleOpenMenu?: () => void
}

const Header: React.FC<Props> = ({ showMenu, isSmallScreen, handleOpenMenu }) => {
  return (
    <div className="w-full h-14 border-b-2 p-4 items-center  justify-center">
        <div className='flex flex-row justify-between'>
            <div
                onClick={() => { if (handleOpenMenu != null) handleOpenMenu() }}
                className={`${(isSmallScreen === SCREEN_SIZE.XSMALL && showMenu) ? 'cursor-pointer' : 'invisible'}`}
            >
                <MenuIcon />
            </div>
            <div className='flex flex-row'>
                <Link to='/'>
                    <p className='font-semibold text-lg'>Home</p>
                </Link>
            </div>
            <div className='flex flex-row gap-2'>
                <Link to={'/wishlist'}>
                    <div className='flex flex-row'>
                        <div className='px-1'>
                            <HeartIcon />
                        </div>
                        <p>Wishlist</p>
                    </div>
                </Link>
                <div className='flex flex-row'>
                    <Link to={'/cart'}>
                        <div className='flex flex-row'>
                            <div className='px-1'>
                                <ShoppingCartIconBlack />
                            </div>
                            <p>Cart</p>
                        </div>
                    </ Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
