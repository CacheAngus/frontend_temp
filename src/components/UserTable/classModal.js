import React, { Component } from "react";
//import {Modal, ModalDialog, Container, Row, Button, ModalFooter, Image, Col, Grid, ModalHeader, ModalTitle, ModalBody} from 'react-bootstrap'
import tree from '../TeamPage/tree.png'
import './user.css';
export default class courseOverview extends Component{
    render(){
        return(
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Class</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                <div class="container-fluid">
                  <div class="row">
                  <div class="col-xs-4 col-md-3"> <img src={require('./images/images/lochness.png')} alt="" style={{width:70}} class="rounded border border-light"/></div>
                  <div class="col-xs-8 col-md-9">Course Overview
                  <div class="row">
                  <div class="rounded border border-primary col-xs-12 col-md-9"> Course Description</div>
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