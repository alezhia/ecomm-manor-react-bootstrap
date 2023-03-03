import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton"
import Profile from "./components/Profile"
import Navbar from './components/Navbar'
import { Home, Shop, Cart, Page404 } from './pages'


const App = () => {
  const { isAuthenticated } = useAuth0()
  return (
    <BrowserRouter>
      <Navbar />

     {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
        
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