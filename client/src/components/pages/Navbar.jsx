

import React, {useState} from 'react';
import { Component } from 'react';
import  { Navbar, Nav,Form, FormControl, Button} from 'react-bootstrap'
import Login from './Login';



 function PNavbar() {
  const [login, isloggedin] = useState('Login')
    return (  
        <>
    <Navbar bg="warning" expand="lg">
  <Navbar.Brand href="home"
       i class="fas fa-barcode" >.proveit-19</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >  
    </Nav>
      <Nav.Link bg='light' href='/login'>Login</Nav.Link>
  </Navbar.Collapse>
</Navbar>
      </>
)}

export default PNavbar