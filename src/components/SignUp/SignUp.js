import React, { Component } from "react";

import {Image, Button} from 'react-bootstrap';
import {Redirect} from 'react-router';
// style={{ textDecoration: 'none', paddingRight:'220px', color:'black'}}>
import firebase from 'firebase'



export default class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            firstName: "",
            lastName: "",
            email: "",
            password:"",
            account: "",
            business:"",
            picture: '',
            
        }
        
       
        this.changeFirstName = this.changeFirstName.bind(this);
      this.changeLastName = this.changeLastName.bind(this);
      this.changeEmail = this.changeEmail.bind(this);
      this.changeType = this.changeType.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.changeBusiness = this.changeBusiness.bind(this); 
      this.changePassword = this.changePassword.bind(this);
      this.changePicture = this.changePicture.bind(this);
    }
    changeLastName(e) {
        this.setState({lastName: e.target.value});
        }

 changeFirstName(e) {
          this.setState({firstName: e.target.value});
          }  
  changeEmail(e) {
            this.setState({email: e.target.value});
            } 
   changeBusiness(e) {
              this.setState({business: e.target.value});
              } 
  changeType(e) {
              this.setState({account: e.target.value});
              }
  changePassword(e) {
              this.setState({password: e.target.value});
  }

  changePicture(e) {
    this.setState({picture: e.target.value});
    this.props.authUser.photoURL = this.state.picture;
  }
handleSubmit(event){
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        this.setState({ validated: true
        });
 
var data = {
  
firstName: this.state.firstName,
lastName:this.state.lastName,
account:this.state.account,
email:this.state.email,
business:this.state.business,
password: this.state.password,
picture: this.state.picture
}
var emailCheck = this.state.email;
var passCheck = this.state.password;

var errorCode;
 
if(this.state.account==="Business"){
  var refSrc = firebase.database().ref('business/');
  refSrc.push(data);
  } else{
  var use = firebase.database().ref('users/' +"/");
  use.push(data);}

firebase.auth().createUserWithEmailAndPassword(emailCheck, passCheck).catch(function(error){
  errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);

  if (errorCode === 'auth/weak-password'){
    alert('Password too weak.');
  }else {
    alert(errorMessage);
  }
  
});
/*
console.log(errorCode)

firebase.auth().currentUser.sendEmailVerification().then(function() {
  // Email Verification sent!
  // [START_EXCLUDE]
  
  // [END_EXCLUDE]
});
// [END sendemailverification]
*/

  

console.log('does it even go here');



        this.setState={
            firstName: "",
            lastName: "",
            email: "",
            type: "",
            business:"",
            password: "",
            picture: "",
            
        }
  
    }
    render(){
              
    return(
      
  <div id="cert">
  
  <div class="bg"></div>
  <div class="jumbotron text-center" md="6" xs="8" id="headPage" style={{color:'black', fontSize: 50}}><h1 id="bottom">Sign Up</h1></div>
    <form class="signupform"
    
    novalidate
    onSubmit = {e => this.handleSubmit(e)}>
    <div class="form-row">
    <div class="col-md-4 mb-3">
    <label for="validationCutsom1"> First Name </label>
        <input type="text" class="form-control" id="validationCustom1"  value={this.state.firstName} onChange={this.changeFirstName} placeholder="Cache" required />
     <div class="invalid-feedback">
     Please Input Name
     </div> 
     </div>  
     <div class="col-md-4 mb-3">
    <label for="validationCutsom2"> Last Name </label>
        <input class="form-control" type="text" id="validationCustom2" value={this.state.lastName} onChange={this.changeLastName} placeholder="Angus" required />
     <div class="invalid-feedback">
     Please Input Name
     </div> 
     </div>
     </div>
     <div class="form-row">
        
    <div class="col-md-4 mb-3">
    <label for="validationCutsom4"> User Type </label>
        <select class="form-control" id="validationCustom4" value={this.state.account} onChange={this.changeType} required >
          <option selected>Choose</option>
           <option value="Business">Business</option>
                      <option value="Student">Student</option>
                     
          </select>
     <div class="invalid-feedback">
     Please Input Account Type
     </div>
     </div>
     <div class="col-md-4 mb-3">
    <label for="validationCutsom5"> Business </label>
        <input type="text" id="validationCustom5" class="form-control" value={this.state.business} onChange={this.changeBusiness} placeholder="Bain Labs" required />
     <div class="invalid-feedback">
     Please Input Valid Business
     </div> 
     </div>
     </div>

     <div class="form-row">
      
     <div class="col-md-4 mb-3">
    <label for="validationCutsom6"> Email </label>
        <input type="email" class="form-control" id="validationCustom6" value={this.state.email} onChange={this.changeEmail} placeholder="15sa54@queensu.ca" required />
     <div class="invalid-feedback">
     Please Input Valid Student Email
     </div> 
     </div>
     <div class="col-md-4 mb-3">
    <label for="validationCutsom6"> Password </label>
        <input type='password' class="form-control" id="validationCustom6" aria-describedby="passwordHelpBlock" value={this.state.password} onChange={this.changePassword} required />
        <small id="passwordHelpBlock" class="form-text text-muted"> Your Password must be 8-20 characters long</small>
     <div class="invalid-feedback">
     Please Input a Password
     </div> 
     </div>
     </div>
   <div class="form-row">
   <div class="col-md-4 mb-3">
   <label for="profileControlFile">Profile Picture
   </label>
   <input type="file" class="form-control-file" id="profileControlFile" value={this.state.picture} onChange={this.changePicture} required/>
   <div class='invalid-feedback'>
   Please Submit a Picture
   </div> 
   </div>
   </div>
      

    <button class="btn btn-primary" style={{ marginBottom: 20, marginleft: 100}}  type="submit"> 
    
        SignUp</button>
    
  </form>
  </div>
  
    )
    }

}