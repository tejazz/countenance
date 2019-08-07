import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { RenderDocument } from './render-document.js';
import { ReactComponent as Download } from '../../assets/images/download.svg';
import './resume.scss';
import FormMeta from './form-meta.js';

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
                WorkExperience: WorkExperience.slice(0, 3),
                Education: props.mainJsonData.Education,
                SkillSet: props.mainJsonData.ExpertisePage.SkillSet.map((item, index) => `${item.Skill}${(props.mainJsonData.ExpertisePage.SkillSet.length === index + 1) ? "" : ", "}`),
                Certifications: props.mainJsonData.Certifications,
                Highlights: props.mainJsonData.Highlights.join('\n'),
                SideProjects: props.mainJsonData.ProjectsPage.Projects.slice(0, 3),
                ShowCertifications: false,
                ShowPostGraduation: false,
                HaveMoreRoles: (WorkExperience.length > 3) ? true : false
            }
        };
    }

    componentDidMount() {
        localStorage.setItem("currentRoute", "resume");
    }

    handleDynamicInput(e, type, arrayStatus, objectStatus) {
        let PortfolioData = this.state.PortfolioData;
        let mainKey, arrIndex = null, objectName;

        if (arrayStatus && !objectStatus) {
            mainKey = type.value;
            arrIndex = type.arrIndex;

            PortfolioData[mainKey][arrIndex] = e.target.value;
        } else if (arrayStatus && objectStatus) {
            mainKey = type.value;
            arrIndex = type.arrIndex;
            objectName = type.objValue;

            PortfolioData[mainKey][arrIndex][objectName] = e.target.value;
        } else if (!arrayStatus) {
            mainKey = type.value;

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
                            style={{ fill: this.props.secondaryColor, border: `2px inset ${this.props.secondaryColor}` }}
                        />
                    </RouterLink>
                </div>
                <div className="resume-form" style={{ backgroundColor: this.props.secondaryColor }}>
                    <h3 className="resume-form_title">Form Your Resume</h3>
                    <div className="resume-form_main">
                        <div>
                            <input
                                type="checkbox"
                                value="false"
                                name="ShowCertification"
                                className="resume-form_checkbox"
                                onChange={() => this.setState({ PortfolioData: { ...this.state.PortfolioData, ShowCertifications: !this.state.PortfolioData.ShowCertifications } })}
                            /> Certifications
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                value="false"
                                name="ShowPostGraduation"
                                className="resume-form_checkbox"
                                onChange={() => this.setState({ PortfolioData: { ...this.state.PortfolioData, ShowPostGraduation: !this.state.PortfolioData.ShowPostGraduation } })}
                            /> Post Graduation
                        </div>

                        {FormMeta.map((item) => (
                            <div className="resume-form_section">
                                <p className="resume-form_section--label">{item.label}</p>
                                {(item.input) ? <input
                                    className="resume-form_section--input"
                                    value={(!item.array) ? this.state.PortfolioData[item.value] : ((!item.object) ? this.state.PortfolioData[item.value][item.arrIndex] : this.state.PortfolioData[item.value][item.arrIndex][item.objValue])}
                                    style={{ color: this.props.secondaryColor }}
                                    onChange={(e) => this.handleDynamicInput(e, item, item.array, item.object)}
                                /> : <textarea
                                        rows={5}
                                        className="resume-form_section--input"
                                        value={(!item.array) ? this.state.PortfolioData[item.value] : ((!item.object) ? this.state.PortfolioData[item.value][item.arrIndex] : this.state.PortfolioData[item.value][item.arrIndex][item.objValue])}
                                        style={{ color: this.props.secondaryColor }}
                                        onChange={(e) => this.handleDynamicInput(e, item, item.array, item.object)}
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