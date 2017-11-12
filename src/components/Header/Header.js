import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import SearchIcon from 'material-ui-icons/Search';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Avatar from 'material-ui/Avatar';

import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <header id="Header">
                <IconButton aria-label="Menu" onClick={this.activeButton}>
                    <MenuIcon />
                </IconButton>
                <div className="div_logo">
                    <span>G</span>
                    <span>G</span>
                </div>
                <div id="div_search">
                    <IconButton aria-label="Search">
                        <SearchIcon />
                    </IconButton>
                    <input type="search" placeholder="Rechercher" />
                    <IconButton aria-label="Search">
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
                <IconButton>
                    <Avatar alt="Adelle Charles" src="/uploads/profile-img.jpg" />
                </IconButton>
            </header>
        )
    }

    activeButton(e) {
        console.log(e);
        e.preventDefault();
        console.log('The link was clicked.');
    }
}