import React, { useState } from 'react'
import {Form, Button, Nav, Dropdown, DropdownButton } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import UserNavbar from '../userPages/UserNavbar'
import Userapp from '../Userapp'
import '../styles/comp.css'

function loginButton() {
  return (
    <Button variant="primary" >
    Login
  </Button>
  )
}
function dropDown() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
  )
}


function Login({userLogin, error}) {
 const [details, setDetails] = useState({ name:'', email: '', password: ''})
 
 const submitHandler = e => {
   e.preventDefault();

   userLogin(details);
 }
    return (
      // isLoggedIn ?
      <div className='loggy'>
    <Form onClick={submitHandler}>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name"  onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
  </Form.Group> 

  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" 
    onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"  onSubmit={e => setDetails({...details, password: e.target.value})} value={details.password}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>
  <Nav.Link href='/user1' component={Login} >
  <Button variant="primary" 
  onClick={submitHandler}>
   Login
  </Button>
  </Nav.Link>
</Form>
</div>
// : 



    )
}
export default Login