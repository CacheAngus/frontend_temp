import React, { Component } from "react";

import {Link} from 'react-router-dom'
// Import React Table
//documentation: https://react-table.js.org/#/story/readme
import {PageHeader, Nav, NavItem} from 'react-bootstrap'
import "react-table/react-table.css";
import BootstrapTable from "react-bootstrap-table-next"

export default class userHeader extends Component{
    render() {
        
        //const {columns} = this.state.columns;
          return (
            <div class="header">
            <PageHeader  title="Certification"><span>Certification Table</span></PageHeader>
            </div>
          )}
}