import squareImage from '../../images/workplace-images/square-image.png';
import squareLogo from "../../images/workplace-images/square-logo.png";
import instagramImage from '../../images/workplace-images/instagram-image.png';
import instagramLogo from '../../images/workplace-images/instagram-logo.png';
import slackImage from '../../images/workplace-images/slack-image.png';
import slackLogo from '../../images/workplace-images/slack-logo.png';

export const IndustryExperiencies = [
    {
        logo: instagramLogo,
        name: "Instagram",
        image: instagramImage,
        workDuration: 'Winter 2021',
        projectDescription: 'I worked on the Instagram Web team, and the purpose of my internship was to improve the search experience on IG web. I developed complex search-related features from scratch, including showing recent search history and building keyword explore pages with paginated media grids and refinement pills to redirect to similar explore pages. From this experience, I learned how to work closely with product/design, as well as how to successfully execute experiments for my features and analyze their impacts on core IG Web metrics.',
        techDescription: 'I worked with React for the frontend and Django for the backend.',
    },
    {
        logo: slackLogo,
        name: "Slack",
        image: slackImage,
        workDuration: 'Summer 2021',
        projectDescription: 'As an intern on the Messaging Team, I helped create a library to convert a JSON-like representation of a message into a markdown string format, and this library is used to populate the input when editing messages. I also added support for formatting links and lists in markup mode, which addressed 80+ customer requests for this feature.',
        techDescription: 'I worked primarily with React.',
    },
    {
        logo: squareLogo,
        name: "Square",
        image: squareImage,
        workDuration: 'Summer 2020',
        projectDescription: 'At Square, I worked on the Customers Marketing Team, whose goal is to strengthen the relationship between Square sellers and their customers through email, SMS, and receipt campaigns. I helped improve the appearance and scalability of the first page in the web flow to create an email campaign, which is the entry point to Square Marketing for every Square seller. As part of this project, I worked alongside another full-time employee to conduct an A/B/C test to determine the UX experience that would best increase engagement and usage of this email campaign creation flow.',
        techDescription: 'I worked with Ember.JS for the frontend and Ruby on Rails for the backend integration of campaign data.'
    },
]