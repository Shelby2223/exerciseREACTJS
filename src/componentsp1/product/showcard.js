import React, { Component } from 'react';
class ShowCard extends Component {
    render() {
        return (
            <div className="col-lg-3">
                <div className="text">
                    <div className="p-name"><a href="item.html">{this.props.gia}</a></div>
                </div>
                <div className="p-img">
                    <img src={this.props.image} width={200} height={200} />
                </div>
                <div className="text">
                    <div className="p-cat">{this.props.name} </div>
                    <div className="p-price">Please Call</div>
                    <input type="button" className="button" name="add" defaultValue="Add to cart" />
                </div>
                <div className="clear" />
            </div>
        );
    }
}
function Abc(props){
    return(
        <div className='row'>
        <div className='col-3'>
            <img src={props.linkanh} height='100' width='100px'></img>
            <p>{props.tieude}</p>
            <p>Gia san pham: 4000</p>
        </div>
        </div>
    )
}
export default Abc;

