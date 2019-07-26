import React, { Component } from 'react';
import { ProjectsPage } from '../../data/pf-data.json';
import AppDefault from '../../assets/images/app.svg';
import './projects.scss';

let ProjectsToggleObject = {};

ProjectsPage.Projects.map((item) => {
    ProjectsToggleObject[item.ProjectName] = false;
});

class Projects extends Component {
    state = {
        ProjectsToggleObject
    };

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
        console.log(this.state);
        const { Projects, Publications } = ProjectsPage;

        console.log(Projects);
        return (
            <div className="projects-container">
                <div className="projects-main">
                    <p className="projects-main_header">Projects</p>
                    <div className="projects-main_container">
                        {Projects.map((item) => {
                            return (
                                <div className="projects_item">
                                    <div
                                    onClick={() => this.toggleProjectDescription(item.ProjectName)} 
                                    className="projects_item--small">
                                        <img
                                            src={(item.ProjectImage.length > 0) ? item.ProjectImage : AppDefault}
                                            alt="item"
                                            className="projects_item--image"
                                        />
                                        <div className="projects_item--textgroup">
                                            <p className="projects_item--name">{item.ProjectName}</p>
                                            <p className="projects_item--title">{item.ProjectTitle}</p>
                                        </div>
                                    </div>
                                    <div
                                        style={(this.state.ProjectsToggleObject[item.ProjectName]) ? { display: "block" } : { display: "none" }}
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
                    <p className="projects-publications_header">Publications</p>
                    <div className="projects-publications_container">
                        {Publications.map((item, index) => {
                            return (
                                <div className="projects-publications_item">
                                    <a href={item.Link} className="projects-publications_title">{item.Title}</a>
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