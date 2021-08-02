import React, { Component } from 'react';
import './Work.css';
import { Projects } from './Projects';
import ProjectRow from '../../Components/ProjectRow/ProjectRow';
import { IndustryExperiencies } from './IndustryExperience';
import { Link } from 'react-router-dom';

const PROJECTS_TITLE = "Projects";
const INDUSTRY_TITLE = "Places I've Worked";

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
                    {INDUSTRY_TITLE}
                </div>

                <div className="work-section">
                    <div className="work-experience-grid">
                        {IndustryExperiencies.map(company => {
                            return (
                                <Link className="work-experience-link" to={{
                                    pathname: `/work/industry/${company.name}`}}>
                                    <img className="work-experience-image" src={company.image} alt={company.name}/>
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