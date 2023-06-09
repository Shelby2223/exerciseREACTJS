import React, { Component } from 'react';

class Ketquahoctap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hk1: 0,
            hk2: 0,
            avg: 0,
            result: "",
            xl: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = async (event) => {
        event.preventDefault();
        let key = event.target.name;
        let val = event.target.value;
        await this.setState({ [key]: val });
        
        this.setavg();
    };

    setavg = () => {
         this.setState({avg : parseFloat((parseFloat(this.state.hk1) + parseFloat(this.state.hk2)) / 2)});
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.setResult();
        this.setXL();
    };
    setResult = () => {
        if (this.state.avg >= 4.5) this.setState({ result: "Được lên lớp" });
        else if (this.state.avg < 4.5) this.setState({ result: "Ở lại lớp" });
    };

    setXL = () => {
        let avg = this.state.avg;
        if (avg < 4.5) this.setState({ xl: "yếu" });
        else if (4.5 <= avg && avg < 6.5) this.setState({ xl: "Trung bình" });
        else if (6.5 <= avg && avg < 8) this.setState({ xl: "Khá" });
        else if (8 <= avg && avg < 9) this.setState({ xl: "Giỏi" });
        else if (9 <= avg && avg <= 10) this.setState({ xl: "Xuất sắc" });
    }


    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>Kết quả học tập</h3>
                <form onSubmit={this.handleSubmit} className='was-validated'>
                    <div className='form-group'>
                        <label htmlFor='hk1'>Điểm học kì 1: </label>
                        <input
                            type='number'
                            className='form-control'
                            id='hk1'
                            name='hk1'
                            max={10}
                            min={0}
                            defaultValue={0}
                            required
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='hk2'>Điểm học kì 2: </label>
                        <input
                            type='number'
                            className='form-control'
                            id='hk2'
                            name='hk2'
                            max={10}
                            min={0}
                            defaultValue={0}
                            required
                            onChange={this.handleChange}
                        />
                        {/* <div className='invalid-feedback'>Điểm không hợp lệ</div> */}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='dtb'>Điểm trung bình: </label>
                        <input
                            type='number'
                            className='form-control'
                            readOnly
                            value={this.state.avg}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='kq'>Kết quả: </label>
                        <input
                            type='text'
                            className='form-control'
                            readOnly
                            value={this.state.result}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='xl'>Xếp loại: </label>
                        <input
                            type='text'
                            className='form-control'
                            readOnly
                            value={this.state.xl}
                        />
                    </div>
                    <button type='submit' value="Submit" className='btn btn-danger'>
                        Xem kết quả
                    </button>
                </form>
            </div>
        );
    }
}

export default Ketquahoctap;