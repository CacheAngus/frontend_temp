import React, { Component } from "react";
import UserModal from './classModal.js'
import {Link} from 'react-router-dom'
import UserHeader from './userHeader.js'
import $ from 'jquery';
// Import React Table
//documentation: https://react-table.js.org/#/story/readme
import {Table, Nav, NavItem} from 'react-bootstrap'
import "react-table/react-table.css";
import BootstrapTable from "react-bootstrap-table-next"
import UserPageBanner from '../UserPageBanner/UserPageBanner'
import CategoryBadge from '../CategoryBadge/CategoryBadge'
import userHeader from "./userHeader.js";
import firebase from 'firebase'




class UserTable extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
            firstName: "",
            lastName: "q",
            busmail: "sef",
            email: 'ksdjhf',
            certificate: 'Bachelor of Commerce',
            notes: 'this guy is a g'
      }
    ],
    modalShow: false
  };
  }
  
  componentDidMount(){
    var rootRef = firebase.database().ref().child('certificates');
    rootRef.on("child_added", snap=> {
      var cert = snap.child("certificate").val();
      var fname = snap.child("firstName").val();
      var lname = snap.child("lastName").val();
      var note = snap.child("notes").val();
      var us_email = snap.child("email").val();
      var bus_email = snap.child("busmail").val();
      $("#data-table").append("<tr><td>" + fname + "</td><td>" + lname +"</td><td>" + cert +"</td><td>" + bus_email + "</td><td>" + us_email + "</td><td>" + note + "</td>" );
    
      })
  }

  render() {
    let modalClose = () => this.setState({modalShow: false});

  const data = this.state.data;
    //const {columns} = this.state.column s;
      return (
        <div>
         <UserModal show={this.state.modalShow} onHide={modalClose}/>
        <div id="create-page">
          <UserPageBanner />



          

         <div className="container" >

           <Nav id="navTabs" pullRight variant="tabs" style={{paddingTop: 50}}>
             <NavItem>
               <Link to="/view"> Recent
             </Link></NavItem>
             <NavItem>
               <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal" >
               Course
          </button>
          <UserModal show={this.state.modalShow} onHide={modalClose}/> 
             </NavItem>

             <NavItem style={{marginLeft:25}}>
               <Link to="/certificate">Certificate</Link>
           </NavItem>
           </Nav>
           <Table id="data-table" responsive>
           <thead>
             <tr>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Certificate</th>
               <th>Bussiness</th>
               <th>Email</th>
               <th>Notes</th>
             </tr>
           </thead>
           <tbody>
             
           </tbody>
           </Table>
         
      </div>
      </div>
    </div>


      //   <ReactTable
      //     data={data}
      //     columns={[{
      //         Header: 'Certificate No',
      //         accessor: 'certificateNo' // String-based value accessors!
      //       },
      //       {
      //         Header: 'Certificate',
      //         accessor: 'certificate'
      //       },
      //       {
      //         Header: 'Date Issued',
      //         accessor: 'date'
      //       },
      //       {
      //         Header: 'Notes',
      //         accessor: 'notes'
      //       }]}
      //     defaultPageSize={10}
      //     className="-striped -highlight"
      //   />
      //   <br />
      // </div>
    );
  }
}
export default UserTable;
