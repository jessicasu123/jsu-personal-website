import React, { Component } from 'react';
import WorkDescSection from '../../Components/WorkDescSection/WorkDescSection';

class DetailPage extends Component {
    getInfo(infoSource, name) {
        return infoSource.find(obj => obj.name === name);
    }

    render() {
        const infoToDetail = this.getInfo(this.props.infoSource, this.props.name);
        const Header = this.props.header;
        const Footer = this.props.footer;

        return (
            <React.Fragment>
                {Header && <Header work={infoToDetail} />}
                <WorkDescSection sections={this.props.sections} work={infoToDetail} />
                {Footer && <Footer work={infoToDetail} />}
            </React.Fragment>
            
        )
    }
}

export default DetailPage;