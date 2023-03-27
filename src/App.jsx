import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./components/Profile"
import Navbar from "./components/Navbar"
import { Home, Shop, Cart, Page404 } from "./pages"
import FavsContextProvider from "../src/contexts/FavsContext"
import { ItemDetail } from "./components"
import { Carousel } from "./components/Carousel"

const App = () => {
    const { isAuthenticated } = useAuth0()
    return (
        <FavsContextProvider>
            <BrowserRouter>
                <Navbar />
                <Carousel />
                {isAuthenticated &&  <Profile />}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:slug" element={<Shop />} />
                    <Route path='/:slug/:slugId' element={<ItemDetail />} />
                    <Route path="/carrito" element={<Cart />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </FavsContextProvider>
    )
}

export default App
