import React, { Component } from 'react';
import { NavItems } from './NavItems';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {
        menuClicked: false
    }

    handleMenuIconClick = () => {
        this.setState({ menuClicked: !this.state.menuClicked })
    }

    handleMenuItemClick = () => {
        this.setState({ menuClicked: false })
    }

    render() {
        return (
            <div>
                <nav className="nav-bar">
                    <h1 className="nav-name">
                        <Link to="/">J.SU</Link>
                    </h1>
                    <div className="menu-icon" onClick={this.handleMenuIconClick}>
                        <i className={this.state.menuClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.menuClicked ? 'nav-menu active': 'nav-menu'}>
                        {NavItems.map((item) => {
                            if (item.externalLink) {
                                return (
                                    <li className="nav-links" onClick={this.handleMenuItemClick}>
                                        <a href= {item.link}> {item.title}</a>
                                    </li>
                                );
                            } else {
                                return (
                                    <li className="nav-links" onClick={this.handleMenuItemClick}>
                                        <Link to={item.link}>{item.title}</Link>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;
