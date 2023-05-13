import React, { Component } from 'react';

class demoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            guestname: 'Đặng Trung',
            course: 'react.js',
            message: 'your message here'
        }
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = (event) => {
        alert('Tham gia: '
            + this.state.isGoing + ', Họ tên: '
            + this.state.guestname + ', '
            + this.state.course + ', '
            + this.state.message + '.'
        );
        event.preventDefault();
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Tham gia:
                    <input
                        name='isGoing'
                        type='checkbox'
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    Ghi rõ họ tên:
                    <input
                        name='guestname'
                        type='text'
                        value={this.state.guestname}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    Chọn khóa học:
                    <select
                        name='course'
                        value={this.state.course}
                        onChange={this.handleInputChange}
                    >
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="javascript">JAVASCRIPT</option>
                        <option value="react.js">REACT.JS</option>
                    </select>
                </label>
                <label>
                    Message:
                    <textarea
                        name="message"
                        type="text"
                        value={this.state.message}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default demoForm;
