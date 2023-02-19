import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import "./Navigation.css"


class Navigation extends Component{
    render(){
        return(
        
        
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
              <Navbar.Brand> 
                <Link className='logo' to="/">
                  Adopter <i className="fa-solid fa-paw"></i>
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                  <Nav.Link >
                    <Link className='link' to="/account">Profil</Link>
                  </Nav.Link>
                  

                  <Nav.Link >
                    <Link className='link' to="/search">Wyszukaj</Link>
                  </Nav.Link>

                  <Nav.Link >
                    <Link className='link' to="/login">Wyloguj</Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
}
export default Navigation