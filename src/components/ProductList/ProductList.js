import React, { Component } from 'react';
//Local
import './ProductList.css'
//Components
import Product from '../../components/Product/Product';

export default class ProductList extends Component {
    render() {
        var { products, errorRequest, deleteProduct } = this.props;
        if (!products) return <div>Chargement des produits</div>
        if (errorRequest) return <div>Erreur de récupération des produits</div>
        return (
            <section id="ProductList">
                {products.map((product, index) => <Product onClick={(e) => deleteProduct(index)} product={product} key={product.id} index={index} />)}
            </section>
        )
    }
}