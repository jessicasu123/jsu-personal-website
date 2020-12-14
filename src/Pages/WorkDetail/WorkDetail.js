import React, { useEffect, useState } from 'react';
import './WorkDetail.css';
import '../ProjectDetail/ProjectDetail.css';
import WorkDescSection from '../../Components/WorkDescSection/WorkDescSection';
import { useParams } from 'react-router-dom';
import { WorkExperiences } from '../Work/WorkExperience';

function WorkDetail() {
    let params = useParams();
    const [company, setCompany] = useState('');

    useEffect(() => {
        const companyParam = params.id;
        const company = WorkExperiences.find(work => work.name === companyParam);
        setCompany(company);
    }, [params]);

    const [sections] = useState([
        {
            name: "My Project",
            projectAttr: "projectDescription"
        },
        {
            name: "Tech Stack",
            projectAttr: "techDescription"
        }
    ])
    
    return (
        <div>
            <img src={company.logo} className="company-logo" alt={company.name}/>
            <div className="company-info">
                <div className="company-name">
                    {company.name}
                </div>

                <div className="company-work-duration">
                    {company.workDuration}
                </div>
            </div>

            <WorkDescSection sections={sections} work={company} />
        </div>
    );
}

export default WorkDetail;