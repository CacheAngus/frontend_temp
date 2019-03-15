import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './userProfilePic.css'
import { Image, Button} from 'react-bootstrap';
import {AuthenticationConsumer} from '../AuthenticationContext/AuthenticationContext'
// style={{ textDecoration: 'none', paddingRight:'220px', color:'black'}}>
import firebase from 'firebase';



class UserProfilePic extends Component {
  constructor(props){
    super(props)
   this.state={
     
   }
    //<img
    //className="rounded-circle test" alt="profile picture"
   // src={auth.authUser ? auth.authUser.photoURL : ""}/>
   
  
   
   var rootRef = firebase.database().ref().child('users');
   var ems;
   
   rootRef.on("child_added", snap=> {  
 
  if(firebase.database().ref().child("business").orderByChild("email").equalTo(this.props.authUser.email).once("value", snapshot=> { 
    if(snapshot.exists()){
      ems = true;
    return true;  
    }
  })===true){
   
  }  else if (firebase.database().ref().child("users").orderByChild("email").equalTo(this.props.authUser.email).once("value", snapshot=> {   
    if(snapshot.exists()){
      ems= true;
      
      
      return true; 
    }
  })===true){
   

    }else {
     ems = false;

    }
   
    if(ems===true)
        console.log(ems);
      if(this.props.authUser.email === snap.child('email').val()){
        var photoURL;
        var users = firebase.auth().currentUser;
          //photoURL = users.photoURL;
          
          
         
             users.updateProfile({
               photoURL: snap.child('picture').val()
             })
          
        }
      
    
      
        
  });
  }
  render(){
    
    return(
      <AuthenticationConsumer>
        {(auth) => (
          <div>
            <img
className="rounded-circle test" alt="profile picture"
    src= {(auth.authUser && auth.authUser.photoURL !=null) ? auth.authUser.photoURL : "" }/>
          </div>
        )}

      </AuthenticationConsumer>
    )}
}

export default UserProfilePic
