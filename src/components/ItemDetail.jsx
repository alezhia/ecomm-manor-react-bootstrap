import {Link, useParams } from "react-router-dom"
import {useState} from "react"
import { products } from '../utils/mock-data/products'
import { slugIt } from "../utils/createSlug"
import "../styles/itemDetail.css"
const ItemDetail=()=>{
    const slugId=useParams()
    const [indice,setIndice]=useState(0)
    const item = products.find(elem=>slugId.slugId==slugIt(elem.title))
    const itemImages=item.images
    return(
        <div style={{backgroundColor:"#101010", minHeight:"95vh"}} className="w-auto d-flex justify-content-between">
            <div style={{backgroundColor:"#f5f5f5"}} className="p-1 w-50 d-flex justify-content-between">
                <div className="w-auto p-1 d-flex flex-column justify-content-around">
                    {itemImages.map(elem=>
                        <img className="p-1" style={{cursor:"pointer", width:"5rem", border:"1px solid #101010"}} src={elem} onClick={()=>{setIndice(itemImages.indexOf(elem))}}/>
                    )}
                </div>
                <div className="item-detail-img-show w-100 d-flex justify-content-center align-items-center">
                    <img className="w-50 h-auto" style={{width:"5rem", border:"2px solid #d69c4f"}} src={item.images[indice]}/>
                </div>
            </div>
            <div style={{backgroundColor:"#d69c4f"}} className="w-50 d-flex flex-column justify-content-evenly align-items-center text-center">
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>Precio USD: ${item.price}</p>
                    <p>Stock: {item.stock} Un.</p>
                </div>
                <div className="d-flex p-1 w-100">
                    <Link className="btn-detalles w-50 mx-1 p-2 border text-decoration-none" to={"/"}>
                        <span>Volver</span>
                    </Link>
                    <Link className="btn-detalles w-50 mx-1 p-2 border text-decoration-none" to={"/"}>
                        <span>Comprar</span>
                    </Link>
                </div>
            </div>    
        </div>
    )
}
export default ItemDetail