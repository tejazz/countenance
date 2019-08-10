import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { RenderDocument } from './render-document.js';
import { ReactComponent as Download } from '../../assets/images/download.svg';
import './resume.scss';
import FormMeta from './form-meta.json';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumeDocument } from './pdf-document.js';

class Resume extends Component {
    constructor(props) {
        super(props);

        let WorkExperience = props.mainJsonData.ExpertisePage.WorkExperience.sort((curr, next) => {
            let currTime = new Date(curr.From);
            let nextTime = new Date(next.From);
            return nextTime - currTime;
        });

        this.state = {
            PortfolioData: {
                FullName: props.mainJsonData.HomePage.FullName,
                Designation: props.mainJsonData.HomePage.BannerTitle,
                Email: props.mainJsonData.ContactPage.Email,
                Contact: props.mainJsonData.ContactPage.Mobile,
                Website: props.mainJsonData.HomePage.WorkLinks.GitHub,
                WorkExperience: WorkExperience,
                Education: props.mainJsonData.Education,
                SkillSet: props.mainJsonData.ExpertisePage.SkillSet.map((item, index) => `${item.Skill}${(props.mainJsonData.ExpertisePage.SkillSet.length === index + 1) ? "" : ", "}`),
                Certifications: props.mainJsonData.Certifications,
                Highlights: props.mainJsonData.Highlights.join('\n'),
                SideProjects: props.mainJsonData.ProjectsPage.Projects.slice(0, 3),
                ShowCertifications: false,
                ShowPostGraduation: false,
                ShowRecentThreePositions: false
            }
        };
    }

    componentDidMount() {
        localStorage.setItem("currentRoute", "resume");
    }

    handleDynamicInput(e, arrayIndex, stateValue, objectValue) {
        let PortfolioData = this.state.PortfolioData;

        if(arrayIndex === null) {
            PortfolioData[stateValue] = e.target.value;
        } else {
           PortfolioData[objectValue][arrayIndex][stateValue] = e.target.value; 
        }

        this.setState({
            PortfolioData
        });
    }

