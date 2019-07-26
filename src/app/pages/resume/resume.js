import React, { Component } from 'react';
import './resume.scss';

class Resume extends Component {
    componentDidMount() {
        localStorage.setItem("currentRoute", "resume");
    }

    render() {
        return (
            <div className="resume-container">
                <div className="resume-document">
                    Document
                </div>
                <div className="resume-form">
                    Doc Form
                </div>
            </div>
        );
    }
}

export default Resume;