import React, { Component } from 'react';
import {Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './loginCompnay.css';

class CompanyLogin extends Component {
    constructor(props){
        super();
        this.state={
            username: "",
            password:""
            
        };
    }

    checkFilled(){
        return this.state.username.length >0 && this.state.password.length >0;
    }

    handleChange(event){
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
    }
    render(){
        return (
            <div className='LoginCompany'>
            <form onSubmit={this.handleSubmit}>
            <FormGroup controlId='username' bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
            autofocus
            type="username"
            value ={this.state.username}
            onChange={this.handleChange}
            />
            </FormGroup>
            <FormGroup controlId='password' bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
            autofocus
            type="password"
            value ={this.state.password}
            onChange={this.handleChange}
            />
            </FormGroup>
            <Button
            block
            bsSize="large"
            disabled={!this.checkFilled()}
            type="submit">
            Login
            </Button>
            </form>
            </div>
        );
    }
}

export default CompanyLogin;