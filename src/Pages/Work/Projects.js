import parlayIslandImage from '../../images/project-images/parlay-island.png';
import earthyCreationsImage from "../../images/project-images/earthy-creations.png";
import strategizeImage from "../../images/project-images/strategize.png";
import impresentImage from "../../images/project-images/impresent.png";
import dukecheckImage from "../../images/project-images/duke-check.png";

export const Projects = [
    {
        name: "Parlay Island",
        image: parlayIslandImage,
        alt: "Parlay Island Image",
        duration: 'August 2020 - November 2020',
        description: 'The goal of the Parlay Island project is to improve financial literacy for high school students. This project consists of a platformer-style game that serves as an engaging study tool for students to reinforce important financial concepts, as well as a teacher monitoring platform where teachers can view their students’ progress as they play the game.',
        techDescription: 'Game written in Unity, backend written in Django, and teacher platform written in NodeJS.',
        projectLink: 'https://github.com/parlay-island',
        contributors: 'Holly Ansel, Jake Derry, Andres Montoya'
    },
    {
        name: "Earthy Creations",
        image: earthyCreationsImage,
        alt: "Earthy Creations Image",
        duration: 'April - August 2020',
        description: 'Earthy Creations is an organization aimed at spreading awareness about innovative ways to reuse recyclable goods and empowering college students around the US to sell art made out of recycled materials. This website serves as the online platform for Earthy Creations, providing information about artists, exhibits, and publications, as well as allowing users to buy art pieces.',
        techDescription: 'Written in ReactJS.',
        projectLink: 'https://github.com/jessicasu123/earthy-creations-website',
        contributors: 'Geshna Aggarwal, Rithik Jain'
    },
    {
        name: "Strategize",
        image: strategizeImage,
        alt: "Strategize Image",
        duration: 'March - May 2020',
        description: 'Strategize is a platform to play a variety of strategy games (Tic-Tac-Toe, Connect4, Othello, Checkers, Mancala, Chopsticks) against an artificial player that makes moves based on the MiniMax algorithm with alpha-beta pruning.',
        techDescription: 'Written in Java.',
        projectLink: 'https://github.com/jessicasu123/strategize',
        contributors: 'Holly Ansel, Sanya Kocchar, Brian Li'
    },
    {
        name: "Duke Check",
        image: dukecheckImage,
        alt: "Duke Check Image",
        duration: 'May 2019 - April 2020',
        description: 'Duke Check is an app to improve event attendance and event discovery on Duke’s Campus. In terms of event discovery, the app provides a feed of events pulled from Duke Event Calendar and has an agenda where a user can keep track of events they’re interested in. In terms of event attendance, Duke Check has both QR code check-in and GPS self check-in options.',
        techDescription: 'App written in Swift/XCode, web app & backend written in Ruby on Rails.',
        projectLink: 'https://github.com/jessicasu123/duke-event-attendance-app',
        contributors: 'Luiza Wolf, Brian Li'
    }
]