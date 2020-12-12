import React, { Component } from 'react';
import './ProjectRow.css';
import {Link} from 'react-router-dom';

class ProjectRow extends Component {
    render() {
        return (
            <Link to={{
                pathname: `/work/project/${this.props.project.name}`,
                state: {
                    project: this.props.project
                }
            }}>
            <div className="project-row">
                <img className="project-image" src={this.props.project.image} alt={this.props.project.alt} />
                <div className="project-text"> {this.props.project.name} 
                    <p className="colored-dot">.</p>
                </div>
            </div>
            </Link>
        );
    }
}

export default ProjectRow;