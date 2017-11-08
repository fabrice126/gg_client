import React, { Component } from 'react';
//Local
import './ProductList.css'
//Components
import Product from '../../components/Product/Product';

class ProductList extends Component {
    constructor() {
        super();
        console.log("DANS LE CONSTRUCTOR");
        this.state = {
            products: null,
            errorRequest: null
        };
    }

    componentDidMount() {
        console.log("DANS Le componentDidMount");
        let query = `{
            products(limit:20,offset:0){
                id, title, latitude, longitude,
                images{id, src}
            }
          }`;
        fetch((`http://127.0.0.1:3000/graphql?query=${encodeURIComponent(query)}`), { method: 'post' }).then((response) => {
            return response.json();
        }).then(({ data: { products } }) => {
            this.setState({ products: products })
        }).catch((err) => {
            console.log(`err fetch componentDidMount Home.js => ${err}`)
        });
    }

    render() {
        var { products, errorRequest } = this.state;
        if (!products) return <div>Chargement des produits</div>
        if (errorRequest) return <div>Erreur de récupération des produits</div>
        return (
            <div id="ProductList">
                {products.map((product, index) => (
                    <Product product={product} key={product.id} />
                    // <Link key={link.id} updateStoreAfterVote={this._updateCacheAfterVote} index={index} link={link} />
                ))}
            </div>
        )
    }
}

export default ProductList;
