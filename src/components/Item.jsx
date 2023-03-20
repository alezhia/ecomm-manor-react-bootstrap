import "../styles/items.css"
import { slugIt } from "../utils/createSlug"
import {Link} from "react-router-dom"
import { Carousel } from "./index"
const Item = ({item}) => {
    return(
        <div className="card text-center h-100" style={{width: "18rem"}}>
            <Carousel images={item.images} alt={item.title}/>
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title m-2">{item.title}</h5>
                <p className="card-text  m-1">Marca: {item.brand}</p>
                <p className="card-text  m-1">Precio: USD {item.price}</p>
                <p className="card-text  m-1">Existencias: {item.stock}</p>
                <Link className="text-decoration-none btn-detalles" to={`/item/${slugIt(item.title)}`}>
                    <span>Detalles</span>
                </Link>
            </div>
        </div>
    )
}
export default Item