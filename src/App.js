import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import InstitutionTable from './components/InstitutionTable/InstitutionTable';
import UserTable from './components/UserTable/UserTable';
import NavigationBar from './components/Navigation/NavigationBar';
import { BrowserRouter } from 'react-router-dom'


class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            firstNameValue: "",
            lastNameValue: "",
            certificateValue: "",
            notesValue: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
handleSubmit(e){
  if (!e.target.checkValidity()) {
    // form is invalid! so we do nothing
    return;
  }
  alert('Form Submitted');
  e.preventDefault();
  alert('Form Submitted!')
};


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
      <BrowserRouter>
      <div className="App" style={this.state.appBackground}>
      <NavigationBar />

                <form onSubmit={this.handleSubmit}>
                  <label id="certificate">
                    Create Certificate
                    {/*textare value = this.state and then all of the component*/}
                   <view style={style.row}>
                    <FirstName />
                    <LastName />
                    </view>
                    <Certificate />
                    <br/>
                    <Notes />
                    <br/>
                   {/*} <label>
                      Add Certificate
                    <button type="button" onClick={this.handleClicked}>Add Cerificate</button>
    </label>*/}
                </label>
                <input type = "submit" name="certificate"  value="Create Certificate" />
                </form>
              </div>
              </BrowserRouter>

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
                Last Name:
            </label>
            <input type="text" name="lastname" value={this.state.lastNameValue} onChange={this.changeLastName} required/>
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
              <label>
                EthAddress:
                </label>
                <input type="text" name="ethadd" value={this.state.ethAddressValue} onChange={this.changeEthAddress} required/>
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
              <label>
                  First Name:
                  </label>
                  <input  type="text" name="firstname" value={this.state.firstNameValue} onChange={this.changeFirstName} required/>
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
                  <select>
                  <option value="none">  </option>
                    <option value="bachelor">Bachelor Degree</option>
                    <option value="course">Course</option>
                    <option value="govid">Government ID</option>
                  </select>
                  </label>

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
              <label>
                  Notes:
                  </label>
                  <input type="text" name = "notes" value={this.state.notesValue} onChange={this.changeNotes}/>
            </div>
  );
}

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
