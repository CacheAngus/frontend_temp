import React, { Component } from 'react';
import './home.css'
import exams from '../../assets/exams.svg'
import folder from '../../assets/folder.svg'
import checkmark from '../../assets/check-mark.svg'
import share from '../../assets/share.svg'
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
                <p className="fadein homebodyP">Think of Lockness as your educational passport. We make it easy to store, verify, and share your certificates in one place.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div col="col-12">
              <img className="img-responsive homeIcon" src={folder} />
            </div>
            <div col="col">
              <img className="img-responsive homeIcon" src={checkmark} />

            </div>
            <div col="col">
              <img className="img-responsive homeIcon" src={share} />

            </div>
          </div>
          <div className="row">
            <div className={`Home__Info__Container`}>
              <div className={`Home__Info`}>
                <img className={`Home__Info__Image`} src={exams}/>
              </div>
              <div className={`Home__Info2`}>
                <h2>Tokenizing Certificates</h2>
                <p>Keep track of all your certificates and degrees on one platform. Never worry about the physical copy or PDF being lost or destroyed as it will always be stored on the blockchain.</p>
              </div>
            </div>
        </div>
        </div>

    </div>
  )}
}

export default Home;
