import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './userProfilePic.css'
import { Image, Button} from 'react-bootstrap';
import {AuthenticationConsumer} from '../AuthenticationContext/AuthenticationContext'
// style={{ textDecoration: 'none', paddingRight:'220px', color:'black'}}>

class UserProfilePic extends Component {
  constructor(){
    super()
  }
  render(){
    return(
      <AuthenticationConsumer>
        {(auth) => (
          <div>
            <img
           className="rounded-circle test" alt="profile picture"
              src={auth.authUser ? auth.authUser.photoURL : ""}/>
          </div>
        )}

      </AuthenticationConsumer>
    )}
}

export default UserProfilePic
