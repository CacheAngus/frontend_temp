import React, { Component } from "react";
//import {Modal, ModalDialog, Container, Row, Button, ModalFooter, Image, Col, Grid, ModalHeader, ModalTitle, ModalBody} from 'react-bootstrap'
import tree from '../TeamPage/tree.png'
import './user.css';
import $ from 'jquery';
import firebase from 'firebase'
export default class courseOverview extends Component{
  constructor(props){
    super(props);
    this.state={
      courseName :"",
      coursedesc:"",
  };

  
  }/*
componentDidMount(){
  firebase.database().ref('certificates').on("child_added", snap =>{
  var mail = snap.child('email').val();
  var course = snap.child('Notes').val();
  var description = snap.child('descr').val;
  if(this.props.authUser.email === mail){
    this.setState={
      courseName : course,
    coursedesc : description
  }
}
});
}*/
/*showCourse(event, $modal, notes){
  var button = $(event.relatedTarget);
  $modal.find('.modal-title').text(firebase.database().ref.child('certificates/' + notes).on("child_added", snap=>{
    
  snap.child("Notes").val();

  }));
  $modal.find('.rounded border border-primary col-xs-12 col-md-9').text(firebase.database().ref.child('certificates/'+ notes).on("child_added", snap=>{
    
    snap.child("descr").val();

  }));
  $modal.find('.col-xs-4 col-md-3').img(this.props.authUser.photoURL);

}

  $("#exampleModalLabel").on('show.bs.modal', function(event){
    var note = this.props.authUser.email;
    $modal.find('.modal-title').text(firebase.database().ref.child('certificates/' + notes).on("child_added", snap=>{
    
      snap.child("Notes").val();
    
      }));
  });
  $("#description").on('show.bs.modal', function(event){
    var note = this.props.authUser.email;
    showCourse(event,$(this), note);
  });
  $("#modal-img").on('show.bs.modal', function(event){
    var note = this.props.authUser.email;
    showCourse(event,$(this), note);
  });
*/



    render(){
        return(
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">{this.props.name}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                <div class="container-fluid">
                  <div class="row">
                  <div id="modal-img" class="col-xs-4 col-md-3"> <img id="inner-img" src={require('./images/images/lochness.png')} alt="" style={{width:70}} class="rounded border border-light"/></div>
                  <div id="overview" class="col-xs-8 col-md-9">Course Overview
                  <div class="row">
                  <div id="descrition" class="rounded border border-primary col-xs-12 col-md-9"> {this.props.coursedesc}</div>
                  </div>
                  </div>
                  </div>
                  <div class="row">
                  <div class="col-xs-8 col-md-3">Skills:</div>
                  </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">DATACOMP</button>
                  <button type="button" class="btn btn-primary">SYLLABUS</button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}