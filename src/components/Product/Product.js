

import React, { Component } from 'react';
//Local
import './Product.css'
//Components
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: props.product
        };
    }
    render() {
        var product = this.state.product;
        return (
            <div className='Product'>
                <img src={product.images[0] ? "./uploads" + product.images[0].src : "./uploads/no_image.jpg"} alt="Produit" />
                <span className='product_title'>{product.title}</span>
                <div className='products_infos'>
                    <span><i className='fa fa-map-marker'></i>1.2km</span>
                    <span><i className='fa fa-clock-o'></i>3h</span>
                </div>
            </div>
        )
    }
}

export default Product;
