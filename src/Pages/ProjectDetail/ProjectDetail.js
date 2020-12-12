import React, { Component } from 'react';
import './ProjectDetail.css';

class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: this.props.location.state.project
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.location.state.project !== state.project) {
            return {
                project: props.location.state.project
            };
        }
        return null;
    }

    render() {
        return (
            <div>
                <div className="project-detail-title">
                    {this.state.project.name}
                </div>
                <div className="project-duration">
                    {this.state.project.duration}
                </div>

                <div className="project-subtitle">
                    About
                </div>
                <div className="project-description-text">
                    {this.state.project.description}
                </div>

                <div className="project-subtitle">
                    Tech Stack
                </div>
                <div className="project-description-text">
                    {this.state.project.techDescription}
                </div>

                <div className="project-subtitle">
                    LINKED <a href={this.state.project.projectLink} className="project-link"> HERE</a>
                </div>
            </div>
        );
    }
}

export default ProjectDetail;