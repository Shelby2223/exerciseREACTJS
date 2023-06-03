import React, { Component } from 'react';

class Features_items extends Component {

    render() {
        return (
            <div className="features_items">{/*features_items*/}
                <h2 className="title text-center">Sản phẩm hot</h2>
                <div className="col-sm-4">
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img src="eshopper/images/home/product1.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                            </div>
                            <div className="product-overlay">
                                <div className="overlay-content">
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="choose">
                            <ul className="nav nav-pills nav-justified">
                                <li><a href="#"><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                <li><a href="#"><i className="fa fa-plus-square" />Add to compare</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features_items;