import "../styles/FavsWidget.css"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"
import { useContext } from "react"
import { FavsContext } from "../contexts/FavsContext"

const FavsWidget = ({ item }) => {
    const { favsItems, handlerFavs, isInFavs } = useContext(FavsContext)

    console.log(favsItems)

    return (
        <div className="text-end me-2 mb-1 fs-3">
            <button
                onClick={() => {
                    handlerFavs(item)
                }}
                className="bg-transparent p-0 border-0 favs-widget"
            >
                {isInFavs(item.id) ? <MdFavorite /> : <MdFavoriteBorder />}
            </button>
        </div>
    )
}

export default FavsWidget
