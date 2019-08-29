import React, { Component, useContext } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

// lib
import { Route, Switch, __RouterContext } from "react-router-dom";
import { useTransition, animated } from 'react-spring';

// pages
import HomePage from '../page/pageHome';
import WorkPage from '../page/pageWork';
import ContactPage from '../page/pageContact';
import AboutPage from '../page/pageAbout';





const Home = () => {

    const { location } = useContext(__RouterContext);
    const transitons = useTransition(location, location => location.pathname, {
        from: { opacity: 0, transform: "translateX(100%)" },
        enter: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(-100%)" }
    });

    return (
        <>
            {transitons.map(({ item, props, key }) => (
                <animated.div key={key} style={props} >
                    <Switch location={item}>
                        <Container className="mt-5   position-absolute">
                            <Jumbotron fluid className="rounded bg-white p-0 ">
                                <Route path="/" exact component={HomePage} />
                                <Route path="/work" component={WorkPage} />
                                <Route path="/contact" component={ContactPage} />
                                <Route path="/about" component={AboutPage} />
                            </Jumbotron>
                            <p className="text-center text-white">Copryright © 2019 TimCode. All Rights Reserved</p>
                        </Container>
                    </Switch>
                </animated.div>

            ))}
        </>
    )
}

export default Home;

