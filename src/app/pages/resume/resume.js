import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { RenderDocument } from './render-document.js';
import { ReactComponent as Download } from '../../assets/images/download.svg';
import './resume.scss';
import FormMeta from './form-meta.json';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumeDocument } from './pdf-document.js';
import { TitleHelmet } from '../../components/helmet/helmet.js';
import Input from './shared-components/input-component';
import TextBox from './shared-components/textbox-component';

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
                SkillSet: props.mainJsonData.ExpertisePage.SkillSet.map((item, index) => `${item.Skill}`).join(),
                Certifications: props.mainJsonData.Certifications,
                Highlights: props.mainJsonData.Highlights.join('\n'),
                SideProjects: props.mainJsonData.ProjectsPage.Projects.slice(0, 3),
                ShowCertifications: false,
                ShowPostGraduation: false,
                ShowRecentThreePositions: false
            }
        };

        this.handleDynamicInput = this.handleDynamicInput.bind(this);
        this.changeOptionsValue = this.changeOptionsValue.bind(this);
    }

    componentDidMount() {
        localStorage.setItem("currentRoute", "resume");
    }

    handleDynamicInput(e, arrayIndex, stateValue, objectValue) {
        let PortfolioData = Object.assign({}, this.state.PortfolioData);

        if (arrayIndex === null) {
            PortfolioData[stateValue] = e.target.value;
        } else {
            PortfolioData[objectValue][arrayIndex][stateValue] = e.target.value;
        }

        this.setState({
            PortfolioData
        });
    }

    changeOptionsValue(type) {
        if (type === "PostGraduation") {
            this.setState({
                PortfolioData: {
                    ...this.state.PortfolioData,
                    ShowPostGraduation: !this.state.PortfolioData.ShowPostGraduation
                }
            });
        } else {
            this.setState({
                PortfolioData: {
                    ...this.state.PortfolioData,
                    ShowCertifications: !this.state.PortfolioData.ShowCertifications
                }
            });
        }
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
                            <PDFDownloadLink document={<ResumeDocument PortfolioData={this.state.PortfolioData} />} fileName="countenance-resume.pdf">
                                {({ blob, url, loading, error }) => (loading ? 'Loading document' : <Download
                                    className="resume-document--download"
                                    style={{ fill: this.props.secondaryColor, border: `2px inset ${this.props.secondaryColor}` }}
                                />)}
                            </PDFDownloadLink>
                        </div>

                        {/* add options for viewing */}
                        <div className="resume-form_options">
                            <p>
                                <input
                                    type="checkbox"
                                    className="resume-form_options--checkbox"
                                    checked={this.state.PortfolioData.ShowPostGraduation}
                                    onChange={() => this.changeOptionsValue("PostGraduation")}
                                />
                                Post Graduation
                            </p>
                            <p>
                                <input
                                    type="checkbox"
                                    className="resume-form_options--checkbox"
                                    checked={this.state.PortfolioData.ShowCertifications}
                                    onChange={() => this.changeOptionsValue("Certifications")}
                                />
                                Certifications
                            </p>
                        </div>

                        <p className="resume-form--headings">Personal Details</p>

                        {FormMeta.PersonalDetails.map((item, index) => (
                            <div className="resume-form_section" key={index}>
                                <p
                                    className="resume-form_section--label"
                                >
                                    {item.label}
                                </p>
                                {(item.input) ?
                                    <Input
                                        stateValue={this.state.PortfolioData[item.stateValue]}
                                        secondaryColor={this.props.secondaryColor}
                                        handleDynamicInput={this.handleDynamicInput}
                                        inputItem={{ stateValue: item.stateValue, stateType: null }}
                                        index={null}
                                    />
                                    : <TextBox
                                        stateValue={this.state.PortfolioData[item.stateValue]}
                                        secondaryColor={this.props.secondaryColor}
                                        handleDynamicInput={this.handleDynamicInput}
                                        inputItem={{ stateValue: item.stateValue, stateType: null }}
                                        index={null}
                                    />}
                            </div>
                        ))}

                        <p className="resume-form--headings">Education</p>

                        {(this.state.PortfolioData.ShowPostGraduation) ? (FormMeta.Education.PostGraduation.map((item, index) => (
                            <div className="resume-form_section" key={index}>
                                <p
                                    className="resume-form_section--label"
                                >
                                    {item.label}
                                </p>
                                {(item.input) ?
                                    <Input
                                        stateValue={this.state.PortfolioData.Education[0][item.stateValue]}
                                        secondaryColor={this.props.secondaryColor}
                                        handleDynamicInput={this.handleDynamicInput}
                                        inputItem={{ stateValue: item.stateValue, stateType: "Education" }}
                                        index={0}
                                    />
                                    : <TextBox
                                        stateValue={this.state.PortfolioData.Education[0][item.stateValue]}
                                        secondaryColor={this.props.secondaryColor}
                                        handleDynamicInput={this.handleDynamicInput}
                                        inputItem={{ stateValue: item.stateValue, stateType: "Education" }}
                                        index={0}
                                    />}
                            </div>
                        ))) : null}

                        {FormMeta.Education.Graduation.map((item, index) => (
                            <div className="resume-form_section" key={index}>
                                <p
                                    className="resume-form_section--label"
                                >
                                    {item.label}
                                </p>
                                {(item.input) ?
                                    <Input
                                        stateValue={this.state.PortfolioData.Education[1][item.stateValue]}
                                        secondaryColor={this.props.secondaryColor}
                                        handleDynamicInput={this.handleDynamicInput}
                                        inputItem={{ stateValue: item.stateValue, stateType: "Education" }}
                                        index={1}
                                    />
                                    : <TextBox
                                        stateValue={this.state.PortfolioData.Education[1][item.stateValue]}
                                        secondaryColor={this.props.secondaryColor}
                                        handleDynamicInput={this.handleDynamicInput}
                                        inputItem={{ stateValue: item.stateValue, stateType: "Education" }}
                                        index={1}
                                    />}
                            </div>
                        ))}

                        <p className="resume-form--headings">Highlights</p>

                        <div className="resume-form_section">
                            <p
                                className="resume-form_section--label"
                            >
                                {FormMeta.Highlights.label}
                            </p>
                            {(FormMeta.SkillSet.input) ?
                                <Input
                                    stateValue={this.state.PortfolioData[FormMeta.Highlights.stateValue]}
                                    secondaryColor={this.props.secondaryColor}
                                    handleDynamicInput={this.handleDynamicInput}
                                    inputItem={{ stateValue: FormMeta.Highlights.stateValue, stateType: null }}
                                    index={null}
                                />
                                : <TextBox
                                    stateValue={this.state.PortfolioData[FormMeta.Highlights.stateValue]}
                                    secondaryColor={this.props.secondaryColor}
                                    handleDynamicInput={this.handleDynamicInput}
                                    inputItem={{ stateValue: FormMeta.Highlights.stateValue, stateType: null }}
                                    index={null}
                                />}
                        </div>

                        <p className="resume-form--headings">Work Experience</p>

                        {this.state.PortfolioData.WorkExperience.map((item, index) => (
                            FormMeta.WorkExperience.map((inputItem, inputIndex) => (
                                <div className="resume-form_section" key={inputIndex}>
                                    <p
                                        className="resume-form_section--label"
                                    >
                                        {inputItem.label + "-" + (index + 1)}
                                    </p>
                                    {(inputItem.input) ?
                                        <Input
                                            stateValue={this.state.PortfolioData.WorkExperience[index][inputItem.stateValue]}
                                            secondaryColor={this.props.secondaryColor}
                                            handleDynamicInput={this.handleDynamicInput}
                                            inputItem={{ stateValue: inputItem.stateValue, stateType: "WorkExperience" }}
                                            index={index}
                                        />
                                        : <TextBox
                                            stateValue={this.state.PortfolioData.WorkExperience[index][inputItem.stateValue]}
                                            secondaryColor={this.props.secondaryColor}
                                            handleDynamicInput={this.handleDynamicInput}
                                            inputItem={{ stateValue: inputItem.stateValue, stateType: "WorkExperience" }}
                                            index={index}
                                        />}
                                </div>
                            ))
                        ))}

                        <p className="resume-form--headings">Projects</p>

                        {this.state.PortfolioData.SideProjects.map((item, index) => (
                            FormMeta.SideProjects.map((inputItem, inputIndex) => (
                                <div className="resume-form_section" key={inputIndex}>
                                    <p
                                        className="resume-form_section--label"
                                    >
                                        {inputItem.label + "-" + (index + 1)}
                                    </p>
                                    {(inputItem.input) ?
                                        <Input
                                            stateValue={this.state.PortfolioData.SideProjects[index][inputItem.stateValue]}
                                            secondaryColor={this.props.secondaryColor}
                                            handleDynamicInput={this.handleDynamicInput}
                                            inputItem={{ stateValue: inputItem.stateValue, stateType: "SideProjects" }}
                                            index={index}
                                        />
                                        : <TextBox
                                            stateValue={this.state.PortfolioData.SideProjects[index][inputItem.stateValue]}
                                            secondaryColor={this.props.secondaryColor}
                                            handleDynamicInput={this.handleDynamicInput}
                                            inputItem={{ stateValue: inputItem.stateValue, stateType: "SideProjects" }}
                                            index={index}
                                        />}
                                </div>
                            ))
                        ))}

                        {(this.state.PortfolioData.ShowCertifications) ? <p className="resume-form--headings">Certifications</p> : null}

                        {(this.state.PortfolioData.ShowCertifications) ? this.state.PortfolioData.Certifications.map((item, index) => (
                            FormMeta.Certifications.map((inputItem, inputIndex) => (
                                <div className="resume-form_section" key={inputIndex}>
                                    <p
                                        className="resume-form_section--label"
                                    >
                                        {inputItem.label + "-" + (index + 1)}
                                    </p>
                                    {(inputItem.input) ?
                                        <Input
                                            stateValue={this.state.PortfolioData.Certifications[index][inputItem.stateValue]}
                                            secondaryColor={this.props.secondaryColor}
                                            handleDynamicInput={this.handleDynamicInput}
                                            inputItem={{ stateValue: inputItem.stateValue, stateType: "Certifications" }}
                                            index={index}
                                        />
                                        : <TextBox
                                            stateValue={this.state.PortfolioData.Certifications[index][inputItem.stateValue]}
                                            secondaryColor={this.props.secondaryColor}
                                            handleDynamicInput={this.handleDynamicInput}
                                            inputItem={{ stateValue: inputItem.stateValue, stateType: "Certifications" }}
                                            index={index}
                                        />}
                                </div>
                            ))
                        )) : null}

                        <div className="resume-form_section">
                            <p
                                className="resume-form_section--label"
                            >
                                {FormMeta.SkillSet.label}
                            </p>
                            {(FormMeta.SkillSet.input) ?
                                <Input
                                    stateValue={this.state.PortfolioData[FormMeta.SkillSet.stateValue]}
                                    secondaryColor={this.props.secondaryColor}
                                    handleDynamicInput={this.handleDynamicInput}
                                    inputItem={{ stateValue: FormMeta.SkillSet.stateValue, stateType: null }}
                                    index={null}
                                />
                                : <TextBox
                                    stateValue={this.state.PortfolioData[FormMeta.SkillSet.stateValue]}
                                    secondaryColor={this.props.secondaryColor}
                                    handleDynamicInput={this.handleDynamicInput}
                                    inputItem={{ stateValue: FormMeta.SkillSet.stateValue, stateType: null }}
                                    index={null}
                                />}
                        </div>
                    </div>
                </div>

                <TitleHelmet title={"Countenance - Build Your Resume"} />
            </div>
        );
    }
}

export default Resume;