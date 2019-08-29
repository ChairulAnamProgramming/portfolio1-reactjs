import React, { Component } from 'react';
import { Row, Col, Nav, NavItem, NavLink } from 'reactstrap';


// Componen
import NavComp from '../../components/nav/NavComp';

// Images
import icon from './img/iWork.png';
import work1 from './img/work1.PNG';
import work2 from './img/work2.PNG';
import work3 from './img/work3.PNG';
import work5 from './img/work5.PNG';
import AbsoluteWrapper from '../../components/AbsoluteWrapper';

class WorkPage extends Component {

    render() {
        return (
            <AbsoluteWrapper>
                <Row>
                    <Col sm="3" className="bg-special">
                        <Row>
                            <Col>
                                <h1 class="display-4 font-weight-bold mt-5 text-secondary text-sm-right text-center title">Work</h1>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col className="text-center"><img src={icon} alt="My Work" className="img-fluid myicon mt-5 ml-sm-5 mb-5" /></Col>
                        </Row>
                    </Col>
                    <Col sm="9">
                        <NavComp />

                        <Row>
                            <Col sm="2"></Col>
                            <Col sm="10" className="pb-5">
                                <Row className="mt-5 text-center">
                                    <Col sm="5" className="mt-5 mr-3"><img src={work1} alt="" className="image-work img-fluid" /></Col>
                                    <Col sm="5" className="mt-5 mr-3"><img src={work2} alt="" className="image-work img-fluid" /></Col>
                                    <Col sm="5" className="mt-5 mr-3"><img src={work3} alt="" className="image-work img-fluid" /></Col>
                                    <Col sm="5" className="mt-5 mr-3"><img src={work5} alt="" className="image-work img-fluid" /></Col>
                                </Row>
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </AbsoluteWrapper>
        );
    }
}

export default WorkPage;