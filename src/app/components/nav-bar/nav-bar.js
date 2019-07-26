import React, { Component, useState } from 'react';
import { ReactComponent as Home } from '../../assets/images/home.svg';
import { ReactComponent as Expertise } from '../../assets/images/expertise.svg';
import { ReactComponent as Projects } from '../../assets/images/projects.svg';
import { ReactComponent as Contact } from '../../assets/images/contact.svg';
import { ReactComponent as Resume } from '../../assets/images/resume.svg';
import { Link } from 'react-router-dom';
import { HomePage } from '../../data/pf-data.json';
import './nav-bar.scss';

export const NavBar = (props) => {
    let Logo = HomePage.FullName.substring(0, 1) + (HomePage.FullName.substring(HomePage.FullName.lastIndexOf(' ') + 1, HomePage.FullName.lastIndexOf(' ') + 2));

    console.log(props);

    let currentRoute = localStorage.getItem("currentRoute");

    let [activeTab, setActiveTab] = useState({
        home: (!currentRoute || currentRoute === "home") ? true : false,
        expertise: (currentRoute === "expertise") ? true : false,
        projects: (currentRoute === "projects") ? true : false,
        contact: (currentRoute === "contact") ? true : false,
        resume: (currentRoute === "resume") ? true : false
    });

    return (
        <div className="nav-container">
            <div className="nav-link-item--logo">
                {Logo}
            </div>
            <div className="nav-link">
                <Link to="/">
                    <div
                        onClick={() => setActiveTab({
                            home: true,
                            expertise: false,
                            projects: false,
                            contact: false
                        })}
                        className={(activeTab.home) ? "nav-link-item--active" : "nav-link-item"}
                    >
                        <Home
                            className={(activeTab.home) ? "nav-link-item--active_img" : "nav-link-item_img"}
                        />
                    </div>
                </Link>
                <Link to="/expertise">
                    <div
                        onClick={() => setActiveTab({
                            home: false,
                            expertise: true,
                            projects: false,
                            contact: false,
                            resume: false
                        })}
                        className={(activeTab.expertise) ? "nav-link-item--active" : "nav-link-item"}
                    >
                        <Expertise
                            className={(activeTab.expertise) ? "nav-link-item--active_img" : "nav-link-item_img"}
                        />
                    </div>
                </Link>
                <Link to="/projects">
                    <div
                        onClick={() => setActiveTab({
                            home: false,
                            expertise: false,
                            projects: true,
                            contact: false,
                            resume: false
                        })}
                        className={(activeTab.projects) ? "nav-link-item--active" : "nav-link-item"}
                    >
                        <Projects
                            className={(activeTab.projects) ? "nav-link-item--active_img" : "nav-link-item_img"}
                        />
                    </div>
                </Link>
                <Link to="/contact">
                    <div
                        onClick={() => setActiveTab({
                            home: false,
                            expertise: false,
                            projects: false,
                            contact: true,
                            resume: false
                        })}
                        className={(activeTab.contact) ? "nav-link-item--active" : "nav-link-item"}
                    >
                        <Contact
                            className={(activeTab.contact) ? "nav-link-item--active_img" : "nav-link-item_img"}
                        />
                    </div>
                </Link>
                <Link to="/resume">
                    <div
                        onClick={() => setActiveTab({
                            home: false,
                            expertise: false,
                            projects: false,
                            contact: false,
                            resume: true
                        })}
                        className={(activeTab.resume) ? "nav-link-item--active" : "nav-link-item"}
                    >
                        <Resume
                            className={(activeTab.resume) ? "nav-link-item--active_img" : "nav-link-item_img"}
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
};