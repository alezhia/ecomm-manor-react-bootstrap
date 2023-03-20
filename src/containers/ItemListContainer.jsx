import { useState, useEffect } from "react"
import { products } from '../utils/mock-data/products'
import { categories } from '../utils/mock-data/categories'
import { Breadcrumb } from '../components'
import {Item} from "../components"

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
    }, [slugCategory])

    return (
        <div className="d-flex flex-column w-100 p-2 h-auto justify-content-center align-items-center">
            <Breadcrumb categoryTitle={category.title} />
            <ul className="d-flex w-100 h-auto flex-wrap justify-content-start">
                {
                    items.map(item => (
                        <li key={item.id} className="list-unstyled m-1">
                            <Item item={item}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ItemListContainer