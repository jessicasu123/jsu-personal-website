import React, { Component } from 'react';
import './WorkDetail.css';
import '../ProjectDetail/ProjectDetail.css';
import WorkDescSection from '../../Components/WorkDescSection/WorkDescSection';

class WorkDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: this.props.location.state.company,
            sections: [
                {
                    name: "My Project",
                    projectAttr: "projectDescription"
                },
                {
                    name: "Tech Stack",
                    projectAttr: "techDescription"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <img src={this.state.company.logo} className="company-logo"/>
                <div className="company-info">
                    <div className="company-name">
                        {this.state.company.name}
                    </div>

                    <div className="company-work-duration">
                        {this.state.company.workDuration}
                    </div>
                </div>

                <WorkDescSection sections={this.state.sections} work={this.state.company} />
            </div>
        );
    }
}

export default WorkDetail;