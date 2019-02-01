import React, {Component} from 'react';
import {Button, Row, Label,  FormControl, FormGroup, PageHeader, Col} from 'react-bootstrap'
import Form from '../../../node_modules/react-bootstrap/lib/Form'
import FormControlFeedback from '../../../node_modules/react-bootstrap/lib/FormControlFeedback'
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
        this.setState({ validated: true 
        });
        const data = new FormData(event.target);

       /* fetch('', {
          method: 'POST',
          body: data,
        });*/
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
        <PageHeader md="6" xs="8" id="headPage" style={{color:'black', fontSize: 30}}>Create Certificate</PageHeader>
    </Row>
    <Row>
      <FormGroup as={Col} md = "6" xs="8" controlId="formGridFirstName">
        <Label>Name</Label>
        <FormControl required type="text" value={this.state.firstName} onChange={this.changeFirstName} placeholder="Cache Angus"  />
        
      </FormGroup>
  
      <FormGroup style={{marginLeft:50}} as={Col} md="6" xs="8" controlId="formGridLastName">
        <Label>Teacher Name</Label>
        <FormControl required type="text" value={this.state.lastName} onChange={this.changeLastName}  placeholder="Tommy Dean" />
        
      </FormGroup>
    </Row>
  
    <Row>
    <FormGroup as={Col} md="6" xs="8" controlId="formGridNotes">
      <Label>Description</Label>
      <FormControl required type="text" value={this.state.notes} onChange={this.changeNotes} placeholder=""  />
      
    </FormGroup>
  
    <FormGroup style={{marginLeft:50}} as={Col} md="6" xs="8" controlId="formGridCertificate.ControlSelect">
        <Label>Certificate Type</Label>
        <FormControl required value={this.state.certificate} onChange={this.changeCertificate} componentClass="select" >
        <option>Choose</option>
        <option value="bachelor">Bachelor Degree</option>
                      <option value="course">Course</option>
                      <option value="govid">Government ID</option>
        </FormControl>
        
      </FormGroup>
      </Row>

    <FormGroup  style={{marginLeft:50}}as={Col} md="6" xs="8" controlId="formGridEthAddress">
      <Label>Attach Course Syllabus</Label>
      <FormControl required type="text" value={this.state.ethAdd} onChange={this.changeEthAddress}   />
      
    </FormGroup>
  
    
      
        
        <Button id="certbutton" style={{color:'white', marginBottom: 20, marginleft: 100}} type="submit">Next</Button>
    
  </Form>
  </div>
    )
    }
}

export default CertForm;