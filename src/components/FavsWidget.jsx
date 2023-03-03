import "../styles/FavsWidget.css"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"
import { useContext } from "react"
import { FavsContext } from "../contexts/FavsContext"

const FavsWidget = ({ item }) => {
    const { isInFavs, addItem, removeItem } = useContext(FavsContext)

    return (
        <div className="text-end me-2 mb-1 fs-3">
            {isInFavs(item.id) ? (
                <button
                    onClick={() => {
                        removeItem(item.id)
                    }}
                    className="bg-transparent p-0 border-0 favs-widget"
                >
                    <MdFavorite />
                </button>
            ) : (
                <button
                    onClick={() => {
                        addItem(item)
                    }}
                    className="bg-transparent p-0 border-0 favs-widget"
                >
                    <MdFavoriteBorder />
                </button>
            )}
        </div>
    )
}

export default FavsWidget
