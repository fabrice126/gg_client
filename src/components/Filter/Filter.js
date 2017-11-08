import React, { Component } from 'react';
import './Filter.css'

class Filter extends Component {
    render() {
        return (
            <section id="Filter">
                <div id="section_obscure"></div>
                <div id="section_filter">
                    <select>
                        <option>Toutes catégories</option>
                        <option>Vêtements</option>
                        <option>Jeux</option>
                        <option>Electro-ménager</option>
                        <option>Meuble</option>
                        <option>Véhicule</option>
                        <option>Animaux</option>
                        <option>Divers</option>
                    </select>
                    <div className="div_row">
                        <input type="search" placeholder="Ville ou code postal" defaultValue="Nice" />
                        <select>
                            <option>5km</option>
                            <option>10km</option>
                            <option>20km</option>
                            <option>50km</option>
                            <option>100km</option>
                        </select>
                    </div>
                </div>
            </section>
        )
    }
}

export default Filter;


