import React, { Component } from 'react';
//import logo from './logo.svg';
import './userPageBanner.css';

import UserProfilePic from '../UserProfilePic/UserProfilePic'
import SignOut from '../SignOut/SignOut'

class UserPageBanner extends Component {
  render(){
    return(
      <div class="container h-100">
    <div class="row align-items-center h-100">
        <div class="col-6 mx-auto">
        <div>
            <UserProfilePic />
            <h2>Nicholas Chan </h2>
            <SignOut />
          </div>
        </div>
    </div>
</div>

    )
  }
}
export default UserPageBanner
