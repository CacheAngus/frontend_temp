import React, { Component } from "react";
import { Link } from 'react-router-dom';

class NavigationBar extends Component{
  render(){
  return(
<div class="NavigationBar">
        <Link to="/view">
        View
        </Link>
        <Link to="/create">
  Create
        </Link>
</div>
  );
}
}

export default NavigationBar
