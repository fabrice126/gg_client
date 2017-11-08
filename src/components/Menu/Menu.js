import React, { Component } from 'react';
import './Menu.css';



class Menu extends Component {
    render() {
        return (
            <aside id="Menu" data-open="false">
                <img src="./images/avatar.jpg" alt="avatar" />
                <nav>
                    <a href="/advert"><i className="fa fa-picture-o"></i> Mes annonces</a>
                    <a href="/messages"><i className="fa fa-envelope-o"></i> Mes messages</a>
                    <a href="/settings"><i className="fa fa-cog"></i> Paramètres</a>
                </nav>
            </aside>
        )
    }
}

export default Menu;