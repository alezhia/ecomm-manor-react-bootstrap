import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import { Home, Shop, Cart, Page404 } from './pages'
import { ItemDetail } from "./components"


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:slug' element={<Shop />} />
        <Route path='/:slug/:slugId' element={<ItemDetail />} />
        <Route path='/carrito' element={<Cart />} />
        <Route path="*" element={<Page404/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App