import React, { useEffect, useState, Component } from 'react';
import { useParams } from 'react-router-dom';
import { IndustryExperiencies } from '../Work/IndustryExperience';
import IndustryDetailHeader from '../IndustryDetailHeader/IndustryDetailHeader';
import DetailPage from '../DetailPage/DetailPage';

const industrySections = [
    {
        name: "My Project",
        projectAttr: "projectDescription"
    },
    {
        name: "Tech Stack",
        projectAttr: "techDescription"
    }
]

/**
 * Utilizes the shared DetailPage.
 * Illustrates principle of composition for specialization.
 */
function IndustryDetailPage() {
    const params = useParams();
    const companyName = params.id;

    return (
        <DetailPage name={companyName} infoSource={IndustryExperiencies}
            header={IndustryDetailHeader} sections={industrySections}/>
    )
}

/**
 * Commented out class component version of this page
 * (does NOT exhibit composition; repeats same logic of ProjectDetail)
 */
// class IndustryDetail extends Component {
//     findCompany() {
//         const companyParam = this.props.match.params.id;
//         const company = IndustryExperiences.find(work => work.name === companyParam);
//         return company;
//     }
//     render() {
//         const company = this.findCompany();
//         return (
//             <div>
//                 <IndustryDetailHeader company={company} />

//                 <WorkDescSection sections={workSections} work={company} />
//             </div>
//         );
//     }
// }

export default IndustryDetailPage;