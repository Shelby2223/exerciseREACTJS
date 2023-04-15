import React, { Component } from 'react';
import ShowCard from './showcard';
import { getData } from './app/data/data.js';

class componentName extends Component {

    render() {
        console.log(getData());
        const products = getData();
        return (
            <div>
            <div id="right-content">
                <h2>Product : </h2>
                <div id="products">
                    {
                        products.map(product =>
                            <ShowCard
                                gia={product.gia}
                                name={product.name}
                                image={product.image}/>)
                    }
                    <div style={{ clear: 'both' }} />
                </div>
                <div style={{ clear: 'both' }} />
            </div>
            <div style={{ clear: 'both' }} />
        </div>      
        );
    }
}

export default componentName;