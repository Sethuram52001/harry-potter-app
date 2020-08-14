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
    <Navbar bg="light" variant="light" >
        <Navbar.Brand href="#home" style={BackgroundImage} >
            {/*<img className="navbar-icon" src={ Image } />*/}
        </Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="characters">Characters</Nav.Link>
        <Nav.Link href="spells">Spells</Nav.Link>
        <Nav.Link href="houses">Houses</Nav.Link>
        <Nav.Link href="sortingHat">Sortin Hat</Nav.Link>
        </Nav>
    </Navbar>
    </div>
  )
}

export default NavigationBar;

/*
        <nav>
            <h3>NavBar</h3>
            <ul>
                <li><Link to="/characters" >Characters</Link></li>
                <li><Link to='/spells'>Spells</Link></li>
                <li><Link to='/houses'>Houses</Link></li>
                <li><Link to='/sortingHat'>Sorting Hat</Link></li>              
            </ul>
        </nav>
*/
 /* <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="announcements.html">Announcements</a>
      <a class="nav-item nav-link" href="winners-page.html">Winners</a>
      <a class="nav-item nav-link" href="registration-page.html">Registration</a>
      <a class="nav-item nav-link navbar-right" href="#">Login</a>
      <!--<li class="navbar-right"><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>-->
    </div>
  </div>*/