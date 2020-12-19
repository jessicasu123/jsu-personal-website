import React from 'react';
import './ProjectDetailHeader.css';

function ProjectDetailHeader(props) {
    const project = props.work;

    return (
        <React.Fragment>
            <div className="project-detail-title">
                {project?.name}
            </div>
            <div className="project-duration">
                {project?.duration}
            </div>
        </React.Fragment>
    )
}

export default ProjectDetailHeader;