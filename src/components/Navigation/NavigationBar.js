import React, { Component } from "react";
import { Link } from 'react-router-dom';

class NavigationBar extends Component{
  render(){
  return(
<div class="NavigationBar">
<div class="NavigationLinks">
        <Link to="/view"
        style={{ textDecoration: 'none', paddingRight:'220px', color:'black'}}>
        View
        </Link>
        <Link to="/create"
        style={{ textDecoration: 'none',paddingRight:'10px', color:'black'}}>
  Create
        </Link>
        </div>
</div>
  );
}
}

export default NavigationBar
