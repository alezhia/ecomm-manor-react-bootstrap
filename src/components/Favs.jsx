import "../styles/Favs.css"
import { FavsContext } from "../contexts/FavsContext"
import { useContext } from "react"
import Image from "react-bootstrap/Image"
import { FaTrashAlt } from "react-icons/fa"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Favs = ({ item }) => {
    const { removeItem } = useContext(FavsContext)

    return (
        <Row className="d-flex align-items-center m-0">
            <Col md={2} className="ps-0">
                <Image
                    src={item.image}
                    alt={item.title}
                    style={{ width: "10rem" }}
                />
            </Col>
            <Col md={7}>
                <h4 className="description-title mb-0 ms-5">{item.title}</h4>
            </Col>
            <Col md={2}>
                <h4 className="mb-0 text-center">{item.price}</h4>
            </Col>
            <Col md={1} className="pe-0">
                <FaTrashAlt
                    className="trash d-flex align-items-center"
                    onClick={() => removeItem(item.id)}
                />
            </Col>
        </Row>
    )
}

export default Favs
