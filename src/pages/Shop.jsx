import { useParams } from 'react-router-dom'
import { ItemListContainer } from '../containers'

const Shop = () => {
    const { slug } = useParams()
    
    return (
        <ItemListContainer slugCategory={slug} />
    )
  }
  
  export default Shop