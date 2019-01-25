import React, {Component} from 'react';
// import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
import FacebookLogin from 'react-facebook-login';
import fire from '../../firebaseConfig';
import './loginForm.css';

class LoginForm extends Component {
    constructor(props){
      super(props);
      this.state = {
        user: {},
      }
    }
    componentDidMount(){
      this.authListener();
    }

    authListener() {
      fire.auth().onAuthStateChanged((user) => {
        console.log(user);
        if (user) {
          this.setState({ user });
          // localStorage.setItem('user', user.uid);
        } else {
          this.setState({ user: null });
          // localStorage.removeItem('user');
        }
      });
    }

    render() {
        return (
            <div className="login">
              <h1>Log In</h1>
            </div>
        );
    }
}

export default LoginForm
