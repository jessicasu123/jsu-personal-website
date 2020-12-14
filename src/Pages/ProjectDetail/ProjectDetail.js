import React, { useState, useEffect } from 'react';
import './ProjectDetail.css';
import WorkDescSection from '../../Components/WorkDescSection/WorkDescSection';
import { Projects } from '../Work/Projects';
import { useParams } from 'react-router-dom';

function ProjectDetail() {
    let params = useParams();
    const [project, setProject] = useState('');

    useEffect(() => {
        const projectParam = params.id;

        const proj = Projects.find(proj => proj.name === projectParam)
        setProject(proj);
    }, [params])

    const [sections] = useState([
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
    ]);

    return (
        <div>
            <div className="project-detail-title">
                {project.name}
            </div>
            <div className="project-duration">
                {project.duration}
            </div>

            <WorkDescSection sections={sections} work={project} />

            <div className="project-subtitle">
                LINKED <a href={project.projectLink} className="project-link"> HERE</a>
            </div>
        </div>
    );
}

export default ProjectDetail;