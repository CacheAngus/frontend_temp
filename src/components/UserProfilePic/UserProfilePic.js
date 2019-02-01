import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './userProfilePic.css'
import { Image, Button} from 'react-bootstrap';
// style={{ textDecoration: 'none', paddingRight:'220px', color:'black'}}>
import firebase from 'firebase'

class UserProfilePic extends Component {
  render(){
    return(
      <div>
        <img
       className="rounded-circle test" alt="profile picture"
          src={firebase.auth().currentUser.photoURL ? firebase.auth().currentUser.photoURL : ""}/>
      </div>
    )}
}

export default UserProfilePic
