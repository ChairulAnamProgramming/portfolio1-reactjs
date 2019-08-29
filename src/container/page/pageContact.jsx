import React, { Component } from 'react';
import { Row, Col, Card, Button, CardTitle, CardText, } from 'reactstrap';


// Componen
import NavComp from '../../components/nav/NavComp';

// Images
import icon from './img/iContact.png';
import AbsoluteWrapper from '../../components/AbsoluteWrapper';

class ContactPage extends Component {

    render() {
        return (
            <AbsoluteWrapper>
                <Row>
                    <Col sm="3" className="bg-special">
                        <Row>
                            <Col>
                                <h1 class="display-4 font-weight-bold mt-5 text-secondary text-sm-right text-center title">Contact</h1>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col className="text-center"><img src={icon} alt="My Work" className="myicon mt-5 ml-sm-0" /></Col>
                        </Row>
                    </Col>
                    <Col sm="9">
                        <NavComp />

                        <Row className="mt-5">
                            <Col sm="6"></Col>
                            <Col sm="6" className="pb-5">
                                <Row>
                                    <Col sm="10">
                                        <Card body className="border-0 shadow ">
                                            <CardTitle>Phone</CardTitle>
                                            <CardText>+62 822 1738 0171</CardText>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col sm="2"></Col>
                                    <Col sm="10">
                                        <p className="border-bottom mb-0 ml-5 ml-sm-0">Email</p>
                                        <p className="mb-0 mb-0 ml-5 ml-sm-0">chairulanamart16@gmail.com</p>
                                        <p className="mb-0 ml-5 ml-sm-0">chairuluniska@gmail.com</p>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col sm="2"></Col>
                                    <Col sm="10">
                                        <p className="border-bottom mb-0 ml-5 ml-sm-0">Address</p>
                                        <p className="mb-0 ml-5 ml-sm-0">Jl.Tambak Bitin Rt04 Rk02 Kec.Daha Utara Kab.Hulu Sungai Selatan Prov.Kalimantan Selatan</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </AbsoluteWrapper>
        );
    }
}

export default ContactPage;