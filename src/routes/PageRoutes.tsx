import { Route, Routes } from 'react-router-dom'

import Home from '../screens/Home'
import ProductDetails from '../screens/ProductDetails'

const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  )
}

export default PagesRoutes
