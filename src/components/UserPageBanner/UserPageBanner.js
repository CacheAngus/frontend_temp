import React, { Component } from 'react';
//import logo from './logo.svg';
import './userPageBanner.css';

import UserProfilePic from '../UserProfilePic/UserProfilePic'
import SignOut from '../SignOut/SignOut'

class UserPageBanner extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div class="container h-100">
    <div class="row align-items-center h-100">
        <div class="col-6 mx-auto">
        <div>
            <UserProfilePic authUser={this.props.authUser} />
            <h2>Nicholas Chan </h2>
          </div>
        </div>
    </div>
</div>

    )
  }
}
export default UserPageBanner
