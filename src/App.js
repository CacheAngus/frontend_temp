import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
//import ReactTable from "react-table";
import "react-table/react-table.css";
import Form from './components/FormPage.js';
import InstitutionTable from './components/InstitutionTable/InstitutionTable';
//import UserTable from './components/UserTable/UserTable';
//import CertifaceTblPage
import CompanyLogin from './components/Login/loginCompany';


class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
          appBackground: style.backgroundColor
        };
        
       
    }

  


  render() {
    return (
      <div className="App" style={style.row}>
      <view style={style.row}>
                                 
                                    
                   
                    <Form/>
                    <br/>


                     <InstitutionTable/>
                
              
                
                </view>
                
                <div> <CompanyLogin/> </div>
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
