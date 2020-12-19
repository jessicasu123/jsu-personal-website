function ProjectDetailFooter(props) {
    const project = props.work;

    return (
        <div className="project-subtitle">
            LINKED <a href={project?.projectLink} className="project-link"> HERE</a>
        </div>
    );
}

export default ProjectDetailFooter;