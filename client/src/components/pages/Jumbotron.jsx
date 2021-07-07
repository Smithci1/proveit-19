import React from 'react'
import Register from './Register'
import {Jumbotron, Button, Nav} from 'react-bootstrap'
import PNavbar from './Navbar'

function Jumbo() {
    return (
      <>
      <PNavbar />
<Jumbotron className="jumbo" > 
<i class="fas fa-barcode"/> 
<h1>Prove it!</h1>
<p>
 Hello, we are here to make things a little easier for you!, with proveit-19 you can now keep track of all your vaccinated
 employees
</p>
<p>
  <Nav.Link href="/register">
  <Button variant="warning" >Register</Button>
  </Nav.Link>
</p>
</Jumbotron> 
</> 
)
}
export default Jumbo