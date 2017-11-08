import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
    render() {
        return (
            <footer id="Footer">
                <nav className="nav_subMenu">
                    <button id="bt_map" data-open="false">carte</button>
                    <button id="bt_filter" data-open="false">filtre</button>
                </nav>
                <nav>
                    <button className="fa fa-user-o"></button>
                    <button className="fa fa-home"></button>
                    <button id="bt_messages" className="fa fa-comment-o"><span id="span_notif">3</span></button>
                </nav>
            </footer>
        )
    }
}

export default Footer;