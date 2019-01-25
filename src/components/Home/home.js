import React, { Component } from 'react';
import './home.css'
import exams from '../../assets/exams.svg'

class Home extends Component {
  render() {
    return (
      <div>
        <div className={`Home__Container`}>
          <h1>Header Content</h1>
        </div>
        <div className={`Home__Container2`}>
          <h1>Header Content</h1>
        </div>
        <div className={`Home__Info__Container`}>
          <div className={`Home__Info`}>
            <img className={`Home__Info__Image`} src={exams}/>
          </div>
          <div className={`Home__Info2`}>
            <h1>Tokenizing Certificates</h1>
            <p>Keep track of all your certificates and degrees on one platform. Never worry about the physical copy or PDF being lost or destroyed as it will always be stored on the blockchain.</p>
          </div>
        </div>
      </div>
  )}
}

export default Home;