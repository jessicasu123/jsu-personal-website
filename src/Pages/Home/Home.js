import React, { Component } from 'react';
import './Home.css';
import profpic from '../../images/jessica-prof-pic.png';

const SQUARE_LINK = "https://squareup.com";
const FB_LINK = "https://facebook.com";
const SLACK_LINK = "https://slack.com";

class Home extends Component {
    render() {
        return (
            <div className="home-main">
                <div className="home-profile-pic">
                    <img src={profpic} className="profile-pic" alt="jessicasu-pic"></img>
                </div>

                <div className="home-intro-text">
                    <div className="hello-text">
                        HELLO,
                    </div>
                    <div className="name-text">
                        I'm Jessica!
                    </div>
                    <div className="description-text">
                        I am a <div className="role-text">software engineer.</div>
                    </div>
                    
                    <div className="description-section">
                        <div className="description-text">
                            Previously <a href={SQUARE_LINK}><b>@Square</b></a>, Upcoming <br/> 
                            <a href={FB_LINK}><b>@Facebook</b></a>,
                            <a href={SLACK_LINK}><b> @Slack</b></a>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Home;