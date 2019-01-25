import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './navBar.css'
// style={{ textDecoration: 'none', paddingRight:'220px', color:'black'}}>

class NavigationBar extends Component{
  render(){
    return(
      <div className={`NavigationBar`}>
        <div className={`NavigationLinks`}>
          <Link to="/"> Lockness </Link>
          <Link to="/view"> View </Link>
          <Link to="/create"> Create </Link>
          <Link to="/team"> Team </Link>
        </div>
      </div>
  )}
}

export default NavigationBar
