import React from 'react';
import Template1Personal from '../../../assets/images/template-1-personal.png';
import Template1Expertise from '../../../assets/images/template-1-expertise.png';
import Template1Skills from '../../../assets/images/template-1-skills.png';

const TemplateOne = (props) => {
    return (
        <div className="container">
            <div className="main-document" id="main-document">
                <div className="header">
                    <img
                        src={props.mainJsonData.HomePage.DisplayImage}
                        className="header-image"
                    />
                    <p className="header-name">Tarique Ejaz</p>
                </div>

                <img
                    src={Template1Personal}
                    className="section-image"
                    alt="personal"
                />

                <div className="personal">
                    <div className="personal-about">
                        <h3 className="personal-title">About Me</h3>
                        <p className="personal-about--details">{props.mainJsonData.HomePage.BannerDescription}</p>
                    </div>
                    <div className="personal-contact">
                        <h3 className="personal-title">Contact</h3>
                        <p>E: tariqueejaz.93102@gmail.com</p>
                        <p>C: +66 659165748</p>
                        <p>W: https://github.com/tarique93102</p>
                    </div>
                </div>

                <img
                    src={Template1Expertise}
                    className="section-image"
                    alt="expertise"
                />

                <div className="expertise">
                    <div className="expertise-experience">
                        <h3 className="expertise-title">Experience</h3>
                        {props.sortedWorkExperience.slice(0, 3).map((item) => (
                            <div className="expertise-experience_company">
                                <p className="expertise-experience_company--duration">{item.From} - {item.To}</p>
                                <p className="expertise-experience_company--name">{item.JobTitle} - {item.Company}</p>
                                <p className="expertise-experience_company--description">{item.JobDescription}</p>
                            </div>
                        ))}

                        {(props.sortedWorkExperience.length > 3) ? <div><p className="expertise-experience_more">Other Experiences: {props.companyLists}</p></div> : null}
                    </div>
                    <div className="expertise-education">
                        <h3 className="expertise-title">Education</h3>

                        {(!props.mainJsonData.Education[0].Name.trim() || props.mainJsonData.Education[0].Name === "<School Name>") ? null : <div className="expertise-postgraduation">
                            <p className="expertise-session">{props.mainJsonData.Education[0].Session}</p>
                            <p className="expertise-college">{props.mainJsonData.Education[0].Name}</p>
                            <p className="expertise-degree">{props.mainJsonData.Education[0].Degree}</p>
                        </div>}

                        <div className="expertise-graduation">
                            <p className="expertise-session">{props.mainJsonData.Education[1].Session}</p>
                            <p className="expertise-college">{props.mainJsonData.Education[1].Name}</p>
                            <p className="expertise-degree">{props.mainJsonData.Education[1].Degree}</p>
                        </div>

                        {(props.allCertifications.toString().trim()) ? <div className="expertise-certifications">
                            <h3 className="expertise-title">Certifications</h3>

                            <p>{props.allCertifications}</p>
                        </div> : null}
                    </div>
                </div>

                <img
                    src={Template1Skills}
                    className="section-image"
                    alt="skills"
                />

                <div className="accessories">
                    <div className="accessories-skill">
                        <h3 className="accessories-title">Skill Set</h3>
                        {props.mainJsonData.ExpertisePage.SkillSet.slice(0, 5).map((item) => (
                            <p>{item.Skill}</p>
                        ))}

                        <p className="accessories-skill--more">Among others</p>
                    </div>

                    <div className="accessories-highlights">
                        <h3 className="accessories-title">Highlights</h3>

                        {props.mainJsonData.Highlights.slice(0, 3).map((item) => (
                            <p className="accessories-highlights--item">&#8226; {item}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TemplateOne;