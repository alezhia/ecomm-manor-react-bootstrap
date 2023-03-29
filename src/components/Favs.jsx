import "../styles/Favs.css"
import { FavsContext } from "../contexts/FavsContext"
import { useContext } from "react"
import Image from "react-bootstrap/Image"
import { FaTrashAlt } from "react-icons/fa"

const Favs = ({ item }) => {
    const { removeItem } = useContext(FavsContext)

    return (
        <div className="d-flex gap-5 my-3">
            <Image
                src={item.image}
                alt={item.title}
                style={{ width: "10rem" }}
            />
            <div className="description d-flex align-items-center">
                <h4 className="description-title">{item.title}</h4>
                <h4>{item.price}</h4>
            </div>
            <FaTrashAlt
                className="trash h-auto"
                onClick={() => removeItem(item.id)}
            />
        </div>
    )
}

export default Favs
