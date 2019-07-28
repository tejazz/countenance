import React, { Component, Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { RenderDocument } from './render-document.js';
import { ReactComponent as Download } from '../../assets/images/download.svg';
import PfData from '../../data/pf-data.json';
import './resume.scss';
import FormMeta from './form-meta.js';

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
    SkillSet: PfData.ExpertisePage.SkillSet.map((item, index) => `${item.Skill}${(PfData.ExpertisePage.SkillSet.length === index + 1) ? "" : ", "}`),
    Certifications: PfData.Certifications,
    Highlights: PfData.Highlights.map((item) =>  "\u2022" + item + "\n"),
    SideProjects: PfData.ProjectsPage.Projects.slice(0, 3),
    ShowCertifications: false,
    ShowPostGraduation: false
};

class Resume extends Component {
    constructor(props) {
        super(props);

        this.state = {
            PortfolioData
        };
    }

    componentDidMount() {
        localStorage.setItem("currentRoute", "resume");
        console.log(typeof PortfolioData.SkillSet)
    }

    handleDynamicInput(e, type, arrayStatus, objectStatus) {
        let PortfolioData = this.state.PortfolioData;
        let mainKey, arrIndex = null, objectName;

        if (arrayStatus && !objectStatus) {
            mainKey = type.substring(26, type.length - 5);
            arrIndex = parseInt(type.substring(type.length - 2, type.length - 1));

            PortfolioData[mainKey][arrIndex] = e.target.value;
        } else if (arrayStatus && objectStatus) {
            mainKey = type.substring(type.indexOf('[') + 2, type.indexOf(']') - 1);
            arrIndex = parseInt(type.substring(type.indexOf(']') + 2, type.indexOf(']') + 3));
            objectName = type.substring(type.indexOf(']', type.indexOf(']')) + 5, type.length);

            PortfolioData[mainKey][arrIndex][objectName] = e.target.value;
        } else if (!arrayStatus) {
            mainKey = type.slice(26, type.length - 2);

            PortfolioData[mainKey] = e.target.value;
        }

        this.setState({
            PortfolioData: PortfolioData
        });
    }

    render() {
        return (
            <div className="resume-container">
                <div className="resume-document">
                    <RenderDocument PortfolioData={this.state.PortfolioData} />
                    <RouterLink
                        to={{
                            pathname: '/pdfview',
                            state: {
                                PortfolioData: this.state.PortfolioData
                            }
                        }}
                    >
                        <Download
                            className="resume-document--download"
                        />
                    </RouterLink>
                </div>
                <div className="resume-form">
                    <h3 className="resume-form_title">Form Your Resume</h3>
                    <div className="resume-form_main">
                        {FormMeta.map((item) => (
                            <div className="resume-form_section">
                                <p className="resume-form_section--label">{item.label}</p>
                                {(item.input) ? <input
                                    className="resume-form_section--input"
                                    value={eval(item.value)}
                                    onChange={(e) => this.handleDynamicInput(e, item.value, item.array, item.object)}
                                /> : <textarea
                                        rows={5}
                                        className="resume-form_section--input"
                                        value={eval(item.value)}
                                        onChange={(e) => this.handleDynamicInput(e, item.value, item.array, item.object)}
                                    />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;