import React, { Component } from 'react';
//Local
import './Home.css'
import { Link } from 'react-router-dom';
//Components


export default class Home extends Component {

    render() {
        return (
            <div id="Home">
                <div>
                    Sur la page home
                    <Link to='/advert'> page contenant toutes les annonces</Link>
                    <Link to='/advert/paca'>liens contenant les annonces sur PACA</Link>
                </div>
            </div>
        )
    }
}