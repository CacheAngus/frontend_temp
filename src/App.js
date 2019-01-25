import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import "react-table/react-table.css";

import CompanyLogin from './components/Login/loginCompany';
import UserTable from './components/UserTable/UserTable';

// Navigation
import NavigationBar from './components/Navigation/navBar.js';
import Home from './components/Home/home.js';
import { Router, Route, IndexRoute} from 'react-router'
import { BrowserRouter} from 'react-router-dom'

// Login Flow

import firebase from 'firebase'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameValue: "",
      lastNameValue: "",
      certificateValue: "",
      notesValue: "",
      // isSignedIn: false,
    };
    firebase.database().ref('users/' + '1234').set({
      username: "testing", //test
      email: "test",
      profile_picture : "test"
    });
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

handleSubmit(e){
  if (!e.target.checkValidity()) {
    // form is invalid! so we do nothing
    return;
  }
  alert('Form Submitted');
  //does this even go in here idk, probably should add in error catching
  axios({
    method: 'post',
    //figure out where to actually post the info and how to post it
    url: './posting',
    data: {
      lastNameValue: this.state.lastNameValue,
      firstNameValue: this.state.firstNameValue,
      ethAddressValue: this.state.ethAddressValue,
      certificateValue: this.state.certificateValue,
      notesValue: this.state.notesValue
       }
  });
  e.preventDefault();
  alert('Form Submitted!')
};

  render() {
    return (
      <BrowserRouter>
        <div className={`App__Container`}>
          <NavigationBar />
            {/* <div className="App" style={this.state.appBackground}>*/}
            <Route path="/" component={Home} exact/>
            <Route path="/view" name="view" component={UserTable} exact/>

            {this.state.isSignedIn ? (
              <span>
                <div>Signed In!</div>
                <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                <img
                  alt="profile picture"
                  src={firebase.auth().currentUser.photoURL}
                />
              </span>
            ) : (
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            )}
      {/*   </div> */}
      </div>
    </BrowserRouter>
  )};
};

export default App;
