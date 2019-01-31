import React, {Component} from 'react';
import {Button, Row, Label, FormControl, FormGroup, PageHeader, Col} from 'react-bootstrap'
import Form from '../../../node_modules/react-bootstrap/lib/Form'
import './certForm.css'

class CertForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = { validated: false };
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
        <PageHeader style={{color:'white'}}>Create Certificate</PageHeader>
    </Row>
    <Row>
      <FormGroup as={Col} md = "4" xs="3" controlId="formGridFirstName">
        <Label>First Name</Label>
        <FormControl placeholder="Cache"  />
        
      </FormGroup>
  
      <FormGroup as={Col} md="4" xs="3" controlId="formGridLastName">
        <Label>Last Name</Label>
        <FormControl placeholder="Angus" />
      </FormGroup>
    </Row>
  
    <Row>
    <FormGroup as={Col} md="3" xs="3" controlId="formGridNotes">
      <Label>Notes</Label>
      <FormControl placeholder=""  />
    </FormGroup>
  
    <FormGroup as={Col} md="3" xs="3" controlId="formGridEthAddress">
      <Label>Address</Label>
      <FormControl placeholder="123456" />
      
    </FormGroup>
  
    <FormGroup as={Col} md="3" xs="3" controlId="formGridCertificate.ControlSelect">
        <Label>Certificate Type</Label>
        <FormControl componentClass="select" >
        <option>Choose</option>
        <option value="bachelor">Bachelor Degree</option>
                      <option value="course">Course</option>
                      <option value="govid">Government ID</option>
        </FormControl>
      </FormGroup>
      
        </Row>
        
    
  </Form>
  </div>
    )
    }
}

export default CertForm;