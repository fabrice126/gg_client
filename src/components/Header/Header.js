import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui-icons/Search';
import Avatar from 'material-ui/Avatar';
import MenuConnect from './MenuConnect.js';
import { Link } from 'react-router-dom';

import './Header.css';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            menuConnectVisible: false
        }
    }
    render() {
        return (
            <header id="Header">
                <Link className="navLink" to='/'>
                    <div className="div_logo">
                        <span>G</span>
                        <span>G</span>
                    </div>
                </Link>
                <div id="div_search">
                        <SearchIcon className="search_icon" />
                        <input type="search" placeholder="Rechercher" />
                </div>
                <IconButton className="avatar_icon">
                    <Avatar onClick={this.onToggleMenuConnect} alt="Adelle Charles" src="/uploads/profile-img.jpg" />
                </IconButton>
                <MenuConnect isVisible={this.state.menuConnectVisible} closeMenuConnect={this.closeMenuConnect} />
            </header>
        )
    }
    onToggleMenuConnect = () => {
        this.setState({ menuConnectVisible: !this.state.menuConnectVisible })
    }
    closeMenuConnect = () => {
        console.log("closeMenuConnect");
        this.setState({ menuConnectVisible: false })
    }
}


// <IconButton aria-label="Menu">
// <MenuIcon />
// </IconButton>
// <Link className="navLink" to='/'>
// <div className="div_logo">
//     <span>G</span>
//     <span>G</span>
// </div>
// </Link>
// <div id="div_search">
// <IconButton aria-label="Search">
//     <SearchIcon />
// </IconButton>
// <input type="search" placeholder="Rechercher" />
// <IconButton aria-label="Search">
//     <ExpandMoreIcon />
// </IconButton>
// </div>
// <IconButton>
// <Avatar onClick={this.onToggleMenuConnect} alt="Adelle Charles" src="/uploads/profile-img.jpg" />
// </IconButton>
// <MenuConnect isVisible={this.state.menuConnectVisible} closeMenuConnect={this.closeMenuConnect} />