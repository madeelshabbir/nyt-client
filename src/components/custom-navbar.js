import { Container, Nav, NavLink, Navbar } from 'react-bootstrap';

import LOGO_SVG from '../assets/images/logo.svg'
import { NAV_LINKS } from '../fixtures/nav-links';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className='px-5'>
      <Container fluid>
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
                return <NavLink key={key} to={`/${key}`} className="nav-link mx-2">{NAV_LINKS[key]}</NavLink>
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
