import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './navBar.css'
import {Image} from 'react-native-web';
import {MenuItem, Navbar, Nav, NavItem,FormGroup, FormControl, Button, NavDropdown} from 'react-bootstrap';
import SignOut from '../SignOut/SignOut'
import {AuthenticationConsumer} from '../AuthenticationContext/AuthenticationContext'
import firebase from 'firebase'
import Create from './create'





// style={{ textDecoration: 'none', paddingRight:'220px', color:'black'}}>

class NavigationAuth extends Component {
  constructor(props){
    super(props)
    this.state={
      logged: false
    }
  }
//{this.state.logged && CreatePage}
  componentDidMount(){
 
  
  if (firebase.database().ref().child("business").orderByChild("email").equalTo(this.props.authUser.email).once("value", snapshot=> {    
    if(snapshot.exists()){
      this.setState({logged: !this.state.logged});
      
      return true; 
    }
  })===true){  
    
   
   } 
   
  }
  render(){
   
   
     
     
    return (
      <div>
        <AuthenticationConsumer>
          {(auth) => (
            <Navbar.Form pullRight>
             {this.state.logged && <Create/>}
            
      
                 <Link className="navLink" to="/view">View</Link>
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
