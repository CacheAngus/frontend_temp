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


  constructor(props) {
    super();
    this.state = {
      
      data: [
        {
            certificateNo: 1,
            firstName: 'Nicholas',
            lastName: 'Chan',
            certificate: 'Bachelor of Commerce',
            notes: 'this guy is a g',
            ethAdd: "1234"
      }
    ]
    };
    let col = [
      "firstname",
      "lastname",
      "certificate",
      "notes",
      "ethAdd"
  ];
  let tHead = [
      "First Name",
      "Last Name",
      "Certificate",
      "Notes",
      "Etherium Address"
  ];
  }

 
  render() {
    const { data } = this.state;
    return (
           
        <SortableTbl
          tblData={data}
          tHead = {tHead}
          dKey={col}
          />
    );
  }
}


/*let Mydata=[
  {
      "firstname": "Cache",
      "lastname": "A",
      "certificate": "Bachelor",
      "notes": " ",
      "ethAdd": "1234"
  },
  {
      "firstname": "Jamie",
      "lastname": "L",
      "certificate": "Bachelor",
      "notes": " ",
      "ethAdd": "124"  
  },
  {
      "firstname": "Nick",
      "lastname": "C",
      "certificate": "Bachelor",
      "notes": " ",
      "ethAdd": "3334"
  },
]

const CertificateTblPage = (props) =>{
  
  let col = [
      "firstname",
      "lastname",
      "certificate",
      "notes",
      "ethAdd"
  ];
  let tHead = [
      "First Name",
      "Last Name",
      "Certificate",
      "Notes",
      "Etherium Address"
  ];

  return (
      <SortableTbl tblData={Mydata}
      tHead = {tHead}
      dKey={col}
      />
  );
}; */

export default InstitutionTable;
