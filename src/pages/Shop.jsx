import { useParams } from 'react-router-dom'
import { ItemListContainer } from '../containers'

const Shop = () => {
    const { slugCategory } = useParams()
    
    return (
        <ItemListContainer slugCategory={slugCategory} />
    )
  }
  
  export default Shop