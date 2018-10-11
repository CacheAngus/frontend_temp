import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <div className="App">
                <div style={this.state.formStyle}>
                    <FirstName />
                    Last Name:<input type="text" value={this.state.lastNameValue} onChange={this.changeLastName}/>
                    <br/>
                    <Certificate />
                    <br/>
                    <Notes />
                    <br/>
                    <button>Add</button>
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
                  Certificate:<input type="text" value={this.state.certificateValue} onChange={this.changeCertificate}/>
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
