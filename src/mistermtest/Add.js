import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const Add = () => {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    image: '',
    color: '',
    name_category: '',
    material: '',
    expiry_date: '',
    origin: '',
    description: '',
    tinhtranghang: true,
  });

  const { id } = useParams();

  const handleChange = event => {
    const { name, value } = event.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = event => {
    const file = event.target.files[0];
    if (file) {
      setProduct(prevProduct => ({
        ...prevProduct,
        image: "/images/" +file.name,
      }));
    }
  };
  // dùng để xóa tên ảnh khi đã lỡ chọn tên ảnh và k ấn nút lưu rồi thoát ra
  useEffect(() => {
    return () => {
      setProduct(prevProduct => ({
        ...prevProduct,
        image: '',
      }));
    };
  }, []);

  const onSave = e => {
    e.preventDefault();
    const {
      id,
      name,
      price,
      image,
      name_category,
      color,
      material,
      expiry_date,
      origin,
      description,
      tinhtranghang,
    } = product;

    if (
      name === '' &&
      price === '' &&
      image === '' &&
      material === '' &&
      expiry_date === ''
    ) {
      toast.warn('Vui lòng nhập đủ nội dung');
    } else {
      axios
        .post('http://localhost:3000/products', {
          name,
          price,
          image,
          color,
          name_category,
          material,
          expiry_date,
          origin,
          description,
          tinhtranghang,
        })
        .then(res => {
          alert('Thêm sản phẩm thành công');
          window.location.href = '/';
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  const onClear = () => {
    setProduct({
      id: '',
      name: '',
      price: '',
      image: '',
      color: '',
      name_category: '',
      material: '',
      expiry_date: '',
      origin: '',
      description: '',
      tinhtranghang: true,
    });
  };

  return (
    <React.Fragment>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="panel panel-warning col-md-8 ml">
              <div className="container">
                <div className="panel-body mt-4">
                  <form onSubmit={onSave}>
                    <div className="form-group">
                      <label>Tên Sản phẩm :</label>
                      <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Giá Sản phẩm ($) :</label>
                      <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Chọn Ảnh :</label>
                      <input
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                        className="form-control"
                      />
                    </div>
                    <label>Loại sản phẩm:</label>
                    <select
                      className="form-control"
                      name="name_category"
                      value={product.name_category}
                      onChange={handleChange}
                      required
                    >
                      <option value="sản phẩm mới">mới</option>
                      <option value="sản phẩm hot">hot</option>
                      <option value="sản phẩm khuyến mãi">khuyến mãi</option>
                    </select>
                    <div className="form-group">
                      <label>Màu bánh :</label>
                      <input
                        type="text"
                        name="color"
                        value={product.color}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Nguyên liệu :</label>
                      <input
                        type="text"
                        name="material"
                        value={product.material}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Hạn sữ dụng :</label>
                      <input
                        type="date"
                        name="expiry_date"
                        value={product.expiry_date}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Xuất xứ :</label>
                      <input
                        type="text"
                        name="origin"
                        value={product.origin}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <label>Tình trạng hàng :</label>
                    <select
                      className="form-control"
                      name="tinhtranghang"
                      value={product.tinhtranghang}
                      onChange={handleChange}
                      required
                    >
                      <option value={'Còn hàng'}>Còn hàng</option>
                      <option value={'Hết hàng'}>Hết hàng</option>
                    </select>
                    <div className="form-group">
                      <label>Mô tả :</label>
                      <input
                        type="text"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <br />
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        Lưu
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        onClick={onClear}
                        className="btn btn-primary"
                      >
                        Clear
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Add;
