import logo from "../assets/manor-logotype.png"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Dropdown from "react-bootstrap/Dropdown"
import { Link, NavLink } from "react-router-dom"
import { parentCategories } from "../utils/mock-data/parentCategories"
import { categories } from "../utils/mock-data/categories"
import "../styles/NavBar.css"
import Image from "react-bootstrap/Image"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import { useAuth0 } from "@auth0/auth0-react"

const NavBar = () => {
    const { isAuthenticated } = useAuth0()
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
                                                            ? "activo text-decoration-none text-reset"
                                                            : "text-decoration-none text-reset"
                                                    }
                                                >
                                                    <NavDropdown.Item href="/">
                                                        {cat.title}
                                                        {cat.icon && (
                                                            <Image
                                                                src={cat.icon}
                                                                width="30px"
                                                                thumbnail
                                                                fluid
                                                                className="ms-2 border-0"
                                                            />
                                                        )}
                                                    </NavDropdown.Item>
                                                </NavLink>
                                            )
                                    )}
                                </div>
                            </NavDropdown>
                        ))}
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="carrito">
                            CartWidget
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="favoritos">
                            Favoritos
                        </Nav.Link>
                    </Nav>
                    {isAuthenticated ? <LogoutButton /> : <LoginButton />}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
