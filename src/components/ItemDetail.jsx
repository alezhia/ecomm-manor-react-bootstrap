import { useParams } from "react-router-dom"
import { products } from '../utils/mock-data/products'
const ItemDetail=()=>{
    const slugId=useParams()
    console.log(slugId.slug+" item detail")
    
    return(
        <>
            <h1>Hola</h1>
            
        </>
    )
}
export default ItemDetail