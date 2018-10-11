import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InstitutionTable from './components/InstitutionTable/InstitutionTable';
import UserTable from './components/UserTable/UserTable';
class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            titleValue: "",
            detailValue: ""
        };
        // this.changeTitle = this.changeTitle.bind(this);
        // this.changeDetail = this.changeDetail.bind(this);
        // this.addTodo = this.addTodo.bind(this);
        // this.deleteTodo = this.deleteTodo.bind(this);
    }

  changeFirstName(e) {
    this.setState({detailValue: e.target.value});
}

  render() {
    return (
      <div className="App">
                <div>
                    First Name:<input type="text" value="title"/>

                    Last Name:<input type="text" value="title2"/>
                    <br/>
                    Certificate:<input type="text" value="title3"/>
                    <br/>
                    Notes:<input type="text" value="title4"/>
                    <button>Add</button>
                </div>
              </div>
    );
  }
}

export default App;
