import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from './components'
import { Home, Shop, Cart, Page404 } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:slug' element={<Shop />} />
        <Route path='/carrito' element={<Cart />} />
        <Route path="*" element={<Page404/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App