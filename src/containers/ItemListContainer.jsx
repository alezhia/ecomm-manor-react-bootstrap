import { useState, useEffect } from "react"
import { products } from '../utils/mock-data/products'
import { categories } from '../utils/mock-data/categories'
import { Breadcrumb } from '../components'

const ItemListContainer = ({ slugCategory }) => {
    const [category, setCategory] = useState({})
    const [items, setItems] = useState([])

    const getCategoryDetails = (slug) => {
        return categories.find(item => item.slug === slug)
    }

    useEffect(() => {
        setItems(products.filter(item => item.categories.includes(category.id)))
    }, [category])
    
    useEffect(() => {
        setCategory(getCategoryDetails(slugCategory))
    }, [])

    return (
        <>
            <Breadcrumb categoryTitle={category.title} />
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>
                            <div>
                                <b>{item.title}</b><br />
                                Descripcion: {item.description}<br />
                                Marca: {item.brand}<br />
                                Precio: USD {item.price}<br />
                                Existencias: {item.stock}<br />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ItemListContainer