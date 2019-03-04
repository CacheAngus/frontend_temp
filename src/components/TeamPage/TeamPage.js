import React, { Component } from "react";
import tree from '../Images/DSC08081.jpg';
import Header from './header.js';
import {ResponsiveEmbed, PageHeader, Button, OverlayTrigger, Popover, Image, Grid, Row, Col} from 'react-bootstrap'
class Team extends Component{
    render(){
        return (
            <body id="teamPage">
           <Header />
        <div class="members">
            <Grid>
                <Row>
                    <Col className="text-center" md={4}>
                    <br />
                    <div class="img" md={4}> 
                     <Image class="person-img" src={tree} responsive></Image>
                     <div class ="overlay" md={4}>
                     <span>
                     <code style={{color:'white', fontSize:20}}>
                    &lt;
          {'Project Manager'} /&gt;
                     </code>
                     <br />
                     <p id="description">
                     Nick is a 2nd year in Commerce.
                     </p>
                         </span>
                         </div>
                   
                     <br /> Nick Chan
                     </div>                   
                    </Col>
                    <Col className="text-center" md={4}>
                    <br />
                    <div class="img"> 
                     <Image class="person-img" src={tree} responsive></Image>
                     <div class ="overlay" md={4}>
                     <span>
                     <code style={{color:'white', fontSize:20}}>
                    &lt;
          {'Developer'} /&gt;
                     </code>
                     <br />
                     <p id="description">
                     Harry is a 3nd year in Comp Eng.
                     </p>
                         </span>
                         </div>
                   
                     <br /> Harry Chan
                     </div> 
                    </Col>
                    <Col className="text-center" md={4}>
                    <br />
                    <div class="img"> 
                     <Image class="person-img" src={tree} responsive></Image>
                     <div class ="overlay" md={4}>
                     <span>
                     <code style={{color:'white', fontSize:20}}>
                    &lt;
          {'Developer'} /&gt;
                     </code>
                     <br />
                     <p id="description">
                     Jamie is a 3nd year in Apple Comp.
                     </p>
                         </span>
                         </div>
                   
                     <br /> Jamie Linsdell
                     </div> 
                    </Col>
                    <Col  className="text-center" md={4}>
                    <br />
                    <div class="img"> 
                     <Image class="person-img" src={tree} responsive></Image>
                     <div class ="overlay" md={4}>
                     <span>
                     <code style={{color:'white', fontSize:20}}>
                    &lt;
          {'Developer'} /&gt;
                     </code>
                     <br />
                     <p id="description">
                     Cache is a 3nd year in Comp Eng.
                     </p>
                         </span>
                         </div>
                   
                     <br /> Cache Angus
                     </div> 
                    </Col>
                    <Col className="text-center" md={4}>
                    <br />
                    <div class="img"> 
                     <Image class="person-img" src={tree} responsive></Image>
                     <div class ="overlay" md={4}>
                     <span>
                     <code style={{color:'white', fontSize:20}}>
                    &lt;
          {'Frosh Rep'} /&gt;
                     </code>
                     <br />
                     <p id="description">
                     Tina is a 1st year in Commerce.
                     </p>
                         </span>
                         </div>
                   
                     <br /> Tina Huang
                     </div> 
                    </Col>
                    <Col style={{paddingLeft:'-20px'}} className="text-center" md={4}>
                    <br />
                    <div class="img"> 
                     <Image md={4} class="person-img" className="text-center" src={tree} responsive></Image>
                     <div class ="overlay" md={4}>
                     <span>
                     <code style={{color:'white', fontSize:20}}>
                    &lt;
          {'Frosh Rep'} /&gt;
                     </code>
                     <br />
                     <p id="description">
                     Julien is a 1st year in Commerce.
                     </p>
                         </span>
                         </div>
                   
                     <br /> Julien Lin
                     </div> 
                     
                    </Col>
                </Row>
            </Grid>
        </div>
        </body>
        );
    }
}

export default Team;