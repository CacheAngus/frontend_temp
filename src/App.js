import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import "react-table/react-table.css";

import CompanyLogin from './components/Login/loginCompany';
import UserTable from './components/UserTable/UserTable';
import FormPage from './components/CertificationForm/CertForm.js';
import TeamPage from './components/TeamPage/TeamPage.js';
// Navigation
import NavigationBar from './components/Navigation/navBar.js';
import Home from './components/Home/home.js';
import UserProfilePic from './components/UserProfilePic/UserProfilePic'
import UserPageBanner from "./components/UserPageBanner/UserPageBanner"
import SignOut from './components/SignOut/SignOut'
import { Router, Route, Redirect, IndexRoute} from 'react-router'
import { BrowserRouter} from 'react-router-dom'
import SignUp from './components/SignUp/SignUp'
// Login Flow

import firebase from 'firebase'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import {AuthenticationProvider, AuthenticationConsumer} from './components/AuthenticationContext/AuthenticationContext'

var user_email = null;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameValue: "",
      lastNameValue: "",
      certificateValue: "",
      notesValue: "",
      authUser: null
      // authUser: false,
    };
    // firebase.database().ref('users/' + '1234').set({
    //   username: "testing", //test
    //   email: "test",
    //   profile_picture : "test"
    // });
   // this.handleSubmit = this.handleSubmit.bind(this);
  }

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
    this.listener = firebase.auth().onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null});
     // console.log("user", authUser)
    });
  }

  componentWillUnmount() {
    this.listener();
  }



  render() {
    return (
      <BrowserRouter>
        <div className={`App__Container`}>
          <AuthenticationProvider value={this.state} >
            <NavigationBar />
              {/* <div className="App" style={this.state.appBackground}>*/}
              <Route exact path="/" render={() => (
                  this.state.authUser ? (<Redirect to="/view" />)
                    : (
                      <Home />
                    )
                )} /> 
                <Route exact path="/view"  name="view" render={() => (
                  this.state.authUser ? (<UserTable authUser={this.state.authUser} />)
                    : (
                      <Redirect to="/" />
                    )
                )} />
                 
                 
             
                 <Route exact path="/create"  name="create" render={() => (
                  this.state.authUser ? (<FormPage authUser={this.state.authUser} />)
                    : (
                      <Redirect to="/" />
                    )
                )} /> 
              
              <Route path="/team" name="team" component={TeamPage}  exact/>
            
        </AuthenticationProvider>
      </div>
    </BrowserRouter>
  )};
};

export default App;
