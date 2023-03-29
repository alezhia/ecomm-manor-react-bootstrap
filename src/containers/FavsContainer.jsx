import { FavsContext } from "../contexts/FavsContext"
import { useContext } from "react"
import Favs from "../components/Favs"
import Container from "react-bootstrap/Container"

const FavsContainer = () => {
    const { favsItems, clearFavs } = useContext(FavsContext)

    return (
        <Container className="d-flex flex-column">
            <h1 className="text-center my-4">Favoritos</h1>
            <button
                onClick={clearFavs}
                className="ms-auto me-5 bg-white fs-6 text-primary border-0 text-decoration-underline"
            >
                Eliminar Favoritos
            </button>
            <ul
                style={{ border: "2px dashed #d69c4f" }}
                className="d-flex flex-column p-0"
            >
                {favsItems.map((item) => (
                    <li key={item.id} className="list-unstyled m-auto">
                        <Favs item={item} />
                    </li>
                ))}
            </ul>
        </Container>
    )
}

export default FavsContainer
