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
    <div class="container padding-top">
        <div class="row justify-content-center">
            <div class="col-6 text-center">
            <div>
                <UserProfilePic authUser={this.props.authUser} />
                <h2 class="displayName">{this.props.authUser? this.props.authUser.displayName : ""}</h2>
              </div>
            </div>
        </div>
    </div>

    )
  }
}
export default UserPageBanner
