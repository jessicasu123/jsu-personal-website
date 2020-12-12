import React, { Component } from 'react';
import './WorkDetail.css';
import '../ProjectDetail/ProjectDetail.css';

class WorkDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: this.props.location.state.company
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

                <div className="company-subtitle">
                    MY PROJECT
                </div>

                <div className="company-project-description-text">
                    {this.state.company.projectDescription}
                </div>
            </div>
        );
    }
}

export default WorkDetail;