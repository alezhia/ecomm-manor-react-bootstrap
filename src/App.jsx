import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import { Home, Shop, Cart } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:slugProduct' element={<Home />} />
        <Route path='/tienda/:slugCategory' element={<Shop />} />
        <Route path='/carrito' element={<Cart />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App