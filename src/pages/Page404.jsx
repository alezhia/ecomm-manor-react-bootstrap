import not_found from '../assets/page-not-found.png'

const Page404=()=>{
    return(
        <div className="p-2 w-100 h-auto d-flex justify-content-center align-items-center" style={{backgroundColor:"#d69c4f"}}>
            <img className="w-auto" src={not_found}/>
        </div>
    )
}
export default Page404