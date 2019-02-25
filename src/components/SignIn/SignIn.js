import React, { Component } from "react";
import './signIn.css'
import { Image, Button} from 'react-bootstrap';
// style={{ textDecoration: 'none', paddingRight:'220px', color:'black'}}>
import firebase from 'firebase'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
class SignIn extends Component {
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  render(){
    return(
      <StyledFirebaseAuth
        uiConfig={this.uiConfig}
        firebaseAuth={firebase.auth()}
      />
    )}
}

export default SignIn
