import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './NavComp.css';

const NavComp = () => {
    return (
        <div>
            <Nav className="justify-content-center justify-content-sm-end  mt-3 mr-3">
                <NavItem>
                    <Link className="nav-link text-dark font-weight-bold" to="/">Home</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link text-dark font-weight-bold" to="/work">Work</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link text-dark font-weight-bold" to="/contact">Contact</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link text-dark font-weight-bold" to="/about">About</Link>
                </NavItem>
            </Nav>
        </div>
    )
}

export default NavComp;