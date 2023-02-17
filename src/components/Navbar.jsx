import logo from '../assets/manor-logotype.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import {parentCategories} from '../utils/mock-data/parentCategories';
import {categories} from '../utils/mock-data/categories';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <Navbar className='navbar navbar-dark bg-dark' expand="lg">
    <Container>
      <Navbar.Brand href="#home"><img src={logo} alt=" Manor Logo " width="90px" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {
            parentCategories.map(pCat => (
              <NavDropdown key={pCat.id} title={pCat.title.toUpperCase()} id="collasible-nav-dropdown">
                {
                  categories.map(cat => pCat.categories.includes(cat.id) && <NavDropdown.Item key={cat.id} href={cat.slug} className={cat.priority ? 'activo' : ''}>{cat.title}{cat.icon}</NavDropdown.Item>)
                }
              </NavDropdown>
            ))
          }
        </Nav>
        <Nav>
        <Nav.Link as={Link} to="cart">CartWidget</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar