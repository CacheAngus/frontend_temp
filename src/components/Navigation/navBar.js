import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './navBar.css'
import {Image} from 'react-native-web';
import {MenuItem, Navbar, Nav, NavItem,FormGroup, FormControl, Button, NavDropdown} from 'react-bootstrap';
import SignOut from '../SignOut/SignOut'
import NavigationAuth from './NavigationAuth'
import {AuthenticationConsumer} from '../AuthenticationContext/AuthenticationContext'

// style={{ textDecoration: 'none', paddingRight:'220px', color:'black'}}>

class NavigationBar extends Component {
  constructor(){
    super()
  }

  render(){
    const NavigationNoAuth = () => (
      <Navbar.Form pullRight>
        <Link className="navLink" to="/team">Team</Link>
      </Navbar.Form>
    )
    //simple session management, pass down the authUser from App.js as a prop
    return(
  <AuthenticationConsumer>
        {auth => (
          <Navbar bg="dark" variant="dark">
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/#home" style={{color:'white'}}><img src={require('./images/images/lochness.png')} style={{width:70}} />
                      LOCKNESS
                  </Link>
                </Navbar.Brand>
              </Navbar.Header>
                {(auth.authUser ? <NavigationAuth /> : <NavigationNoAuth />)}
                {console.log(auth.authUser)}
                {console.log('consumer')}
              </Navbar>

              )}
    </AuthenticationConsumer>

      )}
  }

export default NavigationBar
