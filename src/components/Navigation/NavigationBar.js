import React, { Component } from "react";
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component{
  render(){
  return(
    <Menu secondary pointing>
        <Menu.Menu position="right">
        <Menu.Item as={Link} to="/view">View</Menu.Item>
        <Menu.Item as={Link} to="/create">Create</Menu.Item>
        </Menu.Menu>
        </Menu>
  );
}
}

export default NavigationBar
