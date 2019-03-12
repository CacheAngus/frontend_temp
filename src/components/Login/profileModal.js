import React, { Component } from "react";
//import {Modal, ModalDialog, Container, Row, Button, ModalFooter, Image, Col, Grid, ModalHeader, ModalTitle, ModalBody} from 'react-bootstrap'

import './loginCompany.css';
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
                  <div class="col-xs-6 col-md-5"> <img src={require('./lochness.png')} alt="" style={{width:70}} class="rounded border border-light"/></div>
                  <div class="row">
                  <div class="col-xs-8 col-md-3">Cache Angus</div>
                  </div>
                  </div>
                  <div class="row">
                  <div class="rounded border border-primary col-xs-12 col-md-9"> Profile </div>
                  </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Full Profile</button>
                  
                </div>
              </div>
            </div>
          </div>
        )
    }
}