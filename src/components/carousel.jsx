import {useState} from "react"
const Carousel = ({images, alt}) => {

    const [indice,setIndice] = useState(0)

    const cambioIndice=(valor)=>{
        if (valor){
            indice<images.length-1?setIndice(indice+1):setIndice(0)
        }else{
            indice>0?setIndice(indice-1):setIndice(images.length-1)
        }
    }

    return(
        <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
            <div className="carousel-inner">
                <div className="carousel-item active p-5" style={{height:"350px"}}>
                    <img src={images[indice]} className="w-100 h-100 d-flex justify-content-center align-items-center" alt={"foto"+alt}/>
                    {images.length>1&&<div className="d-flex justify-content-evenly align-items-center w-100">
                        {images.map((elem)=>{
                            if (images.indexOf(elem)!==indice){
                                return(<div> - </div>)
                            }else{
                                return(<div> + </div>)
                            }
                        })}
                    </div>}
                </div>
            </div>
            {images.length>1
            &&<>
                <button onClick={()=>{cambioIndice(false)}} className="carousel-control-prev" style={{backgroundColor:"#d69c4f"}} type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button onClick={()=>{cambioIndice(true)}} className="carousel-control-next" style={{backgroundColor:"#d69c4f"}} type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </>}
        </div>
    )
}
export default Carousel