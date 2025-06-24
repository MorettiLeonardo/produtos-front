import { Route, Routes } from 'react-router-dom'

import Home from '../screens/Home'

const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default PagesRoutes
