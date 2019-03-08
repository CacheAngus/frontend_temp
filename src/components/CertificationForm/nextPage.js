import React, {Component} from 'react';
import {Button, Row, Label,  FormControl, FormGroup, PageHeader, Col} from 'react-bootstrap'

import { Router, Route, Redirect, IndexRoute} from 'react-router'
import { BrowserRouter} from 'react-router-dom'
import FormPage from './CertForm'
//import certFunct from '../../firebasestuff/certFunct'


class CertForm extends Component {
    
      
    render(){
    return(
      
  <div id="done-Page">
  
  <div class="jumbotron text-center" md="6" xs="8" id="headPage" style={{color:'black', fontSize: 50}}><h1 id="bottom">Submission Successful!</h1></div>
    

      
      
        
    
 </div>

  
    )
    }
}

export default CertForm;