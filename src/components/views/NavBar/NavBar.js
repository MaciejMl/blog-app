import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg='primary' variant='dark' className='mt-4 mb-4 rounded'>
      <Container>
        <Nav>
          <Nav.Link as={NavLink} to='/'>
            blog-app
          </Nav.Link>
        </Nav>
        <Nav className='ms-auto'>
          <Nav.Link as={NavLink} to='/'>
            Home
          </Nav.Link>

          <Nav.Link as={NavLink} to='/category'>
            Categories
          </Nav.Link>

          <Nav.Link as={NavLink} to='/about'>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
