import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './navBar.css'
import {Image} from 'react-native-web';
import {MenuItem, Navbar, Nav, NavItem,FormGroup, FormControl, Button, NavDropdown} from 'react-bootstrap';
// style={{ textDecoration: 'none', paddingRight:'220px', color:'black'}}>


class NavigationBar extends Component {S
  render(){
    return(
  
<Navbar bg="dark" variant="dark">
  <Navbar.Header>
    <Navbar.Brand>
      <Link to="/#home" style={{color:'white'}}><img src={require('./images/images/lochness.png')} style={{width:70}} />
 LOCKNESS 
          </Link>

      
    </Navbar.Brand>
   
  </Navbar.Header>
  
    <Navbar.Form pullRight>
    <Link to="/view"
        style={{ textDecoration: 'none',  color:'white', fontSize: 20 }}>
        View
        </Link>
        <Link to="/create"
        style={{ textDecoration: 'none',paddingLeft:'20px', color:'white', fontSize: 20}}>
  Create
        </Link>
        <Link to="/team"
        style={{ textDecoration: 'none',paddingLeft:'20px', color:'white', fontSize: 20}}>
  Team
        </Link>
    </Navbar.Form>
  
</Navbar>
    )}
}

export default NavigationBar