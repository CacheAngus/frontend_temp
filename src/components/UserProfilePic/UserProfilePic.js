import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './userProfilePic.css'
import { Image, Button} from 'react-bootstrap';
// style={{ textDecoration: 'none', paddingRight:'220px', color:'black'}}>

class UserProfilePic extends Component {
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <img
       className="rounded-circle test" alt="profile picture"
          src={this.props.authUser ? this.props.authUser.photoURL : ""}/>
      </div>
    )}
}

export default UserProfilePic
