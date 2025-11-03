import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      {/* Changed: use light theme */}
      <Navbar expand='lg' className='bg-body-tertiary' variant='light'>
        <Container fluid>
          {/* Brand */}
          <LinkContainer to='/'>
            <Navbar.Brand>
              EnglishEducation
              <img
                src={logo}
                alt='EnglishEducation'
                className='navbar-logo me-2'
              ></img>
            </Navbar.Brand>
          </LinkContainer>

          {/* Mobile toggle button */}
          <Navbar.Toggle aria-controls='navbarScroll' />

          {/* Collapsible nav section */}
          <Navbar.Collapse id='navbarScroll'>
            {/* Nav links & dropdown */}
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {/* Icons on the far right */}
              <Nav>
                <LinkContainer to='/cart'>
                  <Nav.Link>
                    <FaShoppingCart /> Cart
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <FaUser /> Sign In
                  </Nav.Link>
                </LinkContainer>
              </Nav>

              {/* Disabled link */}
            </Nav>

            {/* Right-side icons and search
            <Form className='d-flex me-3'>
              <Form.Control
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-success'>Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
