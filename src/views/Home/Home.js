import React, { Component } from 'react';
//Local
import './Home.css'
//Components
import Filter from '../../components/Filter/Filter';
import ProductList from '../../components/ProductList/ProductList';
import GoogleMap from '../../components/GoogleMap/GoogleMap';

class Home extends Component {
    constructor() {
        super();
        console.log("DANS LE CONSTRUCTOR");
        this.state = {
            test: ""
        };
    }

    render() {
        return (
            <div id="Home">
                <Filter />
                <GoogleMap />
                {/* <div id="section_post">
                    <span className="sp_title">Votre offre</span>
                    <input type="text" placeholder="Titre" />
                    <textarea placeholder="Description"></textarea>
                    <input type="file" />
                    <button>PUBLIER</button>
                </div> */}
                <div id="section_products"></div>
                <ProductList />

                <div id="section_messages"></div>
                <button id="bt_addProduct" className="fa fa-pencil"></button>
            </div>
        )
    }
}

export default Home;



