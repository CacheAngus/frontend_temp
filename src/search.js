import React, { Component } from "react";
import axios from 'axios';
import SortableTbl from "react-sort-search-table"

/* getInfo=()=>{
    axios.get('${API_URL}?api_key={AP_KEY}&prefix=${this.state.query}&limit=7').then(({data})=>{this.setState({results: data.data})})
    axios.get('folder', {
      params: {
        firstName: value,
        lastName: value,
        ethAdd: value,
        certificate: value
      }
    })
    .then(function(data))
  }
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if(this.state.query && this.state.query.length > 1) {
        of (this.state.query.length %2 === 0) {
          this.getInfo()
        }
      }
     })
  }*/

/*const { API_KEY } = process.env
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
      //this is what i need to edit
    axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
      .then(({ data }) => {
        this.setState({
          results: data.data
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
       
      </form>
    )
  }
}*/

let Mydata=[
    {
        "firstname": "Cache",
        "lastname": "A",
        "certificate": "Bachelor",
        "notes": " ",
        "ethAdd": "1234"
    },
    {
        "firstname": "Jamie",
        "lastname": "L",
        "certificate": "Bachelor",
        "notes": " ",
        "ethAdd": "124"  
    },
    {
        "firstname": "Nick",
        "lastname": "C",
        "certificate": "Bachelor",
        "notes": " ",
        "ethAdd": "3334"
    },
]

const CertificateTblPage = (props) =>{
    
    let col = [
        "firstname",
        "lastname",
        "certificate",
        "notes",
        "ethAdd"
    ];
    let tHead = [
        "First Name",
        "Last Name",
        "Certificate",
        "Notes",
        "Etherium Address"
    ];

    return (
        <SortableTbl tblData={Mydata}
        tHead = {tHead}
        dKey={col}
        />
    );
};


export default CertificateTblPage;
