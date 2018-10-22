import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import LastName from './certificatePage.js';
import FirstName from './certificatePage.js';
import Notes from './certificatePage.js';
import Certificate from './certificatePage.js';
import EthAddress from './certificatePage.js';

const axios = require('axios');

class App extends Component {
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
    //figure out where to actually post the info
    url: '/posting',
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
                <input type = "submit" id="certificate"  value="Create Certificate" />
                </form>
                </view>
              </div>
    );
    } ;
};



//trying to post the information somewhere


let style ={
  overallForm: {
   backgroundColor: 'grey',
  },
  row: {
    flex:1,
    flexDirection: "row"

  }

}
export default App;
