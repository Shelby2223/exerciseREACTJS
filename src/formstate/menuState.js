import React, { Component } from 'react';

class DrinkMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            price: '',
            money: ''
        }
        this.setHandle = this.setHandle.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    checkOrder = (money) => {
        if (money >= this.state.price) {
            alert("Đồ uống của bạn đây" + this.state.type + '\n Số tiền dư: ' + (money - this.state.price) + "đ")
        }
        else {
            alert('Không đủ tiền')
        }
    }
    submitForm = (event) => {
        event.preventDefault();
        if (this.state.price == '') {
            alert("Vui lòng chọn đồ uống");
        }
        else {
            if (this.state.money == '') {
                alert("Vui lòng nhập số tiền của bạn")
            }
            else {
                this.checkOrder(this.state.money)
            }
        }
    }
    setHandle = async (event) => {
        let name = event.target.name;
        let value = event.target.value;
        await this.setState({ [name]: value });

        if (name === 'type'){
            if (value === "Caffe sữa") {
                this.setState({ price: 12000 });
            } else if (value === "Caffe đá") {
                this.setState({ price: 10000 });
            } else if (value === "Sting dâu") {
                this.setState({ price: 8000 });
            } else {
                this.setState({ price: 2000 });
            }
        }


        if (name == 'money') {
            if (!Number(value)) {
                alert("Nhập số vào bạn ơi")
            }
        }
    }
    // setPrice = (value) => {

    // };
    

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Mời bạn chọn thức uống:</td>
                                <td>
                                    <select onChange={this.setHandle} name='type'>
                                        <option selected hidden>Mời chọn</option>
                                        <option value="Caffe sữa">Caffee sữa</option>
                                        <option value="Caffe đá">Caffee đá</option>
                                        <option value="Sting dâu">Sting dâu</option>
                                        <option value="trà đá">Trà đá</option>
                                    </select>
                                </td>
                                <td><label>Price---<input type='number' readOnly value={this.state.price}></input>  </label></td>
                            </tr>
                            <tr>
                                <td>Mời nhập tiền của bạn</td>
                                <td>
                                    <input name='money' type='number' onChange={this.setHandle}></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type='submit' value="Thanh toán"></input>
                </form>
            </div>
        );
    }
}

export default DrinkMenu;