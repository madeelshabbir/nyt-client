import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import LOGO_SVG from '../assets/images/logo.svg'
import { NAV_LINKS } from '../fixtures/nav-links';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className='px-5'>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={LOGO_SVG}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {
              Object.keys(NAV_LINKS).map((key) => {
                return <Nav.Link key={key} as={NavLink} to={`/${key}`} className="nav-link mx-2">{NAV_LINKS[key]}</Nav.Link>
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
