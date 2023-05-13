import React, { Component } from 'react';

class hookClass extends Component {
    state = {
        count: 0
    };
    setcount = () => {
        this.setState({count: this.state.count + 1})
    }
    setcountgiam = () => {
        this.setState({count: this.state.count - 1})
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.setcount}>Increment</button>
                <button onClick={this.setcountgiam}>Unincrement</button>
            </div>
        );
    }
}

export default hookClass;