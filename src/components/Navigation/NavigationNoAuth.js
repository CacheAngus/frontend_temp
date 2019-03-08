import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './navBar.css'
import {Image} from 'react-native-web';
import {Navbar} from 'react-bootstrap';
import SignIn from '../SignIn/SignIn'
import {AuthenticationConsumer} from '../AuthenticationContext/AuthenticationContext'
import signInEmail from '../SignIn/SignInEmail'
// style={{ textDecoration: 'none', paddingRight:'220px', color:'black'}}>

class NavigationAuth extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
            <Navbar.Form pullRight>
                <Link className="navLink" to="/team">Team</Link>
                <Link className="navLink" to="/signup"> Sign Up</Link>
                <Link className="navLink welcome" to="#"><signInEMail/></Link>
                <Link className="navLink welcome" to="#"><SignIn/> </Link>
            </Navbar.Form>
      </div>
          )
      }
  }

export default NavigationAuth
