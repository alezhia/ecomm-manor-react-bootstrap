
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Carousel } from "./components/carousel"
import Navbar from './components/Navbar'
import { Home, Shop, Cart, Page404 } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Carousel />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:slugProduct' element={<Home />} />
        <Route path='/tienda/:slugCategory' element={<Shop />} />
        <Route path='/carrito' element={<Cart />} />
        <Route path="*" element={<Page404/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App