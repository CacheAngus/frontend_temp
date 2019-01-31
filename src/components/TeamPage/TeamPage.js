import React, { Component } from "react";
import tree from './tree.png';
import Header from './header.js';
import {ResponsiveEmbed, PageHeader, Button, OverlayTrigger, Popover, Image, Grid, Row, Col} from 'react-bootstrap'
class Team extends Component{
    render(){
        return (
            <header>
           <Header />
        <div class="members">
            <Grid>
                <Row>
                    <Col className="text-center" md={3}>
                    <code style={{color:'white', fontSize:20}}>
                    &lt;
          {'Project Manager'} /&gt;
                     </code>
                     <br />
                     <Image src={tree} responsive></Image>
                     <br />
                     <OverlayTrigger trigger="click" overlay={
                         <Popover
                         id="popover-basic" title="Nick Chan"
                        > Nick is a 2nd year in Commerce.</Popover>
                     }
                     >
                    
                 
                    <Button variant ="success"> Nick Chan</Button>
                    </OverlayTrigger>
                        
                    
                    </Col>
                    <Col className="text-center" md={3}>
                    <code style={{color:'white', fontSize:20}}>
                    &lt;
          {'Developer'} /&gt;
                     </code>
                     <br />
                     <Image src={tree} responsive></Image>
                    
                        <br /> Harry Chan
                    
                    </Col>
                    <Col className="text-center" md={3}>
                    <code style={{color:'white', fontSize:20}}>
                    &lt;
          {'Developer'} /&gt;
                     </code >
                     <br />
                     <Image src={tree} responsive></Image>
                    
                        <br /> Jamie Linsdell
                    
                    </Col>
                    <Col  className="text-center" md={3}>
                    <code style={{color:'white', fontSize:20}}>
                    &lt;
          {'Developer'} /&gt;
                     </code>
                     <br />
                     <Image src={tree} responsive></Image>
                    
                        <br /> Cache Angus
                    
                    </Col>
                    <Col className="text-center" md={4}>
                    <code style={{color:'white', fontSize:20}}>
                    &lt;
          {'Frosh Rep'} /&gt;
                     </code>
                     <br />
                     <Image src={tree} responsive></Image>
                    
                        <br /> Tina Huang
                    
                    </Col>
                    <Col style={{paddingLeft:'-20px'}} className="text-center" md={4}>
                    <code style={{color:'white', fontSize:20}}>
                    &lt;
          {'Frosh Rep'} /&gt;
                     </code>
                
                     <br />
                     
                     <Image src={tree} responsive></Image>
                        
                      <br /> Julien Lin  
                    
                    
                     
                    </Col>
                </Row>
            </Grid>
        </div>
        </header>
        );
    }
}

export default Team;