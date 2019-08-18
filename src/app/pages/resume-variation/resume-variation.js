import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Template1 from '../../assets/templates/template-1.png';
import Template2 from '../../assets/templates/template-2.png';
import './resume-variation.scss';

class ResumeVariation extends Component {

    navigateToTemplate = (templateType) => {
        this.props.history.push({
            pathname: '/templates',
            state: { templateType }
        });
    }

    render() {

        return (
            <div className="resumevar-container">
                <div className="resumevar-header">
                    <h3 className="resumevar-header--title" style={{ color: this.props.secondaryColor }}>Resume Variations</h3>
                    <p className="resumevar-header--caption" style={{ color: this.props.secondaryColor }}>There are a number of resume templates one can select from. Below you would find some of them enlisted.</p>
                </div>
                <div className="resumevar-section">
                    <Row>
                        <Col xs={6} md={4} lg={4}>
                            <div className="resumevar-section_item">
                                <img
                                    src={Template1}
                                    className="resumevar-section_item--image"
                                    alt="template1"
                                    onClick={() => this.navigateToTemplate('template1')}
                                />
                                <p className="resumevar-section_item--label" style={{ color: this.props.secondaryColor }}  onClick={() => this.navigateToTemplate('template1')}>Template #1</p>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                            <div className="resumevar-section_item">
                                <img
                                    src={Template2}
                                    className="resumevar-section_item--image"
                                    alt="template2"
                                    onClick={() => this.navigateToTemplate('template2')}
                                />
                                <p className="resumevar-section_item--label" style={{ color: this.props.secondaryColor }}  onClick={() => this.navigateToTemplate('template2')}>Template #2</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ResumeVariation;