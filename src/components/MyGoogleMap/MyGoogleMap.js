import React, { Component } from 'react'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import { Marker, InfoWindow } from "react-google-maps"
import "./MyGoogleMap.css";


class MyGoogleMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPlace: null
        };
    }

    render() {
        var { products, errorRequest } = this.props;
        var { selectedPlace } = this.state;
        console.log(products)
        return (
            <GoogleMap defaultZoom={2} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
                {!errorRequest && products.map((product, index) => {
                    return (
                        <Marker onClick={(e) => this.onToggleOpen(index)} index={index} key={product.id} position={{ lat: product.latitude, lng: product.longitude }} >
                            {
                                selectedPlace === index &&
                                <InfoWindow key={product.id} onCloseClick={(e) => this.onToggleOpen(index)}>
                                    <div>
                                        <img src={product.images[0] ? "./uploads" + product.images[0].src : "./uploads/no_image.jpg"} alt="Produit" />
                                        <span>{product.title}</span>
                                    </div>
                                </InfoWindow>
                            }
                        </Marker>
                    )
                })
                }
            </GoogleMap>
        )
    }
    onToggleOpen = (index) => {
        if (index === this.state.selectedPlace) this.setState({ selectedPlace: null });
        else this.setState({ selectedPlace: index });
    }
}
export default compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB6MTlXatEc9Cl_bBspOkfmcs-6lHEdANo",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <section id="MyGoogleMap" />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(MyGoogleMap);