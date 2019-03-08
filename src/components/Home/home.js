import React, { Component } from 'react';
import SignIn from '../SignIn/SignIn';
import {AuthenticationConsumer} from '../AuthenticationContext/AuthenticationContext'
import './home.css';
import exams from '../../assets/exams.svg';
import folder from '../../assets/folder.svg';
import checkmark from '../../assets/check-mark.svg';
import share from '../../assets/share.svg';
import launch from '../../assets/launch.svg'
class Home extends Component {
  render() {
    return (
      <div className="Home__Container">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6">
              <img className="img-responsive homeImg fadein" src="https://images.unsplash.com/photo-1513127971914-6a8656fc9718?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80"/>
            </div>
            <div className="col-12 col-sm-6">
              <h1 className='fadein homehead'>Your passport for online certificates.</h1>
                <p className="fadein homebodyP">Think of Lockness as your educational passport. We make it easy to store, verify, and share your certificates in one place.</p>
            </div>
          </div>
          <br />
          <div className="row">
            <div col="col-12">
              <div className={`Home__Container2`}>
                <h1 className="fadein classification">Rethinking Certifications</h1>
                <p className="fadein homebodyP">Bringing legitimacy and accessibility to the digital certification landscape.</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col text-center">
              <img className="img-responsive homeIcon" src={folder} />
              <h2>Store</h2>
              <p>Keep all of your certificates organized in one place, never lose track of them and your accomplishments.</p>
            </div>
            <div className="col text-center">
              <img className="img-responsive homeIcon" src={checkmark} />
              <h2>Verify</h2>
              <p>Our blockchain technology makes it easy for employers to verify the authenticity of your certificates for hiring, training, and advancement.</p>
            </div>
            <div className="col text-center">
              <img className="img-responsive homeIcon" src={share} />
              <h2>Share</h2>
              <p>Let your network know what you've been up to! We make it easy to share your accomplishments.</p>
            </div>
          </div>
          <div className="row">
            <div className={`Home__Info__Container`}>
              <div className={`Home__Info`}>
                <img className={`Home__Info__Image`} src={launch}/>
              </div>
              <div className={`Home__Info2`}>
                <h2 className="classification">Your certificates are waiting for you.</h2>
                <SignIn />
              </div>
            </div>
          </div>
        </div>

    </div>
  )}
}

export default Home;
