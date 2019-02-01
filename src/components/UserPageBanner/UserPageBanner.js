import React, { Component } from 'react';
//import logo from './logo.svg';
import './userPageBanner.css';

import UserProfilePic from '../UserProfilePic/UserProfilePic'
import SignOut from '../SignOut/SignOut'

// Login Flow
class UserPageBanner extends Component {
  render(){
    return(
      <div className='container'>
        <div className='row'>
        <div className='col-xs-12 center'>
          <UserProfilePic />
          <h2>Nicholas Chan </h2>
        </div>
        </div>
      </div>
    )
  }
}
export default UserPageBanner
