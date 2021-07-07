import React from 'react'
import UserNavbar from './userPages/UserNavbar'
import ErrorPage from './pages/ErrorPage'
import Table from './userPages/Table'
import {BrowserRouter as Router, Switch, Route, NavLink} from 
'react-router-dom';
import '../App.scss'


function UserApp() {
    return (
        <Router>
            <Switch>
                <UserNavbar/>
                <Table path='/data'/>
            </Switch>
        </Router>
    )
}
export default UserApp