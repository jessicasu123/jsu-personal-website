import React, { Component } from 'react';
import './Footer.css';

import { FooterElements } from './FooterElements';


class Footer extends Component {
    redirectFromFooterIcon(link) {
        window.location = link;
    }

    render() {
        return (
            <div className="footer">
                {FooterElements.map(elm => {
                    return (
                        <img className={elm.className} src={elm.iconName} alt={elm.alt} 
                            onClick={() => this.redirectFromFooterIcon(elm.link)} />
                    )
                })
                }
            </div>
        );
    }
}

export default Footer;