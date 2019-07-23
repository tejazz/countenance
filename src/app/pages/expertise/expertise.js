import React, { Component } from 'react';
import { ExpertisePage } from '../../data/pf-data.json';
import './expertise.scss';

const displaySpecification = {
    experience: {
        title: "Experience",
        description: "Displays the working experience timeline"
    },
    skillset: {
        title: "Skill Set",
        description: "Displays the skills acquired and nurtured"
    }
};

let { WorkExperience, SkillSet } = ExpertisePage;

class Expertise extends Component {
   constructor(props) {
       super(props);

       this.state = {
        timeline: true,
        displaySpecifications: displaySpecification.experience,
        currentCompany: "<Company Name>"
    };
   }

    changeDisplay(value) {
        this.setState({
            timeline: value,
            displaySpecifications: (value) ? displaySpecification.experience : displaySpecification.skillset
        });
    }

    chnageTitle(title) {
        this.setState({
            currentCompany: title
        });
    }

    render() {
        // extract the total dates
        WorkExperience.sort((curr, next) => {
            let currTime = new Date(curr.From);
            let nextTime = new Date(next.From);
            return currTime - nextTime;
        });

        const dateWidth = (WorkExperience.length < 5) ? 100 / (WorkExperience.length) : 20;

        const renderDisplay = (this.state.timeline) ? (
            <div className="timeline-container">
                <div className="timeline_company" style={{ width: `${(WorkExperience.length < 5) ? 100 : WorkExperience.length * 20}%` }}>
                    <p className="timeline_company--name">{this.state.currentCompany}</p>
                    <div className="timeline_company--line"></div>
                    {WorkExperience.map((item) => {
                        return (
                            <div className="timeline_company--item" onMouseOver={() => this.chnageTitle(item.Company)} onMouseOut={() => this.chnageTitle('<Company Name>')} style={{ width: `${dateWidth}%` }}>
                                <img
                                    src={item.CompanyImage}
                                    alt="company-logo"
                                    className="timeline_company--item-image"
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="timeline_scroll" style={{ width: `${(WorkExperience.length < 5) ? 100 : WorkExperience.length * 20}%` }}>
                    {WorkExperience.map((item) => {
                        return (
                            <div className="timeline_scroll--item" style={{ width: `${dateWidth}%` }}>
                                <p>{item.From}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        ) : (
                <div>Skills</div>
            );

        return (
            <div className="expertise-container">
                <div className="expertise-header">
                    <h3 className="expertise-header_title">{this.state.displaySpecifications.title}</h3>
                    <p className="expertise-header_caption">{this.state.displaySpecifications.description}</p>
                    <div className="expertise-header_btn-section">
                        <div className="expertise-header_btn-section--btn-1" onClick={() => this.changeDisplay(true)}>
                            Timeline
                        </div>
                        <div className="expertise-header_btn-section--btn-2" onClick={() => this.changeDisplay(false)}>
                            Skills
                        </div>
                    </div>
                </div>
                <div className="expertise-display">
                    {renderDisplay}
                </div>
            </div>
        );
    }
}

export default Expertise;