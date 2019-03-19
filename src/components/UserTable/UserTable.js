import React, { Component } from "react";
import UserModal from './classModal.js'
import {Link} from 'react-router-dom'
import UserHeader from './userHeader.js'
import $ from 'jquery';
// Import React Table
//documentation: https://react-table.js.org/#/story/readme
import {Table, Nav, NavItem} from 'react-bootstrap'
import "react-table/react-table.css";
import BootstrapTable from "react-bootstrap-table-next"
import UserPageBanner from '../UserPageBanner/UserPageBanner'
import CategoryBadge from '../CategoryBadge/CategoryBadge'
import userHeader from "./userHeader.js";
import firebase from 'firebase'


class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
            firstName: "",
            lastName: "q",
            busmail: "sef",
            email: 'ksdjhf',
            certificate: 'Bachelor of Commerce',
            notes: 'this guy is a g'
      }
    ],
    modalShow: false,
    selected: {
      name: "hi",
      desc: "this is the desc"
    }
  };
  }
  componentDidMount(){
    var businesses;
    var emailName;
    //console.log(this.props);
    var rootRef = firebase.database().ref().child('certificates');
    rootRef.on("child_added", snap=> {
      var cert = snap.child("certificate").val();
      var fname = snap.child("firstName").val();
      var lname = snap.child("lastName").val();
      var note = snap.child("Notes").val();
      var us_email = snap.child("email").val();
      var bus_email = snap.child("busmail").val();
      var business = snap.child("business").val();
      var courseDes = snap.child('descr').val();
      var view = "View";
      var obj = { firstName: fname,
                  lastName: lname,
                  busmail: bus_email,
                  email: us_email,
                  certificate: cert,
                  notes: note};
      //check what the type is on the user
      if (firebase.database().ref().child('business').on("value", snap => {
       emailName= snap.child("email").val();
      }) === true && this.props.authUser.email === emailName){
        //have to get this email's business
        firebase.database().ref().child('business').on("value", snap => {
          businesses = snap.child("business").val();
         });
         if(businesses === bus_email )
         $("#data-table").append("<tr><td>" + fname + "</td><td>" + lname +"</td><td>" + cert +"</td><td>" + business + "</td><td>" + us_email + "</td><td>" + note + "</td><td>" + courseDes +"</td></tr>" );
      }
      if(this.props.authUser.email===bus_email){
        this.state.data.push(obj);
        // $("#data-table").append("<tr><td>" + fname + "</td><td>" + lname +"</td><td>" + cert +"</td><td>" + business + "</td><td>" + us_email + "</td><td>" + note + "</td><td>" + courseDes +"</td><td> <button type='button' class='btn btn-link' data-toggle='modal' data-target='#exampleModal' onClick={() => { console.log('clicked ddis') }}> View </button> </td></tr>");
      }
        else
      //change this if so it reflects the above
         if(this.props.authUser.email===us_email)
            this.state.data.push(obj);
          // $("#data-table").append("<tr><td>" + fname + "</td><td>" + lname +"</td><td>" + cert +"</td><td>" + business + "</td><td>" + us_email + "</td><td>" + note + "</td><td>" + courseDes +"</td><td> <button type='button' class='btn btn-link' data-toggle='modal' data-target='#exampleModal' onClick={()=>{ console.log('clicked dis') }}> View </button> </td></tr>" );

     });
     this.getData();
  }
  getData(){
    var refreshData = this.state.data;
    this.setState({data: refreshData});
    console.log("getData");
    }
  render() {
    let modalClose = () => this.setState({modalShow: false});

    console.log("our data");
    console.log(this.state);
    console.log("our props");
    console.log(this.props);
    //const {columns} = this.state.column s;

      return (

        <div>
         <UserModal authUser={this.props.authUser} show={this.state.modalShow} onHide={modalClose} name={this.state.selected.name} coursedesc={this.state.selected.desc}/>
        <div id="create-page">
          <UserPageBanner />
         <div className="container" >

           <Nav id="navTabs" pullRight variant="tabs" style={{paddingTop: 50}}>
             <NavItem>
               <Link to="/view"> Recent
             </Link></NavItem>
             <NavItem>
               <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal" onClick={() => { console.log("clicked this") }}>
               Course
          </button>
          <UserModal show={this.state.modalShow} onHide={modalClose}/>
             </NavItem>

             <NavItem style={{marginLeft:25}}>
               <Link to="/certificate">Certificate</Link>
           </NavItem>
           </Nav>
           <Table id="data-table" responsive>
           <thead>
             <tr>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Certificate</th>
               <th>Business</th>
               <th>Email</th>
               <th>Course Name</th>
               <th>Description</th>
               <th>View</th>
             </tr>
           </thead>
           <tbody>
           {this.state.data.map((r,i) => (
                     <tr key={i}>
                         <td>{r.firstName}</td>
                         <td>{r.lastName}</td>
                         <td>{r.certificate}</td>
                         <td>{r.busmail}</td>
                         <td>{r.email}</td>
                         <td>{r.notes}</td>
                         <td></td>
                         <td> <button type='button' class='btn btn-link' data-toggle='modal' data-target='#exampleModal' onClick={() => this.setState({ modalShow: true, selected: {name: r.certificate, desc: r.notes}})}> View </button> </td>
                     </tr>
                   ))}
           </tbody>
           </Table>

      </div>
      </div>
    </div>
    );
  }
}
export default UserTable;
