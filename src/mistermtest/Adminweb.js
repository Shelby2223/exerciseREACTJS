import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Adminweb = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const onDelete = id => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then(response => {
        window.alert('Xóa sản phẩm thành công');
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };
  console.log(products, 'aa');

  return (
    <div>
      <div style={{ marginTop: '50px', marginLeft: '50px' }}>
        <Link to="/add" className="btn btn-success">
          Add
        </Link>
      </div>

      <div className="container">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Loại sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Xuất xứ</th>
              <th>Tình trạng hàng</th>
              <th>Hành động</th>
            </tr>
          </thead>

          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.name_category}</td>
                <td>
                  <img style={{ width: '100px', height: '100px' }}
                    src={product.image} alt="Product" />
                </td>
                <td>{product.origin}</td>
                <td>{product.tinhtranghang}</td>
                <td>
                  <Link to={`/edit/${product.id}`} className="btn btn-primary">
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adminweb;
