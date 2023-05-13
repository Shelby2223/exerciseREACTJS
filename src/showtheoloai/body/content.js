import React, { Component } from 'react';
import { getData } from './data';
import Showsp from './showsanpham/showsp';

class content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  allmay = () => {
    let data = getData();
    const newData = data.map(key => {
      return (
        <Showsp
          image={key.image}
          name={key.name}
          type={key.type}
          loai={key.loai}
        />
      );
    });
    this.setState({ data: newData });
  };
  maymoi = () => {
    let data = getData();
    const filteredData = data.filter(item => item.type === 'máy mới');
    const newData = filteredData.map(key => {
      return (
        <Showsp
          image={key.image}
          name={key.name}
          type={key.type}
          loai={key.loai}
        />
      );
    });
    this.setState({ data: newData });
  };

  maycu = () => {
    let data = getData();
    const filteredData = data.filter(item => item.type === 'máy cũ');
    const newData = filteredData.map(key => {
      return (
        <Showsp
          image={key.image}
          name={key.name}
          type={key.type}
          loai={key.loai}
        />
      );
    });
    this.setState({ data: newData });
  };

  render() {
    return (
      <div>
        <div className="button">
          <button onClick={this.allmay}>Home</button>
          <button onClick={this.maymoi}>Máy mới</button>
          <button onClick={this.maycu}>Máy cũ</button>
        </div>
        <div style={{ clear: 'both' }} />
        <div className="product-list">{this.state.data}</div>
      </div>
    );
  }
}


export default content;
