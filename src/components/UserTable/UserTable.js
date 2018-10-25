import React, { Component } from "react";

// Import React Table
//documentation: https://react-table.js.org/#/story/readme
import ReactTable from "react-table";
import "react-table/react-table.css";

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
            },
            {
              Header: 'Certificate',
              accessor: 'certificate'
            },
            {
              Header: 'Date Issued',
              accessor: 'date'
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
export default UserTable;
