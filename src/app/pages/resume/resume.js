import React, { Component } from 'react';
import './resume.scss';

class Resume extends Component {
    componentDidMount() {
        localStorage.setItem("currentRoute", "resume");
    }

    render() {
        return (
            <div className="resume-container">
                Resume
            </div>
        );
    }
}

export default Resume;