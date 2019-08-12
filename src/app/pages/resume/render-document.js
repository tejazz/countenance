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
        Certifications,
        SideProjects,
        ShowCertifications,
        ShowPostGraduation
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
                {WorkExperience.map((item, index) => (
                    <div className="document_title--company" key={index}>
                        <div>
                            <p className="document_title--general">
                                {item.Company} <span className="document_title--secondary">{`  ${item.From} - ${item.To}`}</span>
                            </p>
                        </div>
                        <p className="document_title--secondary">
                            {item.JobTitle}
                        </p>
                        <pre className="document_title--general">{item.JobDescription}</pre>
                    </div>
                ))}
            </div>
            <div className="document_section">
                <p className="document_title--header">Side Projects</p>
                {SideProjects.map((item, index) => (
                    <div className="document_title--project" key={index}>
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
                {(ShowPostGraduation) ? (<div className="document_title--project">
                    <p className="document_title--general">{Education[0].Name}</p>
                    <p className="document_title--secondary">{Education[0].Degree}<span> {Education[0].Session}</span></p>
                    <p className="document_title--general">CGPA: {Education[0].CGPA}</p>
                </div>) : null}
                <div className="document_title--project">
                    <p className="document_title--general">{Education[1].Name}</p>
                    <p className="document_title--secondary">{Education[1].Degree}<span> {Education[1].Session}</span></p>
                    <p className="document_title--general">CGPA: {Education[1].CGPA}</p>
                </div>
            </div>
            {(ShowCertifications) ? (
                <div className="document_section">
                    <p className="document_title--header">Certifications</p>
                    {Certifications.slice(0, 3).map((item, index) => (
                        <div key={index}>
                            <p className="document_title--general">{item.CertificateName}</p>
                            <p className="document_title--secondary">{item.CertificateDuration}</p>
                            <p className="document_title--general">{item.CertificateDescription}</p>
                        </div>
                    ))}
                </div>
            ) : null}
            <div className="document_section">
                <p className="document_title--header">Highlights</p>
                <pre>{Highlights}</pre>
            </div>
            <div className="document_section">
                <p className="document_title--header">Skill Set</p>
                <p> {SkillSet}</p>
            </div>
        </div>
    )
};