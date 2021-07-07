import React from 'react'
import Login from './Login'
import {useState} from 'react'
import {Form, Col, Row} from 'react-bootstrap'

export default function Register({newUser, error}) {
  
    const [details, setDetails] = useState({ Lastname:'', Firstname:'', email: '', password: ''})
    
    const submitHandler = e => {
      e.preventDefault();
   
      newUser(details);
    }
  
      return (
        <Form  onClick={submitHandler} className='putty'>
  <Row>
    <Col>
      <Form.Control placeholder="First name"  type='text'onSubmit={e => setDetails({...details, Firstname: e.target.value})} value={details.Firstname}/>
      <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onSubmit={e => setDetails({...details, email: e.target.value})} value={details.email} />
  </Form.Group>
    </Col>
    <Col>
      <Form.Control placeholder="Last name" type='text'onSubmit={e => setDetails({...details, Lastname: e.target.value})} value={details.Lastname}/>
       <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  onSubmit={e => setDetails({...details, password: e.target.value})} value={details.password}/>
  </Form.Group>
    </Col>
  </Row>
     

        <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
        <p className="forgot-password text-right">
            Already registered <a href="/Login" component={Login}>log in?</a>
        </p>
    </Form>
        
    )
}

