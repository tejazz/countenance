import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { ReactComponent as Back } from '../../assets/images/back.svg';
import { ExpertisePage } from '../../data/pf-data.json';
import './expertise.scss';

/* to-do: clean the code */

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
            currentCompany: {
                value: "<Company Name>",
                duration: ""
            },
            currentCompanyItem: {},
            singleCompanyView: false
        };
    }

    componentDidMount() {
        localStorage.setItem("currentRoute", "expertise");
    }

    changeDisplay(value) {
        this.setState({
            timeline: value,
            singleCompanyView: !value,      // enables full timeline each time
            displaySpecifications: (value) ? displaySpecification.experience : displaySpecification.skillset
        });
    }

    changeTitle(item) {
        let duration = "";

        if (item.Company !== "<Company Name>") {
            duration = `${item.From} - ${item.To} : ${item.Role.length} Role(s)`
        } else {
            duration = ""
        }

        this.setState({
            currentCompany: {
                value: item.Company,
                duration: duration
            }
        });
    }

    selectCurrentCompany(company, status) {
        if (!status) {
            this.changeTitle({ Company: "<Company Name>" });
        }

        this.setState({
            currentCompanyItem: company,
            singleCompanyView: status
        });
    }

    render() {
        console.log(this.state);

        // extract the total dates
        WorkExperience.sort((curr, next) => {
            let currTime = new Date(curr.From);
            let nextTime = new Date(next.From);
            return currTime - nextTime;
        });

        const totalWidth = (WorkExperience.length < 5) ? 100 : WorkExperience.length * 20;
        const dateWidth = (WorkExperience.length < 5) ? 100 / (WorkExperience.length) : 20;

        const renderDisplay = (this.state.timeline) ? (
            (!this.state.singleCompanyView) ? (<div className="timeline-container">
                <div className="timeline_company" style={{ width: `${totalWidth}%` }}>
                    <p className="timeline_company--name">
                        <span className="timeline_company--name-1">
                            {this.state.currentCompany.value}
                        </span>
                        <span className="timeline_company--name-2">
                            {this.state.currentCompany.duration}
                        </span>
                    </p>
                    <div className="timeline_company--line"></div>
                    {WorkExperience.map((item) => {
                        return (
                            <div
                                className="timeline_company--item"
                                onMouseOver={() => this.changeTitle(item)}
                                onMouseOut={() => this.changeTitle({ Company: '<Company Name>' })}
                                style={{ width: `${dateWidth}%` }}
                            >
                                <img
                                    src={item.CompanyImage}
                                    alt="company-logo"
                                    className="timeline_company--item-image"
                                    onClick={() => this.selectCurrentCompany(item, true)}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="timeline_scroll" style={{ width: `${totalWidth}%` }}>
                    {WorkExperience.map((item) => {
                        return (
                            <div className="timeline_scroll--item" style={{ width: `${dateWidth}%` }}>
                                <p>{item.From}</p>
                            </div>
                        );
                    })}
                </div>
            </div>) : (
                    <div className="timeline_company" style={{ width: "100%", height: "100%" }}>
                        <p className="timeline_company--name">
                            <span className="timeline_company--name-1">
                                {this.state.currentCompanyItem.Company}
                            </span>
                            <span className="timeline_company--name-2">
                                {`${this.state.currentCompanyItem.From} - ${this.state.currentCompanyItem.To}`}
                            </span>
                        </p>

                        <div
                            className="timeline_company-back"
                            onClick={() => this.selectCurrentCompany({}, false)}
                        >
                            <Back
                                className="timeline_company-back--image"
                            />
                            <p className="timeline_company-back--text">BACK</p>
                        </div>

                        <div className="timeline_company_item">
                            <img
                                src={this.state.currentCompanyItem.CompanyImage}
                                alt="company-logo"
                                className="timeline_company_item--image"
                            />
                            <div className="timeline_company_item--roles">
                                {this.state.currentCompanyItem.Role.map((item) => {
                                    return (
                                        <div style={{ zIndex: 3, position: "relative" }}>
                                            <p className="timeline_company_item--roles-name">{item.RoleName}</p>
                                            <p className="timeline_company_item--roles-duration">{`${item.From} - ${item.To}`}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )
        ) : (
                <div className="skill-container">
                    <Row className="skill-container-row">
                        {SkillSet.map((item) => {
                            return (
                                <Col xs={3} md={2} lg={2} className="skill-item-col">
                                    <div className="skill-item">
                                        <img
                                            src={item.SkillImage}
                                            className="skill-item_image"
                                            alt="skill"
                                        />
                                        <div className="skill-item_text">
                                            <p className="skill-item_text--name">{item.Skill}</p>
                                            <p className="skill-item_text--category">{item.Category}</p>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            );

        return (
            <div className="expertise-container">
                <div className="expertise-header">
                    <h3 className="expertise-header_title">{this.state.displaySpecifications.title}</h3>
                    <p className="expertise-header_caption">{this.state.displaySpecifications.description}</p>
                    <div className="expertise-header_btn-section">
                        <div className={(this.state.timeline) ? "expertise-header_btn-section--btn-1-active" : "expertise-header_btn-section--btn-1"} onClick={() => this.changeDisplay(true)}>
                            Timeline
                        </div>
                        <div className={(!this.state.timeline) ? "expertise-header_btn-section--btn-2-active" : "expertise-header_btn-section--btn-2"} onClick={() => this.changeDisplay(false)}>
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