import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from '../images/always-doe.jpg';

const BackgroundImage = {
  width: "50px",
  height: "50px",
  backgroundImage: `url(${Image})`,
  backgroundSize: 'cover',
  padding: "0",
  margin: "0",
};


const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" >
        <Navbar.Brand style={BackgroundImage} >
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link>
          <Link to='/home'>Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to='/characters'>Characters</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to='/spells'>Spells</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to='/houses'>Houses</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to='/sortingHat'>Sorting Hat</Link>
        </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar;

{/*<img className="navbar-icon" src={ Image } />*/}
/*
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
          <Link style={navStyle} to='/about'>
            <li>About</li>
          </Link>
          <Link style={navStyle} to='/shop'>
            <li>Shop</li>
          </Link>
        </ul>
      </nav>

*/