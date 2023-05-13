import React, { Component } from 'react';
import { getData } from '../data/data';



// class Demostate extends Component {
//     constructor(props) {
//         var arr = getData();
//         super(props);
//         this.state = { arr }
//     };
//     render() {
//         // let message;
//         // if (this.state.age > 50) {
//         //     message = "Già";
//         // } else {
//         //     message = "Trẻ";
//         // }
//         // return (
//         //     <div>
//         //         <h2>Name: {this.state.name}</h2>
//         //         <p>Tuổi: {this.state.age}</p>
//         //         <h5>Thông báo: {message}</h5>
//         //     </div>
//         // );
//         // let aage = this.state.age
//         // if (aage >= 50) {
//         //     return (
//         //         <div>
//         //             <h2>Name: {this.state.fields.name}</h2>
//         //             <p>Tuổi: {this.state.fields.age}</p>
//         //             <h5>Thông báo: gia</h5>
//         //         </div>
//         //     );
//         // } else {
//         //     return (
//         //         <div>
//         //             <h2>Name: {this.state.fields.name}</h2>
//         //             <p>Tuổi: {this.state.fields.age}</p>
//         //             <h5>Thông báo: tre nghe</h5>
//         //         </div>
//         //     )
//         // };
//         return (
//             <div>
//                 <div id="right-content">
//                     <div className='row' id="products">{
//                         this.state.arr.map(key =>
//                             <div className='col-md-3'>
//                                 <h2>{key.name}</h2>
//                                 <img src={key.image} />
//                                 <h2>{key.loai}</h2>
//                                 <div style={{ clear: 'both' }} />
//                             </div>
//                         )}; < div style={{ clear: 'both' }} />
//                     </div>
//                     <div style={{ clear: 'both' }} />
//                 </div>

//             </div>
//         );

//     };
// };


class Demostate  extends Component {
    constructor (props){
        super(props);
        this.state = {
            brand: "DODGE CHALLENGER GT 2020",
            Model: "DODGE CHALLENGER",
            Color: "red",
            Year: 2022,
            name: "your name",
            number: 0
        };
    }
    changecolor = () => {
        this.setState({Color: "Black"});
    }
    onChange = (e) => {
        this.setState({name: e.target.value });
    }
    increment = () =>{
        this.setState(state =>({number: state.number +1}))
    }
    unincrement = () =>{
        this.setState(state =>({number: state.number -1}))
    }
    render() {
        return (
            <div>
                <h1> My {this.state.brand}</h1>
                <p>
                    It is a {this.state.Color} {this.state.Model} from {this.state.Year}
                </p>
                <button type='button' onClick = {this.changecolor}>Change color</button>
                <div style={{backgroundColor: this.state.Color}}>
                        adsasdasdasd
                </div>
                <input type='text' onChange={this.onChange.bind(this)}></input>
                <h1 title ='hello'>{this.state.name}</h1>
                <button type='button' onClick = {this.increment}>Tăng</button>
                <button type='button' onClick = {this.unincrement}>giảm</button>
                <h1>{this.state.number}</h1>
            </div>
        );
    }
}
export default Demostate;