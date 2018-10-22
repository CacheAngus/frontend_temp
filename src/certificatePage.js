
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class showingApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };

    };
render() {
    return (
    <view style = {style.row}>
        <FirstName />
        <LastName />
        <Certificate />
        <Notes />
        <EthAddress />
        </view>
    );

    };
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

export default showingApp;