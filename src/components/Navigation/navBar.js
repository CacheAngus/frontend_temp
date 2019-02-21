import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './navBar.css'
import {Image} from 'react-native-web';
import {MenuItem, Navbar, Nav, NavItem,FormGroup, FormControl, Button, NavDropdown} from 'react-bootstrap';
import SignOut from '../SignOut/SignOut'

// style={{ textDecoration: 'none', paddingRight:'220px', color:'black'}}>

class NavigationBar extends Component {
  constructor(){
    super()
  }

  render(){
    const NavigationAuth = () => (
      <Navbar.Form pullRight>
          <Link className="navLink" to="/view">View</Link>
          <Link className="navLink" to="/create">Create</Link>
          <Link className="navLink" to="/team">Team</Link>
          <Link className="navLink welcome" to="#">Welcome {this.props.authUser.displayName.split(" ")[0] + " "} <SignOut /> </Link>
      </Navbar.Form>
    )
    const NavigationNoAuth = () => (
      <Navbar.Form pullRight>
        <Link className="navLink" to="/team">Team</Link>
      </Navbar.Form>
    )
    //simple session management, pass down the authUser from App.js as a prop
    console.log(this.props.authUser)
    return(

<Navbar bg="dark" variant="dark">
  <Navbar.Header>
    <Navbar.Brand>
      <Link to="/#home" style={{color:'white'}}><img src={require('./images/images/lochness.png')} style={{width:70}} />
 LOCKNESS
      </Link>
    </Navbar.Brand>
  </Navbar.Header>

    {this.props.authUser ? <NavigationAuth authUser={this.props.authUser}/> : <NavigationNoAuth />}
</Navbar>
    )}
}

export default NavigationBar
