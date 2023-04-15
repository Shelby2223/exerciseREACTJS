import React, { Component } from 'react';
import Leftcontent from './leftcontent';
import Rightcontent from './rightcontent';
class Content extends Component {
    render() {
        return (
            <div id="content">
                <Leftcontent></Leftcontent>
                <Rightcontent></Rightcontent>
            <div style={{ clear: 'both' }} />
          </div>
        );
    }
}

export default Content;