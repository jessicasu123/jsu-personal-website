import React, { Component } from 'react';

class WorkDetail extends Component {
    render() {
        return (
            <div>
                <div>{this.props.match.params.id} Work</div>
            </div>
        );
    }
}

export default WorkDetail;