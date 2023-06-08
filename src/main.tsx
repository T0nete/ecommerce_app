import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import ProductDetail from './components/ProductDetail/ProductDetail'
import WishList from './components/WishList/WishList'
import Cart from './components/Cart/cart'
import Checkout from './components/Checkout/Checkout.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
)
