import React, { Component } from 'react';
//Local
import './Home.css'
//Components
import ProductList from '../../components/ProductList/ProductList';
import MyGoogleMap from '../../components/MyGoogleMap/MyGoogleMap';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import RoomIcon from 'material-ui-icons/Room';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            products: null,
            lastProductDeleted: null,
            errorRequest: null
        };
    }

    render() {
        var { products, errorRequest, lastProductDeleted } = this.state;
        return (
            <div id="Home">
                <div id="content">
                    <ProductList deleteProduct={this.onDeleteProduct} products={products} errorRequest={errorRequest} />
                    <MyGoogleMap products={products} lastProductDeleted={lastProductDeleted} errorRequest={errorRequest} />
                </div>
                <Button id="bt_showMap" fab color="primary" aria-label="add" >
                    <RoomIcon />
                </Button>
                <Button id="bt_addProduct" fab color="primary" aria-label="add" >
                    <AddIcon />
                </Button>
            </div>
        )
    }

    onDeleteProduct = (index) => {
        var products = this.state.products.slice(); //copy array
        products.splice(index, 1); //remove element
        this.setState({
            products: products,
            lastProductDeleted: index
        });
    }

    componentDidMount() {
        let query = `{
            products(limit:20,offset:0){
                id, title, latitude, longitude, images{id, src}
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

}