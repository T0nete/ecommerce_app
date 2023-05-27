import { HeartIcon, MenuIcon, ShoppingCartIconBlack } from '../Icons'

const Header: React.FC = () => {
  return (
        <div className="flex h-14 border-b-2 p-2 items-center">
            <div className='flex flex-row'>
                <MenuIcon />
                <div className='flex flex-row gap-2'>
                    <p className='flex flex-row'>
                        <HeartIcon />
                        Wishlist
                    </p>
                    <p className='flex flex-row'>
                        <ShoppingCartIconBlack />
                        Cart
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Header
