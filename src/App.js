import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InstitutionTable from './components/InstitutionTable/InstitutionTable';
import UserTable from './components/UserTable/UserTable';
class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            firstNameValue: "",
            lastNameValue: "",
            certificateValue: "",
            notesValue: ""
        };
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeCertificate = this.changeCertificate.bind(this);
        this.changeNotes = this.changeNotes.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
    }

  changeFirstName(e) {
    this.setState({firstNameValue: e.target.value});
}
changeLastName(e) {
  this.setState({lastNameValue: e.target.value});
}
changeCertificate(e) {
  this.setState({certificateValue: e.target.value});
}
changeNotes(e) {
  this.setState({notesValue: e.target.value});
}

  render() {
    return (
      <div className="App" style={this.state.appBackground}>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Create Certificate
                    {/*textare value = this.state and then all of the component*/}
                    <FirstName />
                    Last Name:<input type="text" value={this.state.lastNameValue} onChange={this.changeLastName}/>
                    <br/>
                    <Certificate />
                    <br/>
                    <Notes />
                    <br/>
                   {/*} <label>
                      Add Certificate
                    <button type="button" onClick={this.handleClicked}>Add Cerificate</button>
    </label>*/}
                </label>  
                <input type = "submit" value="Create Certificate" />
                </form>

              </div>
    );
    } ;


};

class LastName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastNameValue: "",
    };
   
    this.changeLastName = this.changeLastName.bind(this);
  }

changeLastName(e) {
this.setState({lastNameValue: e.target.value});
}
render() {
return (
  <div className="LastName">
            <div style={this.state.formStyle}>
              <label>
                Last Name   
                <textarea defaultValue="Doe" type="text"/>          
            </label>
            <input type="text" name="lastname" value={this.state.lastNameValue} onChange={this.changeLastName}/>
            </div>

          </div>
);
}
}
class EthAddress extends Component{
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
            <div style={this.state.formStyle}>
                
                Last Name:<input type="text" value={this.state.ethAddressValue} onChange={this.changeEthAddress}/>
            </div>

          </div>
);
} 
}

class FirstName extends Component{
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
                  First Name:<input  type="text" value={this.state.firstNameValue} onChange={this.changeFirstName}/>
            </div>
  );
}

}

class Certificate extends Component{
  constructor(props) {
        super(props);
        this.state = {
            certificateValue: "",
        };
        this.changeCertificate = this.changeCertificate.bind(this);
    }

  changeCertificate(e) {
    this.setState({certificateValue: e.target.value});
}
render() {
  return (
            <div>
              <label>
                  Certificate:
                  <select value={this.state.value} onChange={this.changeCertificate}>
                    <option value="bachelor">Bachelor Degree</option>
                    <option value="course">Course</option>
                    <option value="govid">Government ID</option>
                  </select>
                  </label>
                  <input type="text" value ="Certificate"/>
            </div>
  );
}

}

class Notes extends Component{
  constructor(props) {
        super(props);
        this.state = {
            notesValue: "",
        };
        this.changeNotes = this.changeNotes.bind(this);
    }

  changeNotes(e) {
    this.setState({notesValue: e.target.value});
}
render() {
  return (
            <div>
                  Notes:<input type="text" value={this.state.notesValue} onChange={this.changeNotes}/>
            </div>
  );
}

}


export default App;
