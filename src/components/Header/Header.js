import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header id="Header">
                <div className="div_logo">
                    <div>G</div>
                    <div className="second">G</div>
                </div>
                <button id="bt_search" className="fa fa-search"></button>
            </header>
        )
    }
}

export default Header;