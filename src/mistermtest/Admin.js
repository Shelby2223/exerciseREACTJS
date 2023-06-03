import React, { Component } from 'react';

import axios from 'axios';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/products')
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Color</th>
              <th>Category</th>
              <th>Material</th>
              <th>Expiry Date</th>
              <th>Origin</th>
              <th>Description</th>
              <th>Tình trạng hàng</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img src={product.image} alt="Product" /></td>
                <td>{product.color}</td>
                <td>{product.name_category}</td>
                <td>{product.material}</td>
                <td>{product.expiry_date}</td>
                <td>{product.origin}</td>
                <td>{product.description}</td>
                <td>{product.tinhtranghang}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Admin;
