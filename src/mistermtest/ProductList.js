import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';




class ProductList extends Component {
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
    onDelete = (id) => {
        // Gửi một yêu cầu DELETE đến điểm cuối API để xóa sản phẩm với id đã chỉ định
        axios.delete(`http://localhost:3000/products/${id}`)
            .then(response => {
                // Nếu yêu cầu thành công (mã trạng thái 200), tiếp tục các bước sau đây
                // Xóa sản phẩm thành công, cập nhật danh sách sản phẩm

                // Hiển thị một thông báo để thông báo cho người dùng về việc xóa thành công
                window.alert('Xóa sản phẩm thành công');

                // Tải lại trang hiện tại để cập nhật danh sách sản phẩm
                window.location.reload();

                // Gọi phương thức fetchProducts() để cập nhật danh sách sản phẩm sau khi xóa thành công
                this.fetchProducts();

            })
            .catch(error => {
                // Nếu xảy ra lỗi trong quá trình yêu cầu, ghi log lỗi ra console để kiểm tra và sửa lỗi
                console.log(error);
            });
    }


    render() {
        const { products } = this.state;


        return (
            <div className='container'>
                <Link to="/add" className='btn btn-success'>Add</Link>
                <table className='table table-striped'>
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
                                <td><img src={product.image} alt="Product" /></td>
                                <td>{product.origin}</td>
                                <td>{product.tinhtranghang}</td>
                                <td><Link to={`/edit/${product.id}`} className='btn btn-primary'>Sửa</Link><button className='btn btn-danger' onClick={() => this.onDelete(product.id)}>Xóa</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductList;
