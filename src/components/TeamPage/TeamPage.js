import React, { Component } from "react";
import tree from './tree.png'
import {ResponsiveEmbed, PageHeader, Image, Grid, Row, Col} from 'react-bootstrap'
class Team extends Component{
    render(){
        return (
            <header>
            <div class="header">
            <PageHeader style={{color:'white'}}>MEET THE TEAM<small> Gang</small></PageHeader>
        </div>
        <div class="members">
            <Grid>
                <Row>
                    <Col md={3}>
                    <code style={{color:'white'}}>
                    &lt;
          {'Project Manager'} /&gt;
                     </code>
                     <br />
                    <Image src="/tree.png" rounded></Image>
                    
                        <br /> Nick Chan
                    
                    </Col>
                    <Col md={3}>
                    <code style={{color:'blue'}}>
                    &lt;
          {'Developer'} /&gt;
                     </code>
                     <br />
                    <Image src="/tree.png" rounded></Image>
                    
                        <br /> Harry Chan
                    
                    </Col>
                    <Col md={3}>
                    <code style={{color:'blue'}}>
                    &lt;
          {'Developer'} /&gt;
                     </code >
                     <br />
                     <div class="inner bottom-left bottom-right padding-30 ">
                    <h5 class="block-title text-white no-margin ">Jamie Linsdell</h5>
                    <h6 class="block-title fs-11 hint-text text-white m-t-5 m-b-0 ">Developer</h6>
                </div>
                     <div data-pages-bg-image="tree.jpg" onclick="window.open('https://www.linkedin.com/in/greg-maceachern', '_blank')" data-bg-overlay="black "  data-overlay-opacity="0.2">
                    </div>
                    
                        <br /> Jamie Linsdell
                    
                    </Col>
                    <Col  md={3}>
                    <code style={{color:'blue'}}>
                    &lt;
          {'Developer'} /&gt;
                     </code>
                     <br />
                    <Image src="/tree.png" rounded></Image>
                    
                        <br /> Cache Angus
                    
                    </Col>
                    <Col className="text-center" md={4}>
                    <code style={{color:'yellow'}}>
                    &lt;
          {'Frosh Rep'} /&gt;
                     </code>
                     <br />
                    <Image src="/tree.png" rounded></Image>
                    
                        <br /> Tina Huang
                    
                    </Col>
                    <Col style={{paddingLeft:'-20px'}} className="text-center" md={4}>
                    <code style={{color:'yellow'}}>
                    &lt;
          {'Frosh Rep'} /&gt;
                     </code>
                     <br />
                    <Image src="/tree.png" rounded></Image>
                    
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