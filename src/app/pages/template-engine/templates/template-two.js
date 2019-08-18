import React, { Fragment } from 'react';
import './template-two.scss';
import User from '../../../assets/images/user.svg';
import Personal from '../../../assets/images/template-2-personal.png';
import Experience from '../../../assets/images/template-2-experience.png';

const TemplateTwo = (props) => {

    let renderImage = (props.mainJsonData.HomePage.DisplayImage.trim()) ? props.mainJsonData.HomePage.DisplayImage : User;

    let mainJsonData = props.mainJsonData;

    return (
        <div className="container">
            <div className="main-document" id="main-document">
                <div className="header">
                    <img
                        src={renderImage}
                        alt='displayImage'
                        className="header-image"
                    />

                    <div className="header-title">
                        <p className="header-title--name">{mainJsonData.HomePage.FullName}</p>
                        <p className="header-title--designation">{mainJsonData.HomePage.BannerTitle}</p>
                    </div>
                </div>

                <div className="subsection">
                    <div className="subsection-minor">
                        <h3 className="subsection-title">Contact</h3>

                        <div className="section-main">
                            <p className="contact-two-title">Address</p>
                            <p className="contact-two-value">{mainJsonData.ContactPage.Address}</p>

                            <p className="contact-two-title">Phone</p>
                            <p className="contact-two-value">{props.contactInfo}</p>

                            <p className="contact-two-title">Email</p>
                            <p className="contact-two-value">{mainJsonData.ContactPage.Email}</p>

                            <p className="contact-two-title">Website</p>
                            <p className="contact-two-value">{props.website}</p>
                        </div>

                        <h3 className="subsection-title">Education</h3>

                        <div className="section-main">
                            {(!props.mainJsonData.Education[0].Name.trim() || props.mainJsonData.Education[0].Name === "<School Name>") ? null : <Fragment>
                                <p className="contact-two-title">{mainJsonData.Education[0].Degree}</p>
                                <p className="contact-two-value">{mainJsonData.Education[0].Name} | {mainJsonData.Education[0].Session}</p>
                            </Fragment>}

                            <p className="contact-two-title">{mainJsonData.Education[1].Degree}</p>
                            <p className="contact-two-value">{mainJsonData.Education[1].Name} | {mainJsonData.Education[1].Session}</p>
                        </div>

                        <h3 className="subsection-title">Skills</h3>

                        <div className="section-main">
                            {props.mainJsonData.ExpertisePage.SkillSet.map((item) => {
                                return (<p className="contact-two-value">&#8226; {item.Skill}</p>)
                            })}
                        </div>
                    </div>

                    <div className="subsection-major">
                        <div style={{ position: 'relative' }}>
                            <img
                                src={Personal}
                                className="section-image"
                                alt="personal"
                            />

                            <h3 className="subsection-title">Profile</h3>
                        </div>

                        <div className="section-main">
                            <p>{mainJsonData.HomePage.BannerDescription}</p>
                        </div>

                        <div style={{ position: 'relative' }}>
                            <img
                                src={Experience}
                                className="section-image"
                                alt="experience"
                            />

                            <h3 className="subsection-title">Experience</h3>
                        </div>

                        <div className="section-main">
                            {props.sortedWorkExperience.map((item) => {
                                return (
                                    <div>
                                        <p className="contact-two-title">{item.JobTitle}</p>
                                        <p className="contact-two-value" style={{ opacity: 0.8 }}>{item.Company} | {item.From}-{item.To}</p>
                                        <p className="contact-two-value">{item.JobGist}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <h3 className="subsection-title">Highlights</h3>

                        <div className="section-main">
                            {mainJsonData.Highlights.map((item) => {
                                return (
                                    <div>
                                        <p className="contact-two-value">&#8226; {item}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TemplateTwo;