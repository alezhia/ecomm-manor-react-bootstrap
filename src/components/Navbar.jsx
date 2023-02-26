import logo from "../assets/manor-logotype.png"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link, NavLink } from "react-router-dom"
import { parentCategories } from "../utils/mock-data/parentCategories"
import { categories } from "../utils/mock-data/categories"
import "../styles/NavBar.css"
import Image from "react-bootstrap/Image"

const NavBar = () => {
    return (
        <Navbar className="navbar navbar-dark bg-dark" expand="lg">
            <Container>
                <NavLink to={"/"}>
                    <img src={logo} alt=" Manor Logo " width="90px" />
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {parentCategories.map((pCat) => (
                            <NavDropdown
                                key={pCat.id}
                                title={pCat.title.toUpperCase()}
                            >
                                <div className="d-flex flex-column">
                                    {categories.map(
                                        (cat) =>
                                            pCat.categories.includes(
                                                cat.id
                                            ) && (
                                                <NavLink
                                                    key={cat.id}
                                                    to={cat.slug}
                                                    className={
                                                        cat.priority
                                                            ? "activo"
                                                            : ""
                                                    }
                                                >
                                                    {cat.title}
                                                    {cat.icon && (
                                                        <Image
                                                            src={cat.icon}
                                                            width="30px"
                                                            thumbnail
                                                            fluid
                                                            // roundedCircle
                                                            className="ms-2 border-0"
                                                        />
                                                    )}
                                                </NavLink>
                                            )
                                    )}
                                </div>
                            </NavDropdown>
                        ))}
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="cart">
                            CartWidget
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
