import React, { Component } from 'react';
//import {Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './loginCompany.css';
import { StyleSheet, View, Image, Text } from 'react-native-web';
import LoginForm from './loginForm';
import fire from '../../firebaseConfig';

class CompanyLogin extends Component {
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
        return(
        <View style={styles.contianer}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('./images/lochness.png')}/>
            <Text style={styles.title}>Company Login</Text>

        </View>
        <View style={styles.formContainer}>
        <LoginForm/>
        </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        },
        logoConstiner: {
            alignItems: 'center',
            flexgrow: 1,
            justifyContent:'center'
        },
    logo: {
        width: 100,
        height: 100

    },
    title: {
       marginTop: 10,
       width: 140,
       textAlign: 'center'
    },
});





export default CompanyLogin;
