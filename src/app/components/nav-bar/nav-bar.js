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
            <ul className="nav-link">
                <Link to="/">
                    <li className="nav-link-item">
                        <img
                            src={Home}
                            alt="home"
                            className="nav-link-item-img"
                        />
                    </li>
                </Link>
                <Link to="/expertise">
                    <li className="nav-link-item">
                        <img
                            src={Expertise}
                            alt="expertise"
                            className="nav-link-item-img"
                        />
                    </li>
                </Link>
                <Link to="/projects">
                    <li className="nav-link-item">
                        <img
                            src={Projects}
                            alt="projects"
                            className="nav-link-item-img"
                        />
                    </li>
                </Link>
                <Link to="/contact">
                    <li className="nav-link-item">
                        <img
                            src={Contact}
                            alt="contact"
                            className="nav-link-item-img"
                        />
                    </li>
                </Link>
            </ul>
        </div>
    );
};