import React from 'react';
import './resume.scss';

export const RenderDocument = (props) => {
    let {
        FullName,
        Designation,
        Email,
        Contact,
        Website,
        WorkExperience,
        Education,
        SkillSet,
        Highlights,
        SideProjects
    } = props.PortfolioData;

    return (
        <div className="document">
            <div className="document_section">
                <p className="document_title--primary">{FullName}</p>
                <p className="document_title--secondary">{Designation}</p>
                <p className="document_title--general">Email: {Email}</p>
                <p className="document_title--general">Mobile: {Contact.slice(0, 2).map((item) => `${item} `)}</p>
                <p className="document_title--link">{Website}</p>
            </div>
            <div className="document_section">
                <p className="document_title--header">Work Experience</p>
                {WorkExperience.map((item) => (
                    <div className="document_title--company">
                        <div>
                            <p className="document_title--general">
                                {item.Company} <span className="document_title--secondary">{`  ${item.From} - ${item.To}`}</span>
                            </p>
                        </div>
                        <p className="document_title--secondary">
                            {item.JobTitle}
                        </p>
                        <p className="document_title--general">
                            {item.JobDescription}
                        </p>
                    </div>
                ))}
            </div>
            <div className="document_section">
                <p className="document_title--header">Side Projects</p>
                {SideProjects.map((item) => (
                    <div className="document_title--project">
                        <p className="document_title--general">
                            {item.ProjectName}
                        </p>
                        <p className="document_title--secondary">
                            {item.ProjectTitle}
                        </p>
                        <p className="document_title--general">
                            {item.ProjectGist}
                        </p>
                    </div>
                ))}
            </div>
            <div className="document_section">
                <p className="document_title--header">Education</p>
                <div style={(Education.PostGraduation.Name.length === 0) ? { display: "none" } : { display: "block" }}>
                    <p className="document_title--general">{Education.PostGraduation.Name}</p>
                    <p className="document_title--secondary">{Education.PostGraduation.Degree}<span> {Education.PostGraduation.Session}</span></p>
                    <p className="document_title--general">CGPA: {Education.PostGraduation.CGPA}</p>
                </div>
                <div>
                    <p className="document_title--general">{Education.Graduation.Name}</p>
                    <p className="document_title--secondary">{Education.Graduation.Degree}<span> {Education.Graduation.Session}</span></p>
                    <p className="document_title--general">CGPA: {Education.Graduation.CGPA}</p>
                </div>
            </div>
            <div className="document_section">
                <p className="document_title--header">Highlights</p>
                {Highlights.map((item) => <p className="document_title--general">&#8226; {item}</p>)}
            </div>
            <div className="document_section">
                <p className="document_title--header">Skill Set</p>
                <p> {SkillSet.map((item, index) => `${item.Skill}${(SkillSet.length === index + 1) ? "" : ", "}`)}</p>
            </div>
        </div>
    )
};