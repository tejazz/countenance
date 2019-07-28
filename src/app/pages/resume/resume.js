import React, { Component, Fragment } from 'react';

import {Link as RouterLink} from 'react-router-dom';
import PfData from '../../data/pf-data.json';
import './resume.scss';
import { RenderDocument } from './render-document.js';



let WorkExperience = PfData.ExpertisePage.WorkExperience.sort((curr, next) => {
    let currTime = new Date(curr.From);
    let nextTime = new Date(next.From);
    return nextTime - currTime;
});

const PortfolioData = {
    FullName: PfData.HomePage.FullName,
    Designation: PfData.HomePage.BannerTitle,
    Email: PfData.ContactPage.Email,
    Contact: PfData.ContactPage.Mobile,
    Website: PfData.HomePage.WorkLinks.GitHub,
    WorkExperience: WorkExperience.slice(0, 3),
    Education: PfData.Education,
    SkillSet: PfData.ExpertisePage.SkillSet,
    Certifications: PfData.Certifications,
    Highlights: PfData.Highlights,
    SideProjects: PfData.ProjectsPage.Projects.slice(0, 3)
};

var LOADING;

class Resume extends Component {
    constructor(props) {
        super(props);

        this.state = {
            PortfolioData
        };
    }

    componentDidMount() {
        localStorage.setItem("currentRoute", "resume");
    }

    changeValue(e) {
        this.setState({
            PortfolioData: {
                ...PortfolioData,
                FullName: e.target.value
            }
        })
    }

    render() {


        return (
            <div className="resume-container">
                <div className="resume-document">
                    <RenderDocument PortfolioData={this.state.PortfolioData} />
                </div>
                <div className="resume-form">
                    <h3 className="resume-form_title">Form Your Resume</h3>
                    <div className="resume-form_main">
                        <input
                            value={this.state.PortfolioData.FullName}
                            onChange={(e) => this.changeValue(e)}
                        />
                        <RouterLink to={{
                            pathname: '/pdfview',
                            state: {
                                PortfolioData: this.state.PortfolioData
                            }
                        }}><button>Download</button></RouterLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;