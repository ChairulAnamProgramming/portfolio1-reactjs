import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';


// Componen
import NavComp from '../../components/nav/NavComp';

// Images
import icon from './img/iAbout.png';
import AbsoluteWrapper from '../../components/AbsoluteWrapper';

class AboutPage extends Component {

    render() {
        return (
            <AbsoluteWrapper>
                <Row>
                    <Col sm="3" className="bg-special">
                        <Row>
                            <Col>
                                <h1 class="display-4 font-weight-bold mt-5 text-secondary text-sm-right text-center title">About</h1>
                            </Col>
                        </Row>
                        <Row className="mt-0">
                            <Col className="text-center"><img src={icon} alt="About" className="myicon  mt-0 mb-5 ml-sm-0" /></Col>
                        </Row>
                    </Col>
                    <Col sm="9">
                        <NavComp />

                        <Row className="mt-5">
                            <Col sm="4"></Col>
                            <Col sm="6" className="pb-5 mt-5 text-center">
                                <p className="font-weight-bold">About</p>
                                <p>Hallo. I'm Chairul Anam. I'm a designer, developer,life long learner, and ready for new opportunites. A bit about me.II love music. the arts and all things creative.</p>
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </AbsoluteWrapper>
        );
    }
}

export default AboutPage;