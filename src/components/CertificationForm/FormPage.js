import React, { Component } from 'react';
//import logo from './logo.svg';

import axios from 'axios';

export class Form extends Component {
    constructor(props) {
          super(props);
          this.state = {
            appBackground: style.backgroundColor
          };
          
          this.handleSubmit = this.handleSubmit.bind(this);
      }
  handleSubmit(e){
    if (!e.target.checkValidity()) {
      // form is invalid! so we do nothing
      return;
    }
    alert('Form Submitted');
    //does this even go in here idk, probably should add in error catching
    axios({
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
    });
    e.preventDefault();
    
  
  };
    
  
  
    render() {
      return (
        <div className="App" style={style.row}>
        <view style={style.row}>
                  <form onSubmit={this.handleSubmit}>
                    <label id="title">
                      Create Certificate
                      
                     
                      <FirstName />
                      <LastName /> 
                     
                      <Certificate />
                      <br/>
                      <Notes />
                      <EthAddress/>
                      <br/>
                      </label>  
                  <input style={styles.submitBut} type = "submit" id="certificate"  value="Create Certificate" />
                  </form>
            
                  </view>
                </div>
      );
      } ;
  };
  
  
  export class LastName extends Component {
    constructor(props) {
      super(props);
      this.state = {
        lastNameValue: "",
      };
  
      this.changeLastName = this.changeLastName.bind(this);
    }
  
  changeLastName(e) {
  this.setState({lastNameValue: e.target.value});
  };
  render() {
  return (
    <div className="LastName">
              <div>
                <label>
                  Last Name:
              </label>
              <input type="text" name="lastname" value={this.state.lastNameValue} onChange={this.changeLastName} required/>
              </div>
  
            </div>
  );
  }
  }
  export class EthAddress extends Component{
    constructor(props) {
      super(props);
      this.state = {
        ethAddressValue: "",
      };
  
      this.changeEthAddress = this.changeEthAddress.bind(this);
    }
  
  changeEthAddress(e) {
  this.setState({ethAddressValue: e.target.value});
  }
  render() {
  return (
    <div className="EthAddress">
              <div >
                <label>
                  EthAddress:
                  </label>
                  <input type="text" name="ethadd" value={this.state.ethAddressValue} onChange={this.changeEthAddress} required/>
              </div>
  
            </div>
  );
  };
  };
  
  export class FirstName extends Component{
    constructor(props) {
          super(props);
          this.state = {
              firstNameValue: "",
          };
          this.changeFirstName = this.changeFirstName.bind(this);
      }
  
    changeFirstName(e) {
      this.setState({firstNameValue: e.target.value});
  }
  render() {
    return (
              <div>
                <label>
                    First Name:
                    </label>
                    <input  type="text" id="firstname" value={this.state.firstNameValue} onChange={this.changeFirstName} required/>
              </div>
    );
  };
  
  };
  
  export class Certificate extends Component{
    constructor(props) {
          super(props);
          this.state = {
              certificateValue: "",
          };
          this.changeCertificate = this.changeCertificate.bind(this);
      }
  
    changeCertificate(e) {
      this.setState({certificateValue: e.target.value});
  };
  render() {
    return (
              <div>
                <label>
                    Certificate:
                    <select>
                    <option value="none">  </option>
                      <option value="bachelor">Bachelor Degree</option>
                      <option value="course">Course</option>
                      <option value="govid">Government ID</option>
                    </select>
                    </label>
                   
              </div>
    );
  };
  
  };
  
  export class Notes extends Component{
    constructor(props) {
          super(props);
          this.state = {
              notesValue: "",
          };
          this.changeNotes = this.changeNotes.bind(this);
      }
  
    changeNotes(e) {
      this.setState({notesValue: e.target.value});
  };
  render() {
    return (
              <div>
                <label>
                    Notes:
                    </label>
                    <input type="text" name = "notes" value={this.state.notesValue} onChange={this.changeNotes}/>
              </div>
    );
  };
  
  };

  let style ={
    overallForm: {
     backgroundColor: 'grey',
    },
    row: {
      flex:1,
      flexDirection: "row"
  
    }
  
  }

  const styles={
    submitBut: {
      
      adjustsFontSizeToFit: 'true'
      
    }
  }import React, {Component} from 'react';
  import {Button, Row, Label, FormControl, FormGroup, PageHeader, Col} from 'react-bootstrap'
  import Form from '../../../node_modules/react-bootstrap/lib/Form'
  import './certForm.css'
  
  class CertForm extends Component {
      constructor(props) {
          super(props);
      
          this.state = { validated: false,
            firstName: "",
            lastName: "",
            ethAdd: "",
            certificate: "",
            notes: "" };
        
        this.changeEthAddress = this.changeEthAddress.bind(this);
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeCertificate = this.changeCertificate.bind(this);
        this.changeNotes = this.changeNotes.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
          }
        changeEthAddress(e) {
            this.setState({ethAdd: e.target.value});
            }
  
        changeLastName(e) {
              this.setState({lastName: e.target.value});
              }
  
       changeFirstName(e) {
                this.setState({firstName: e.target.value});
                }  
        changeNotes(e) {
                  this.setState({notes: e.target.value});
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
          this.setState({ validated: true });
        }
      
        
      render(){
          const {validated} = this.state;
      return(
    <div id="cert">
      <Form id="certform"
      noValidate
      validated = {validated}
      onSubmit = {e => this.handleSubmit(e)}>
      <Row> 
          <PageHeader id="headPage" style={{color:'black', fontSize: 30}}>Create Certificate</PageHeader>
      </Row>
      <Row>
        <FormGroup as={Col} md = "4" xs="3" controlId="formGridFirstName">
          <Label>First Name</Label>
          <FormControl required value={this.state.firstName} onChange={this.changeFirstName} placeholder="Cache"  />
          
        </FormGroup>
    
        <FormGroup as={Col} md="4" xs="3" controlId="formGridLastName">
          <Label>Last Name</Label>
          <FormControl required value={this.state.lastName} onChange={this.changeLastName}  placeholder="Angus" />
        </FormGroup>
      </Row>
    
      <Row>
      <FormGroup as={Col} md="3" xs="3" controlId="formGridNotes">
        <Label>Notes</Label>
        <FormControl required value={this.state.notes} onChange={this.changeNotes} placeholder=""  />
      </FormGroup>
    
      <FormGroup as={Col} md="3" xs="3" controlId="formGridEthAddress">
        <Label>Address</Label>
        <FormControl required value={this.state.ethAdd} onChange={this.changeEthAddress}  placeholder="123456" />
        
      </FormGroup>
    
      <FormGroup as={Col} md="3" xs="3" controlId="formGridCertificate.ControlSelect">
          <Label>Certificate Type</Label>
          <FormControl required value={this.state.certificate} onChange={this.changeCertificate} componentClass="select" >
          <option>Choose</option>
          <option value="bachelor">Bachelor Degree</option>
                        <option value="course">Course</option>
                        <option value="govid">Government ID</option>
          </FormControl>
        </FormGroup>
        
          </Row>
          <Button id="certbutton" type="submit">Create</Button>
      
    </Form>
    </div>
      )
      }
  }
  
  export default CertForm;



  export default Form;
  //trying to post the information somewhere
  