import { useParams } from "react-router-dom"
import { products } from '../utils/mock-data/products'
import { slugIt } from "../utils/createSlug"
const ItemDetail=()=>{
    const slugId=useParams()
    const item = products.find(elem=>slugId.slugId==slugIt(elem.title))
    return(
        <>
            <h1>Hola, soy el producto {item.title}</h1>

            
        </>
    )
}
export default ItemDetail