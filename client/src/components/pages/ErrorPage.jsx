import React from 'react'
import {Alert, Button} from 'react-bootstrap'
import  {useState} from 'react'

function ErrorPage() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap!</Alert.Heading>
          <p>
            This page does not exist, please return home and try again.
          </p>
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  }
  
 export default ErrorPage