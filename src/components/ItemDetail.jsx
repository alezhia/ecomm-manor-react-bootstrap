import {Link, useParams } from "react-router-dom"
import {useState} from "react"
import { products } from '../utils/mock-data/products'
import { slugIt } from "../utils/createSlug"
import { IconContext } from "react-icons"
import {BsCartPlus,BsHeart,BsArrowLeftCircle} from "react-icons/bs"
import "../styles/itemDetail.css"
const ItemDetail=()=>{
    const slugId=useParams()
    const slug=useParams();
    const [indice,setIndice]=useState(0)
    const item = products.find(elem=>slugId.slugId==slugIt(elem.title))
    const itemImages=item.images
    return(
        <div style={{backgroundColor:"#f5f5f5", minHeight:"90vh"}} className="p-5 w-auto d-flex flex-lg-row flex-column justify-content-between">
            <div style={{backgroundColor:"#f5f5f5"}} className="p-1 w-lg-50 w-100 d-flex justify-content-between flex-lg-row flex-column-reverse">
                <div className="w-auto p-1 d-flex flex-lg-column flex-lg-nowrap flex-row flex-wrap justify-content-around">
                    {itemImages.map(elem=>
                        <img className="itemDetail-miniImages p-1" style={{cursor:"pointer", width:"5rem", height:"5rem", border:"1px solid #101010"}} src={elem} onClick={()=>{setIndice(itemImages.indexOf(elem))}}/>
                    )}
                </div>
                <div className="my-lg-0 my-3 w-100 d-flex justify-content-center align-items-center">
                    <img className="w-50 h-auto" style={{width:"5rem", border:"2px solid #d69c4f"}} src={item.images[indice]}/>
                </div>
            </div>
            <div style={{border:"2px dashed #d69c4f"}} className="my-lg-0 my-3 w-lg-50 w-100 d-flex flex-column justify-content-evenly align-items-center text-center">
                <div className="d-flex p-2 flex-column w-100 h-100 justify-content-between align-items-center text-center ">
                    <h2 className="h-25 d-flex justify-content-center align-items-center">
                        {item.title}
                    </h2>
                    <div className="w-100 h-100 d-flex flex-column justify-content-around align-items-center">
                        <p>{item.description}</p>
                        <p>Precio USD: ${item.price}</p>
                        <p>Stock: {item.stock} Un.</p>
                    </div>
                </div>
                <IconContext.Provider value={{className:"react-icons"}}>
                    <div className="d-flex justify-content-evenly p-1 w-100">
                        <div className="btn-react-opt">
                            <Link className="btn-detalles w-100 m-1 p-2 border text-decoration-none" to={`/${slug.slug}`}>
                                <BsArrowLeftCircle className="btn-react-icons"/>
                            </Link>
                            <div className="btn-back">Atras</div>
                        </div>
                        <div className="btn-react-opt">
                            <Link className="btn-detalles w-100 m-1 p-2 border text-decoration-none" to={"/"}>
                                <BsHeart className="btn-react-icons "/>
                            </Link>
                            <div className="btn-addFav">Favoritos</div>
                        </div>
                        <div className="btn-react-opt">
                            <Link className="btn-detalles react-iconsCart w-100 m-1 p-2 border text-decoration-none" to={"/"}>
                                <BsCartPlus className="btn-react-icons" />
                            </Link>
                            <div className="btn-addCart">Carrito</div>
                        </div>
                    </div>
                </IconContext.Provider>
            </div>    
        </div>
    )
}
export default ItemDetail