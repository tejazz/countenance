import React, { Component } from 'react';
import AppDefault from '../../assets/images/app.svg';
import './projects.scss';

class Projects extends Component {
    constructor(props) {
        super(props);

        let ProjectsToggleObject = {};

        props.mainJsonData.ProjectsPage.Projects.map((item) => {
            return ProjectsToggleObject[item.ProjectName] = false;
        });

        this.state = {
            ProjectsToggleObject
        };
    }

    componentDidMount() {
        localStorage.setItem("currentRoute", "projects");
    }

    toggleProjectDescription(item) {
        let ProjectsToggleObject = this.state.ProjectsToggleObject;

        ProjectsToggleObject[item] = !ProjectsToggleObject[item];

        this.setState({
            ProjectsToggleObject
        });
    }

    render() {
        const { Projects, Publications } = this.props.mainJsonData.ProjectsPage;

        return (
            <div className="projects-container">
                <div className="projects-main">
                    <p className="projects-main_header" style={{ color: this.props.secondaryColor }}>Projects</p>
                    <div className="projects-main_container">
                        {Projects.map((item) => {
                            return (
                                <div className="projects_item">
                                    <div
                                        onClick={() => this.toggleProjectDescription(item.ProjectName)}
                                        className="projects_item--small" style={{ backgroundColor: this.props.secondaryColor }}>
                                        <img
                                            src={(item.ProjectImage.length > 0) ? process.env.PUBLIC_URL + item.ProjectImage : AppDefault}
                                            alt="item"
                                            className="projects_item--image"
                                            style={{ border: `2px inset ${this.props.secondaryColor}` }}
                                        />
                                        <div className="projects_item--textgroup">
                                            <p className="projects_item--name">{item.ProjectName}</p>
                                            <p className="projects_item--title">{item.ProjectTitle}</p>
                                        </div>
                                    </div>
                                    <div
                                        style={(this.state.ProjectsToggleObject[item.ProjectName]) ? { display: "block", color: this.props.secondaryColor } : { display: "none" }}
                                        className="projects_item--more"
                                    >
                                        {(item.ProjectDescription === "") ? "No description available at present" : item.ProjectDescription}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="projects-publications">
                    <p className="projects-publications_header" style={{ color: this.props.secondaryColor }}>Publications</p>
                    <div className="projects-publications_container">
                        {Publications.map((item, index) => {
                            return (
                                <div className="projects-publications_item">
                                    <a href={item.Link} className="projects-publications_title" style={{ color: this.props.secondaryColor }}>{item.Title}</a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;