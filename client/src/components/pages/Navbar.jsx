/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import  { Navbar, Nav,Form, FormControl, Button} from 'react-bootstrap'




 function navbar() {
    return (  
        <>
    <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="home">.proveit-19</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="Login">Login</Nav.Link>
      
      
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
      </>
)}

export default navbar