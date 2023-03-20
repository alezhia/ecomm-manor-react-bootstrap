import "../styles/items.css"
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
                <a href="#" className="text-decoration-none" >
                    <button className="btn-detalles">
                        <span>
                            Detalles
                        </span>
                    </button>
                </a>
            </div>
        </div>
    )
}
export default Item