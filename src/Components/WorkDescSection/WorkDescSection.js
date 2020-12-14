import React, { Component } from 'react';
import './WorkDescSection.css';

class WorkDescSection extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.sections.map(section => {
                    return (
                        <React.Fragment>
                            <div className="project-subtitle">
                                {section.name}
                            </div>
                            <div className="project-description-text">
                                {this.props.work[section.projectAttr]}
                            </div>
                        </React.Fragment>
                    )
                })}
            </React.Fragment>
        );
    }
}

export default WorkDescSection;