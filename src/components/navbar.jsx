import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/Logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
  const location = useLocation(); // Get the current path
  const [activeLink, setActiveLink] = useState(location.pathname); // Set the initial active link based on the current path

  useEffect(() => {setActiveLink(location.pathname); }, [location]);

  return (
    <Navbar expand="lg" className="fixed bg-white font-poppins">
      <Container className="flex justify-between">
        <Navbar.Brand>
        <Link to="/">
          <img  src={logo} style={{ height: '50px' }} alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex items-center text-base bg-white font-medium space-x-4">
            <Nav.Link
              as={Link}
              to="/"
              className={`ml-[16px] ${activeLink === '/home' ? '!text-[#00be54] !underline' : '!text-[#333333]'}`}
              style={{ transition: 'none', textDecoration: 'none', backgroundColor: 'transparent', color: 'inherit' }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/aboutus"
              className={`ml-[16px] ${activeLink === '/aboutus' ? '!text-[#00be54] !underline' : '!text-[#333333]'}`}
              style={{ transition: 'none', textDecoration: 'none', backgroundColor: 'transparent', color: 'inherit' }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/chit"
              className={`ml-[16px] ${activeLink === '/chit' ? '!text-[#00be54] !underline' : '!text-[#333333]'}`}
              style={{ transition: 'none', textDecoration: 'none', backgroundColor: 'transparent', color: 'inherit' }}
            >
              Chits
            </Nav.Link>
            <NavDropdown
              title={<span style={{ color: activeLink.includes('chit-groups') ? '#00be54' : '#333333' }}>Chit Groups</span>}
              id="basic-nav-dropdown"
              className={`${activeLink.includes('chit-groups') ? '!text-[#00be54]' : '!text-[#333333]'}`}
            >
              <NavDropdown.Item
                as={Link}
                to="/chit-groups-action1"
                className={activeLink === '/chit-groups-action1' ? '!text-[#00be54] !underline' : '!text-[#333333]'}
                style={{ transition: 'none', textDecoration: 'none', backgroundColor: 'transparent', color: 'inherit' }}
              >
                Action
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/chit-groups-action2"
                className={activeLink === '/chit-groups-action2' ? '!text-[#00be54] !underline' : '!text-[#333333]'}
                style={{ transition: 'none', textDecoration: 'none', backgroundColor: 'transparent', color: 'inherit' }}
              >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/chit-groups-action3"
                className={activeLink === '/chit-groups-action3' ? '!text-[#00be54] !underline' : '!text-[#333333]'}
                style={{ transition: 'none', textDecoration: 'none', backgroundColor: 'transparent', color: 'inherit' }}
              >
                Something
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/contactus"
              className={activeLink === '/contactus' ? '!text-[#00be54] !underline' : '!text-[#333333]'}
              style={{ transition: 'none', textDecoration: 'none', backgroundColor: 'transparent', color: 'inherit' }}
            >
              Contact Us
            </Nav.Link>
            <button
              className="font-poppins font-semibold bg-[#00be54] rounded-full text-white h-[40px] w-[200px]"
              style={{ transition: 'none' }}
            >
              Become an Agent
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;