    render() {

        console.log(this.state.PortfolioData.SkillSet);

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
                        <div className="resume-document--desktop">
                            <Download
                                className="resume-document--download"
                                style={{ fill: this.props.secondaryColor, border: `2px inset ${this.props.secondaryColor}` }}
                            />
                        </div>
                    </RouterLink>
                </div>
                <div className="resume-form" style={{ backgroundColor: this.props.secondaryColor }}>
                    <h3 className="resume-form_title">Form Your Resume</h3>
                    <div className="resume-form_main">
                        <div className="resume-document--mobile">
                            <PDFDownloadLink document={<ResumeDocument PortfolioData={this.state.PortfolioData} />} fileName="my-resume.pdf">
                                {({ blob, url, loading, error }) => (loading ? 'Loading document' : <Download
                                    className="resume-document--download"
                                    style={{ fill: this.props.secondaryColor, border: `2px inset ${this.props.secondaryColor}` }}
                                />)}
                            </PDFDownloadLink>
                        </div>

                        <p className="resume-form--headings">Personal Details</p>

                        {FormMeta.PersonalDetails.map((item) => (
                            <div className="resume-form_section">
                                <p
                                    className="resume-form_section--label"
                                >
                                    {item.label}
                                </p>
                                {(item.input) ? <input
                                    className="resume-form_section--input"
                                    value={this.state.PortfolioData[item.stateValue]}
                                    style={{ color: this.props.secondaryColor }}
                                    onChange={(e) => this.handleDynamicInput(e, null, item.stateValue, null)}
                                /> : <textarea
                                        rows={5}
                                        className="resume-form_section--input"
                                        value={this.state.PortfolioData[item.stateValue]}
                                        style={{ color: this.props.secondaryColor }}
                                        onChange={(e) => this.handleDynamicInput(e, null, item.stateValue, null)}
                                    />}
                            </div>
                        ))}

                        <p className="resume-form--headings">Education</p>

                        {FormMeta.Education.PostGraduation.map((item) => (
                            <div className="resume-form_section">
                                <p
                                    className="resume-form_section--label"
                                >
                                    {item.label}
                                </p>
                                {(item.input) ? <input
                                    className="resume-form_section--input"
                                    value={this.state.PortfolioData.Education[0][item.stateValue]}
                                    onChange={(e) => this.handleDynamicInput(e, 0, item.stateValue, "Education")}
                                    style={{ color: this.props.secondaryColor }}
                                /> : <textarea
                                        rows={5}
                                        className="resume-form_section--input"
                                        value={this.state.PortfolioData.Education[0][item.stateValue]}
                                        style={{ color: this.props.secondaryColor }}
                                        onChange={(e) => this.handleDynamicInput(e, 0, item.stateValue, "Education")}
                                    />}
                            </div>
                        ))}

                        {FormMeta.Education.Graduation.map((item) => (
                            <div className="resume-form_section">
                                <p
                                    className="resume-form_section--label"
                                >
                                    {item.label}
                                </p>
                                {(item.input) ? <input
                                    className="resume-form_section--input"
                                    value={this.state.PortfolioData.Education[1][item.stateValue]}
                                    style={{ color: this.props.secondaryColor }}
                                    onChange={(e) => this.handleDynamicInput(e, 1, item.stateValue, "Education")}
                                /> : <textarea
                                        rows={5}
                                        className="resume-form_section--input"
                                        value={this.state.PortfolioData.Education[1][item.stateValue]}
                                        style={{ color: this.props.secondaryColor }}
                                        onChange={(e) => this.handleDynamicInput(e, 1, item.stateValue, "Education")}
                                    />}
                            </div>
                        ))}

                        <p className="resume-form--headings">Work Experience</p>

                        {this.state.PortfolioData.WorkExperience.map((item, index) => (
                            FormMeta.WorkExperience.map((inputItem) => (
                                <div className="resume-form_section">
                                    <p
                                        className="resume-form_section--label"
                                    >
                                        {inputItem.label + "-" + (index + 1)}
                                    </p>
                                    {(inputItem.input) ? <input
                                        className="resume-form_section--input"
                                        value={this.state.PortfolioData.WorkExperience[index][inputItem.stateValue]}
                                        style={{ color: this.props.secondaryColor }}
                                        onChange={(e) => this.handleDynamicInput(e, index, inputItem.stateValue, "WorkExperience")}
                                    /> : <textarea
                                            rows={5}
                                            className="resume-form_section--input"
                                            value={this.state.PortfolioData.WorkExperience[index][inputItem.stateValue]}
                                            style={{ color: this.props.secondaryColor }}
                                            onChange={(e) => this.handleDynamicInput(e, index, inputItem.stateValue, "WorkExperience")}
                                        />}
                                </div>
                            ))
                        ))}

                        <p className="resume-form--headings">Projects</p>

                        {this.state.PortfolioData.SideProjects.map((item, index) => (
                            FormMeta.SideProjects.map((inputItem) => (
                                <div className="resume-form_section">
                                    <p
                                        className="resume-form_section--label"
                                    >
                                        {inputItem.label + "-" + (index + 1)}
                                    </p>
                                    {(inputItem.input) ? <input
                                        className="resume-form_section--input"
                                        value={this.state.PortfolioData.SideProjects[index][inputItem.stateValue]}
                                        style={{ color: this.props.secondaryColor }}
                                        onChange={(e) => this.handleDynamicInput(e, index, inputItem.stateValue, "SideProjects")}
                                    /> : <textarea
                                            rows={5}
                                            className="resume-form_section--input"
                                            value={this.state.PortfolioData.SideProjects[index][inputItem.stateValue]}
                                            style={{ color: this.props.secondaryColor }}
                                            onChange={(e) => this.handleDynamicInput(e, index, inputItem.stateValue, "SideProjects")}
                                        />}
                                </div>
                            ))
                        ))}

                        <p className="resume-form--headings">Certifications</p>

                        {this.state.PortfolioData.Certifications.map((item, index) => (
                            FormMeta.Certifications.map((inputItem) => (
                                <div className="resume-form_section">
                                    <p
                                        className="resume-form_section--label"
                                    >
                                        {inputItem.label + "-" + (index + 1)}
                                    </p>
                                    {(inputItem.input) ? <input
                                        className="resume-form_section--input"
                                        value={this.state.PortfolioData.Certifications[index][inputItem.stateValue]}
                                        style={{ color: this.props.secondaryColor }}
                                        onChange={(e) => this.handleDynamicInput(e, index, inputItem.stateValue, "Certifications")}
                                    /> : <textarea
                                            rows={5}
                                            className="resume-form_section--input"
                                            value={this.state.PortfolioData.Certifications[index][inputItem.stateValue]}
                                            style={{ color: this.props.secondaryColor }}
                                            onChange={(e) => this.handleDynamicInput(e, index, inputItem.stateValue, "Certifications")}
                                        />}
                                </div>
                            ))
                        ))}

                        <div className="resume-form_section">
                            <p
                                className="resume-form_section--label"
                            >
                                {FormMeta.SkillSet.label}
                            </p>
                            {(FormMeta.SkillSet.input) ? <input
                                className="resume-form_section--input"
                                value={this.state.PortfolioData[FormMeta.SkillSet.stateValue]}
                                style={{ color: this.props.secondaryColor }}
                                onChange={(e) => this.handleDynamicInput(e, null, FormMeta.SkillSet.stateValue, null)}
                            /> : <textarea
                                    rows={5}
                                    className="resume-form_section--input"
                                    value={this.state.PortfolioData[FormMeta.SkillSet.stateValue]}
                                    style={{ color: this.props.secondaryColor }}
                                    onChange={(e) => this.handleDynamicInput(e, null, FormMeta.SkillSet.stateValue, null)}
                                />}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;