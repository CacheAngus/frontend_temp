import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './navBar.css'
import {Image} from 'react-native-web';
import {MenuItem, Navbar, Nav, NavItem,FormGroup, FormControl, Button, NavDropdown} from 'react-bootstrap';
// style={{ textDecoration: 'none', paddingRight:'220px', color:'black'}}>

/*class NavigationBar extends Component{
  render(){
    return(
      <div className={`NavigationBar`}>
        <div className={`NavigationLinks`}>
          <Link to="/"> Lockness </Link>
          <Link to="/view"> View </Link>
          <Link to="/create"> Create </Link>
          <Link to="/team"> Team </Link>
        </div>
      </div>
  )}
}
 */
class NavigationBar extends Component {S
  render(){
    return(
  
<Navbar bg="dark" variant="dark">
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Lockness</a>
      
    </Navbar.Brand>
   
  </Navbar.Header>
  <Image resizeMode='contain'  source={require('./images/images/lochness.png')}/>
    <Navbar.Form pullRight>
    <Link to="/view"
        style={{ textDecoration: 'none',  color:'black'}}>
        View
        </Link>
        <Link to="/create"
        style={{ textDecoration: 'none',paddingLeft:'10px', color:'black'}}>
  Create
        </Link>
    </Navbar.Form>
  
</Navbar>
    )}
}

export default NavigationBar