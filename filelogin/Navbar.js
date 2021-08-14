import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

export const Navbar = () => {
    return (
        <>
        <header>
            <nav className="navbar navbar-dark bg-light">
                <NavDropdown title="Get In Touch" id="basic-nav-dropdown" className="navbaractive">
                    <NavDropdown.Item href="login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="register">Register</NavDropdown.Item>
                </NavDropdown>
            </nav>
        </header>
        
        </>
    )
}

