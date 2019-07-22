import React, { Component } from 'react';
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

class Expertise extends Component {
    state = {
        timeline: true,
        displaySpecifications: displaySpecification.experience
    };

    changeDisplay(value) {
        this.setState({
            timeline: value,
            displaySpecifications: (value) ? displaySpecification.experience : displaySpecification.skillset
        });
    }

    render() {

        const renderDisplay = (this.state.timeline) ? (
            <div>Timeline</div>
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