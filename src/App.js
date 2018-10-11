import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
          appBackground: style.backgroundColor
        };
        this.handleClicked = this.handleClicked.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
handleSubmit(e){
  alert('The form was submitted:' +this.state.value);
  event.preventDefault();
};
  


  render() {
    return (
      <div className="App" style={this.state.appBackground}>
                <form onSubmit={this.handleSubmit}>
                    <FirstName />
                    <LastName />
                    <Certificate />
                    <br/>
                    <Notes />
                    <EthAddress/>
                    <br/>
                    <button type="button" onClick={this.handleClicked}>Add Cerificate</button>
                </form>

              </div>
    );
    } ;

handleClicked(){
    console.log("Last Name:" + this.state.lastNameValue)

};
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
};
render() {
return (
  <div className="LastName">
            <div style={this.state.formStyle}>
               Last Name:<input type="text" name="lastname" value={this.state.lastNameValue} onChange={this.changeLastName}/>
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

                EthAddress:<input type="text" value={this.state.ethAddressValue} onChange={this.changeEthAddress}/>
            </div>

          </div>
);
};
};

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
};

};

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
};
render() {
  return (
            <div>
                  Certificate:<input type="text" value={this.state.certificateValue} onChange={this.changeCertificate}/>
            </div>
  );
};

};

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
};
render() {
  return (
            <div>
                  Notes:<input type="text" value={this.state.notesValue} onChange={this.changeNotes}/>
            </div>
  );
};

};
 
let style ={
  overallForm: {
   backgroundColor: 'grey',
  }

}
export default App;
