import React, { Component } from "react";
import UserModal from './classModal.js'
import {Link} from 'react-router-dom'
// Import React Table
//documentation: https://react-table.js.org/#/story/readme
import {Button, Nav, NavItem} from 'react-bootstrap'
import "react-table/react-table.css";
import BootstrapTable from "react-bootstrap-table-next"
import firebase from 'firebase'
import UserPageBanner from '../UserPageBanner/UserPageBanner'

class UserTable extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
            certificateNo: 1,
            date: 'May 1st 2021',
            certificate: 'Bachelor of Commerce',
            notes: 'this guy is a g'
      }
    ],
    columns: [{
      dataField: 'certificateNo',
      text: 'Cert no'
    }, {
      dataField: 'date',
      text: 'date'
    }, {
      dataField: 'certificate',
      text: 'certificate'
    },{
      dataField: 'notes',
      text: 'notes'
    }],
    modalShow: false
  };
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



          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Show
          </button>
          <UserModal show={this.state.modalShow} onHide={modalClose}/>

         <div className="container" style={{ marginTop: 50 }}>

           <Nav pullRight variant="tabs">
             <NavItem>
               <Link to="/view"> Recent
             </Link></NavItem>
             <NavItem>
               <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal">
          </button>
          <UserModal show={this.state.modalShow} onHide={modalClose}/> Course
             </NavItem>

             <NavItem style={{marginLeft:25}}>
               <Link to="/certificate">Certificate</Link>
           </NavItem>
           </Nav>
         <BootstrapTable keyField='certificateNo' data={data } columns={ this.state.columns } />
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
