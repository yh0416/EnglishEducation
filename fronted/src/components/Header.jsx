// import { Nav, Navbar, Container } from 'react-bootstrap';
// import { FaShoppingCart, FaUser } from 'react-icons/fa';

// const Header = () => {
//   return (
//     <header>
//       <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
//         <Container>
//           <Navbar.Brand href='/'>EnglishEducation</Navbar.Brand>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' />
//           <Navbar.Collapse id='basic-navbar-nav'>
//             <Nav className='ms-auto'>
//               <Nav.Link href='/cart'>
//                 <FaShoppingCart />
//                 Cart
//               </Nav.Link>
//               <Nav.Link>
//                 <FaUser />
//                 Sign In
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;

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
const Header = () => {
  return (
    <header>
      {/* Changed: use light theme */}
      <Navbar expand='lg' className='bg-body-tertiary' variant='light'>
        <Container fluid>
          {/* Brand */}
          <Navbar.Brand href='/'>
            EnglishEducation
            <img
              src={logo}
              alt='EnglishEducation'
              className='navbar-logo me-2'
            ></img>
          </Navbar.Brand>

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
                <Nav.Link href='/cart'>
                  <FaShoppingCart /> Cart
                </Nav.Link>
                <Nav.Link href='/login'>
                  <FaUser /> Sign In
                </Nav.Link>
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
