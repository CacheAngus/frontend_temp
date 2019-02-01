import React, { Component } from "react";
import {Modal, ModalDialog, Container, Row, Button, ModalFooter, Image, Col, Grid, ModalHeader, ModalTitle, ModalBody} from 'react-bootstrap'
import tree from '../TeamPage/tree.png'
export default class courseOverview extends Component{
    render(){
        return(
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
                <ModalHeader closeButton>
                <ModalTitle id="contained-modal-title-vcenter">
                Class
                </ModalTitle>
                </ModalHeader>

                <ModalBody>
                    <Grid>
                        <Row className="show-grid">
                        <Col xs={6} md={4}>
                        <Image src={tree} responsive></Image>
                        </Col>
                        <Col xs={10} md={8}>
                        Course Overview
                        </Col>
                        </Row>
            <Row className="show-grid">
              <Col style={{color:'blue'}} xs={6} md={4}>
              Skills
              <br />
              Skills
              </Col>
              <Col style={{color:'blue'}} xs={10} md={8}>
                        <div className="container">
                         <p>Here is the outline of the course</p>
                        </div>
                        </Col>
                        </Row>

            </Grid>
                </ModalBody>
        <ModalFooter>
          <Button id="data-camp-button" onClick={this.props.onHide}>DATA CAMP</Button>
          <Button id="sylla=button"onClick={this.props.onHide}>SYLLABUS</Button>
        </ModalFooter>
                       
            </Modal>
        )
   
    }
}