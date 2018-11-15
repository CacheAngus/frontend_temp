import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import "react-table/react-table.css";
import Form from './components/FormPage.js';
import InstitutionTable from './components/InstitutionTable/InstitutionTable';

import CompanyLogin from './components/Login/loginCompany';
import UserTable from './components/UserTable/UserTable';
import NavigationBar from './components/Navigation/NavigationBar';
import { Router, Route, IndexRoute} from 'react-router'
import { BrowserRouter} from 'react-router-dom'
import {database} from './firebaseConfig'

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            firstNameValue: "",
            lastNameValue: "",
            certificateValue: "",
            notesValue: ""
        };
        database.ref('users/' + '1234').set({
    username: "testing", //test
    email: "test",
    profile_picture : "test"
  });

        
    }



  render() {
    return (
      <BrowserRouter>
      <div>
      <NavigationBar />
      <div className="App" style={this.state.appBackground}>
      <div>
      <Route path="/view" name="view" component={InstitutionTable}></Route>
      </div>
      <Route path="/create" name="create" component={Form}></Route>
               
                 

                <div> <CompanyLogin/> </div>
              </div></div>
              </BrowserRouter>

    );
    } ;


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


export default App;
