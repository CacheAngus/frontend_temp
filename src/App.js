import React, { Component } from 'react';
//import logo from './logo.svg';
import axios from 'axios';
import "react-table/react-table.css";
import './App.css';

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
// Login Flow

import firebase from 'firebase'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import {AuthenticationProvider, AuthenticationConsumer} from './components/AuthenticationContext/AuthenticationContext'


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
      console.log("user", authUser)
    });
  }

  componentWillUnmount() {
    this.listener();
  }

/*handleSubmit(e){
  if (!e.target.checkValidity()) {
    // form is invalid! so we do nothing
    return;
  }*/

  //does this even go in here idk, probably should add in error catching
  /*axios({
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
  });*/
  /*e.preventDefault();
  alert('Form Submitted!')
};*/

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
              <Route exact path="/view" name="view" render={() => (
                  this.state.authUser ? (<UserTable />)
                    : (
                      <Redirect to="/" />
                    )
                )} />
              <Route path="/create" name="create" component={FormPage} exact/>
              <Route path="/team" name="team" component={TeamPage} exact/>
              <Route path="/profile/:id" name="profile" compoent={UserTable} />
        </AuthenticationProvider>
      </div>
    </BrowserRouter>
  )};
};

export default App;
