import { useEffect } from 'react'
import { useAppDispatch } from './store'
import { setScreenSize } from '../store/screenSize/slice'

const useResize = (): void => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const handleResize = (): void => {
      dispatch(setScreenSize(window.innerWidth))
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
}

export default useResize
