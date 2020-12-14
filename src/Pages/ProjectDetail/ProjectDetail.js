import React, { Component } from 'react';
import './ProjectDetail.css';
import WorkDescSection from '../../Components/WorkDescSection/WorkDescSection';

class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: this.props.location.state.project,
            sections: [
            {
                name: "About",
                projectAttr: "description"
            },
            {
                name: "Tech Stack",
                projectAttr: "techDescription"
            },
            {
                name: "Contributors",
                projectAttr: "contributors"
            }
            ]
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

                <WorkDescSection sections={this.state.sections} work={this.state.project} />

                <div className="project-subtitle">
                    LINKED <a href={this.state.project.projectLink} className="project-link"> HERE</a>
                </div>
            </div>
        );
    }
}

export default ProjectDetail;