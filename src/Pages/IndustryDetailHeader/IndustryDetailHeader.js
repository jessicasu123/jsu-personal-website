import React from 'react';
import './IndustryDetailHeader.css';

function IndustryDetailHeader(props) {
    const company = props.work;
    
    return (
        <div>
            <img src={company.logo} className="company-logo" alt={company.name} />
            <div className="company-info">
                <div className="company-name">
                    {company.name}
                </div>

                <div className="company-work-duration">
                    {company.workDuration}
                </div>
            </div>
        </div>
    );
}

export default IndustryDetailHeader;