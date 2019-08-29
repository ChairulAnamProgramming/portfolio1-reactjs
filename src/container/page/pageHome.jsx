import React, { Component } from 'react';
import { Row, Col, Nav, NavItem, NavLink } from 'reactstrap';


// Componen
import NavComp from '../../components/nav/NavComp';

// Images
import me from './img/me.png';
import logoHtml from './img/html.png';
import logoCss from './img/css3.png';
import logoJs from './img/js.png';
import logoJquery from './img/jquery.png';
import logoBotstrap from './img/bot.png';
import logoPhp from './img/php.png';
import logoFlutter from './img/flutter.png';
import Reactjs from './img/reactjs.png';
import logoJava from './img/java.png';
import AbsoluteWrapper from '../../components/AbsoluteWrapper';

class HomePage extends Component {

    render() {
        return (
            <AbsoluteWrapper>
                <Row>
                    <Col sm="3" className="bg-special">
                        <Row>
                            <Col className="text-center"><img src={me} alt="Chairul Anam" className="img-fluid myimage my-5 ml-4" /></Col>
                        </Row>
                    </Col>
                    <Col sm="9">
                        <NavComp />

                        <Row>
                            <Col sm="2"></Col>
                            <Col sm="10">
                                <Row>
                                    <Col sm="12">
                                        <h1 class="display-4 font-weight-bold mt-1 text-secondary text-sm-left text-center">Chairul Anam</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm="9" className="text-sm-left text-center">
                                        <p className="text-secondary">hello, my name is Chairul Anam. I am a UI/UX Designer,Product Designer & Web Developer.</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm="10" className="p-0 text-sm-left text-center" >
                                        <Nav vertical>
                                            <NavItem>
                                                <NavLink className="text-secondary" href="#">Full Stact Designer</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="text-secondary" href="#">Full Stact Developer</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="text-secondary" href="#">Mobile Apps Developer</NavLink>
                                            </NavItem>
                                        </Nav>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col sm="12" className="text-center">
                                        <h3 className="font-weight-bold text-secondary mb-0">Skills</h3>
                                        <p className="text-secondary">I have experience using this program</p>
                                    </Col>
                                </Row>

                                <Row className="mt-3  mb-4 mb-sm-5">
                                    <Col className="text-center">
                                        <img src={logoHtml} className="img-fluid ml-1 mr-1" alt="HTML" />
                                        <img src={logoCss} className="img-fluid ml-1 mr-1" alt="CSS" />
                                        <img src={logoJs} className="img-fluid ml-1 mr-1" alt="JS" />
                                        <img src={logoJquery} className="img-fluid ml-1 mr-1" alt="Jquery" />
                                        <img src={logoBotstrap} className="img-fluid ml-1 mr-1" alt="Bootstrap" />
                                        <img src={logoPhp} className="img-fluid ml-1 mr-1" alt="PHP" />
                                        <img src={logoFlutter} className="img-fluid ml-1 mr-1" alt="Flutter" />
                                        <img src={Reactjs} className="img-fluid ml-1 mr-1" alt="Reactjs" />
                                        <img src={logoJava} className="img-fluid ml-1 mr-1" alt="Java" />
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

export default HomePage;