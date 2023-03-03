import { useState, createContext } from "react"

export const FavsContext = createContext()

const FavsContextProvider = ({ children }) => {
    const [favsItems, setFavsItems] = useState([])

    const handlerFavs = (item) => {
        isInFavs(item.id) ? removeItem(item.id) : addItem(item)
    }

    const isInFavs = (id) => favsItems.some((item) => item.id === id)

    const addItem = (item) => {
        setFavsItems([
            ...favsItems,
            {
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.images[0],
            },
        ])
    }

    const removeItem = (itemID) => {
        const newFavsItems = favsItems.filter((item) => item.id !== itemID)
        setFavsItems(newFavsItems)
    }

    const clearFavs = () => {
        setFavsItems([])
    }

    return (
        <FavsContext.Provider
            value={{
                favsItems,
                handlerFavs,
                isInFavs,
                addItem,
                removeItem,
                clearFavs,
            }}
        >
            {children}
        </FavsContext.Provider>
    )
}

export default FavsContextProvider
