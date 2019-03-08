import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './navBar.css'
import {Image} from 'react-native-web';
import {Navbar} from 'react-bootstrap';
import SignIn from '../SignIn/SignIn'
import {AuthenticationConsumer} from '../AuthenticationContext/AuthenticationContext'

// style={{ textDecoration: 'none', paddingRight:'220px', color:'black'}}>

class NavigationAuth extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
            <Navbar.Form pullRight>
                <Link className="navLink d-none d-md-inline" to="/team">Team</Link>
                <Link className="navLink welcome" to="#"><SignIn /> </Link>
            </Navbar.Form>
      </div>
          )
      }
  }

export default NavigationAuth
