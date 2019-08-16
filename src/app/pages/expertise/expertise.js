import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { ReactComponent as Back } from '../../assets/images/back.svg';
import './expertise.scss';
import { TitleHelmet } from '../../components/helmet/helmet';

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
            runningWidth: window.innerHeight,
            currentCompanyItem: {},
            singleCompanyView: false
        };

        window.addEventListener('resize', this.updateRunningWidth);
    }

    componentDidMount() {
        localStorage.setItem("currentRoute", "expertise");

        this.updateRunningWidth();
    }

    changeDisplay(value) {
        this.setState({
            timeline: value,
            singleCompanyView: !value,      // enables full timeline each time
            displaySpecifications: (value) ? displaySpecification.experience : displaySpecification.skillset
        });
    }

    updateRunningWidth = () => {
        this.setState({ runningWidth: window.innerWidth });
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
        const styles = {
            btn1: {
                border: `1px solid ${this.props.secondaryColor}`,
                backgroundColor: this.props.primaryColor,
                padding: "12px",
                transition: "0.2s all",
                color: this.props.secondaryColor,
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                cursor: "pointer"
            },
            btn1Active: {
                border: `1px solid ${this.props.secondaryColor}`,
                backgroundColor: this.props.secondaryColor,
                padding: "12px",
                transition: "0.2s all",
                color: this.props.primaryColor,
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                cursor: "pointer"
            },
            btn2: {
                border: `1px solid ${this.props.secondaryColor}`,
                backgroundColor: this.props.primaryColor,
                padding: "12px",
                transition: "0.2s all",
                color: this.props.secondaryColor,
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
                cursor: "pointer"
            },
            btn2Active: {
                border: `1px solid ${this.props.secondaryColor}`,
                backgroundColor: this.props.secondaryColor,
                padding: "12px",
                transition: "0.2s all",
                color: this.props.primaryColor,
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
                cursor: "pointer"
            }
        }

        let { WorkExperience, SkillSet } = this.props.mainJsonData.ExpertisePage;

        // extract the total dates
        WorkExperience.sort((curr, next) => {
            let currTime = new Date(curr.From);
            let nextTime = new Date(next.From);
            return currTime - nextTime;
        });

        let singleItemWidth = (this.state.runningWidth <= 620) ? 40 : 20;

        const totalWidth = (WorkExperience.length < 5) ? 100 : WorkExperience.length * singleItemWidth;
        const dateWidth = (WorkExperience.length < 5) ? 100 / (WorkExperience.length) : singleItemWidth;

        const renderDisplay = (this.state.timeline) ? (
            (!this.state.singleCompanyView) ? (<div className="timeline-container">
                <div className="timeline_company" style={{ width: `${totalWidth}%` }}>
                    <p className="timeline_company--name">
                        <span className="timeline_company--name-1" style={{ backgroundColor: this.props.secondaryColor }}>
                            {this.state.currentCompany.value}
                        </span>
                        <span className="timeline_company--name-2" style={{ color: this.props.secondaryColor }}>
                            {this.state.currentCompany.duration}
                        </span>
                    </p>
                    <div className="timeline_company--line" style={{ borderBottom: `4px dotted ${this.props.secondaryColor}` }}></div>
                    {WorkExperience.map((item, index) => {
                        return (
                            <div
                                className="timeline_company--item"
                                onMouseOver={() => this.changeTitle(item)}
                                onMouseOut={() => this.changeTitle({ Company: '<Company Name>' })}
                                style={{ width: `${dateWidth}%` }}
                                key={index}
                            >
                                <img
                                    src={item.CompanyImage}
                                    alt="company-logo"
                                    className="timeline_company--item-image"
                                    style={{ border: `6px inset ${this.props.secondaryColor}` }}
                                    onClick={() => this.selectCurrentCompany(item, true)}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="timeline_scroll" style={{ width: `${totalWidth}%`, backgroundColor: this.props.secondaryColor }}>
                    {WorkExperience.map((item, index) => {
                        return (
                            <div className="timeline_scroll--item" style={{ width: `${dateWidth}%` }} key={index}>
                                <p>{item.From}</p>
                            </div>
                        );
                    })}
                </div>
            </div>) : (
                    <div className="timeline_company" style={{ width: "100%", height: "100%" }}>
                        <p className="timeline_company--name">
                            <span style={{ backgroundColor: this.props.secondaryColor }} className="timeline_company--name-1">
                                {this.state.currentCompanyItem.Company}
                            </span>
                            <span className="timeline_company--name-2" style={{ color: this.props.secondaryColor }}>
                                {`${this.state.currentCompanyItem.From} - ${this.state.currentCompanyItem.To}`}
                            </span>
                        </p>

                        <div
                            className="timeline_company-back"
                            style={{ backgroundColor: this.props.secondaryColor }}
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
                                style={{ border: `15px inset ${this.props.secondaryColor}` }}
                            />
                            <div className="timeline_company_item--roles">
                                {this.state.currentCompanyItem.Role.map((item) => {
                                    return (
                                        <div style={{ zIndex: 3, position: "relative" }} className="timeline_company_item--roles--main">
                                            <p className="timeline_company_item--roles-name" style={{ backgroundColor: this.props.secondaryColor }}>{item.RoleName}</p>
                                            <p className="timeline_company_item--roles-duration" style={{ color: this.props.secondaryColor }}>{`${item.From} - ${item.To}`}</p>
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
                        {SkillSet.map((item, index) => {
                            return (
                                <Col xs={4} md={2} lg={2} className="skill-item-col" key={index}>
                                    <div className="skill-item">
                                        <img
                                            src={item.SkillImage}
                                            className="skill-item_image"
                                            style={{ border: `6px inset ${this.props.secondaryColor}` }}
                                            alt="skill"
                                        />
                                        <div className="skill-item_text">
                                            <p className="skill-item_text--name" style={{ backgroundColor: this.props.secondaryColor }}>{item.Skill}</p>
                                            <p className="skill-item_text--category" style={{ color: this.props.secondaryColor }}>{item.Category}</p>
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
                    <h3 className="expertise-header_title" style={{ color: this.props.secondaryColor }}>{this.state.displaySpecifications.title}</h3>
                    <p className="expertise-header_caption" style={{ color: this.props.secondaryColor }}>{this.state.displaySpecifications.description}</p>
                    <div className="expertise-header_btn-section">
                        <div style={(this.state.timeline) ? styles.btn1Active : styles.btn1} className="expertise-header_btn-section--btn" onClick={() => this.changeDisplay(true)}>
                            Timeline
                        </div>
                        <div style={(!this.state.timeline) ? styles.btn2Active : styles.btn2} className="expertise-header_btn-section--btn" onClick={() => this.changeDisplay(false)}>
                            Skills
                        </div>
                    </div>
                </div>
                <div className="expertise-display">
                    {renderDisplay}
                </div>

                <TitleHelmet title={"Countenance - Work Timeline and Skills"} />
            </div>
        );
    }
}

export default Expertise;