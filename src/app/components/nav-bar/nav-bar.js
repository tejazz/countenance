import React, { Component } from 'react';
import Home from '../../assets/images/home.svg';
import Expertise from '../../assets/images/expertise.svg';
import Projects from '../../assets/images/projects.svg';
import Contact from '../../assets/images/contact.svg';
import { Link } from 'react-router-dom';
import './nav-bar.scss';

export const NavBar = (props) => {
    return (
        <div className="nav-container">
            <div className="nav-link">
                <Link to="/">
                    <div className="nav-link-item">
                        <img
                            src={Home}
                            alt="home"
                            className="nav-link-item_img"
                        />
                    </div>
                </Link>
                <Link to="/expertise">
                    <div className="nav-link-item">
                        <img
                            src={Expertise}
                            alt="expertise"
                            className="nav-link-item_img"
                        />
                    </div>
                </Link>
                <Link to="/projects">
                    <div className="nav-link-item">
                        <img
                            src={Projects}
                            alt="projects"
                            className="nav-link-item_img"
                        />
                    </div>
                </Link>
                <Link to="/contact">
                    <div className="nav-link-item">
                        <img
                            src={Contact}
                            alt="contact"
                            className="nav-link-item_img"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
};