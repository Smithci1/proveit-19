import {BrowserRouter as Router, Switch, Route, NavLink} from 
'react-router-dom';
import React, {useState} from 'react'
import './App.scss';
import './components/styles/comp.css'
import PNavbar from './components/pages/Navbar'
import Register from './components/pages/Register'
import {Button} from 'react-bootstrap'
import Login from './components/pages/Login'
import Cards from './components/pages/Cards';
import Jumbo from './components/pages/Jumbotron';
import ErrorPage from './components/pages/ErrorPage'
import UserNavbar from './components/userPages/UserNavbar';


  
  
  

export default function App() {
const adminUser = {
  email: "proveit19", password: "provepass19"}
  const [user, setUser] = useState({name: "", email: "", password:""})
  const [error, setError] = useState("")
  
  
  const userLogout = () => {
    return (
      setUser({name: "", email: ""})
     
      
      );
    };
    const userLogin = (details) => {
      if (details.name === true && details.email === adminUser.email
        && details.password === adminUser.password) 
        return 
        console.log('you have succesfully logged in')
        setUser({
          name: details.name,
          email: details.email
        })

      }
      const newUser = (details) => {
        if (details.name === true && details.email === adminUser.email
          && details.password === adminUser.password) 
          return 
          console.log('you have succesfully logged in')
          setUser({
            name: details.name,
            email: details.email
          })
  
        }

    return (
      <Router>
    

        <Switch>
          <Route path='/home'>
           
            <Jumbo />
            <Cards />
          </Route>
          {/* {(user.email !== "") ? (
            <div className="welcome">
              <h2> Welcome, <span> {user.name}</span></h2>
              <Button>Logout</Button>
            </div>
          ) : (
            
            <Route href='/register' render={(props) => <Register {...props} newUser={newUser} error={error} exact />}  />
          )} */}
         
          {(user.email !== "" ) ? (
            <div className="welcome">
              <UserNavbar />
              <h2> Welcome, <span> {user.name}</span></h2>
              <Button onClick={userLogout}>Logout</Button>
            </div>
          ) : (
            
            <Route href='/user1' render={(props) => <Login {...props} userLogin={userLogin} error={error} exact />} />
          )}
          <Route path='*' exact>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    );
  }
