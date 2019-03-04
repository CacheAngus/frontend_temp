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
          busmail:"" };



      this.changeEthAddress = this.changeEthAddress.bind(this);
      this.changeFirstName = this.changeFirstName.bind(this);
      this.changeLastName = this.changeLastName.bind(this);
      this.changeCertificate = this.changeCertificate.bind(this);
      this.changeNotes = this.changeNotes.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.changeBusMail = this.changeBusMail.bind(this);  
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
                  this.setState({busmail: e.target.value});
                  } 
      changeCertificate(e) {
                  this.setState({certificate: e.target.value});
                  }
      handleSubmit(event) {
        const form = event.currentTarget;
        if (!form.checkValidity()) {
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
          busmail:this.state.busmail
          }
       
 const refSrc = firebase.database().ref('certificates/' +'/');
        refSrc.push(data);
        
        this.setState({
          certificate: "",
          firstName: "",
          lastName:"",
          Notes:"",
          email:"",
          busmail:""
        });




      }
    
      
      
    render(){
        const {validated} = this.state;
    return(
      
  <div id="cert">
  <script src="/my.js"></script>
  <div class="bg"></div>
  <div class="jumbotron text-center" md="6" xs="8" id="headPage" style={{color:'black', fontSize: 50}}><h1 id="bottom">Create Certificate</h1></div>
    <Form id="certform"
    style={{marginTop: 15}}
    noValidate
    validated = {validated}
    onSubmit = {e => this.handleSubmit(e)}>
     
    <Row>
      <FormGroup as={Col} md = "6" xs="8" controlId="formGridFirstName">
        <Label>First Name</Label>
        <FormControl required type="text" value={this.state.firstName} onChange={this.changeFirstName} placeholder="Cache"  />
        
      </FormGroup>
  
      <FormGroup style={{marginLeft:50}} as={Col} md="6" xs="8" controlId="formGridLastName">
        <Label>Last Name</Label>
        <FormControl required type="text" value={this.state.lastName} onChange={this.changeLastName}  placeholder="Angus" />
        
      </FormGroup>
    </Row>
  
    <Row>
    <FormGroup as={Col} md="6" xs="8" controlId="formGridNotes">
      <Label>Description</Label>
      <FormControl required type="text" value={this.state.Notes} onChange={this.changeNotes} placeholder="A React Course "  />
      
    </FormGroup>
  
    <FormGroup style={{marginLeft:50}} as={Col} md="6" xs="8" controlId="formGridCertificate.ControlSelect">
        <Label>Certificate Type</Label>
        <FormControl required value={this.state.certificate} onChange={this.changeCertificate} componentClass="select" >
        <option>Choose</option>
        <option value="Bachelor">Bachelor Degree</option>
                      <option value="Course">Course</option>
                      <option value="GovId">Government ID</option>
        </FormControl>
        
      </FormGroup>
      </Row>
      <Row>
    <FormGroup as={Col} md="6" xs="8" controlId="formGridBusMail">
      <Label>Teacher</Label>
      <FormControl required type="text" value={this.state.busmail} onChange={this.changeBusMail} placeholder="Tommy Dean"  />
      
    </FormGroup>
  
    <FormGroup style={{marginLeft:50}} as={Col} md="6" xs="8" controlId="formGridStudentEmail">
        <Label>Student Email</Label>
        <FormControl required value={this.state.email} onChange={this.changeEthAddress} >
        </FormControl>
        
      </FormGroup>
      </Row>
    <FormGroup  style={{marginLeft:50}}as={Col} md="6" xs="8" controlId="formGridEthAddress">
      <Label>Attach Course Syllabus</Label>
      <FormControl required type="text"   />
      
    </FormGroup>
  
    
      
    <Button id="certbutton" style={{color:'white', marginBottom: 20, marginleft: 100}} type="submit"> 
    
        Next</Button>
    
  </Form>
  </div>
  
    )
    }
}

export default CertForm;