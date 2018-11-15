import React, {Component} from 'react';
// import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
import FacebookLogin from 'react-facebook-login';
import './loginForm.css';

class LoginForm extends Component {
    state = {
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: ""
    }
    responseFacebook = response => {
      this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      })
      console.log(response);
    }
    componentClicked = () => console.log("Clicked!");
    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
          fbContent = (
            <div>
              <img src={this.state.picture} alt={this.state.name}/>
            </div>
          );
        }
        else{
          fbContent = (
            <FacebookLogin
            appId="189338485307527"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />
          );
        }
        return (
            <div className="login">
              <h1>Log In</h1>
              {fbContent}
            </div>
            // <View style={styles.container}>
            // <TextInput
            // placeholder="username"
            // placeholderTextColor="rgb(48,48,48)"
            // style={styles.input}
            // />
            // <TextInput
            // placeholder="password"
            // placeholderTextColor="rgb(48,48,48)"
            // secureTextEntry
            // style={styles.input}
            // />
            //
            // <TouchableOpacity style={styles.buttonContainer}>
            //     <Text style={styles.buttonText}>Login</Text>
            // </TouchableOpacity>
            // </View>
        );
    }
}

export default LoginForm

// const styles = StyleSheet.create({
//     container: {
//         padding:20
//     },
//     input: {
//         height: 40,
//         backgroundColor: 'rgb(245,245,245)',
//         marginBottom: 20,
//         paddingHorizontal: 10
//
//     },
//     buttonContainer: {
//         backgroundColor: 'rgb(128,128,128)',
//         paddingVertical: 15
//     },
// buttonText: {
//     textAlign: 'center',
//     color: '#00000',
//     fontWeight: '700'
// }
// });
