import React, {Component} from 'react';
import {Form, FormGroup,FormRow, FormControl, Button, PageHeader, Col} from 'react-bootstrap'

class CertForm extends Component {
    
    render(){
        
    return(
        <Form>
        <PageHeader style={{color:'white'}}>Create Certificate</PageHeader>
        <Form.Row>
            <Form.Group controlID="formGridEmail">
            <Form.Label>Name</Form.Label>
            </Form.Group>
        </Form.Row>
      </Form>
    )
    }
}

export default CertForm;