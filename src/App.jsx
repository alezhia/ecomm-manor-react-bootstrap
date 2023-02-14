import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import { Home, Shop, Cart } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
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