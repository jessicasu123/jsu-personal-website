import React, { Component } from 'react';
import './Work.css';
import { Projects } from './Projects';
import ProjectRow from '../../Components/ProjectRow/ProjectRow';
import { WorkExperiences } from './WorkExperience';
import { Link } from 'react-router-dom';

const PROJECTS_TITLE = "Projects";
const WORK_TITLE = "Places I've Worked";

class Work extends Component {
    render() {
        return (
            <div>
                <div className="work-section-title">
                    {PROJECTS_TITLE}
                </div>

                <div className="work-section">
                    {Projects.map(project => {
                        return (
                            <ProjectRow project={project}/>
                        )
                    })}
                </div>

                <div className="work-section-title">
                    {WORK_TITLE}
                </div>

                <div className="work-section">
                    <div className="work-experience-grid">
                        {WorkExperiences.map(exp => {
                            return (
                                <Link to={{
                                    pathname: `/work/industry/${exp.name}`
                                }}>
                                <img className="work-experience-image" src={exp.logo} />
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;