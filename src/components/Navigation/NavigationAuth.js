import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './navBar.css'
import {Image} from 'react-native-web';
import {MenuItem, Navbar, Nav, NavItem,FormGroup, FormControl, Button, NavDropdown} from 'react-bootstrap';
import SignOut from '../SignOut/SignOut'
import {AuthenticationConsumer} from '../AuthenticationContext/AuthenticationContext'

// style={{ textDecoration: 'none', paddingRight:'220px', color:'black'}}>

class NavigationAuth extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <AuthenticationConsumer>
          {(auth) => (
            <Navbar.Form pullRight>
                <Link className="navLink" to="/view">View</Link>
                <Link className="navLink" to="/create">Create</Link>
                <Link className="navLink" to="/team">Team</Link>
                <Link className="navLink welcome" to="#">Welcome {(auth.authUser.displayName ? auth.authUser.displayName.split(" ")[0] + " ": "")}<SignOut /> </Link>
            </Navbar.Form>
          )}
        </AuthenticationConsumer>
      </div>
          )
      }
  }

export default NavigationAuth
