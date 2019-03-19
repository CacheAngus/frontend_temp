import React, {Component} from 'react';

import {Link} from 'react-router-dom'

export default class Create extends Component {
       
        render() {
            return(
                <Link class='navLink' to='/create'>Create</Link>
            )
        }

}