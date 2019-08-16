import React, { Component } from 'react';
import AppDefault from '../../assets/images/app.svg';
import './projects.scss';
import { TitleHelmet } from '../../components/helmet/helmet';

class Projects extends Component {
    constructor(props) {
        super(props);

        let ProjectsToggleObject = {};

        props.mainJsonData.ProjectsPage.Projects.map((item) => {
            return ProjectsToggleObject[item.ProjectName] = false;
        });

        this.state = {
            ProjectsToggleObject,
            showProjects: true,
            runningWidth: window.innerWidth
        };
    }

    componentDidMount() {
        localStorage.setItem("currentRoute", "projects");

        window.addEventListener('resize', this.setState({ runningWidth: window.innerWidth }));
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
                <div
                    className="projects-main"
                    style={(this.state.runningWidth <= 620) ?
                        ((this.state.showProjects) ? { display: "block" } : { display: "none" })
                        : { display: "block" }}
                >
                    <div className="projects-responsive-header">
                        <button style={(this.state.showProjects) ? { backgroundColor: this.props.secondaryColor, color: this.props.primaryColor, border: `1px solid ${this.props.primaryColor}` } : { backgroundColor: this.props.primaryColor, color: this.props.secondaryColor, border: `1px solid ${this.props.secondaryColor}` }} onClick={() => this.setState({ showProjects: true })}>Projects</button>
                        <button style={(!this.state.showProjects) ? { backgroundColor: this.props.secondaryColor, color: this.props.primaryColor, border: `1px solid ${this.props.primaryColor}` } : { backgroundColor: this.props.primaryColor, color: this.props.secondaryColor, border: `1px solid ${this.props.secondaryColor}` }} onClick={() => this.setState({ showProjects: false })}>Publications</button>
                    </div>

                    <p className="projects-main_header" style={{ color: this.props.secondaryColor }}>Projects</p>
                    <div className="projects-main_container">
                        {Projects.map((item, index) => {
                            return (
                                <div className="projects_item" key={index}>
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
                <div
                    className="projects-publications"
                    style={(this.state.runningWidth <= 620) ?
                        ((this.state.showProjects === false) ? { display: "block" } : { display: "none" })
                        : { display: "block" }}
                >
                    <div className="projects-responsive-header">
                        <button style={(this.state.showProjects) ? { backgroundColor: this.props.secondaryColor, color: this.props.primaryColor, border: `1px solid ${this.props.primaryColor}` } : { backgroundColor: this.props.primaryColor, color: this.props.secondaryColor, border: `1px solid ${this.props.secondaryColor}` }} onClick={() => this.setState({ showProjects: true })}>Projects</button>
                        <button style={(!this.state.showProjects) ? { backgroundColor: this.props.secondaryColor, color: this.props.primaryColor, border: `1px solid ${this.props.primaryColor}` } : { backgroundColor: this.props.primaryColor, color: this.props.secondaryColor, border: `1px solid ${this.props.secondaryColor}` }} onClick={() => this.setState({ showProjects: false })}>Publications</button>
                    </div>

                    <p className="projects-publications_header" style={{ color: this.props.secondaryColor }}>Publications</p>
                    <div className="projects-publications_container">
                        {Publications.map((item, index) => {
                            return (
                                <div className="projects-publications_item" key={index}>
                                    <a href={item.Link} className="projects-publications_title" style={{ color: this.props.secondaryColor }}>{item.Title}</a>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <TitleHelmet title={"Countenance - Projects and Publications"} />
            </div>
        );
    }
}

export default Projects;