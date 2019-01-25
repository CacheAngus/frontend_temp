import React, { Component } from "react";

// Import React Table
//documentation: https://react-table.js.org/#/story/readme
import ReactTable from "react-table";
import "react-table/react-table.css";
import BootstrapTable from "react-bootstrap-table-next"


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
    }]
    };
  }
  render() {
  const data = this.state.data;
    //const {columns} = this.state.columns;
      return (
        <div className="container" style={{ marginTop: 50 }}>

  <BootstrapTable keyField='certificateNo' data={data } columns={ this.state.columns } />
</div>
      // <div>
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
