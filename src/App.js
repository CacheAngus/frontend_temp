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
                <form>
                    First Name:
                    <input  type="text" value={this.state.firstNameValue} onChange={this.changeFirstName}/>

                    <LastName/>
                    Certificate:<input type="text" value={this.state.certificateValue} onChange={this.changeCertificate}/>
                    <br/>
                    Notes:<input type="text" value={this.state.notesValue} onChange={this.changeNotes}/>
                    <EthAddress/>
                    <br>
                    <button type="button" onClick={this.handleClicked}>Add Cerificate</button>
                    </br>
                </form>

              </div>
    );
  }
  handleClicked(){
    console.log("Last Name:" +this.state.lastname)
    
  }
}
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


export default App;
