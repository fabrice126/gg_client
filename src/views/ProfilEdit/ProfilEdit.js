import React, { Component } from 'react';
//Local
import './ProfilEdit.css'
//Components

export default class ProfilEdit extends Component {
    constructor() {
        super();
        this.state = {
            user: null
        };
    }
    componentDidMount() {
        this.getUser();
    }

    render() {
        return (
            <div id="ProfilEdit">
                Dans la page ProfilEdit
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="firstname">Prénom</label>
                    <input id="firstname" type="text" />

                    <label htmlFor="lastname">Nom</label>
                    <input id="lastname" type="text" />

                    <label htmlFor="gender">Sexe</label>
                    <input id="gender" type="text" />

                    <label htmlFor="birthdate">Date de naissance</label>
                    <input id="birthdate" type="text" />

                    <label htmlFor="email">Adresse e-mail</label>
                    <input id="email" type="text" />

                    <label htmlFor="phonenumber">Numéro de téléphone</label>
                    <input id="phonenumber" type="text" />

                    <label htmlFor="city">Lieu de résidence</label>
                    <input id="city" type="text" />

                    <label htmlFor="description">Description</label>
                    <input id="description" type="text" />
                </form>
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    getUser = () => {
        // let query = `{
        //     products(limit:${this.limit},offset:${this.state.offset}){
        //         id, title, latitude, longitude, images{id, src}
        //     }
        //   }`;
        // fetch((`http://127.0.0.1:3000/graphql?query=${encodeURIComponent(query)}`), { method: 'post' }).then((response) => {
        //     return response.json();
        // }).then(({ data: { products } }) => {
        //     this.setState({ products: products })
        // }).catch((err) => {
        //     console.log(`err fetch componentDidMount Advert.js => ${err}`)
        // });
    }


}