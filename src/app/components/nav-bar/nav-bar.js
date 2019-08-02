import React, { useState } from 'react';
import { ReactComponent as Home } from '../../assets/images/home.svg';
import { ReactComponent as Expertise } from '../../assets/images/expertise.svg';
import { ReactComponent as Projects } from '../../assets/images/projects.svg';
import { ReactComponent as Contact } from '../../assets/images/contact.svg';
import { ReactComponent as Resume } from '../../assets/images/resume.svg';
import { Link } from 'react-router-dom';
import './nav-bar.scss';

export const NavBar = (props) => {
    const styles = {
        navLinkItem: {
            width: "100%"
        },
        navLinkItemActive: {
            backgroundColor: props.primaryColor
        },
        navLinkItemImg: {
            display: "block",
            margin: "0 auto",
            width: "30px",
            height: "30px",
            padding: "30px 0px",
            fill: props.primaryColor
        },
        navLinkItemActiveImg: {
            display: "block",
            margin: "0 auto",
            width: "30px",
            height: "30px",
            padding: "30px 0px",
            fill: props.secondaryColor
        }
    };

    let { HomePage } = props.mainJsonData;

    let Logo = HomePage.FullName.substring(0, 1) + (HomePage.FullName.substring(HomePage.FullName.lastIndexOf(' ') + 1, HomePage.FullName.lastIndexOf(' ') + 2));

    let currentRoute = localStorage.getItem("currentRoute");

    let [activeTab, setActiveTab] = useState({
        home: (!currentRoute || currentRoute === "home") ? true : false,
        expertise: (currentRoute === "expertise") ? true : false,
        projects: (currentRoute === "projects") ? true : false,
        contact: (currentRoute === "contact") ? true : false,
        resume: (currentRoute === "resume") ? true : false
    });

    return (
        <div
            className="nav-container"
            style={{
                backgroundColor: props.secondaryColor
            }}
        >
            <div className="nav-link-item--logo">
                {Logo}
            </div>
            <div className="nav-link">
                <Link to="/" className="nav-link-item">
                    <div
                        onClick={() => setActiveTab({
                            home: true,
                            expertise: false,
                            projects: false,
                            contact: false
                        })}
                        style={(activeTab.home) ? styles.navLinkItemActive : styles.navLinkItem}
                    >
                        <Home
                            style={(activeTab.home) ? styles.navLinkItemActiveImg : styles.navLinkItemImg}
                        />
                    </div>
                </Link>
                <Link to="/expertise" className="nav-link-item">
                    <div
                        onClick={() => setActiveTab({
                            home: false,
                            expertise: true,
                            projects: false,
                            contact: false,
                            resume: false
                        })}
                        style={(activeTab.expertise) ? styles.navLinkItemActive : styles.navLinkItem}
                    >
                        <Expertise
                            style={(activeTab.expertise) ? styles.navLinkItemActiveImg : styles.navLinkItemImg}
                        />
                    </div>
                </Link>
                <Link to="/projects" className="nav-link-item">
                    <div
                        onClick={() => setActiveTab({
                            home: false,
                            expertise: false,
                            projects: true,
                            contact: false,
                            resume: false
                        })}
                        style={(activeTab.projects) ? styles.navLinkItemActive : styles.navLinkItem}
                    >
                        <Projects
                            style={(activeTab.projects) ? styles.navLinkItemActiveImg : styles.navLinkItemImg}
                        />
                    </div>
                </Link>
                <Link to="/contact" className="nav-link-item">
                    <div
                        onClick={() => setActiveTab({
                            home: false,
                            expertise: false,
                            projects: false,
                            contact: true,
                            resume: false
                        })}
                        style={(activeTab.contact) ? styles.navLinkItemActive : styles.navLinkItem}
                    >
                        <Contact
                            style={(activeTab.contact) ? styles.navLinkItemActiveImg : styles.navLinkItemImg}
                        />
                    </div>
                </Link>
                <Link to="/resume" className="nav-link-item">
                    <div
                        onClick={() => setActiveTab({
                            home: false,
                            expertise: false,
                            projects: false,
                            contact: false,
                            resume: true
                        })}
                        style={(activeTab.resume) ? styles.navLinkItemActive : styles.navLinkItem}
                    >
                        <Resume
                            style={(activeTab.resume) ? styles.navLinkItemActiveImg : styles.navLinkItemImg}
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
};