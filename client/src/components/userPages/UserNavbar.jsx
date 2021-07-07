/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import  { Navbar, Nav,Form, FormControl, Button, Dropdown,DropdownButton} from 'react-bootstrap'




 function UserNavbar() {
   
    return (  
        <>
    <Navbar bg="warning" expand="lg">
  <Navbar.Brand 
       i class="fas fa-barcode" >.proveit-19</Navbar.Brand>
  <Navbar.Toggle aria-controls="navb'
  arScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >  
    </Nav>
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
  </Navbar.Collapse>
</Navbar>
      </>
)}

export default UserNavbar