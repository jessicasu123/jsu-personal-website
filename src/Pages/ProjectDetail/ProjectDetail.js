import React, { Component } from 'react';
import './ProjectDetail.css';
import { Projects } from '../Work/Projects';
import ProjectDetailHeader from '../ProjectDetailHeader/ProjectDetailHeader';
import ProjectDetailFooter from '../ProjectDetailFooter/ProjectDetailFooter';
import { useParams } from 'react-router-dom';
import DetailPage from '../DetailPage/DetailPage';

const projectSections = [
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

/**
 * Exhibits composition by using DetailPage component.
 */
function ProjectDetailPage() {
    const params = useParams();
    const projectParam = params.id;

    return (
        <DetailPage name={projectParam} infoSource={Projects} header={ProjectDetailHeader} 
        footer={ProjectDetailFooter} sections={projectSections} />
    )
}

/**
 * Previous class component version.
 * Does NOT exhibit composition; repeats logic with IndustryDetail.
 * 
 */
// class ProjectDetail extends Component {
//     findProject() {
//         const projectParam = this.props.match.params.id;
//         const proj = Projects.find(proj => proj.name === projectParam);
//         return proj;
//     }

//     render() {
//         const project = this.findProject();
//         return (
//             <div>
//                 <ProjectDetailHeader project={project} />

//                 <WorkDescSection projectSections={projectSections} work={project} />

//                 <ProjectDetailFooter project={project} />
//             </div>
//         );
//     }
// }

export default ProjectDetailPage;