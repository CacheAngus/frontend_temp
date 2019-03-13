import React, {Component} from 'react';
import {Button, Row, Label,  FormControl, FormGroup, PageHeader, Col} from 'react-bootstrap'
import Form from '../../../node_modules/react-bootstrap/lib/Form'
import FormControlFeedback from '../../../node_modules/react-bootstrap/lib/FormControlFeedback'
import './certForm.css'
//import Config from '../config/Fire';
//import DbConfig from './database';
import firebase from 'firebase'
import { Router, Route, Redirect, IndexRoute} from 'react-router'
import { BrowserRouter} from 'react-router-dom'
import nextPage from './nextPage'
//import certFunct from '../../firebasestuff/certFunct'


class CertForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = { validated: false,
          firstName: "",
          lastName: "",
          email: "",
          certificate: "",
          Notes: "",
          busmail: this.props.authUser.email ,
          business:"",
        descr:""};



      this.changeEthAddress = this.changeEthAddress.bind(this);
      this.changeFirstName = this.changeFirstName.bind(this);
      this.changeLastName = this.changeLastName.bind(this);
      this.changeCertificate = this.changeCertificate.bind(this);
      this.changeNotes = this.changeNotes.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
      this.changeBusMail = this.changeBusMail.bind(this);
      this.chaneDescr = this.changeDescr.bind(this); 
    }

        
      changeEthAddress(e) {
          this.setState({email: e.target.value});
          }

      changeLastName(e) {
            this.setState({lastName: e.target.value});
            }

     changeFirstName(e) {
              this.setState({firstName: e.target.value});
              }  
      changeNotes(e) {
                this.setState({Notes: e.target.value});
                } 
       changeBusMail(e) {
                  this.setState({business: e.target.value});
                  } 
      changeCertificate(e) {
                  this.setState({certificate: e.target.value});
                  }
      changeDescr(e){
        this.setState({descr: e.target.value});
      }
      handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.setState({ validated: true
                  });
           
          var data = {
            certificate: this.state.certificate,
          firstName: this.state.firstName,
          lastName:this.state.lastName,
          Notes:this.state.Notes,
          email:this.state.email,
          busmail:this.state.busmail,
          business: this.state.business,
          descr:this.state.descr
          }
       
 const refSrc = firebase.database().ref('certificates/' +'/');
        refSrc.push(data);
        
        this.setState({
          certificate: "",
          firstName: "",
          lastName:"",
          Notes:"",
          email:"",
          busmail:"",
          business:"",
          descr:""
        });




      }
    
      
      
    render(){
       
    return(
      
  <div id="cert">
  <script src="/my.js"></script>
  <div class="bg"></div>
  <div class="jumbotron text-center" md="6" xs="8" id="headPage" style={{color:'black', fontSize: 50}}><h1 id="bottom">Create Certificate</h1></div>
    <form class="certform"
    
    novalidate
    onSubmit = {e => this.handleSubmit(e)}>
    <div class="form-row">
    <div class="col-md-4 mb-3">
    <label for="validationCutsom1"> First Name </label>
        <input type="text" class="form-control" id="validationCustom1" value={this.state.firstName} onChange={this.changeFirstName} placeholder="Cache" required />
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
    <label for="validationCutsom3"> Description </label>
        <input class="form-control" type="text" id="validationCustom3" value={this.state.Notes} onChange={this.changeNotes} placeholder="A React Course" required />
     <div class="invalid-feedback">
     Please Input A Certificate Description
     </div> 
     </div>
     
    <div class="col-md-4 mb-3">
    <label for="validationCutsom4"> Certificate Type </label>
        <select class="form-control" id="validationCustom4" value={this.state.certificate} onChange={this.changeCertificate} required >
          <option selected>Choose</option>
           <option value="Bachelor">Bachelor Degree</option>
                      <option value="Course">Course</option>
                      <option value="GovId">Government ID</option>
          </select>
     <div class="invalid-feedback">
     Please Input Name
     </div>
     </div>
     </div>

     <div class="form-row">
    <div class="col-md-4 mb-3">
    <label for="validationCutsom5"> Business </label>
        <input type="text" id="validationCustom5" class="form-control" value={this.state.business} onChange={this.changeBusMail} placeholder="Bain Labs" required />
     <div class="invalid-feedback">
     Please Input Valid Business
     </div> 
     </div>  
     <div class="col-md-4 mb-3">
    <label for="validationCutsom6"> Student Email </label>
        <input type="email" class="form-control" id="validationCustom6" value={this.state.email} onChange={this.changeEthAddress} placeholder="15sa54@queensu.ca" required />
     <div class="invalid-feedback">
     Please Input Valid Student Email
     </div> 
     </div>
     </div>
   
      
    <Button id="certbutton" style={{color:'white', marginBottom: 20, marginleft: 100}} type="submit"> 
    
        Next</Button>
    
  </form>
  </div>
  
    )
    }
}

export default CertForm;