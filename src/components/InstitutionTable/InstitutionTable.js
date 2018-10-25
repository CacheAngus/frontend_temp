import React, { Component } from "react";
import axios from 'axios';
// Import React Table
//documentation: https://react-table.js.org/#/story/readme
import ReactTable from "react-table";
import "react-table/react-table.css";

/*
import LastName from "./App.js";
import FirstName from "./App.js";
import EthAddress from "./App.js";
import Notes from "./App.js";
import Certificate from "./App.js";
*/

//const {API_KEY} = something
//const API_URL = our url

class InstitutionTable extends Component {


  constructor() {
    super();
    this.state = {
      
      data: [
        {
            certificateNo: 1,
            firstName: 'Nicholas',
            lastName: 'Chan',
            certificate: 'Bachelor of Commerce',
            notes: 'this guy is a g'
      }
    ]
    };
  }

 
  render() {
    const { data } = this.state;
    return (
      
      <div>
        
        <ReactTable
          data={data}
          columns={[{
              Header: 'Certificate No',
              accessor: 'certificateNo' // String-based value accessors!
            }, {
              Header: 'First Name',
              accessor: 'firstName',
              Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            }, {
              Header: 'Last Name',
              accessor: 'lastName'
            },
            {
              Header: 'Certificate',
              accessor: 'certificate'
            },
            {
              Header: 'Notes',
              accessor: 'notes'
            }]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}
export default InstitutionTable;
