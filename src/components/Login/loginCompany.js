import React, { Component } from 'react';
//import {Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './loginCompany.css';
import { StyleSheet, View, Image, Text } from 'react-native-web';
import LoginForm from './LoginForm';


class CompanyLogin extends Component {
    render() {
        return(
        <View style={styles.contianer}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('./images/lochness.png')}/>
            <Text style={styles.title}>Login</Text>

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
