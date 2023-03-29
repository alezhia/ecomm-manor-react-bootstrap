import "../styles/FavsContainer.css"
import { FavsContext } from "../contexts/FavsContext"
import { useContext } from "react"
import Favs from "../components/Favs"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const FavsContainer = () => {
    const { favsItems, clearFavs } = useContext(FavsContext)

    return (
        <Container className="d-flex flex-column">
            <Row className="d-flex flex-row justify-content-center">
                <Col lg={10}>
                    <h1 className="text-center my-4">Favoritos</h1>
                    <button
                        onClick={clearFavs}
                        className="d-block ms-auto mb-2 bg-white fs-6 text-primary border-0 text-decoration-underline"
                    >
                        Eliminar Favoritos
                    </button>
                    <ul className="p-3" style={{ border: "2px solid #d69c4f" }}>
                        <Container className="fav-item d-flex flex-column gap-3 p-0">
                            {favsItems.map((item) => (
                                <li key={item.id} className="list-unstyled">
                                    <Favs item={item} />
                                </li>
                            ))}
                        </Container>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default FavsContainer
