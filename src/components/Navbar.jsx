import logo from '../assets/manor-logotype.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { parentCategories, categories } from '../utils/mock-data';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <Navbar className='navbar navbar-dark bg-dark' expand="lg">
    <Container>
      <Navbar.Brand><Link to='/'><img src={logo} alt=" Manor Logo " width="90px" /></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {
            parentCategories.map(pCat => (
              <NavDropdown key={pCat.id} title={pCat.title.toUpperCase()} id="collasible-nav-dropdown">
                {
                  categories.map(cat => 
                    pCat.categories.includes(cat.id)
                    &&  <NavDropdown.Item 
                          key={cat.id} 
                          href={cat.slug} 
                          className={cat.priority ? 'activo' : ''}>
                            {cat.title}
                            {cat.icon && <>&nbsp;&nbsp;<Image src={cat.icon} width="30px" thumbnail fluid roundedCircle /></>}
                        </NavDropdown.Item>)
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