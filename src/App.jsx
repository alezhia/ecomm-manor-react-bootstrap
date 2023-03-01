import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton"
import Navbar from './components/Navbar'
import Profile from "./components/Profile"
import { Home, Shop, Cart, Page404 } from './pages'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
    <LoginButton />
    <LogoutButton />
    <Profile />
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