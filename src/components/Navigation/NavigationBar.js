import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {StyleSheet, Image} from 'react-native-web';

class NavigationBar extends Component{
  render(){
  return(
<div class="NavigationBar">
<div class="NavigationLinks">
        <Image resizeMode='contain' style={styles.logo} source={require('./images/images/lochness.png')}/>
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

const styles = StyleSheet.create({
  logo: {
    width: 75,
    height: 75,
    flex: 1,
    alignItems: 'left'
  },
});

export default NavigationBar
